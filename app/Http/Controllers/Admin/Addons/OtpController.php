<?php

namespace App\Http\Controllers\Admin\Addons;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Setup\OtpSettingRequest;
use App\Repositories\Admin\Addon\OtpSystemRepository;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\SettingInterface;
use App\Traits\SmsSenderTrait;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;

class OtpController extends Controller
{

}
