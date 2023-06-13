<?php

namespace App\Traits;

use App\Mail\SendSmtpMail;
use Illuminate\Support\Facades\Mail;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Support\Str;
use PDF;

trait SendMailTrait{
    protected function sendMail($to, $subject, $body,$view,$url=null,$item=null,$otp=null): bool
    {
        $engine = env('MAIL_MAILER');

        if ($engine == "smtp") {
            $from = env('MAIL_FROM_ADDRESS');
        }
        else {
            $from = env('SENDER_MAIL');
        }

        $attribute = [
            'from' => $from,
            'subject' => $subject,
            'content' => $body,
            'view' => $view,
            'url' => $url?:'',
            'otp' => $otp?:'',
        ];

        if (is_array($to)) {
            $emails = array_filter($to);
        }
        else {
            $emails = $to;
        }
        if ($item):

            if ($subject == 'seller_invoice'):
                $pdf_view = 'admin.orders.seller-invoice';
            else:
                $pdf_view = 'admin.orders.invoice';
            endif;

            $data['order']      = $item;
            $pdf = PDF::loadView($pdf_view, [
                'order'             => $item,
            ]);
            $attribute = [
                'from' => $from,
                'subject' => $subject,
                'content' => $body,
                'view' => $view,
                'url' => $url?:'',
                'pdf' => $pdf?:'',
            ];
            Mail::to($emails)->send(new SendSmtpMail($attribute));
        else :
            Mail::to($emails)->send(new SendSmtpMail($attribute));
        endif;
        Toastr::success(__('Email send successfully. Check your email'));
        return true;
    }

    function sendMailTo($email, $data)
    {
        try{
            if($email != null || $email != ""):
                Mail::send('email.auth.email-template', [
                    'data' => $data
                ], function ($message) use ($email, $data) {
                    $message    ->to($email);
                    $message    ->subject($data['subject']);
                });
                Toastr::success(__('Email send successfully. Check your email'));
                return true;
            endif;
        }
        catch (\Exception $e){
            dd($e);
            Toastr::error(__('Email Is Not Send. Please Check Email Configuration'));
            return false;
        }
    }
}
