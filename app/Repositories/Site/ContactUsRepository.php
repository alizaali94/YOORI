<?php

namespace App\Repositories\Site;

use App\Models\ContactUs;
use App\Models\SellerProfile;
use App\Repositories\Interfaces\Site\ContactUsInterface;
use App\Traits\SendMailTrait;
use Sentinel;

class ContactUsRepository implements ContactUsInterface {

    //for APi
    use SendMailTrait;
    public function paginate($paginate)
    {
        return ContactUs::latest()->when(authUser() && authUser()->user_type == 'seller',function($query)
        {
            $query->where('seller_id',authUser()->sellerProfile->id);
        })->paginate($paginate);
    }

    public function storeContact($request)
    {
        $contact = ContactUs::create([
            'seller_id' => $request->seller_id,
            'name'      => $request->name,
            'email'     => $request->email,
            'subject'   => $request->subject,
            'message'   => $request->message,
        ]);

        if ($request->seller_id && settingHelper('contact_message_to_seller_mail')):
            $data['message']     = [
                'message_from' => 'Message From: '.$request->name,
                'email' => 'Email: '.$request->email,
                'message' => 'Message: '.$request->message,
            ];
            $data['subject']     = $request->subject;
            $seller = SellerProfile::find($request->seller_id)->user;
//            sendMailTo($seller->email,$data);
            $this->sendmail($seller->email, 'Contact', $data, 'email.auth.email-template','');
        endif;

        return $contact;
    }

    public function reply($request)
    {
        $contact = ContactUs::find($request['id']);
        $data['subject'] = $request['subject'];
        $data['message'] = $request['reply'];
//        sendMailTo($request['email'], $data);
        $this->sendmail($request['email'], 'Contact', $data, 'email.auth.email-template','');
        $contact->update($request);
        return $contact;
    }
}
