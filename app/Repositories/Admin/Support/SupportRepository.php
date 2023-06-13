<?php

namespace App\Repositories\Admin\Support;

use App\Models\Support;
use App\Models\TicketReplay;
use App\Repositories\Interfaces\Admin\Support\SupportInterface;
use App\Traits\ImageTrait;
use App\Traits\SlugTrait;
use Illuminate\Support\Facades\DB;
use Sentinel;


class SupportRepository implements SupportInterface
{
    use SlugTrait;
    use ImageTrait;

    public function all()
    {
        return Support::with('user','supportDepartment')->latest();
    }
    public function paginate($request, $limit,$status)
    {
            return $this->all()
                ->when( $status != null, function ($query) use ($status){
                    $query->where('status', $status);
                })
                ->when($request->q != null, function ($query) use ($request){
                    $query->whereHas('user', function ($q) use ($request) {
                        $q->where('phone', 'like', '%' . $request->q . '%');
                        $q->orwhere('first_name', 'like', '%' . $request->q . '%');
                        $q->orwhere('last_name', 'like', '%' . $request->q . '%');
                    });

                    })->paginate($limit);
    }

    public function sellerSupport($request, $limit,$status){
        return $this->all()
            ->when( $status != null, function ($query) use ($status){
                $query->where('status', $status);
            })
            ->when($request->q != null, function ($query) use ($request){
                $query->whereHas('user', function ($q) use ($request) {
                    $q->where('phone', 'like', '%' . $request->q . '%');
                    $q->orwhere('first_name', 'like', '%' . $request->q . '%');
                    $q->orwhere('last_name', 'like', '%' . $request->q . '%');
                    $q->orwhere('subject', 'like', '%' . $request->q . '%');
                });

            })
            ->where('user_id',Sentinel::getUser()->id)->paginate($limit);
    }

    public function get($id)
    {
        return TicketReplay::find($id);
    }

    public function store($request)
    {

        DB::beginTransaction();
        try {
            $support = new Support();
            $support->subject           = $request->subject;
            $support->user_id           = $request->user_id;
            $support->ticket_id         = rand(1000,50000);
            $support->support_department_id     = $request->support_department_id;
            $support->priority          = $request->priority;
            $support->status            = $request->status;
            $support->ticket_body       = $request->ticket_body;
            if(!blank($request->file)){

            $array_file = explode(',', $request->file);
            $all_files= [];
            foreach ($array_file as $key => $array){
                $files = $this->getAllType($array);
                if ($files):
                    array_push($all_files, $files);
                else:
                    unset($array_file[$key]);
                endif;
            }
            $support->file     = implode(',', $array_file);
            }
            $support->save();
            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }


    public function ticketReplayStore($request)
    {

        DB::beginTransaction();
        try {

            if($request->status){
                $status = Support::where('id',$request->support_id)->first();
                $status->status = $request->status;
                $status->save();
            }
            $replay = new TicketReplay();
            $replay->ticket_id           = $request->ticket_id;
            $replay->replay              = $request->replay;
            $replay->type                = $request->type;
            $replay->file_id             = $request->file;
            $replay->support_id          = $request->support_id;

            if(!blank($request->file)){
            $array_file = explode(',', $request->file);
            $all_files= [];
            foreach ($array_file as $array){
                $files = $this->getAllType($array);
                array_push($all_files, $files);
            }
            $replay->file     = $all_files;
            }

            $replay->save();


            DB::commit();
            return true;
      }catch (\Exception $e) {
            DB::rollback();
            return false;
        }

    }


    public function update($request)
    {
        // TODO: Implement update() method.
    }

    public function ticketReplayUpdate($request)
    {

        DB::beginTransaction();
        try {

            $replay = $this->get($request->id);
            $replay->ticket_id           = $request->ticket_id;
            $replay->support_id          = $request->support_id;
            $replay->replay              = $request->replay;
            $replay->type                = $request->type;
            $replay->file_id             = $request->file;


            if ($request->file != ''):
                $selected_images = explode(',',$request->file);
                $images = array();
                foreach ($selected_images as $image):
                    $files = $this->getAllType($image);
                    array_push($images, $files);
                endforeach;
                $replay->file                = $images;
                $replay->file_id             = $request->file;
            else:
                $replay->file                = [];
                $replay->file_id             = null;
            endif;
            $replay->save();

            if(!blank($request->status)){
                $user              = Support::where('ticket_id',$request->ticket_id)->first();
                $user->status      = $request->status;
                $user->save();
            }
            DB::commit();
            return true;
        }catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function getSupport($request)
    {
        return Support::with('user')->where('id',$request->id)->first();

    }

    public function getTicketReply(){
        return TicketReplay::orderBy('id','asc')->get();;
    }
}
