<?php

namespace App\Http\Requests\Admin\Product;

use App\Models\Product;
use App\Models\ProductStock;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class ProductUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        $id = \Request()->id;
        if ($request->variant_ids && count($request->variant_ids))
        {
            $stock = ProductStock::where('product_id',$id)->delete();
            session()->put('attributes',count($request->variant_ids));
        }

        return [
            'name'                      => 'required|max:190',
            'slug'                      => 'nullable|nullable|max:190|unique:products,slug,'.$id,
            'category'                  => 'required',
            'price'                     => 'numeric|required',
//            'sku'                       => 'required_without:has_variant',
//            'current_stock'             => 'numeric|required_without:has_variant',
            'unit'                      => 'required',
            'variant_sku.*'             => 'required_if:has_variant,1|distinct|unique:product_stocks,sku',
            'video_url'                 => 'required_with:video_provider',
            'minimum_order_quantity'    => 'numeric|min:1',
            'low_stock_to_notify'       => 'numeric|min:0',
            'shipping_fee'              => 'required_if:shipping_type,flat_rate',
//            'estimated_shipping_days'   => 'numeric',
            'special_discount_period'   => 'required_with:special_discount_type',
            'special_discount'          => 'required_with:special_discount_type',

            'campaign_discount'         => 'required_with:campaign',
            'campaign_discount_type'    => 'required_with:campaign'
        ];
    }
}
