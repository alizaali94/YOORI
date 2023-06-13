<?php

namespace App\Http\Requests\Admin\Setup;

use Illuminate\Foundation\Http\FormRequest;

class CacheRequest extends FormRequest
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
    public function rules()
    {
        return [
            'redis_host' => 'required_if:default_cache,redis',
            'redis_password' => 'required_if:default_cache,redis',
            'redis_port' => 'required_if:default_cache,redis',

            'memcached_host' => 'required_if:default_cache,memcached',
            'memcached_port' => 'required_if:default_cache,memcached',
        ];
    }
}
