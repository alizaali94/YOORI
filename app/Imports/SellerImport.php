<?php

namespace App\Imports;

use App\Models\SellerProfile;
use App\Models\User;
use App\Traits\RandomStringTrait;
use App\Traits\SlugTrait;
use Carbon\Carbon;
use Cartalyst\Sentinel\Laravel\Facades\Activation;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class SellerImport implements ToCollection, WithHeadingRow, WithChunkReading, SkipsEmptyRows, SkipsOnError, WithValidation
{
    use Importable,SkipsErrors,RandomStringTrait,SlugTrait;

    public function collection(Collection $rows)
    {
        $shop_page_contents = [["new_arrival"=>"1"],["best_selling_products"=>"3"],["best_rated_products"=>"2"]];
        foreach ($rows as $row) {

            $user = User::create([
                    'first_name' => $row['first_name'],
                    'last_name'  => $row['last_name'],
                    'email'      => $row['email'],
                    'phone'      => $row['phone'] != '' ? str_replace(' ','',$row['phone']) : '',
                    'gender'     => $row['gender'],
                    'password'   => $row['password'] ? bcrypt($row['password']) : $this->generate_random_string(10),
                    'user_type'  => 'seller',
                    'permissions'=> [],
                    'images'     => [],
                ]);

            $seller = SellerProfile::create([
            'shop_name'          => $row['shop_name'],
            'user_id'            => $user->id,
            'slug'               => $this->getSlug($row['shop_name'], $row['slug']),
            'phone_no'           => $row['phone_no'],
            'address'            => $row['address'],
            'license_no'         => '',
            'logo'               => [],
            'banner'             => [],
            'shop_banner_id'     => null,
            'shop_banner'        => [],
            'tax_paper'          => [],
            'shop_page_contents' => $shop_page_contents,
            'meta_title'         => $row['meta_title'],
            'meta_description'   => $row['meta_description'],
            'verified_at'        => Carbon::now(),
            ]);

            $activation = Activation::create($user);
            Activation::complete($user, $activation->code);
        }
    }

    public function chunkSize(): int
    {
        return 2000;
    }

    public function rules(): array
    {
        return  [
            '*.first_name'          => 'required|max:50',
            '*.last_name'           => 'required|max:50',
            '*.phone'               => 'nullable|min:4|max:20',
            '*.email'               => 'required|unique:users|email|max:50',
            '*.password'            => 'required|min:6|max:32',
            '*.gender'              => 'in:male,female,others',

            '*.shop_name'           => 'required',
            '*.phone_no'            => 'required',
        ];
    }
}
