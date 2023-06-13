<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendSmtpMail extends Mailable
{
    use Queueable, SerializesModels;
    protected $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        if(array_key_exists('pdf',$this->data) && $this->data['pdf']){
            return $this->subject($this->data['subject'])->view($this->data['view'],$this->data)->attachData($this->data['pdf']->output(),$this->data['content']->code.".pdf");
        }else{
            return $this->subject($this->data['subject'])->view($this->data['view'],$this->data);
        }
    }
}
