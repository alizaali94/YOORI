<?php

namespace App\Http\Controllers\Admin\Marketing;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Admin\Marketing\SubscriberInterface;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{
    protected $subscriber;

    public function __construct(SubscriberInterface $subscriber)
    {
        $this->subscriber = $subscriber;
    }
    public function index(Request $request){

        $subscriber = $this->subscriber->paginate($request ,get_pagination('pagination'));
        return view('admin.marketing.subscriber', compact('subscriber'));
    }
}
