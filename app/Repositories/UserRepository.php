<?php

namespace App\Repositories;

use App\Models\Currency;
use App\Models\Language;
use App\Models\User;
use App\Models\UserSocial;
use App\Repositories\Interfaces\UserInterface;
use App\Traits\ImageTrait;
use App\Traits\SendMailTrait;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Cartalyst\Sentinel\Laravel\Facades\Activation;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Sentinel;

class UserRepository implements UserInterface
{
    use ImageTrait, SendMailTrait;

    public function all()
    {
        return User::with('addresses')->where('user_type','customer')->latest();
    }
    public function allTypeUser()
    {
        return User::latest();
    }

    public function paginate($request, $limit)
    {
        return User::where('user_type','customer')
            ->when($request->q != null, function ($query) use ($request){
                $query->where(function ($q) use ($request){
                    $q->where('email', 'LIKE', '%'.$request->q.'%');
                    $q->orWhere('phone', 'LIKE', '%'.$request->q.'%');
                    $q->orWhere(DB::raw("CONCAT(`first_name`, ' ', `last_name`)"), 'LIKE', "%".$request->q."%");
                });
            })->latest()->paginate($limit);

    }

    public function get($id)
    {
        return User::find($id);
    }

    public function store($request)
    {

        DB::beginTransaction();
        try {

            if (!blank($request->file('image'))) {
                $requestImage   = $request->file('image');
                $image_response = $this->saveImage($requestImage, '_staff_');
            }

            $user = new User();
            $user->first_name   = $request->first_name;
            $user->last_name    = $request->last_name;
            $user->email        = $request->email;
            $user->phone        = $request->phone;
            $user->gender       = $request->gender;
            $user->password     = bcrypt($request->password);
            $user->permissions  = [];
            $user->images       = $image_response['images'] ?? [];
            $user->save();

            $activation = Activation::create($user);
            try {
//                sendMail($user, $activation->code, 'verify_email', '');
                $this->sendmail($request->email, 'Registration', $user, 'email.auth.activate-account-email',url('/') . '/activation/' . $request->email . '/' . $activation->code);

            } catch (\Exception $e) {
                Toastr::error(__('Please check your email configuration'));
                DB::rollback();
                return false;
            }

            Toastr::success(__('Created Successfully'));
            DB::commit();
            return true;

        } catch (\Exception $e) {

            Toastr::error(__('Something went wrong, please try again'));
            DB::rollback();
            return false;
        }
    }

    public function update($request)
    {
        DB::beginTransaction();
        try {

            $user = $this->get($request->id);

            if (!blank($request->file('image'))) {
                $requestImage   = $request->file('image');

                $this->deleteImage($user->images);
                $image_response = $this->saveImage($requestImage, '_staff_');
                $user->images   = $image_response['images'];
            }


            $user->first_name           = $request->first_name;
            $user->last_name            = $request->last_name;
            $user->email                = $request->email;
            $user->phone                = $request->phone;
            $user->gender               = $request->gender;
            $user->date_of_birth        = $request->date_of_birth;
            $user->socials              = $request->socials;
            if ($request->password != ""):
                $user->password         = bcrypt($request->password);
            endif;
            $user->save();

            DB::commit();
            return $user;

        } catch (\Exception $e) {
            dd($e);
            DB::rollback();
            return false;
        }
    }

    public function ban($id){

        DB::beginTransaction();
        try {
            $user = $this->get($id);
            if($user->is_user_banned == 0):

            endif;

            $user->is_user_banned = $user->is_user_banned == 0 ? 1 : 0;
            $user->save();

            DB::commit();
            return true;

        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
    public function emailVerify($user_id)
    {
        DB::beginTransaction();
        try {
            $user = User::find($user_id);
            if(Activation::completed($user) == true):
                Activation::remove($user);
                Toastr::success(__('User Email Inactivated'));
            else:
                 $activation = Activation::exists($user);

                if($activation):
                    Activation::remove($user);
                    $activationCreate = Activation::create($user);
                    Activation::complete($user, $activationCreate->code);
                else:
                    $activationCreate = Activation::create($user);
                    Activation::complete($user, $activationCreate->code);
                endif;

                Toastr::success(__('User Email Activated'));

            endif;
            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            Toastr::error(__('Something went wrong, please try again'));
            return false;
        }
    }

    public function currencyUpdate($data)
    {
        try {
            $user = User::where('id',$data['user_id'])->first();
            $user->currency_id = $data['status'];
            $user->save();
            DB::commit();
            return true;
        }catch (\Exception $e) {
            DB::rollback();
            Toastr::error(__('Something went wrong, please try again'));
            return false;
        }

    }
    public function langUpdate($data)
    {
        try {
            $user = User::where('id',$data['user_id'])->first();
            $lang = Language::where('id',$data['lang_id'])->first();
            $user->lang_code = $lang->locale;
            $user->save();
            DB::commit();
        }catch (\Exception $e) {
            DB::rollback();
            Toastr::error(__('Something went wrong, please try again'));
            return false;
        }

    }
}
