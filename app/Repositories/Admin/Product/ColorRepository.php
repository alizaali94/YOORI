<?php

namespace App\Repositories\Admin\Product;

use App\Models\Color;
use App\Models\ColorLanguage;
use App\Repositories\Interfaces\Admin\Product\ColorLanguageInterface;
use Illuminate\Support\Facades\DB;
use App\Repositories\Interfaces\Admin\Product\ColorInterface;

class ColorRepository implements ColorInterface
{
    protected $colorLanguage;

    public function __construct(ColorLanguageInterface $colorLanguage)
    {
        $this->colorLanguage = $colorLanguage;
    }

    public function get($id)
    {
        return Color::find($id);
    }

    public function all()
    {
        return Color::leftJoin('color_languages', 'color_languages.color_id', '=', 'colors.id')
            ->select('colors.*', 'color_languages.id as color_lang_id', 'color_languages.name', 'color_languages.lang');

    }

    public function getByLang($id, $lang)
    {
        if ($lang == null):
            $colorByLang = ColorLanguage::with('color')
                ->where('lang', 'en')
                ->where('color_id', $id)
                ->first();
        else:
            $colorByLang = ColorLanguage::with('color')
                ->where('lang', $lang)
                ->where('color_id', $id)
                ->first();
            if (blank($colorByLang)):
                $colorByLang = ColorLanguage::with('color')
                    ->where('lang', 'en')
                    ->where('color_id', $id)
                    ->first();
                $colorByLang['translation_null'] = 'not-found';
            endif;
        endif;

        return $colorByLang;
    }

    public function paginate($limit)
    {
        return $this->all()
            ->where('lang', 'en')
            ->orderBy('created_at', 'DESC')
            ->paginate($limit);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $color               = new Color();
            $color->code         = $request->code;
            $color->save();

            $request['color_id'] = $color->id;

            if ($request->lang == ''):
                $request['lang'] = 'en';
            endif;
            $this->colorLanguage->store($request);

            DB::commit();
            return true;

        } catch (\Exception$e) {
            DB::rollback();
            return false;
        }
    }

    public function update($request)
    {
        DB::beginTransaction();
        try {
            $color              = $this->get($request->color_id);
            $color->code        = $request->code;
            $color->save();

            if ($request->color_lang_id == '') :
                $this->colorLanguage->store($request);

            else:
                $this->colorLanguage->update($request);
            endif;

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function shopColors()
    {
        return Color::with('currentLanguage')->latest()->paginate(8);
    }

    public function colorByIds($ids)
    {
        return Color::whereIn('id',$ids)->get();
    }

}
