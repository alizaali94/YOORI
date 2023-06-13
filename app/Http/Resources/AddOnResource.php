<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AddOnResource extends JsonResource
{
    public function toArray($request)
    {
        $addons = [
            'id'                    => $this->id,
            'name'                  => nullCheck($this->name),
            'addon_identifier'      => nullCheck($this->addon_identifier),
            'purchase_code'         => nullCheck($this->purchase_code),
            'version'               => nullCheck($this->version),
            'status'                => (bool)$this->status,
            'image'                 => $this->image ? get_media($this->image) : static_asset('images/default/default-image-40x40.png')
        ];
        $lang = $request->lang;

        if (!$lang)
        {
            $lang = 'en';
        }

        if ($this->addon_identifier == 'refund')
        {
            $addons['data'] = [
                'title' => nullCheck(settingHelper('refund_protection_title',$lang)),
                'sub_title' => nullCheck(settingHelper('refund_protection_sub_title',$lang)),
                'sticker' => settingHelper('refund_sticker') != [] && @is_file_exists(settingHelper('refund_sticker')['image_45x45'] , settingHelper('refund_sticker')['storage'])  ?  get_media(@settingHelper('refund_sticker')['image_45x45'] , settingHelper('refund_sticker')['storage']) : static_asset('images/others/policy-icon.svg'),
                'refund_with_shipping_cost' => (bool)settingHelper('refund_with_shipping_cost'),
                'refund_request_time' => (int)settingHelper('refund_request_time'),
            ];
        }

        elseif ($this->addon_identifier == 'reward')
        {
            $addons['data'] = [
                'conversion_rate' => (string)settingHelper('reward_convert_rate'),
            ];
        }


        elseif ($this->addon_identifier == 'video_shopping')
        {
            $addons['data'] = [
                'seller_video_shopping' => (bool)settingHelper('seller_video_shopping'),
            ];
        }

        elseif ($this->addon_identifier == 'wholesale')
        {
            $addons['data'] = [
                'seller_can_create_product' => (bool)settingHelper('seller_can_create_wholesale'),
                'show_price_table' => (bool)settingHelper('wholesale_price_variations_show'),
            ];
        }
        else{
            $addons['data'] = NULL;
        }
        return $addons;
    }
}
