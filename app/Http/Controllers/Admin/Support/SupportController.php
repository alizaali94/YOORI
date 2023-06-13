<?php

namespace App\Http\Controllers\Admin\Support;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Support\SupportRequest;
use App\Models\Support;
use App\Models\SupportDepartment;
use App\Models\TicketReplay;
use App\Models\User;
use App\Repositories\Interfaces\Admin\Support\SupportDepartmentInterface;
use App\Repositories\Interfaces\Admin\Support\SupportInterface;
use App\Repositories\Interfaces\Site\ContactUsInterface;
use App\Repositories\Interfaces\UserInterface;
use Brian2694\Toastr\Facades\Toastr;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;
use Illuminate\Http\Request;

class SupportController extends Controller
{
    private $support;
    private $supportDepartment;
    private $user;
    public function __construct(SupportInterface $support, SupportDepartmentInterface $supportDepartment, UserInterface $user)
    {
        $this->support = $support;
        $this->user = $user;
        $this->supportDepartment = $supportDepartment;
    }
    public function index(Request $request, $status = null){

        $supports  = $this->support->paginate($request,get_pagination('pagination'),$status);
        return view('admin.support.index',compact('supports','status'));
    }
    public function create(){
        $departments=$this->supportDepartment->all()->where('status',1)->get();
        return view('admin.support.form',compact('departments'));
    }
    public function store(SupportRequest $request){
        if($this->support->store($request)){
            Toastr::success(__('Created Successfully'));
            return redirect()->route('support')->with('success',__('Data added Successfully'));
        }else{
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }
    public function ticketReplay(Request $request, $id){
        if($support = $this->support->getSupport($request)){
            $admin_user=Sentinel::getUser()->select('user_type','images')->first();
            $replays=$this->support->getTicketReply()->where('support_id',$support->id);
            return view('admin.support.ticket-replay',compact('support','replays','admin_user'));
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
    public function ticketReplayEdit($id){
        $ticket_replay_update = TicketReplay::find($id);
        return view('admin.support.update-ticket-replay',compact('ticket_replay_update'));
    }

    public function ticketReplayUpdate(Request $request){
        if($this->support->ticketReplayUpdate($request)){
            Toastr::success(__('Created Successfully'));
            return redirect()->route( 'ticket.replay',[$request->support_id])->with('success',__('Data added Successfully'));
        }else{
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }

    public function contactUs(ContactUsInterface $contact)
    {
        $paginate = 16;
        $contacts = $contact->paginate($paginate);
        return view('admin.support.contact-us',compact('contacts'));
    }

    public function contactUsReplay(Request $request,ContactUsInterface $contact)
    {
        if($contact->reply($request->all())){
            return redirect()->back( )->with('success',__('Reply Sent Successfully'));
        }else{
            Toastr::error(__('Something went wrong, please try again'));
            return back();
        }
    }
}
