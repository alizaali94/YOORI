<?php

namespace App\Traits;

use App\Models\Media;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Sentinel;
use Illuminate\Support\Facades\File;

trait ImageTrait
{
    public function saveImage($requestImage, $for = '_product_', $save_to_db = false,$url=null,$token_id=null)
    {
        $extension = 'png';
        $mime_type = 'image/png';

        if ((!empty($requestImage) && $requestImage != 'null') || $url) :

            if (!$url)
            {
                $image                  = explode('.', $requestImage->getClientOriginalName());
                $extension              = strtolower($requestImage->getClientOriginalExtension());
                $name                   = $image[0];
                $mime_type              = $requestImage->getMimeType();
            }


            $storage                = settingHelper('default_storage') != '' || settingHelper('default_storage') != null ? settingHelper('default_storage') : 'local';
            $response               = false;

            $content_type           = ['visibility' => 'public', 'ContentType' => $extension == 'svg' ? 'image/svg+xml' : $mime_type];
            $encode_percentage      = $this->getEncodePercentage();

            if ($for == 'favicon'):
                $originalImage      = date('YmdHis') . "-" . $for . rand(1, 500) . '.' . $extension;
                $image_16x16        = date('YmdHis') . "-" . $for . '-16x16-' . rand(1, 500) . '.' . $extension;
                $image_32x32        = date('YmdHis') . "-" . $for . '-32x32-' . rand(1, 500) . '.' . $extension;
                $image_57x57        = date('YmdHis') . "-" . $for . '-57x57-' . rand(1, 500) . '.' . $extension;
                $image_60x60        = date('YmdHis') . "-" . $for . '-60x60-' . rand(1, 500) . '.' . $extension;
                $image_72x72        = date('YmdHis') . "-" . $for . '-72x72-' . rand(1, 500) . '.' . $extension;
                $image_76x76        = date('YmdHis') . "-" . $for . '-76x76-' . rand(1, 500) . '.' . $extension;
                $image_96x96        = date('YmdHis') . "-" . $for . '-96x96-' . rand(1, 500) . '.' . $extension;
                $image_114x114      = date('YmdHis') . "-" . $for . '-114x114-' . rand(1, 500) . '.' . $extension;
                $image_120x120      = date('YmdHis') . "-" . $for . '-120x120-' . rand(1, 500) . '.' . $extension;
                $image_144x144      = date('YmdHis') . "-" . $for . '-144x144-' . rand(1, 500) . '.' . $extension;
                $image_152x152      = date('YmdHis') . "-" . $for . '-152x152-' . rand(1, 500) . '.' . $extension;
                $image_180x180      = date('YmdHis') . "-" . $for . '-180x180-' . rand(1, 500) . '.' . $extension;
                $image_192x192      = date('YmdHis') . "-" . $for . '-192x192-' . rand(1, 500) . '.' . $extension;

                //splash screen
                $splash_640x1136    = date('YmdHis') . "-" . $for . '-640x1136-' . rand(1, 500) . '.' . $extension;
                $splash_750x1334    = date('YmdHis') . "-" . $for . '-750x1334-' . rand(1, 500) . '.' . $extension;
                $splash_1242x2208   = date('YmdHis') . "-" . $for . '-1242x2208-' . rand(1, 500) . '.' . $extension;
                $splash_1125x2436   = date('YmdHis') . "-" . $for . '-1125x2436-' . rand(1, 500) . '.' . $extension;
                $splash_828x1792    = date('YmdHis') . "-" . $for . '-828x1792-' . rand(1, 500) . '.' . $extension;
                $splash_1242x2688   = date('YmdHis') . "-" . $for . '-1242x2688-' . rand(1, 500) . '.' . $extension;
                $splash_1536x2048   = date('YmdHis') . "-" . $for . '-1536x2048-' . rand(1, 500) . '.' . $extension;
                $splash_1668x2224   = date('YmdHis') . "-" . $for . '-1668x2224-' . rand(1, 500) . '.' . $extension;
                $splash_1668x2388   = date('YmdHis') . "-" . $for . '-1668x2388-' . rand(1, 500) . '.' . $extension;
                $splash_2048x2732   = date('YmdHis') . "-" . $for . '-2048x2732-' . rand(1, 500) . '.' . $extension;

                $directory = 'images/icon/';

                File::ensureDirectoryExists('public/'.$directory, 0777, true);

                $originalImageUrl   = $directory . $originalImage;
                $image_16x16_url    = $directory . $image_16x16;
                $image_32x32_url    = $directory . $image_32x32;
                $image_57x57_url    = $directory . $image_57x57;
                $image_60x60_url    = $directory . $image_60x60;
                $image_72x72_url    = $directory . $image_72x72;
                $image_76x76_url    = $directory . $image_76x76;
                $image_96x96_url    = $directory . $image_96x96;
                $image_114x114_url  = $directory . $image_114x114;
                $image_120x120_url  = $directory . $image_120x120;
                $image_144x144_url  = $directory . $image_144x144;
                $image_152x152_url  = $directory . $image_152x152;
                $image_180x180_url  = $directory . $image_180x180;
                $image_192x192_url  = $directory . $image_192x192;

                //splash screen
                $splash_640x1136_url    = $directory . $splash_640x1136;
                $splash_750x1334_url    = $directory . $splash_750x1334;
                $splash_1242x2208_url   = $directory . $splash_1242x2208;
                $splash_1125x2436_url   = $directory . $splash_1125x2436;
                $splash_828x1792_url    = $directory . $splash_828x1792;
                $splash_1242x2688_url   = $directory . $splash_1242x2688;
                $splash_1536x2048_url   = $directory . $splash_1536x2048;
                $splash_1668x2224_url   = $directory . $splash_1668x2224;
                $splash_1668x2388_url   = $directory . $splash_1668x2388;
                $splash_2048x2732_url   = $directory . $splash_2048x2732;


                Image::make($requestImage)->save('public/'.$originalImageUrl);
                Image::make($requestImage)->fit(16, 16)->save('public/'.$image_16x16_url, $encode_percentage);
                Image::make($requestImage)->fit(32, 32)->save('public/'.$image_32x32_url, $encode_percentage);
                Image::make($requestImage)->fit(57, 57)->save('public/'.$image_57x57_url, $encode_percentage);
                Image::make($requestImage)->fit(60, 60)->save('public/'.$image_60x60_url, $encode_percentage);
                Image::make($requestImage)->fit(72, 72)->save('public/'.$image_72x72_url, $encode_percentage);
                Image::make($requestImage)->fit(76, 76)->save('public/'.$image_76x76_url, $encode_percentage);
                Image::make($requestImage)->fit(96, 96)->save('public/'.$image_96x96_url, $encode_percentage);
                Image::make($requestImage)->fit(114, 114)->save('public/'.$image_114x114_url, $encode_percentage);
                Image::make($requestImage)->fit(120, 120)->save('public/'.$image_120x120_url, $encode_percentage);
                Image::make($requestImage)->fit(144, 144)->save('public/'.$image_144x144_url, $encode_percentage);
                Image::make($requestImage)->fit(152, 152)->save('public/'.$image_152x152_url, $encode_percentage);
                Image::make($requestImage)->fit(180, 180)->save('public/'.$image_180x180_url, $encode_percentage);
                Image::make($requestImage)->fit(192, 192)->save('public/'.$image_192x192_url, $encode_percentage);

                Image::make($requestImage)->resize(640, 1136,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(640, 1136, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$splash_640x1136_url, $encode_percentage, 'png');
                Image::make($requestImage)->resize(750, 1334,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(750, 1334, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$splash_750x1334_url, $encode_percentage, 'png');
                Image::make($requestImage)->resize(1242, 2208,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(1242, 2208, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$splash_1242x2208_url, $encode_percentage, 'png');
                Image::make($requestImage)->resize(1125, 2436,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(1125, 2436, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$splash_1125x2436_url, $encode_percentage, 'png');
                Image::make($requestImage)->resize(1125, 2436,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(1125, 2436, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$splash_1125x2436_url, $encode_percentage, 'png');
                Image::make($requestImage)->resize(828, 1792,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(828, 1792, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$splash_828x1792_url, $encode_percentage, 'png');
                Image::make($requestImage)->resize(1242, 2688,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(1242, 2688, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$splash_1242x2688_url, $encode_percentage, 'png');
                Image::make($requestImage)->resize(1536, 2048,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(1536, 2048, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$splash_1536x2048_url, $encode_percentage, 'png');
                Image::make($requestImage)->resize(1668, 2224,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(1668, 2224, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$splash_1668x2224_url, $encode_percentage, 'png');
                Image::make($requestImage)->resize(1668, 2388,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(1668, 2388, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$splash_1668x2388_url, $encode_percentage, 'png');
                Image::make($requestImage)->resize(2048, 2732,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(2048, 2732, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$splash_2048x2732_url, $encode_percentage, 'png');

                $images = array(
                    'originalImage_url'     => $originalImageUrl,
                    'image_16x16_url'       => $image_16x16_url,
                    'image_32x32_url'       => $image_32x32_url,
                    'image_57x57_url'       => $image_57x57_url,
                    'image_60x60_url'       => $image_60x60_url,
                    'image_72x72_url'       => $image_72x72_url,
                    'image_76x76_url'       => $image_76x76_url,
                    'image_96x96_url'       => $image_96x96_url,
                    'image_114x114_url'     => $image_114x114_url,
                    'image_120x120_url'     => $image_120x120_url,
                    'image_144x144_url'     => $image_144x144_url,
                    'image_152x152_url'     => $image_152x152_url,
                    'image_180x180_url'     => $image_180x180_url,
                    'image_192x192_url'     => $image_192x192_url,
                    'splash_640x1136_url'   => $splash_640x1136_url,
                    'splash_750x1334_url'   => $splash_750x1334_url,
                    'splash_1242x2208_url'  => $splash_1242x2208_url,
                    'splash_1125x2436_url'  => $splash_1125x2436_url,
                    'splash_828x1792_url'   => $splash_828x1792_url,
                    'splash_1242x2688_url'  => $splash_1242x2688_url,
                    'splash_1536x2048_url'  => $splash_1536x2048_url,
                    'splash_1668x2224_url'  => $splash_1668x2224_url,
                    'splash_1668x2388_url'  => $splash_1668x2388_url,
                    'splash_2048x2732_url'  => $splash_2048x2732_url,
                );

            elseif ($for == 'admin_light_logo' || $for == 'admin_dark_logo' || $for == 'footer_logo' || $for == 'invoice_logo' ||
                $for == 'light_logo' || $for == 'dark_logo' || $for == 'og_image' || $for == 'popup_image' ||
                $for == 'payment_method_banner' || $for == 'service_image' || $for == 'seller_logo' || $for == 'seller_banner'):

                $directory = 'images/';
                if($for == 'seller_logo' || $for == 'seller_banner'):
                    $directory = 'images/seller/';
                endif;

                File::ensureDirectoryExists('public/'.$directory, 0777, true);

                if ($for == 'admin_light_logo' || $for == 'admin_dark_logo'):
                    $image_100x38       = date('YmdHis') . "-" . $for . '-100x38' . rand(1, 500) . '.' . $extension;
                    $image_100x38_url   = $directory . $image_100x38;
                    Image::make($requestImage)->fit(100, 38)->save('public/'.$image_100x38_url, $encode_percentage, 'png');
                elseif ($for == 'footer_logo'):
                    $image_89x33        = date('YmdHis') . "-" . $for . '-89x33' . rand(1, 500) . '.' . $extension;
                    $image_89x33_url    = $directory . $image_89x33;
                    Image::make($requestImage)->fit(100, 38)->save('public/'.$image_89x33_url, $encode_percentage, 'png');
                elseif ($for == 'light_logo' || $for == 'dark_logo'):
                    $image_138x52       = date('YmdHis') . "-" . $for . '-138x52' . rand(1, 500) . '.' . $extension;
                    $image_138x52_url   = $directory . $image_138x52;

                    Image::make($requestImage)->resize(138,52, function ($constraint) {
                        $constraint->aspectRatio();
                    })->save('public/'.$image_138x52_url, $encode_percentage, 'png');

                elseif ($for == 'invoice_logo'):
                    $image_118x45       = date('YmdHis') . "-" . $for . '-118x45' . rand(1, 500) . '.' . $extension;
                    $image_118x45_url   = $directory . $image_118x45;
                    Image::make($requestImage)->resize(118, 45,
                        function ($constraint) {
                            $constraint->aspectRatio();
                        })
                        ->resizeCanvas(118, 45, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$image_118x45_url);

                elseif ($for == 'payment_method_banner'):
                    $image_payment      = date('YmdHis') . "-" . $for . '-48x25' . rand(1, 500) . '.png';
                    $image_payment_url  = $directory . $image_payment;
                    Image::make($requestImage)->save('public/'.$image_payment_url, $encode_percentage, 'png');
                elseif ($for == 'service_image'):
                    $image_40x40        = date('YmdHis') . "-" . $for . '-40x40' . rand(1, 50) . '.' . $extension;
                    $image_40x40_url    = $directory . $image_40x40;
                    Image::make($requestImage)->fit(60, 40)->save('public/'.$image_40x40_url, $encode_percentage, 'png');
                elseif ($for == 'seller_logo'):

                    $image_197x152      = date('YmdHis') . "-" . $for . '-197x152' . rand(1, 50) . '.' . $extension;
                    $image_320x320      = date('YmdHis') . "-" . $for . '-320x320' . rand(1, 50) . '.' . $extension;
                    $image_120x80       = date('YmdHis') . "-" . $for . '-120x80' . rand(1, 50) . '.' . $extension;
                    $image_82x82        = date('YmdHis') . "-" . $for . '-79x79' . rand(1, 50) . '.' . $extension;

                    $image_197x152_url  = $directory . $image_197x152;
                    $image_320x320_url  = $directory . $image_320x320;
                    $image_120x80_url   = $directory . $image_120x80;
                    $image_82x82_url    = $directory . $image_82x82;

                    Image::make($requestImage)->fit(197, 152)->save('public/'.$image_197x152_url, $encode_percentage, 'png');
                    Image::make($requestImage)->fit(320, 320)->save('public/'.$image_320x320_url, $encode_percentage, 'png');
                    Image::make($requestImage)->fit(120, 80)->save('public/'.$image_120x80_url, $encode_percentage, 'png');
                    Image::make($requestImage)->fit(82, 82)->save('public/'.$image_82x82_url, $encode_percentage, 'png');

                elseif ($for == 'seller_banner'):

                    $image_617x145      = date('YmdHis') . "-" . $for . '-617x145' . rand(1, 50) . '.png';
                    $image_297x203      = date('YmdHis') . "-" . $for . '-297x203' . rand(1, 50) . '.png';

                    $image_617x145_url  = $directory . $image_617x145;
                    $image_297x203_url  = $directory . $image_297x203;

                    Image::make($requestImage)->fit(617, 145)->save('public/'.$image_617x145_url, $encode_percentage, 'png');
                    Image::make($requestImage)->fit(297, 203)->save('public/'.$image_297x203_url, $encode_percentage, 'png');
//                    Image::make($requestImage)->fit(406, 195)->save('public/'.$image_297x203_url, $encode_percentage, 'png');

                elseif ($for == 'popup_image'):
                    $image_270x260      = date('YmdHis') . "-" . $for . '-270x260' . rand(1, 50) . '.png';
                    $image_270x260_url  = $directory . $image_270x260;

                    Image::make($requestImage)->resize(270, 260,
                        function ($constraint) {
                            $constraint->aspectRatio();
                        })
                        ->resizeCanvas(270, 260, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$image_270x260_url, $encode_percentage, 'png');
                endif;

                $originalImage          = date('YmdHis') . "-" . $for . rand(1, 500) . '.' . $extension;
                $imageSmallTwo          = date('YmdHis') . "image_small_two" . $for . rand(1, 500) . '.' . $extension;

                $originalImageUrl       = $directory . $originalImage;
                $imageSmallTwoUrl       = $directory . $imageSmallTwo;

                Image::make($requestImage)->save('public/'.$originalImageUrl, $encode_percentage);
                Image::make($requestImage)->fit(72, 72)->save('public/'.$imageSmallTwoUrl, $encode_percentage, 'png');

                $images = array(
                    'storage'           => $storage,
                    'original_image'    => $originalImageUrl,
                    'image_100x38'      => $image_100x38_url ?? '',
                    'image_89x33'       => $image_89x33_url ?? '',
                    'image_118x45'      => $image_118x45_url ?? '',
                    'image_138x52'      => $image_138x52_url ?? '',
                    'image_48x25'       => $image_payment_url ?? '',

                    'image_40x40'       => $image_40x40_url ?? '',
                    'image_197x152'     => $image_197x152_url ?? '',
                    'image_120x80'      => $image_120x80_url ?? '',
                    'image_82x82'       => $image_82x82_url ?? '',

                    'image_617x145'     => $image_617x145_url ?? '',
                    'image_297x203'     => $image_297x203_url ?? '',

                    'image_72x72'       => $imageSmallTwoUrl,
                    'image_270x260'     => $image_270x260_url ?? '',
                    'image_320x320'     => $image_320x320_url ?? '',
                );

            elseif ($for == '_staff_'):
                if ($url)
                {
                    $requestImage = $url;
                }

                $directory = 'images/';

                File::ensureDirectoryExists('public/'.$directory, 0777, true);

                $originalImage              = date('YmdHis') . "-" . $for . rand(1, 500) . '.' . $extension;
                $imageProfileThumbnail      = date('YmdHis') . "image_thumbnail" . $for . rand(1, 500) . '.png';
                $image20X20                 = date('YmdHis') . "image_20X20" . $for . rand(1, 500) . '.png';
                $image40X40                 = date('YmdHis') . "image_40X40" . $for . rand(1, 500) . '.png';

                $originalImageUrl           = $directory . $originalImage;
                $imageProfileThumbnailUrl   = $directory . $imageProfileThumbnail;
                $image20X20Url              = $directory . $image20X20;
                $image40X40Url              = $directory . $image40X40;

                Image::make($requestImage)->save('public/'.$originalImageUrl, $encode_percentage);
                Image::make($requestImage)->fit(130, 130)->save('public/'.$imageProfileThumbnailUrl, $encode_percentage, 'png');
                Image::make($requestImage)->fit(20, 20)->save('public/'.$image20X20Url, $encode_percentage, 'png');
                Image::make($requestImage)->fit(40, 40)->save('public/'.$image40X40Url, $encode_percentage, 'png');

                $images = array(
                    'storage'           => $storage,
                    'original_image'    => $originalImageUrl,
                    'image_40x40'       => $image40X40Url,
                    'image_128x128'     => $imageProfileThumbnailUrl,
                    'image_20x20'       => $image20X20Url,
                );
            elseif ($for == 'single_file'):

                $directory = 'images/';

                File::ensureDirectoryExists('public/'.$directory, 0777, true);

                $originalImage = date('YmdHis') . "-" . $for . rand(1, 500) . '.' . $extension;

                $originalImageUrl = $directory . $originalImage;

                Image::make($requestImage)->save('public/'.$originalImageUrl, $encode_percentage, 'png');

                $images = array(
                    'storage' => $storage,
                    'original_image' => $originalImageUrl,
                );
            else:
                $directory = 'images/';

                File::ensureDirectoryExists('public/'.$directory, 0777, true);

                $originalImage          = date('YmdHis') . "_original_" . $for . rand(1, 500).'.' . $extension;
                $image_40x40            = date('YmdHis') . "image_40x40" . $for . rand(1, 500) . '.' . 'png';
                $image_72x72            = date('YmdHis') . "image_72x72" . $for . rand(1, 500) . '.' . 'png';
                $image_190x230          = date('YmdHis') . "image_190x230" . $for . rand(1, 500) . '.' . 'png';
                $image_110x122          = date('YmdHis') . "image_110x122" . $for . rand(1, 500) . '.' . 'png';
                $image_320x320          = date('YmdHis') . "image_320x320" . $for . rand(1, 500) . '.' . 'png';
                $image_387x280          = date('YmdHis') . "image_387x280" . $for . rand(1, 500) . '.' . 'png';
                $image_thumbnail        = date('YmdHis') . "image_thumbnail" . $for . rand(1, 500) . '.' . 'png';

                $originalImageUrl       = $directory . $originalImage;
                $image_40x40_Url        = $directory . $image_40x40;
                $image_72x72_Url        = $directory . $image_72x72;
                $image_190x230_Url      = $directory . $image_190x230;
                $image_110x122_url      = $directory . $image_110x122;
                $image_320x320_Url      = $directory . $image_320x320;
                $image_387x280_Url      = $directory . $image_387x280;
                $image_thumbnail_Url    = $directory . $image_thumbnail;

                Image::make($requestImage)->save('public/'.$originalImageUrl);
                Image::make($requestImage)->resize(110, 122,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(110, 122, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$image_110x122_url, $encode_percentage,'png');
                Image::make($requestImage)->resize(40, 40,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(40, 40, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$image_40x40_Url, $encode_percentage,'png');
                Image::make($requestImage)->resize(72, 72,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(72, 72, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$image_72x72_Url, $encode_percentage, 'png');
                Image::make($requestImage)->resize(190, 230, function ($constraint) {
                    $constraint->aspectRatio();
                }, true)->resizeCanvas(190, 230, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$image_190x230_Url, $encode_percentage, 'png');
                Image::make($requestImage->getRealPath())->resize(320, 320,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(320, 320, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$image_320x320_Url, $encode_percentage, 'png');
                Image::make($requestImage)->resize(180, 120,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(180, 120, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$image_thumbnail_Url, $encode_percentage, 'png');
                Image::make($requestImage)->resize(387, 280,
                    function ($constraint) {
                        $constraint->aspectRatio();
                    })
                    ->resizeCanvas(387, 280, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$image_387x280_Url, $encode_percentage, 'png');

                $images = array(
                    'storage'           => $storage,
                    'original_image'    => $originalImageUrl,
                    'image_40x40'       => $image_40x40_Url,
                    'image_72x72'       => $image_72x72_Url,
                    'image_190x230'     => $image_190x230_Url,
                    'image_110x122'     => $image_110x122_url,
                    'image_320x320'     => $image_320x320_Url,
                    'image_387x280'     => $image_387x280_Url,
                    'image_thumbnail'   => $image_thumbnail_Url,
                );
            endif;
            $error = false;
            $size = File::size(public_path($originalImageUrl));
            if ($storage == 'aws_s3' && array_key_exists('storage', $images)):
                $response = $this->uploadToS3($images, $content_type);
                if ($response === true):
                    $this->deleteImage($images);
                else:
                    $this->deleteImage($images);
                    $error = 's3_error';
                endif;
            endif;
            if ($storage == 'wasabi' && array_key_exists('storage', $images)):
                $response = $this->uploadToWasabi($images, $content_type);
                if ($response === true):
                    $this->deleteImage($images);
                else:
                    $this->deleteImage($images);
                    $error = 'wasabi_error';
                endif;
            endif;
            if ($save_to_db && $error == false):

                $media                  = new Media();
                $media->name            = @$name;
                $media->user_id         = \Sentinel::getUser() ? \Sentinel::getUser()->id : $token_id;
                $media->storage         = ($response === true) ? $storage : 'local';
                $media->type            = 'image';
                $media->extension       = $extension;
                $media->size            = $size;
                $media->original_file   = $originalImageUrl;
                $media->image_variants  = $images ?? [];
                $media->save();
            endif;

            if ($error === 's3_error'):
                return $error;
            endif;

            $data['images']     = $images;
            $data['id']         = isset($media) ? $media->id : null;

            return $data;
        else:
            return false;
        endif;
    }

    public function deleteImage($files, $storage = 'local')
    {
        try {
            foreach (array_slice($files, 1) as $file):
                if ($storage == 'aws_s3'):
                    Storage::disk('s3')->delete($file);
                elseif ($storage == 'wasabi'):
                        Storage::disk('wasabi')->delete($file);
                else:
                    File::delete('public/'.$file);
                endif;
            endforeach;
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function saveFile($requested_file, $type, $save_to_db = true)
    {
        if (!empty($requested_file) && $requested_file != 'null') :
            $image          = explode('.', $requested_file->getClientOriginalName());
            $extension      = $requested_file->getClientOriginalExtension();
            $name           = $image[0];
            $size           = $requested_file->getSize();
            $storage        = settingHelper('default_storage') != '' || settingHelper('default_storage') != null ? settingHelper('default_storage') : 'local';
            $response       = false;
            $mime_type      = $requested_file->getMimeType();
            $content_type   = ['visibility' => 'public', 'ContentType' => $extension == 'svg' ? 'image/svg+xml' : $mime_type];
            $originalFile   = date('YmdHis') . "_original_" . rand(1, 500) . '.' . $extension;
            $directory      = 'files/';

            File::ensureDirectoryExists('public/'.$directory, 0777, true);

            $originalFileUrl = $directory . $originalFile;

            $requested_file->move('public/'.$directory, 'public/'.$originalFileUrl);

            if ($storage == 'aws_s3'):
                $response = $this->uploadFileToS3($originalFileUrl, $content_type);

                if ($response == true):
                    $this->deleteFile('public/'.$originalFileUrl);
                else:
                    $this->deleteFile('public/'.$originalFileUrl);
                    return 's3_error';
                endif;

            elseif($storage == 'wasabi'):
                $response = $this->uploadFileToWasabi($originalFileUrl, $content_type);

                if ($response == true):
                    $this->deleteFile('public/'.$originalFileUrl);
                else:
                    $this->deleteFile('public/'.$originalFileUrl);
                    return 'wasabi_error';
                endif;
            endif;

            if ($save_to_db):
                $media                  = new Media();
                $media->name            = $name;
                $media->user_id         = \Sentinel::getUser()->id;
                $media->storage         = ($response == true) ? $storage : 'local';
                $media->type            = $type;
                $media->extension       = $extension;
                $media->size            = $size;
                $media->original_file   = $originalFileUrl;
                $media->image_variants  = [];
                $media->save();
            endif;


            if($type == 'pos_file'):
                return ['storage' => $storage, 'image' => $originalFileUrl];
            endif;
        else:
            return false;
        endif;
    }

    public function deleteFile($file, $storage = 'local')
    {
        try {
            if ($storage == 'aws_s3'):
                Storage::disk('s3')->delete($file);
            elseif ($storage == 'wasabi'):
                Storage::disk('wasabi')->delete($file);
            else:
                File::delete('public/'.$file);
            endif;

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function getImage($id)
    {
        $image  = Media::find($id);
        if (!blank($image)):
            $data   = $image->image_variants;
            return $data;
        else:
            return false;
        endif;
    }

    public function getFile($id)
    {
        $file               = Media::find($id);
        $data['storage']    = $file->storage;
        $data['file_type']  = $file->type;
        $data['file']       = $file->original_file;
        return $data;
    }

    public function getAllType($id)
    {
        $file = Media::find($id);
        if ($file):
            if ($file->type != 'image'):
                $data['storage']        = $file->storage;
                $data['file_type']      = $file->type;
                $data['original_file']  = $file->original_file;
            else:
                $data                   = array_merge($file->image_variants, ['file_type' => 'image']);
            endif;
            return $data;
        else:
            return false;
        endif;
    }

    protected function uploadToS3($files, $contentType)
    {
        foreach (array_slice($files, 1) as $file):
            if ($file != "" && file_exists('public/'.$file)):
                Storage::disk('s3')->put($file, file_get_contents('public/'.$file), $contentType);
            endif;
        endforeach;
        return true;
    }

    protected function uploadFileToS3($file, $contentType)
    {
        if ($file != "" && file_exists('public/'.$file)):
            Storage::disk('s3')->put($file, file_get_contents('public/'.$file), $contentType);
            return true;
        endif;
        return false;
    }

    protected function uploadToWasabi($files, $contentType)
    {
        foreach (array_slice($files, 1) as $file):
            if ($file != "" && file_exists('public/'.$file)):
                Storage::disk('wasabi')->put($file, file_get_contents('public/'.$file), $contentType);
            endif;
        endforeach;
        return true;
    }

    protected function uploadFileToWasabi($file, $contentType)
    {
        if ($file != "" && file_exists('public/'.$file)):
            Storage::disk('wasabi')->put($file, file_get_contents('public/'.$file), $contentType);
            return true;
        endif;
        return false;
    }

    public function getImageWithRecommendedSize($id, $width = 40, $height = 40, $slider = false, $avater = false)
    {
        $image = Media::find($id);
        if ($image && is_file_exists($image->original_file, $image->storage)):
            $image_size = 'image_' . $width . 'x' . $height;
            if (!array_key_exists($image_size, $image->image_variants) || !file_exists($image->image_variants[$image_size])):
                $directory = 'images/';
                $size = date('YmdHis') . $image_size . '-' . rand(1, 500) . '.png';
                $url = $directory . $size;
                if ($image->storage == 'local'):
                    if (!$slider):
                        Image::make(public_path($image->original_file), $image->storage)->resize($width, $height, function ($constraint) {
                            $constraint->aspectRatio();
                        }, true)->resizeCanvas($width, $height, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$url, $this->getEncodePercentage(),'webp');
                    else:
                        Image::make(public_path($image->original_file), $image->storage)->fit($width, $height)->save('public/'.$url, $this->getEncodePercentage(),'webp');
                    endif;
                elseif ($image->storage == 'aws_s3'):
                    if (!$slider):
                        Image::make(get_media($image->original_file, $image->storage))->resize($width, $height, function ($constraint) {
                            $constraint->aspectRatio();
                        }, true)->resizeCanvas($width, $height, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$url, $this->getEncodePercentage(),'webp');
                    else:
                        Image::make(get_media($image->original_file, $image->storage))->fit($width, $height)->save('public/'.$url, $this->getEncodePercentage(),'webp');
                    endif;
                    $content_type = ['visibility' => 'public', 'ContentType' => 'image/' . $image->extension];
                    $this->uploadFileToS3($url, $content_type);
                    $this->deleteFile($url, 'local');
                elseif ($image->storage == 'wasabi'):
                    if (!$slider):
                        Image::make(get_media($image->original_file, $image->storage))->resize($width, $height, function ($constraint) {
                            $constraint->aspectRatio();
                        }, true)->resizeCanvas($width, $height, 'center', false, 'rgba(255, 255, 255, 0.00)')->save('public/'.$url, $this->getEncodePercentage(),'webp');
                    else:
                        Image::make(get_media($image->original_file, $image->storage))->fit($width, $height)->save('public/'.$url, $this->getEncodePercentage(),'webp');
                    endif;
                    $content_type = ['visibility' => 'public', 'ContentType' => 'image/' . $image->extension];
                    $this->uploadFileToWasabi($url, $content_type);
                    $this->deleteFile($url, 'local');
                endif;
                $image_variants = $image->image_variants;
                $image_variants[$image_size] = $url;
                $image->image_variants = $image_variants;
                $image->save();
            endif;
            return $image->image_variants;

        elseif ($avater):
            $directory                  = 'images/';

            $originalImage              = date('YmdHis') . "-user-" . rand(1, 500) . '.png';
            $imageProfileThumbnail      = date('YmdHis') . "image_thumbnail-user-" . rand(1, 500) . '.png';
            $image20X20                 = date('YmdHis') . "image_20X20-user-" . rand(1, 500) . '.png';
            $image40X40                 = date('YmdHis') . "image_40X40-user-" . rand(1, 500) . '.png';

            $originalImageUrl           = $directory . $originalImage;
            $imageProfileThumbnailUrl   = $directory . $imageProfileThumbnail;
            $image20X20Url              = $directory . $image20X20;
            $image40X40Url              = $directory . $image40X40;

            $storage                    = settingHelper('default_storage') == 'aws_s3' ? 'aws_s3' : 'local';

            Image::make($avater)->save('public/'.$originalImageUrl);
            Image::make($avater)->fit(130, 130)->save('public/'.$imageProfileThumbnailUrl);
            Image::make($avater)->fit(20, 20)->save('public/'.$image20X20Url);
            Image::make($avater)->fit(40, 40)->save('public/'.$image40X40Url);

            $images = array(
                'storage'           => $storage,
                'original_image'    => $originalImageUrl,
                'image_40x40'       => $image40X40Url,
                'image_128x128'     => $imageProfileThumbnailUrl,
                'image_20x20'       => $image20X20Url,
            );

            $data['images']         = $images;
            $data['id']             = null;

            return $data;
        else:
            return [];
        endif;
    }

    public function getImageArrayRecommendedSize($id, $widths = [], $heights = [])
    {
        foreach ($widths as $key => $width):
            $height = $heights[$key];
            $this->getImageWithRecommendedSize($id, $width, $height);
        endforeach;
        $image = Media::find($id);
        if ($image):
            return $image->image_variants;
        else:
            return [];
        endif;
    }

    protected function getEncodePercentage(): int
    {
        if (settingHelper('image_optimization') == 0):
            $encode_percentage = settingHelper('image_optimization_percentage') != '' ? settingHelper('image_optimization_percentage') : 89;
        else:
            $encode_percentage = 89;
        endif;
        return $encode_percentage;
    }

    public function saveMultipleImage($images,$product): array
    {
        $storage        = settingHelper('default_storage') != '' || settingHelper('default_storage') != null ? settingHelper('default_storage') : 'local';

        $description_images = [];
        if ($images && count($images) > 0)
        {
            if ($product && $product->description_images && count($product->description_images))
            {
                foreach ($product->description_images as $description_image) {
                    $this->deleteFile($description_image['image'],$storage);
                }
            }
            foreach ($images as $description_image) {
                $image_name = Str::uuid().'.'.$description_image->getClientOriginalExtension();
                $path = "images/description_images/$image_name";
                $description_image->move('public/images/description_images', $image_name);
                $description_images[] = [
                    'image' => $path,
                    'storage' => $storage,
                ];
            }
        }

        if (count($description_images) == 0 && $product && $product->description_images)
        {
            $description_images = $product->description_images;
        }
        return $description_images;
    }
}
