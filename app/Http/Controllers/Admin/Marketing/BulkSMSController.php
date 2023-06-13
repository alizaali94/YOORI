<?php

namespace App\Http\Controllers\Admin\Marketing;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Marketing\BulkSMSRequest;
use App\Models\User;
use App\Repositories\Interfaces\UserInterface;
use App\Traits\ApiReturnFormatTrait;
use Illuminate\Http\Request;


class BulkSMSController extends Controller
{
    use ApiReturnFormatTrait;
    protected $user;

    public function __construct(UserInterface $user)
    {
        $this->user = $user;
    }
    public function bulkSMS(){
//        $users = $this->user->all()->get();
//        return view('admin.marketing.bulk-SMS', compact('users'));
        return view('admin.marketing.bulk-SMS');
    }


    public function sendBulkSMS(BulkSMSRequest $request){
        return $this->responseWithError(__('Bulk sms is still under developed. Wait for next update'), [], null);
    }
}
