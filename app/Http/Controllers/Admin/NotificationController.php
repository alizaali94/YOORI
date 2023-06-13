<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Admin\NotificationInterface;
use Brian2694\Toastr\Facades\Toastr;
use Sentinel;

class NotificationController extends Controller
{
    protected $notification;

    public function __construct(NotificationInterface $notification){
        $this->notification         = $notification;

    }
    public function index(){
        $notifications = $this->notification->all()->where('user_id',Sentinel::getUser()->id)->latest()->paginate(get_pagination('pagination'));
        return view('admin.common.all-notification',compact('notifications'));
    }
    public function statusChange($id)
    {
        if ($this->notification->statusChange($id)):
            Toastr::success(__('Successfully Status Change'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return redirect()->back();
        endif;
    }

    public function markAllSeen(){
        if ($this->notification->markAllSeen()):
            Toastr::success(__('Successfully Status Change'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return redirect()->back();
        endif;

    }
    public function userNotification(){
        try {
            $data = [
                'notifications' => $this->notification->all()->where('user_id',Sentinel::getUser()->id)->latest()->paginate(get_pagination('pagination')),
                'success' => __('Notification Found Successfully'),
            ];

            return response()->json($data);
        } catch (\Exception $e) {

            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }

    }
    public function userNotificationSeenAll(){
        try {
            $data = [
                'seen_notification' => $this->notification->markAllSeen(),
                'success' => __('All Notification Successfully Seen'),
            ];

            return response()->json($data);
        } catch (\Exception $e) {

            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function seen($id): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'notification' => $this->notification->seen($id),
                'success' => __('Notification Seen Successfully')
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

    public function remove($id): \Illuminate\Http\JsonResponse
    {
        try {
            $data = [
                'notification' => $this->notification->remove($id),
                'success' => __('Notification Deleted Successfully')
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Oops.....Something Went Wrong')
            ]);
        }
    }

}
