<?php

namespace App\Repositories\Admin;


use App\Models\ApiKey;
use App\Models\ApiKeyLanguage;
use App\Models\ServiceLanguage;
use App\Repositories\Interfaces\Admin\ApiKeyInterface;

class ApiKeyRepository implements ApiKeyInterface {
    public function all()
    {
        return ApiKey::latest();
    }

    public function paginate($limit): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        return ApiKey::latest()->paginate($limit);
    }

    public function getByLang($id, $lang)
    {
        if ($lang == null) {
            $api_key = ApiKeyLanguage::where('lang', 'en')->where('api_key_id', $id)->first();
        } else {
            $api_key = ApiKeyLanguage::where('lang', $lang)->where('api_key_id', $id)->first();
            if (blank($api_key)) {
                $api_key = ApiKeyLanguage::where('lang', 'en')->where('api_key_id', $id)->first();
                $api_key['translation_null'] = 'not-found';
            }
        }

        return $api_key;
    }

    public function find($id)
    {
        return ApiKey::find($id);
    }

    public function store($request)
    {
        $key = ApiKey::create([
            'key'       => $request['key'],
            'user_id'   => authId(),
        ]);
        $this->langStore($request,$key);
        return $key;
    }

    public function update($request,$id)
    {
        $key = $this->find($id);


        $key->update($request);

        if ($request['translate_id']) {
            $request['lang'] = $request['lang'] ? : 'en';
            $this->langUpdate($request);
        } else {
            $this->langStore($request,$key);
        }

        return $key;
    }

    public function langStore($request,$key)
    {
        return ApiKeyLanguage::create([
            'api_key_id' => $key->id,
            'title' => $request['title'],
            'lang' => array_key_exists('lang',$request) ? $request['lang'] : 'en'
        ]);
    }

    public function langUpdate($request)
    {
        return ApiKeyLanguage::where('id',$request['translate_id'])->update([
            'title' => $request['title'],
            'lang' => $request['lang'],
        ]);
    }
}
