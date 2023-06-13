<?php

namespace App\Http\Controllers;

use App\Http\Requests\InstallRequest;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use URL;
use Session;
use DB;

class InstallController extends Controller
{
    public function index(){
        return view('install.index');
    }
    public function getInstall(InstallRequest $request){
        if (!Hash::check(session()->get('hash_token'),$request->random_token))
        {
            return response()->json([
                'error'   => __('Something went wrong. Please try again.'),
            ]);
        }
//        \Session::getHandler()->gc(0);
        // do not change it
        envWrite('APP_URL', URL::to('/'));
        envWrite('MIX_ASSET_URL', URL::to('/').'/public');

        ini_set('max_execution_time', 900); //900 seconds
        $host           = $request->host;
        $db_user        = $request->db_user;
        $db_name        = $request->db_name;
        $db_password    = $request->db_password;

        $first_name     = $request->first_name;
        $last_name      = $request->last_name;
        $email          = $request->email;
        $login_password = $request->password;

        $purchase_code  = $request->purchase_code;

        //check for valid database connection
        try{
            $mysqli = @new \mysqli($host, $db_user, $db_password, $db_name);
        }catch (\Exception $e){
            return response()->json([
                'error'   => __('Please input valid database information.'),
            ]);
        }
        if (mysqli_connect_errno()) {
            return response()->json([
                'error'   => __('Please input valid database information.'),
            ]);
        }
        $mysqli->close();

        // validate code

        $data['DB_HOST']        = $host;
        $data['DB_DATABASE']    = $db_name;
        $data['DB_USERNAME']    = $db_user;
        $data['DB_PASSWORD']    = $db_password;
        $verification = validate_purchase($purchase_code, $data);
        if ($verification === 'success') :
            session()->put('email', $email);
            session()->put('first_name', $first_name);
            session()->put('last_name', $last_name);
            session()->put('login_password', $login_password);
            session()->put('purchase_code', $purchase_code);

            return response()->json([
                'route'     => route('install.finalize'),
                'success'   => true,
            ]);
        elseif ($verification === 'connection_error'):
            return response()->json([
                'error'   => __('There is a problem to connect with SpaGreen server.Make sure you have active internet connection!'),
            ]);

        elseif ($verification === false):
            return response()->json([
                'error'   => __('Something went wrong. Please try again.'),
            ]);

        else:
            return response()->json([
                'error'   => $verification,
            ]);
        endif;
    }

    public function final(){
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        foreach(DB::select('SHOW TABLES') as $table) {
            $table_array = get_object_vars($table);
            \Schema::drop($table_array[key($table_array)]);
        }
        \DB::unprepared(file_get_contents(base_path('public/sql/sql.sql')));

        if(file_exists(base_path('public/sql/sql.sql'))):
            unlink(base_path('public/sql/sql.sql'));
        endif;
        \Artisan::call('key:generate');
        \Artisan::call('optimize:clear');

        $user                = User::find(1);
        $user->email         = Session::get('email');
        $user->first_name    = Session::get('first_name');
        $user->last_name     = Session::get('last_name');
        $user->password      = bcrypt(Session::get('login_password'));
        $user->save();

        $code = Setting::where('title','purchase_code')->first();

        if ($code)
        {
            $code->update([
                'value' => session()->get('purchase_code'),
            ]);
        }
        else{
            Setting::create([
                'title' => 'purchase_code',
                'value' => session()->get('purchase_code'),
            ]);
        }

        envWrite('APP_INSTALLED', 'yes');

        return response()->json([
            'success' => "Installation was Successful",
            'route' => route('home'),
        ]);
    }
}
