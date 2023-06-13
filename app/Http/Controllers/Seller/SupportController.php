<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Support\SupportRequest;
use App\Models\Support;
use App\Models\TicketReplay;
use App\Repositories\Interfaces\Admin\Support\SupportDepartmentInterface;
use App\Repositories\Interfaces\Admin\Support\SupportInterface;
use App\Repositories\Interfaces\Site\ContactUsInterface;
use App\Repositories\Interfaces\UserInterface;
use Brian2694\Toastr\Facades\Toastr;
use Sentinel;
use Illuminate\Http\Request;

class SupportController extends Controller
{
    private $support;
    private $supportDepartment;
    private $user;
    public function __construct(SupportInterface $support, SupportDepartmentInterface $supportDepartment, UserInterface $user)
    {
        if(settingHelper('seller_system') != 1):
            abort(403);
        endif;

        $this->support              = $support;
        $this->user                 = $user;
        $this->supportDepartment    = $supportDepartment;
    }
    public function index(Request $request, $status = null){

        $id = Sentinel::getUser()->id;
        $supports  = $this->support->sellerSupport($request,get_pagination('pagination'),$status);
        return view('seller.support.index',compact('supports','status','id'));
    }
    public function create(){
        $departments=$this->supportDepartment->all()->where('status',1)->get();
        return view('seller.support.form',compact('departments'));
    }
    public function store(SupportRequest $request){

        if($this->support->store($request)){
            Toastr::success(__('Created Successfully'));
            return redirect()->route('seller.support')->with('success',__('Data added Successfully'));
        }else{
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }

    public function ticketReplay(Request $request, $id){
        $support = $this->support->getSupport($request);
        if( $support->user_id == Sentinel::getUser()->id){
            $seller_user=Sentinel::getUser();
            $replays=$this->support->getTicketReply()->where('support_id',$support->id);
            return view('seller.support.ticket-replay',compact('support','replays','seller_user'));
        }else{
            abort(404);
        }
    }
    public function ticketReplayStore(Request $request){

        if($this->support->ticketReplayStore($request)){
            Toastr::success(__('Created Successfully'));
            return redirect()->back()->with('success',__('Data added Successfully'));
        }else{
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }

    public function sellerContactUs(ContactUsInterface $contact)
    {
        $paginate = 16;
        $contacts = $contact->paginate($paginate);
        return view('seller.support.contact-us',compact('contacts'));
    }

    public function sellerContactReply(Request $request,ContactUsInterface $contact)
    {
        if($contact->reply($request->all())){
            return redirect()->back( )->with('success',__('Reply Sent Successfully'));
        }else{
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }
}
