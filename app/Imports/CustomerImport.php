<?php

namespace App\Imports;

use App\Models\User;
use App\Traits\RandomStringTrait;
use Cartalyst\Sentinel\Laravel\Facades\Activation;
use http\Env\Request;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class CustomerImport implements ToCollection, WithHeadingRow, WithChunkReading, SkipsEmptyRows, SkipsOnError, WithValidation
{
    use SkipsErrors, Importable, RandomStringTrait;

    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            $user = User::create([
                'first_name' => $row['first_name'],
                'last_name'  => $row['last_name'],
                'email'      => $row['email'],
                'phone'      => $row['phone'] != '' ? str_replace(' ','',$row['phone']) : '',
                'gender'     => $row['gender'],
                'password'   => $row['password'] ? bcrypt($row['password']) : $this->generate_random_string(10),
                'permissions'=> [],
                'images'     => [],
            ]);


            $activation = Activation::create($user);
            Activation::complete($user, $activation->code);
        }
    }
    public function chunkSize(): int
    {
        return 2000;
    }

    public function rules():array
    {
        return  [
            '*.first_name' => 'required|max:50',
            '*.last_name'  => 'required|max:50',
            '*.phone'      => 'required_without:email|unique:users|min:4|max:20',
            '*.email'      => 'required_without:phone|unique:users|email|max:50',
            '*.password'   => 'required|min:6|max:32',
            '*.gender'     => 'in:male,female,others',
        ];
    }

}
