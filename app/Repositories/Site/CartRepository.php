<?php

namespace App\Repositories\Site;

use App\Models\Cart;
use App\Models\Checkout;
use App\Models\Coupon;
use App\Models\Order;
use App\Repositories\Admin\ShippingRepository;
use App\Repositories\Admin\VatTaxRepository;
use App\Repositories\Interfaces\Admin\Product\ProductInterface;
use App\Repositories\Interfaces\Site\CartInterface;
use App\Traits\RandomStringTrait;
use Carbon\Carbon;
use Illuminate\Support\Str;
use DB;

class CartRepository implements CartInterface
{
    use RandomStringTrait;

    protected $product;

    public function __construct(ProductInterface $product)
    {
        $this->product = $product;
    }

    public function all()
    {
        if (authUser()) {
            $carts = Cart::with('product.stock:id,product_id,image,name,sku,current_stock',
                'product:slug,shipping_fee,user_id,price,id,thumbnail,minimum_order_quantity,is_refundable,current_stock,shipping_fee_depend_on_quantity,special_discount,special_discount_start,special_discount_end,special_discount_type,is_digital','seller:user_id,shop_name,logo')
                ->where('user_id', authId())->get();
        } else {
            Cart::where('created_at','<',Carbon::now()->subDays(2))->delete();
            if (!session()->has('walk_in_id'))
            {
                session()->put('walk_in_id',Str::random(21));
            }
            $carts = Cart::with('product.stock:id,product_id,image,name,sku,current_stock',
                'product:slug,user_id,price,shipping_fee,id,thumbnail,minimum_order_quantity,is_refundable,current_stock,shipping_fee_depend_on_quantity,special_discount,special_discount_start,special_discount_end,special_discount_type,is_digital','seller:user_id,shop_name,logo')
                ->where('user_id', getWalkInCustomer()->id)->where('trx_id',session()->get('walk_in_id'))->get();
        }
        return $carts;
    }

    public function get($id)
    {
        return Cart::find($id);
    }

    public function addToCart($request, $product,$user)
    {
        if ($user):
            $trx_id = $request['trx_id'] ?: Str::random(21);
            $user_id = $user->id;
            $carts = Cart::where('user_id', $user_id)->where('product_id', $product->id)->get();
        else:
            $trx_id = $request['trx_id'] ? : Str::random(21);

            if (!session()->has('walk_in_id'))
            {
                session()->put('walk_in_id',$trx_id);
            }
            else{
                $trx_id = session()->get('walk_in_id');
            }

            $carts = Cart::where('user_id', getWalkInCustomer()->id)->where('trx_id',$trx_id)->where('product_id', $product->id)->get();
        endif;

        $product_stock = $product->stock->where('name', $request['variants_name'])->where('variant_ids', $request['variants_ids'])->first();

        if(!$product_stock) {
            $product_stock = $product->firstStock;
        }

        if ($product_stock->current_stock < $request['quantity']) {
            return 'out_of_stock';
        }

        $price = $product_stock->price;

        $discount = 0.00;
        //wholesale product will not be applicable for discount
        //and price will be the actual price without campaign discounts
        if ($product->is_wholesale):
            $wholesale_price = $product_stock->wholeSalePrice->where('min_qty', '<=', $request->quantity)->where('max_qty', '>=', $request->quantity)->first();
            if (!blank($wholesale_price)):
                $price = $wholesale_price->price;
            endif;
        else:
            //discount calculation
            if (special_discount_applicable($product)):
                if ($product->special_discount_type == 'flat'):
                    $discount   = $product->special_discount;
                elseif ($product->special_discount_type == 'percentage'):
                    $discount   = ($price * $product->special_discount) / 100;
                endif;
            endif;
        endif;

        //tax calculation
        $tax = 0;
        $variant = $request['variants_name'];

        if (settingHelper('vat_and_tax_type') == 'product_base'):
            foreach ($product->vatTaxes($product) as $product_tax) :
                $tax += ($price * $product_tax->percentage) / 100;
            endforeach;
        endif;

        //shipping calculation
        $shipping_cost = 0;
        $shipping_type = settingHelper('shipping_fee_type');

        if ($shipping_type == 'product_base') {
            $fee_type = $product->shipping_type;
            $fee = $product->shipping_fee;

            if ($fee_type == 'flat_rate') {
                if ($product->shipping_fee_depend_on_quantity) {
                    $fee = $request['quantity'] * $fee;
                }
                $shipping_cost = $fee;
            }
        }

        if ($product->current_stock < $request['quantity']) {
            return 'out_of_stock';
        }

        $parse_cart = $this->userCarts($request, $carts, $variant, $product, $price, $discount, $tax, $shipping_cost,$user,$trx_id);

        /*else {
            $parse_cart = $this->sessionCarts($request, $carts, $variant, $product, $price, $discount, $tax, $shipping_cost);
            if (is_array($parse_cart)) {
                session()->put('carts', $parse_cart);
            }
        }*/

        if (is_string($parse_cart) && $parse_cart == 'out_of_stock') {
            return 'out_of_stock';
        }

        return $parse_cart;
    }

    protected function userCarts($request, $carts, $variant, $product, $price, $discount, $tax, $shipping_cost,$user,$trx_id)
    {
        if (count($carts) > 0):
            $cart_exist = false;
            foreach ($carts as $cart_item):
                $cart_product       = $this->product->all()->where('id', $cart_item['product_id'])->first();

                $product_stock      = $cart_product->stock->where('name', $variant)->first();
                $current_stock      = $product_stock ? $product_stock->current_stock : 0;

                if (($current_stock < $cart_item['quantity'] + $request['quantity']) && $variant == $cart_item['variant']):
                    return 'out_of_stock';
                endif;
                if (($variant != null && $cart_item['variant'] == $variant) || $variant == null):
                    $cart_exist     = true;


                    $cart_item->quantity += $request['quantity'];
                    //wholesale product so price will be the actual price without campaign discounts
                    if ($cart_product->is_wholesale):
                        $wholesale_price = $product_stock->wholeSalePrice->where('min_qty', '<=', $request->quantity)->where('max_qty', '>=', $request->quantity)->first();
                        if (!blank($wholesale_price)):
                            $price = $wholesale_price->price;
                        endif;
                    endif;

                    $cart_item->price = $price;

                    $cart_item->save();
                endif;

            endforeach;
            if (!$cart_exist) :
                //inserting new record to cart as cart not available for this variant
                $cart_item                  = new Cart();
                $cart_item->seller_id       = $product->user_id;
                $cart_item->user_id         = $user ? $user->id : getWalkInCustomer()->id;
                $cart_item->guest_id        = null;
                $cart_item->product_id      = $product->id;
                $cart_item->variant         = $variant ?: '';
                $cart_item->quantity        = $request['quantity'];
                $cart_item->price           = $price;
                $cart_item->discount        = $discount;
                $cart_item->trx_id          = $trx_id;
                $cart_item->tax             = $tax;
                $cart_item->shipping_cost   = $shipping_cost;
                $cart_item->shipping_type   = settingHelper('shipping_fee_type');
                $cart_item->save();
            endif;
        else:
            //inserting new record to cart as cart not available
            $cart_item                      = new Cart();
            $cart_item->seller_id           = $product->user_id;
            $cart_item->user_id             = $user ? $user->id : getWalkInCustomer()->id;
            $cart_item->guest_id            = null;
            $cart_item->product_id          = $product->id;
            $cart_item->variant             = $variant ?: '';
            $cart_item->quantity            = $request['quantity'];
            $cart_item->price               = $price;
            $cart_item->discount            = $discount;
            $cart_item->tax                 = $tax;
            $cart_item->trx_id              = $trx_id;
            $cart_item->shipping_cost       = $shipping_cost;
            $cart_item->shipping_type       = settingHelper('shipping_fee_type');
            $cart_item->save();
        endif;

        return true;
    }

    protected function sessionCarts($request, $carts, $variant, $product, $price, $discount, $tax, $shipping_cost)
    {
        if ($carts && count($carts)) {
            $cart_exist = false;

            foreach ($carts as $key => $cart_item) {
                if ($cart_item['product_id'] == $product->id) {
                    $cart_product = $this->product->all()->where('id', $cart_item['product_id'])->first();
                    if ($cart_product) {
                        $product_stock = $cart_product->stock->where('name', $variant)->first();

                        $current_stock = $product_stock->current_stock;
                        if (($current_stock < $cart_item['quantity'] + $request['quantity']) && $variant == $cart_item['variant']) {
                            return 'out_of_stock';
                        }
                        if (($variant != null && $cart_item['variant'] == $variant) || $variant == null) {
                            $cart_exist = true;

                            if ($cart_product->is_wholesale) {
                                $wholesale_price = $product_stock->wholeSalePrice->where('min_qty', '<=', $request->quantity)->where('max_qty', '>=', $request->quantity)->first();
                                if (!blank($wholesale_price)) {
                                    $price = $wholesale_price->price;
                                }
                            }
                            $image = $this->getCartImages($product, $product_stock);
                            $carts[$key] = [
                                'id'                    => $cart_item['slug'],
                                'product_name'          => $product->product_name,
                                'seller_id'             => $product->user_id,
                                'product_id'            => $product->id,
                                'slug'                  => $product->slug,
                                'image_40x40'           => $image['image_40x40'],
                                'image_72x72'           => $image['image_72x72'],
                                'min_quantity'          => $product->minimum_order_quantity,
                                'current_stock'         => $product_stock->current_stock,
                                'quantity'              => $cart_item['quantity'] + $request['quantity'],
                                'shop_name'             => @$product->sellerProfile->shop_name,
                                'shop_image'            => @$product->sellerProfile->image_90x60,
                                'price'                 => $price,
                                'discount_price'        => $product->discount_percentage,
                                'variant'               => $variant,
                                'discount'              => $discount,
                                'tax'                   => $tax,
                                'shipping_cost'         => $shipping_cost,
                                'is_digital'            => $product->is_digital,
                            ];
                        }
                    }
                }
            }
            if (!$cart_exist) {
                $slug                       = Str::random(21);
                $product_stock              = $product->stock->where('name', $variant)->first();
                $image                      = $this->getCartImages($product, $product_stock);
                $carts[count($carts)] = [
                    'id'                    => $slug,
                    'product_name'          => $product->product_name,
                    'seller_id'             => $product->user_id,
                    'product_id'            => $product->id,
                    'slug'                  => $product->slug,
                    'thumbnail'             => $product->slug,
                    'image_40x40'           => $image['image_40x40'],
                    'image_72x72'           => $image['image_72x72'],
                    'min_quantity'          => $product->minimum_order_quantity,
                    'current_stock'         => $product_stock->current_stock,
                    'quantity'              => $request['quantity'],
                    'shop_name'             => @$product->sellerProfile->shop_name,
                    'shop_image'            => @$product->sellerProfile->image_90x60,
                    'price'                 => $price,
                    'discount_price'        => $product->discount_percentage,
                    'variant'               => $variant,
                    'discount'              => $discount,
                    'tax'                   => $tax,
                    'shipping_cost'         => $shipping_cost,
                    'is_digital'            => $product->is_digital,
                ];
            }
        } else {
            $slug           = Str::random(21);
            $carts          = [];
            $product_stock  = $product->stock()->where('name', $variant)->first();
            $image          = $this->getCartImages($product, $product_stock);
            $carts[]     = [
                'id'                    => $slug,
                'product_name'          => $product->product_name,
                'seller_id'             => $product->user_id,
                'product_id'            => $product->id,
                'slug'                  => $product->slug,
                'min_quantity'          => $product->minimum_order_quantity,
                'current_stock'         => $product_stock->current_stock,
                'thumbnail'             => $product->slug,
                'image_40x40'           => $image['image_40x40'],
                'image_72x72'           => $image['image_72x72'],
                'quantity'              => $request['quantity'],
                'shop_name'             => @$product->sellerProfile->shop_name,
                'shop_image'            => @$product->sellerProfile->image_90x60,
                'price'                 => $price,
                'discount_price'        => $product->discount_percentage,
                'variant'               => $variant,
                'discount'              => $discount,
                'tax'                   => $tax,
                'shipping_cost'         => $shipping_cost,
                'is_digital'            => $product->is_digital,
            ];
        }

        return $carts;
    }

    protected function getCartImages($product, $product_stock): array
    {
        if ($product_stock && is_array($product_stock->image) && array_key_exists('image_40x40', $product_stock->image) && is_file_exists($product_stock->image['image_40x40'], $product_stock->image['storage'])) {
            $image_40 = get_media(@$product_stock->image['image_40x40'], @$product_stock->image['storage']);
        } elseif ($product && is_array($product->thumbnail) && array_key_exists('image_40x40', $product->thumbnail) && is_file_exists($product->thumbnail['image_40x40'], $product->thumbnail['storage'])) {
            $image_40 = get_media(@$product->thumbnail['image_40x40'], @$product->thumbnail['storage']);
        } else {
            $image_40 = static_asset('images/default/default-image-40x40.png');
        }

        if ($product_stock && is_array($product_stock->image) && array_key_exists('image_72x72', $product_stock->image) && is_file_exists($product_stock->image['image_72x72'], $product_stock->image['storage'])) {
            $image_72 = get_media(@$product_stock->image['image_72x72'], @$product_stock->image['storage']);
        } elseif ($product && is_array($product->thumbnail) && array_key_exists('image_40x40', $product->thumbnail) && is_file_exists($product->thumbnail['image_40x40'], $product->thumbnail['storage'])) {
            $image_72 = get_media(@$product->thumbnail['image_72x72'], @$product->thumbnail['storage']);
        } else {
            $image_72 = static_asset('images/default/default-image-72x72.png');
        }

        return [
            'image_40x40' => $image_40,
            'image_72x72' => $image_72,
        ];
    }

    public function updateCart($request)
    {
        $cart_item = $this->get($request->id);
//        dd($cart_item);

        //get the requested cart item and product price by stock
        $product        = $this->product->get($cart_item->product_id);
        $product_stock  = $product->stock->where('name', $cart_item->variant)->first();
        $quantity       = $product_stock->current_stock;
        $price          = $product_stock->price;

        $total_quantity = $cart_item->quantity + $request->quantity;

        if ($quantity >= $total_quantity) {
            if ($total_quantity >= $product->minimum_order_quantity):
                $cart_item->quantity += $request->quantity;
            else:
                return [
                    'msg' => 'min_qty',
                    'qty' => $product->minimum_order_quantity
                ];
            endif;
        } else
            return 'out_of_stock';

        //check for wholesale product
        if ($product->is_wholesale):
            $wholesale_price = $product_stock->wholeSalePrice->where('min_qty', '<=', $cart_item->quantity + $request->quantity)->where('max_qty', '>=', $cart_item->quantity + $request->quantity)->first();
            if (!blank($wholesale_price)):
                $price = $wholesale_price->price;
            endif;
        endif;

        //shipping calculation
        $shipping_cost = 0;
        $shipping_type = settingHelper('shipping_fee_type');

        if ($shipping_type == 'product_base') {
            $fee_type = $product->shipping_type;
            $fee = $product->shipping_fee;

            if ($fee_type == 'flat_rate') {
                if ($product->shipping_fee_depend_on_quantity) {
                    $fee = $cart_item->quantity * $fee;
                }
                $shipping_cost = $fee;
            }
        }

        $cart_item->price = $price;
        $cart_item->shipping_cost = $shipping_cost;
        $cart_item->save();

        return $cart_item;
    }

    public function removeFromCart($id): bool
    {
        /*if (authUser()) {
            Cart::destroy($id);
        } else {
            $carts = session()->get('carts');
            foreach ($carts as $key => $cart) {
                if ($cart['id'] == $id) {
                    unset($carts[$key]);
                }
            }
            session()->put('carts', $carts);
        }*/
        return  Cart::destroy($id);
    }

    public function userCart($take = null)
    {
        if (authUser()) {
            $carts = Cart::with('product:id,thumbnail,slug')->where('user_id', authId())->groupBy('carts.id')
                ->paginate($take);
        } else {
            $carts = session()->get('carts') ?: [];
        }
        return $carts;
    }

    public function applyCoupon($data,$user)
    {
        $coupon = Coupon::where('status', 1)->where(DB::raw('BINARY `code`'), $data['coupon_code'])->first();

        if ($coupon) {
            $coupon_user = $coupon->user;
            $seller      = $coupon_user->sellerProfile;
            if ($coupon->start_date <= now() && $coupon->end_date > now()) {

                if ($coupon->user_id > 1)
                {
                    if ($coupon_user->status == 0)
                    {
                        return __('seller_is_disabled');
                    }
                    if ($coupon_user->is_user_banned == 1)
                    {
                        return __('seller_is_banned');
                    }

                    if (!$seller->verified_at)
                    {
                        return __('seller_is_unverified');
                    }
                    if (!$seller)
                    {
                        return __('seller_coupon_is_disabled');
                    }
                }
                $carts  = Cart::where('user_id', $user->id)->when($coupon->user_id > 1,function ($q) use($coupon){
                    $q->where('seller_id', $coupon->user_id);
                })->where('trx_id',$data['trx_id'])->get();


                $checkout       = Checkout::where('user_id', $user->id)->where('seller_id', $coupon->user_id)->where('trx_id',$data['trx_id'])->where('status',1)->first();
                $coupon_used    = Checkout::where('user_id', $user->id)->where('coupon_id', $coupon->id)->where('trx_id',$data['trx_id'])->where('status',1)->first();

                if ($checkout) {
                    return __('This Seller Coupon is Already Used');
                }

                if ($coupon_used) {
                    return __('This Coupon is Already Used');
                }

                $sub_total = 0;

                foreach ($carts as $cart)
                {
                    $sub_total += $cart->price * $cart->quantity;
                }

                $data['sub_total'] = $sub_total;

                if ($coupon->type == 'product_base' && $coupon->product_id) {
                    $duplicates = array_intersect($coupon->product_id, $carts->pluck('product_id')->toArray());
                    if (count($duplicates) > 0) {
                        $total_coupon_discount = 0;
                        $checkout_carts = $carts->whereIn('product_id',$duplicates);
                        foreach ($checkout_carts as $cart) {
                            $cart->coupon_applied   = 1;
                            $amount                 = $this->calculateDiscount($coupon, ($cart->price * $cart->quantity));
                            $cart->coupon_discount  = $amount;
                            $cart->save();
                            $total_coupon_discount  += $amount;
                        }

                        return Checkout::create([
                            'user_id'           => $user->id,
                            'seller_id'         => $coupon->user_id > 1 ? $seller->id : 1,
                            'coupon_id'         => $coupon->id,
                            'trx_id'            => $data['trx_id'],
                            'coupon_discount'   => $total_coupon_discount,
                            'status'            => 1,
                        ]);
                    } else {
                        return __('Invalid Coupon');
                    }
                } else {

                    if ($coupon->minimum_shopping <= $data['sub_total']) {
                        foreach ($carts as $cart) {
                            $cart->coupon_applied   = 1;
                            $cart->coupon_discount  = 0;
                            $cart->save();
                        }

                        $discount_amount            = $this->calculateDiscount($coupon, $data['sub_total']); //250000
                        $max_discount               = $coupon->maximum_discount;

                        $coupon_discount            = min($discount_amount, $max_discount);

                        return Checkout::create([
                            'seller_id'         => $coupon->user_id > 1 ? $seller->id : 1,
                            'user_id'           => $user->id,
                            'coupon_id'         => $coupon->id,
                            'trx_id'            => $data['trx_id'],
                            'coupon_discount'   => $coupon_discount,
                            'status'            => 1,
                        ]);
                    } else {
                        return __("You've to Purchase Minimum of " . format_price($coupon->minimum_shopping));
                    }

                }

            } else {
                return __("Oops....You're too late, Coupon is Expired");
            }

        } else {
            return __('Coupon Not Found');
        }
    }

    protected function calculateDiscount($coupon, $price)
    {
        if ($coupon->discount_type == 'flat') {
            $coupon_discount = $coupon->discount;
        } else {
            $coupon_discount = $price * ($coupon->discount / 100);
        }

        return $coupon_discount;
    }

    public function checkoutCoupon($carts, $data,$user): array
    {
        $trx_id = '';
        $walk_user = getWalkInCustomer();

        $group_carts = $fee = [];

        if (count($carts) > 0) {
            $trx_id = $carts->first()->trx_id;
            $seller_carts = $carts->groupBy('seller_id');

            $shipping_cost = 0;

            if (settingHelper('shipping_fee_type') == 'flat_rate') {
                $shipping_cost = settingHelper('shipping_fee_flat_rate');
            }

            if (settingHelper('shipping_fee_type') == 'area_base' && request()->route()->getName() == 'user.addresses') {
                if ($user)
                {
                    $shipping_address   = $user->addresses()->where('default_shipping', 1)->first();
                }
                else{
                    $shipping_address   = $walk_user->addresses()->where('default_shipping', 1)->first();
                }

                if ($shipping_address && $shipping_address->address_ids) {
                    $city_id        = $shipping_address->address_ids['city_id'];
                    $shipping_repo  = new ShippingRepository();
                    $city           = $shipping_repo->getCity($city_id);
                    $shipping_cost  = $city ? $city->cost : 0;
                }
            }

            $tax_amount = [];

            if (settingHelper('vat_and_tax_type') == 'order_base') {
                foreach ($seller_carts as $key => $seller_cart) {
                    $sub_total = 0;
                    $tax_amount[$key] = 0;
                    foreach ($seller_cart as $cart) {
                        if (settingHelper('shipping_fee_type') == 'product_base')
                        {
                            $shipping_cost = $cart->shipping_cost;
                        }

                        if (settingHelper('vat_type') == 'before_tax')
                        {
                            $sub_total += $cart->price * $cart->quantity;
                        }
                        else{
                            $sub_total += (($cart->price * $cart->quantity) + ($shipping_cost * $cart->quantity)) - (($cart->discount * $cart->quantity) + $cart->coupon_discount);
                        }
                    }

                    if (settingHelper('order_wise_tax_percentage'))
                    {
                        $tax_amount[$key] += ($sub_total * settingHelper('order_wise_tax_percentage')) / 100;
                    }
                }
            }

            if (settingHelper('shipping_fee_type') == 'invoice_base') {
                foreach ($seller_carts as $key => $seller_cart) {
                    $sub_total              = 0;
                    foreach ($seller_cart as $cart) {
                        $sub_total          += $cart->price * $cart->quantity;
                    }
                    foreach (settingHelper('invoice_based_shipping_fee') as $invoice_key=> $item) {
                        if ($item['min_amount'] <= $sub_total && $item['max_amount'] >= $sub_total)
                        {
                            $fee[$key] = $item['fee'];
                            break;
                        }
                        else{
                            $fee[$key] = settingHelper('shipping_fee_default_rate');
                        }
                    }
                }
            }
            $i = 0;
            foreach ($seller_carts as $key => $seller_cart) {
                $group_carts[$key] = [
                    'id'            => '',
                    'seller_id'     => $key,
                    'name'          => @$seller_cart[0]->seller->shop_name,
                    'image'         => @$seller_cart[0]->seller->image_90x60,
                    'code'          => '',
                    'is_applied'    => 0,
                    'discount'      => 0,
                    'shipping_cost' => settingHelper('shipping_fee_type') == 'invoice_base' ? (array_key_exists($key,$fee) ? $fee[$key] : 0) : $shipping_cost,
                    'tax'           => array_key_exists($key, $tax_amount) ? $tax_amount[$key] : 0,
                ];
                $i++;
            }

            if ($user)
            {
                $id = $user->id;
            }
            else{
                $id = $walk_user->id;
            }

            $orders = Order::where('trx_id', $carts->first()->trx_id)->where('user_id', $id)->where('status', 0)->get();

            foreach ($orders as $order) {
                $order->orderDetails()->delete();
                $order->delete();
            }

        }


        return $group_carts;
    }

    protected function sessionCheckouts($carts): array
    {
        $group_carts = $tax_amount = $seller_carts = [];

        $shipping_cost = 0;

        foreach ($carts as $cart)
        {
            if (!array_key_exists($cart['seller_id'],$seller_carts))
            {
                $seller_carts[$cart['seller_id']] = $cart;
            }
        }


        if (settingHelper('shipping_fee_type') == 'flat_rate') {
            $shipping_cost = settingHelper('shipping_fee_flat_rate');
        }

        if (settingHelper('vat_and_tax_type') == 'order_base') {
            $tax_repo       = new VatTaxRepository();
            $texes          = $tax_repo->activeTaxes();

            foreach ($seller_carts as $key => $seller_cart) {
                $tax_amount[$key]       = 0;

                $sub_total              = $seller_cart['price'] * $seller_cart['quantity'];

                foreach ($texes as $tax) :
                    $tax_amount[$key]   += ($sub_total * $tax->percentage) / 100;
                endforeach;
            }
        }

        /*if (settingHelper('shipping_fee_type') == 'invoice_base') {
            $fee = [];
            foreach ($seller_carts as $key => $seller_cart) {
                $sub_total    = $seller_cart['price'] * $seller_cart['quantity'];
                foreach (settingHelper('invoice_based_shipping_fee') as $invoice_key=> $item) {
                    if ($item['min_amount'] <= $sub_total && $item['max_amount'] >= $sub_total)
                    {
                        $fee[$key] = $item['fee'];
                    }
                }
                if (!array_key_exists($key,$fee))
                    $fee[$key] = settingHelper('shipping_fee_default_rate');


            }

            $shipping_cost = array_sum($fee);
        }*/

        foreach ($seller_carts as $key=> $seller_cart)
        {
            $group_carts[$key] = [
                'id'            => '',
                'seller_id'     => $key,
                'name'          => @$seller_cart['shop_name'],
                'image'         => @$seller_cart['shop_image'],
                'code'          => '',
                'is_applied'    => 0,
                'discount'      => 0,
                'shipping_cost' => $shipping_cost,
                'tax'           => array_key_exists($key, $tax_amount) ? $tax_amount[$key] : 0,
            ];
        }

        return $group_carts;
    }

    public function shippingCostFind($carts, $data)
    {
        $shipping_cost  = 0;

        $seller_carts   = $carts->groupBy('seller_id');
        $shipping_repo  = new ShippingRepository();
        $city           = $shipping_repo->getCity($data['city_id']);
        $cost           = $city ? $city->cost : 0;


        foreach ($seller_carts as $key => $seller_cart) {
            $shipping_cost += $cost;
        }
        return $shipping_cost;
    }

    public function cartFind($product_id,$variant)
    {
        return Cart::where('user_id',authId())->where('product_id',$product_id)->where('variant',$variant)->first();
    }

    //mobile api
    public function cartList($user,$data=[])
    {
        if ($user)
        {
            $carts = Cart::with('product.stock:id,product_id,image,name,sku,current_stock',
                'product:slug,user_id,price,id,thumbnail,minimum_order_quantity,is_refundable,current_stock,shipping_fee_depend_on_quantity,special_discount,special_discount_start,special_discount_end,special_discount_type,is_digital','seller:user_id,shop_name,logo')
                ->where('user_id', $user->id)->latest()->get();
        }
        else{
            if (array_key_exists('trx_id',$data))
            {
                $trx_id = $data['trx_id'];
            }
            else{
                $trx_id = Str::random(21);
            }

            Cart::where('created_at','<',Carbon::now()->subDays(2))->delete();

            $carts = Cart::with('product.stock:id,product_id,image,name,sku,current_stock',
                'product:slug,user_id,price,id,thumbnail,minimum_order_quantity,is_refundable,current_stock,shipping_fee_depend_on_quantity,special_discount,special_discount_start,special_discount_end,special_discount_type,is_digital','seller:user_id,shop_name,logo')
                ->where('user_id', getWalkInCustomer()->id)->where('trx_id',$trx_id)->latest()->get();
        }

        return $carts;
    }

    public function appliedCoupons($request)
    {
        $coupons = [];
        if (array_key_exists('trx_id',$request)):
            $checkouts = Checkout::with('coupon')->where('trx_id',$request['trx_id'])->where('status',1)->get();
            foreach ($checkouts as $key =>$checkout) {
                $coupon = $checkout->coupon;
                $coupons[] = [
                    'coupon_id'    => $coupon->id,
                    'title' => $coupon->title,
                    'status' => $coupon->status,
                    'discount_type' => $coupon->discount_type,
                    'discount'=> $checkout->coupon_discount,
                    'coupon_discount'=> $coupon->discount,
                ];
            }
        endif;
        return $coupons;
    }
}
