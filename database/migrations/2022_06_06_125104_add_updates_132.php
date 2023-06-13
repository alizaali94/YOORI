<?php

use App\Models\Currency;
use App\Models\Permission;
use App\Models\Setting;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUpdates132 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $user = \App\Models\User::find(1);

        $permissions = $user->permissions;

        if (!in_array('pos_config_update',$permissions) && !in_array('pos_order',$permissions))
        {
            $permissions[] = "pos_config_update";
            $permissions[] = "pos_order";

            $user->permissions = $permissions;
            $user->save();
        }

        $permission = Permission::where('attribute','pos_system')->first();

        if (!$permission)
        {
            $value = [
                'read'                  => 'pos_order',
                'update'                => 'pos_config_update',
            ];

            Permission::create([
                'attribute' => "pos_system",
                'keywords' => $value,
            ]);

        }

        if (isDemoServer())
        {

            $title = Setting::where('title','pos_invoice_title')->first();
            if ($title)
            {
                $title->update([
                    'value' => 'SpaGreen Creative'
                ]);


            }
            else{
                Setting::create([
                    'title' => 'pos_invoice_title',
                    'value' => 'SpaGreen Creative',
                ]);
            }

            $address = Setting::where('title','pos_invoice_address')->first();
            if ($address)
            {
                $address->update([
                    'value' => 'Lake City Concord Gate, Khilkhet, Dhaka-1229'
                ]);

            }
            else{
                Setting::create([
                    'title' => 'pos_invoice_address',
                    'value' => 'Lake City Concord Gate, Khilkhet, Dhaka-1229',
                ]);
            }

            $phone = Setting::where('title','pos_invoice_phone')->first();
            if ($phone)
            {
                $phone->update([
                    'value' => '01454545788'
                ]);

            }
            else{
                Setting::create([
                    'title' => 'pos_invoice_phone',
                    'value' => '01454545788',
                ]);
            }

            $term = Setting::where('title','pos_invoice_terms_condition')->first();
            if ($term)
            {
                $term->update([
                    'value' => 'ক্ষতিগ্রস্থ পণ্য ফেরত দেওয়ার ক্ষেত্রে, আপনাকে অবশ্যই আপনার সাথে বিল আনতে হবে'
                ]);

            }
            else{
                Setting::create([
                    'title' => 'pos_invoice_terms_condition',
                    'value' => 'ক্ষতিগ্রস্থ পণ্য ফেরত দেওয়ার ক্ষেত্রে, আপনাকে অবশ্যই আপনার সাথে বিল আনতে হবে',
                ]);
            }

            $power = Setting::where('title','pos_invoice_powered_by')->first();
            if ($power)
            {
                $power->update([
                    'value' => 'for any query please call powered by SpaGreen'
                ]);
            }
            else{
                Setting::create([
                    'title' => 'pos_invoice_powered_by',
                    'value' => 'for any query please call powered by SpaGreen',
                ]);
            }
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
