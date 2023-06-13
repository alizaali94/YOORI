<?php

namespace App\Http\Controllers\Admin\Setup;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Setup\EmailSettingRequest;
use App\Repositories\Interfaces\Admin\SettingInterface;
use App\Traits\SendMailTrait;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;

class EmailSettingsController extends Controller
{

    private $settings;
    use SendMailTrait;

    public function __construct(SettingInterface $settings)
    {
        $this->settings     = $settings;
    }

    public function index(){
        return view('admin.system-setup.email-settings');
    }
    public function update(EmailSettingRequest $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->settings->update($request)):
            if($request->mail_driver == 'smtp'):
                $mail_host                 = settingHelper('smtp_mail_host');
                $mail_port                 = settingHelper('smtp_mail_port');
                $mail_address              = settingHelper('smtp_mail_address');
                $name                      = settingHelper('smtp_name');
                $mail_username             = settingHelper('smtp_mail_username');
                $mail_password             = settingHelper('smtp_mail_password');
                $mail_encryption_type      = settingHelper('smtp_mail_encryption_type');
            elseif($request->mail_driver == 'sendgrid'):
                $mail_host                 = settingHelper('sendgrid_mail_host');
                $mail_port                 = settingHelper('sendgrid_mail_port');
                $mail_address              = settingHelper('sendgrid_mail_address');
                $name                      = settingHelper('sendgrid_name');
                $mail_username             = settingHelper('sendgrid_mail_username');
                $mail_password             = settingHelper('sendgrid_mail_password');
                $mail_encryption_type      = settingHelper('sendgrid_mail_encryption_type');
            elseif($request->mail_driver == 'sendmail'):
                $sendmail_path                  = settingHelper('sendmail_path');
            elseif($request->mail_driver == 'mailgun'):
                $mail_host                 = settingHelper('mailgun_mail_host');
                $mail_port                 = settingHelper('mailgun_mail_port');
                $mail_address              = settingHelper('mailgun_mail_address');
                $name                      = settingHelper('mailgun_name');
                $mail_username             = settingHelper('mailgun_mail_username');
                $mail_password             = settingHelper('mailgun_mail_password');
                $mail_encryption_type      = settingHelper('mailgun_mail_encryption_type');

                $mailgun_domain            = settingHelper('mailgun_domain');
                $mailgun_secret            = settingHelper('mailgun_secret');
            endif;

            if($request->mail_driver == 'sendmail'){
                envWrite('MAIL_MAILER','sendmail');
                envWrite('MAIL_HOST',"");
                envWrite('MAIL_PORT',"");
                envWrite('MAIL_USERNAME',"");
                envWrite('MAIL_PASSWORD',"");
                envWrite('MAIL_ENCRYPTION',"");
                envWrite('MAIL_FROM_ADDRESS',"");
                envWrite('MAIL_FROM_NAME',"");
            }else{
                envWrite('MAIL_MAILER','smtp');
                envWrite('MAIL_HOST',$mail_host);
                envWrite('MAIL_PORT',$mail_port);
                envWrite('MAIL_USERNAME',$mail_username);
                envWrite('MAIL_PASSWORD',$mail_password);
                envWrite('MAIL_ENCRYPTION',$mail_encryption_type);
                envWrite('MAIL_FROM_ADDRESS',$mail_address);
                envWrite('MAIL_FROM_NAME',$name);
            }

//            if($request->mail_driver == 'mailgun'):
//                envWrite('MAILGUN_DOMAIN',$mailgun_domain);
//                envWrite('MAILGUN_SECRET',$mailgun_secret);
//                envWrite('MAILGUN_ENDPOINT','api.eu.mailgun.net');
//            endif;



            Toastr::success(__('Setting Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again.'));
            return redirect()->back();
        endif;
    }
    public function sendTestMail(Request $request)
    {
        try {
            $data['message']     = __('Email is working Perfectly!! This is test email from ').settingHelper('system_name',\App::getLocale());
            $data['subject']     = __('Test Email');
//            $this->sendMailTo($request->send_to, $data);
            $this->sendmail($request->send_to, 'Test Mail', $data, 'email.auth.email-template','');

//            $this->sendMailTo($request->send_to, 'Test Email', $data, 'email.auth.email-template','');
            return redirect()->back();
        } catch (\Exception $e) {
            dd($e);
            Toastr::error(__('Please check your configuration'));
            return redirect()->back();
        }
    }
}
