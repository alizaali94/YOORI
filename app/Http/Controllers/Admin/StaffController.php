<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\PasswordChangeRequest;
use App\Http\Requests\User\ProfieRequest;
use App\Http\Requests\User\UserStoreRequest;
use App\Http\Requests\User\UserUpdateRequest;
use App\Repositories\Interfaces\Admin\Order\PickupHubInterface;
use App\Repositories\Interfaces\Admin\StaffInterface;
use Illuminate\Http\Request;
use App\Repositories\Interfaces\PermissionInterface;
use App\Repositories\Interfaces\Role\RoleInterface;
use Brian2694\Toastr\Facades\Toastr;
use Sentinel;

class StaffController extends Controller
{
    protected $staffs;
    protected $roles;
    protected $permissions;

    public function __construct(StaffInterface $staffs, RoleInterface $roles, PermissionInterface $permissions)
    {
        $this->staffs          = $staffs;
        $this->roles           = $roles;
        $this->permissions     = $permissions;
    }

    public function index(Request $request){
        $users = $this->staffs->paginate($request, get_pagination('pagination'));
        return view('admin.staffs.index', compact('users'));
    }

    public function create(PickupHubInterface $pickup_hubs){
        $roles          = $this->roles->all()->where('id', '!=', 1)->get();
        $permissions    = $this->permissions->all();
        $hubs           = $pickup_hubs->all()->get();
        return view('admin.staffs.form', compact('roles', 'permissions','hubs'));
    }

    public function store(UserStoreRequest $request)
    {
       if($this->staffs->store($request)):
            return redirect()->route('staffs');
       else:
            return back()->withInput();
       endif;
    }

    public function edit(Request $request, $id,PickupHubInterface $pickup_hubs)
    {
        if ($user = $this->staffs->get($id)):
            if ($user->user_type == 'staff'):
                $roles          = $this->roles->all()->where('id', '!=', 1)->get();
                $permissions    = $this->permissions->all();
                $hubs           = $pickup_hubs->all()->get();
                $r              = $request->r != ''? $request->r : $request->server('HTTP_REFERER');
                return view('admin.staffs.form', compact('user','roles','permissions','r','hubs'));
            else:
                Toastr::error(__('Not found'));
                return back();
            endif;
        else:
            Toastr::error(__('Not found'));
            return back();
        endif;
    }

    public function update(UserUpdateRequest $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->staffs->update($request)):
            Toastr::success(__('Updated Successfully'), __('Success'));
            return redirect($request->r);
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function changeRole(Request $request)
    {
        if (!blank($request->role_id)):
            $role_permissions = $this->roles->get($request->role_id)->permissions;
        else:
            $role_permissions = array();
        endif;
        $permissions      = $this->permissions->all();
        return view('admin.staffs.role-permissions', compact('permissions', 'role_permissions'))->render();

    }

    public function profile()
    {
        return view('admin.common.profile');
    }
    public function profileUpdate(ProfieRequest $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->staffs->update($request)):
            Toastr::success(__('Updated Successfully'), __('Success'));
            if(Sentinel::getUser()->user_type == 'seller' ):
                return redirect()->route('seller.profile');
            else:
                return redirect()->route('admin.profile');
            endif;
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }
    public function loginActivity(){
        $logs = $this->staffs->logActivity(get_pagination('pagination'));
        return view('admin.common.login-activity',compact('logs'));
    }
    public function passwordChange(){
        return view('admin.common.password-change');
    }
    public function passwordUpdate(PasswordChangeRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        $user = \Sentinel::getUser();

        $current_password = $user->password;
        if (!\Hash::check($request->old_password, $current_password)) {
            Toastr::error(__("Current Password don't match"));
            return back()->withInput();
        }
        if ($this->staffs->updatePassword($request)):
            Toastr::success(__('Updated Successfully'), __('Success'));
            if(Sentinel::getUser()->user_type == 'seller' ):
                return redirect()->route('seller.profile');
            else:
                return redirect()->route('admin.profile');
            endif;
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function logoutOtherDevices()
    {
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
        if ($this->staffs->logoutOtherDevices()):
            $response['message'] = __('Logout Successfully!');
            $response['status']  = 'success';
            $response['title']   = __('Success');
            return response()->json($response);
        else:
            $response['message'] = __('Something went wrong, please try again');
            $response['status']  = 'error';
            $response['title']   = __('Ops');
            return response()->json($response);
        endif;
    }

    public function balanceCollectFromStaff(Request $request){
        if ($this->staffs->get($request->user_id)->balance >= $request->amount):
            if ($this->staffs->collectFormStaff($request)):
                Toastr::success(__('Amount collected successfully'));
                return redirect()->back();
            else:
                Toastr::error( __('Something went wrong, please try again'));
                return back();
            endif;
        else:
            Toastr::error( __('Not enough amount to collect'));
            return back();
        endif;
    }
}
