<?php

use App\Models\Permission;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddUpdate141 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $sql = "
                ALTER TABLE orders
                MODIFY COLUMN discount double;
                ALTER TABLE orders
                MODIFY COLUMN sub_total double;
                ALTER TABLE orders
                MODIFY COLUMN total_tax double;               
                ALTER TABLE orders
                MODIFY COLUMN coupon_discount double;
                ALTER TABLE orders
                MODIFY COLUMN total_amount double;     
                ALTER TABLE orders
                MODIFY COLUMN shipping_cost double;
                ALTER TABLE orders
                MODIFY COLUMN total_payable double;


                ALTER TABLE order_details
                MODIFY COLUMN price double;        
                ALTER TABLE order_details
                MODIFY COLUMN tax double;
                ALTER TABLE order_details
                MODIFY COLUMN discount double;

                ALTER TABLE carts
                MODIFY COLUMN price double;        
                ALTER TABLE carts
                MODIFY COLUMN tax double;
                ALTER TABLE carts
                MODIFY COLUMN discount double;
                ALTER TABLE carts
                MODIFY COLUMN coupon_discount double;       
                ALTER TABLE carts
                MODIFY COLUMN shipping_cost double;



                ALTER TABLE products
                MODIFY COLUMN price double;        
                ALTER TABLE products
                MODIFY COLUMN special_discount double;
                ALTER TABLE products
                MODIFY COLUMN purchase_cost double;       
                ALTER TABLE products
                MODIFY COLUMN shipping_fee double; 
                ALTER TABLE products
                MODIFY COLUMN reward double;

                ALTER TABLE product_stocks
                MODIFY COLUMN price double; 

                ALTER TABLE campaign_products
                MODIFY COLUMN discount double;

                ALTER TABLE users
                MODIFY COLUMN balance double;

                ALTER TABLE wallets
                MODIFY COLUMN amount double;

                ALTER TABLE seller_payouts
                MODIFY COLUMN amount double;

                ALTER TABLE refunds
                MODIFY COLUMN total_amount double;   
                ALTER TABLE refunds
                MODIFY COLUMN shipping_cost double;
                ALTER TABLE refunds
                MODIFY COLUMN refund_amount double;

                ALTER TABLE delivery_hero_accounts
                MODIFY COLUMN amount double;

                ALTER TABLE delivery_heroes
                MODIFY COLUMN salary double;
                ALTER TABLE delivery_heroes
                MODIFY COLUMN commission double;
                ALTER TABLE delivery_heroes
                MODIFY COLUMN total_commission double;
                ALTER TABLE delivery_heroes
                MODIFY COLUMN total_collection double;
                ALTER TABLE delivery_heroes
                MODIFY COLUMN total_paid double;

                ALTER TABLE currencies
                MODIFY COLUMN exchange_rate double;

                ALTER TABLE product_vat_taxes
                MODIFY COLUMN amount double;


                ALTER TABLE coupons
                MODIFY COLUMN maximum_discount double;
                ALTER TABLE coupons
                MODIFY COLUMN discount double;
                ALTER TABLE coupons
                MODIFY COLUMN minimum_shopping double;

                ALTER TABLE checkouts
                MODIFY COLUMN coupon_discount double;";
        DB::unprepared($sql);

        if(addon_is_activated('wholesale')){
            $wholesale = "
                ALTER TABLE wholesale_prices
                MODIFY COLUMN price	double;
             ";
            DB::unprepared($wholesale);
        }

        Schema::table('orders', function (Blueprint $table) {
            $table->string('shipping_method')->after('is_draft')->nullable();
            $table->string('tax_method')->after('shipping_method')->default('{"vat_tax_type" : "","tax_type" : "" }');
            $table->boolean('is_coupon_system_active')->after('shipping_method')->nullable();
        });

        $user = \App\Models\User::find(1);

        $permissions = $user->permissions;

        if (!in_array(['state_import_create'],$permissions) && !in_array(['city_import_create'],$permissions))
        {
            $permissions[] = "state_import_create";
            $permissions[] = "city_import_create";
            $user->permissions = $permissions;
            $user->save();
        }

        $permission = Permission::where('attribute','state_import')->first();

        if (!$permission)
        {
            $value = [
                'create'    => 'state_import_create',
            ];

            Permission::create([
                'attribute' => "state_import",
                'keywords' => $value,
            ]);

        }

        $permission = Permission::where('attribute','city_import')->first();

        if (!$permission)
        {
            $value = [
                'create'    => 'city_import_create',
            ];

            Permission::create([
                'attribute' => "city_import",
                'keywords' => $value,
            ]);

        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
