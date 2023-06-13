<?php

namespace App\Http\Controllers\Admin\Setup;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Brian2694\Toastr\Facades\Toastr;
use App\Http\Requests\Admin\Setup\CacheRequest;
use App\Repositories\Interfaces\Admin\SettingInterface;

class CacheController extends Controller
{
    private $cache;
    public function __construct(SettingInterface $cache){

        $this->cache   = $cache;
    }
    public function index(){
        return view('admin.system-setup.cache');
    }
    public function update(CacheRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->cache->update($request)):
            \Artisan::call('cache:clear');
            \Artisan::call('config:clear');
            if($request->is_cache_enabled == 'enable'):
                \Artisan::call('config:cache');
            endif;
            Toastr::success(__('Setting Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again.'));
            return redirect()->back();
        endif;
    }
    public function clear()
    {
        try{
            \Artisan::call('cache:clear');
            \Artisan::call('config:clear');
            \Artisan::call('config:cache');
            Toastr::success(__('Cache cleared Successfully'));
            return back();
        } catch (\Exception $e){
            Toastr::error(__('Something went wrong, please try again.'));
            return redirect()->back();
        }
    }
    public function optimize()
    {
        try{
            \Artisan::call('optimize:clear');
            Toastr::success(__('Cache cleared Successfully'));
            return back();
        } catch (\Exception $e){
            Toastr::error(__('Something went wrong, please try again.'));
            return redirect()->back();
        }
    }
}
