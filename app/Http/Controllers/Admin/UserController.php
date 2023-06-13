<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserStoreRequest;
use App\Http\Requests\User\UserUpdateRequest;
use App\Imports\CustomerImport;
use App\Repositories\Interfaces\Admin\Addon\OfflineMethodInterface;
use App\Repositories\Interfaces\Admin\CurrencyInterface;
use Cartalyst\Sentinel\Laravel\Facades\Activation;
use Illuminate\Http\Request;
use App\Repositories\Interfaces\UserInterface;
use Brian2694\Toastr\Facades\Toastr;

class UserController extends Controller
{

    protected $users;

    public function __construct(UserInterface $users)
    {
        $this->users           = $users;
    }

    public function index(Request $request){
        $users = $this->users->paginate($request, get_pagination('pagination'));
        return view('admin.customers.index', compact('users'));
    }

    public function create(){
        return view('admin.customers.form');
    }

    public function store(UserStoreRequest $request)
    {

        if($this->users->store($request)):
            return redirect()->route('customers');
       else:
            return back();
       endif;
    }

    public function edit(Request $request, $id)
    {
        if ($user = $this->users->get($id)):
            if ($user->user_type == 'customer'):
                $r  = $request->r != ''? $request->r : $request->server('HTTP_REFERER');
                return view('admin.customers.form', compact('user', 'r'));
            else:
                Toastr::error(__('Not found'));
                return back();
            endif;
        else:
            Toastr::error(__('Not found'));
            return back();
        endif;
    }

    public function update(Request $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->users->update($request)):
            Toastr::success(__('Updated Successfully'));
            return redirect($request->r);
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function ban($id)
    {
        if ($this->users->ban($id)):
            Toastr::success(__('Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function getUserByAjax(Request $request)
    {
        $term           = trim($request->q);
        if (empty($term)) {
            return \Response::json([]);
        }

        $users = $this->users->all()
            ->where('first_name', 'like', '%'.$term.'%')
            ->orWhere('last_name', 'like', '%'.$term.'%')
            ->orWhere('phone', 'like', '%'.$term.'%')
            ->limit(20)
            ->get();

        $formatted_user   = [];

        foreach ($users as $user) {
            $formatted_user[] = ['id' => $user->id, 'text' => $user->first_name.' '.$user->last_name.' - '.$user->phone];
        }

        return \Response::json($formatted_user);
    }
    public function getAllTypeByAjax(Request $request)
    {
        $term           = trim($request->q);
        if (empty($term)) {
            return \Response::json([]);
        }

        $users = $this->users->allTypeUser()
            ->where('first_name', 'like', '%'.$term.'%')
            ->orWhere('last_name', 'like', '%'.$term.'%')
            ->orWhere('phone', 'like', '%'.$term.'%')
            ->limit(20)
            ->get();

        $formatted_user   = [];

        foreach ($users as $user) {
            $formatted_user[] = ['id' => $user->id, 'text' => $user->first_name.' '.$user->last_name.' - '.$user->phone];
        }

        return \Response::json($formatted_user);
    }
    public function emailVerify($user_id){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->users->emailVerify($user_id)):
            return redirect()->back();
        else:
            return back()->withInput();
        endif;
    }

    public function customerImport(Request $request)
    {
        return view('admin.customers.import-customer');
    }

    public function importCustomer(Request $request)
    {
        $extension = request()->file('file')->getClientOriginalExtension();

        if ($extension != 'xlsx' && $extension != 'xls' && $extension != 'csv'):
            return back()->with('danger', __('file_type_not_supported'));
        endif;

        $file = request()->file('file')->store('import');
        $import = new CustomerImport();
        $import->import($file);

        unlink(storage_path('app/'.$file));
        Toastr::success(__('successfully_imported'));
        return back();
    }
}
