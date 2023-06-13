<?php

$str = Str::random(21);
session()->put('hash_token',$str);

$php_version_success = false;
$mysql_success = false;
$curl_success = false;
$gd_success = false;
$allow_url_fopen_success = false;
$timezone_success = true;

$php_version_required_min = "7.3";
$php_version_required_max = "9.0";
$current_php_version = phpversion();

//check required php version
if (floatval($current_php_version) >= $php_version_required_min && floatval($current_php_version) < $php_version_required_max) :
    $php_version_success = true;
endif;

//check mySql
if (function_exists("mysqli_connect")) :
    $mysql_success = true;
endif;

//check curl
if (function_exists("curl_version")) :
    $curl_success = true;
endif;

//check gd
if (extension_loaded('gd') && function_exists('gd_info')) :
    $gd_success = true;
endif;

//check allow_url_fopen
if (ini_get('allow_url_fopen')) :
    $allow_url_fopen_success = true;
endif;

//check allow_url_fopen
$timezone_settings = ini_get('date.timezone');
if ($timezone_settings) :
    $timezone_success = true;
endif;

//check if all requirement is success
if ($php_version_success && $mysql_success && $curl_success && $gd_success && $allow_url_fopen_success) :
    $all_requirement_success = true;
else :
    $all_requirement_success = false;
endif;

if (strpos(php_sapi_name(), 'cli') !== false || defined('LARAVEL_START_FROM_PUBLIC')) :

    $writeable_directories = array(
        "../app",
        "../routes",
        "../resources",
        "../public",
        "../storage",
        "../.env",
        "../bootstrap/cache",
    );
else :
    $writeable_directories = array(
        "./app",
        "./routes",
        "./resources",
        "./public",
        "./storage",
        ".env",
        "./bootstrap/cache",
    );
endif;

foreach ($writeable_directories as $value) :
    if (!is_writeable($value)) :
        $all_requirement_success = false;
    endif;
endforeach;
?>
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="SpaGreen">

    <title>Yoori e-Commerce CMS PHP & VueJS Script Installation</title>

    <link rel="apple-touch-icon" sizes="57x57"
          href="{{ static_asset('images/ico/favicon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60"
          href="{{ static_asset('images/ico/favicon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72"
          href="{{ static_asset('images/ico/favicon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76"
          href="{{  static_asset('images/ico/favicon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114"
          href="{{ static_asset('images/ico/favicon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120"
          href="{{ static_asset('images/ico/favicon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144"
          href="{{ static_asset('images/ico/favicon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152"
          href="{{ static_asset('images/ico/favicon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180"
          href="{{ static_asset('images/ico/favicon-180x180.png') }}">
    <link rel="icon" type="image/png" sizes="192x192"
          href="{{ static_asset('images/favicon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32"
          href="{{ static_asset('images/ico/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96"
          href="{{ static_asset('images/ico/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16"
          href="{{ static_asset('images/ico/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ static_asset('images/ico/manifest.json') }}">

    <link rel='stylesheet' type='text/css'
          href="{{static_asset('install/bootstrap/css/bootstrap.min.css') }}"/>
    <link rel='stylesheet' type='text/css'
          href="{{static_asset('install/js/font-awesome/css/font-awesome.min.css')}}"/>

    <link rel='stylesheet' type='text/css' href="{{static_asset('install/css/install.css')}}"/>
</head>
<body>
<div class="install-box">

    <div class="panel panel-install">
        <div class="panel-heading text-center">
            @if(config('app.mobile_mode') == 'on')
                <h2>Installation | YOORI - Flutter eCommerce App</h2>
            @else
                <h2>Installation | YOORI - PWA eCommerce CMS</h2>
            @endif

        </div>
        <div class="panel-body no-padding">
            <div class="tab-container clearfix">
                <div id="pre-installation" class="tab-title col-sm-4 active"><i class="fa fa-circle-o"></i><strong>
                        Pre-Installation</strong></div>
                <div id="configuration" class="tab-title col-sm-4"><i class="fa fa-circle-o"></i><strong>
                        Configuration</strong></div>
                <div id="finished" class="tab-title col-sm-4"><i class="fa fa-circle-o"></i><strong> Finished</strong>
                </div>
            </div>
            <div id="alert-container">

                    <div id="error_m" class="alert alert-danger hide">

                    </div>

                    <div id="success_m" class="alert alert-success hide">

                    </div>

            </div>


            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="pre-installation-tab">
                    <div class="section">
                        <p>1. Please configure your PHP settings to match following requirements:</p>
                        <hr/>
                        <div>
                            <table>
                                <thead>
                                <tr>
                                    <th width="25%">PHP Settings</th>
                                    <th width="27%">Current Version</th>
                                    <th>Required Version</th>
                                    <th class="text-center">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>PHP Version</td>
                                    <td><?php echo phpversion(); ?></td>
                                    <td><?php echo $php_version_required_min; ?>
                                        or Later</td>
                                    <td class="text-center">
                                        <?php if ($php_version_success) { ?>
                                        <i class="status fa fa-check-circle-o"></i>
                                        <?php } else { ?>
                                        <i class="status fa fa-times-circle-o"></i>
                                        <?php } ?>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="section">
                        <p>2. Please make sure the extensions/settings listed below are installed/enabled:</p>
                        <hr/>
                        <div>
                            <table>
                                <thead>
                                <tr>
                                    <th width="25%">Extension/settings</th>
                                    <th width="27%">Current Settings</th>
                                    <th>Required Settings</th>
                                    <th class="text-center">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>MySQLi</td>
                                    <td> <?php if ($mysql_success) { ?>
                                        On
                                        <?php } else { ?>
                                        Off
                                        <?php } ?>
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        <?php if ($mysql_success) { ?>
                                        <i class="status fa fa-check-circle-o"></i>
                                        <?php } else { ?>
                                        <i class="status fa fa-times-circle-o"></i>
                                        <?php } ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td>GD</td>
                                    <td> <?php if ($gd_success) { ?>
                                        On
                                        <?php } else { ?>
                                        Off
                                        <?php } ?>
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        <?php if ($gd_success) { ?>
                                        <i class="status fa fa-check-circle-o"></i>
                                        <?php } else { ?>
                                        <i class="status fa fa-times-circle-o"></i>
                                        <?php } ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td>cURL</td>
                                    <td> <?php if ($curl_success) { ?>
                                        On
                                        <?php } else { ?>
                                        Off
                                        <?php } ?>
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        <?php if ($curl_success) { ?>
                                        <i class="status fa fa-check-circle-o"></i>
                                        <?php } else { ?>
                                        <i class="status fa fa-times-circle-o"></i>
                                        <?php } ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td>allow_url_fopen</td>
                                    <td> <?php if ($allow_url_fopen_success) { ?>
                                        On
                                        <?php } else { ?>
                                        Off
                                        <?php } ?>
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        <?php if ($allow_url_fopen_success) { ?>
                                        <i class="status fa fa-check-circle-o"></i>
                                        <?php } else { ?>
                                        <i class="status fa fa-times-circle-o"></i>
                                        <?php } ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td>zip</td>
                                    <td> <?php if (extension_loaded('zip')) { ?>
                                        On
                                        <?php } else { ?>
                                        Off
                                        <?php } ?>
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        <?php if (extension_loaded('zip')) { ?>
                                        <i class="status fa fa-check-circle-o"></i>
                                        <?php } else { ?>
                                        <i class="status fa fa-times-circle-o"></i>
                                        <?php } ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td>zlip</td>
                                    <td> <?php if (extension_loaded('zlib')) { ?>
                                        On
                                        <?php } else { ?>
                                        Off
                                        <?php } ?>
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        <?php if (extension_loaded('zlib')) { ?>
                                        <i class="status fa fa-check-circle-o"></i>
                                        <?php } else { ?>
                                        <i class="status fa fa-times-circle-o"></i>
                                        <?php } ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td>OpenSSL PHP Extension</td>
                                    <td>@if( OPENSSL_VERSION_NUMBER < 0x009080bf)
                                            @php $all_requirement_success = false; @endphp
                                            Off
                                        @else
                                            On
                                        @endif
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        @if( OPENSSL_VERSION_NUMBER < 0x009080bf)
                                            <i class="status fa fa-times-circle-o"></i>
                                        @else
                                            <i class="status fa fa-check-circle-o"></i>
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <td>PDO PHP Extension</td>
                                    <td>@if(PDO::getAvailableDrivers())
                                            On
                                        @else
                                            @php $all_requirement_success = false; @endphp
                                            Off
                                        @endif
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        @if(PDO::getAvailableDrivers())
                                            <i class="status fa fa-check-circle-o"></i>
                                        @else
                                            <i class="status fa fa-times-circle-o"></i>
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <td>BCMath PHP Extension</td>
                                    <td>@if(extension_loaded('bcmath'))
                                            On
                                        @else
                                            @php $all_requirement_success = false; @endphp
                                            Off
                                        @endif
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        @if(extension_loaded('bcmath'))
                                            <i class="status fa fa-check-circle-o"></i>
                                        @else
                                            <i class="status fa fa-times-circle-o"></i>
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ctype PHP Extension</td>
                                    <td>@if(extension_loaded('ctype'))
                                            On
                                        @else
                                            @php $all_requirement_success = false; @endphp
                                            Off
                                        @endif
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        @if(extension_loaded('ctype'))
                                            <i class="status fa fa-check-circle-o"></i>
                                        @else
                                            <i class="status fa fa-times-circle-o"></i>
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fileinfo PHP Extension</td>
                                    <td>@if(extension_loaded('fileinfo'))
                                            On
                                        @else
                                            @php $all_requirement_success = false; @endphp
                                            Off
                                        @endif
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        @if(extension_loaded('fileinfo'))
                                            <i class="status fa fa-check-circle-o"></i>
                                        @else
                                            <i class="status fa fa-times-circle-o"></i>
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mbstring PHP Extension</td>
                                    <td>@if(extension_loaded('mbstring'))
                                            On
                                        @else
                                            @php $all_requirement_success = false; @endphp
                                            Off
                                        @endif
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        @if(extension_loaded('mbstring'))
                                            <i class="status fa fa-check-circle-o"></i>
                                        @else
                                            <i class="status fa fa-times-circle-o"></i>
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tokenizer PHP Extension</td>
                                    <td>@if(extension_loaded('tokenizer'))
                                            On
                                        @else
                                            @php $all_requirement_success = false; @endphp
                                            Off
                                        @endif
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        @if(extension_loaded('tokenizer'))
                                            <i class="status fa fa-check-circle-o"></i>
                                        @else
                                            <i class="status fa fa-times-circle-o"></i>
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <td>XML PHP Extension</td>
                                    <td>@if(extension_loaded('xml'))
                                            On
                                        @else
                                            @php $all_requirement_success = false; @endphp
                                            Off
                                        @endif
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        @if(extension_loaded('xml'))
                                            <i class="status fa fa-check-circle-o"></i>
                                        @else
                                            <i class="status fa fa-times-circle-o"></i>
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <td>JSON PHP Extension</td>
                                    <td>@if(extension_loaded('json'))
                                            On
                                        @else
                                            @php $all_requirement_success = false; @endphp
                                            Off
                                        @endif
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        @if(extension_loaded('json'))
                                            <i class="status fa fa-check-circle-o"></i>
                                        @else
                                            <i class="status fa fa-times-circle-o"></i>
                                        @endif
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="section">
                        <p>3. Please make sure you have set the <strong>writable</strong> permission on the following
                            folders/files:</p>
                        <hr/>
                        <div>
                            <table>
                                <tbody>
                                <?php
                                foreach ($writeable_directories as $value) {
                                ?>
                                <tr>
                                    <td id="first-td"><?php echo $value; ?></td>
                                    <td class="text-center">
                                        <?php if (is_writeable($value)) { ?>
                                        <i class="status fa fa-check-circle-o"></i>
                                        <?php
                                        } else {
                                        $all_requirement_success = false;
                                        ?>
                                        <i class="status fa fa-times-circle-o"></i>
                                        <?php } ?>
                                    </td>
                                </tr>
                                <?php
                                }
                                ?>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="panel-footer">
                        <button <?php
                                if (!$all_requirement_success) {
                                    echo "disabled=disabled";
                                }
                                ?> class="btn btn-info form-next"><i class='fa fa-chevron-right'></i> Next
                        </button>
                    </div>

                </div>
                <div role="tabpanel" class="tab-pane" id="configuration-tab">
                    <form name="config-form" id="config-form" action="{{route('install.process')}}" method="post">
                        @csrf

                        <div class="section clearfix">
                            <p>1. Please enter your database connection details.</p>
                            <hr/>
                            <div>
                                <input type="hidden" name="random_token" value="{{ bcrypt($str) }}">
                                <div class="form-group clearfix">
                                    <label for="host" class=" col-md-3">Database Host</label>
                                    <div class="col-md-9">
                                        <input type="text" value="{{old('host') ?? 'localhost'}}" id="host" name="host" autofocus
                                               class="form-control" placeholder="Database Host (usually localhost)"/>
                                        <strong class="text-danger" id="host_error"></strong>
                                    </div>
                                </div>
                                <div class="form-group clearfix">
                                    <label for="db_user" class=" col-md-3">Database User</label>
                                    <div class=" col-md-9">
                                        <input type="text" value="{{old('db_user') ?? ''}}" name="db_user"
                                               class="form-control" autocomplete="off"
                                               placeholder="Database user name"/>
                                        <strong class="text-danger" id="db_user_error"></strong>
                                    </div>
                                </div>
                                <div class="form-group clearfix">
                                    <label for="db_password" class=" col-md-3">Password</label>
                                    <div class=" col-md-9">
                                        <input type="password" value="{{old('db_password') ?? ''}}" name="db_password"
                                               class="form-control" autocomplete="off"
                                               placeholder="Database user password"/>
                                        <strong class="text-danger" id="db_password_error"></strong>
                                    </div>
                                </div>
                                <div class="form-group clearfix">
                                    <label for="db_name" class=" col-md-3">Database Name</label>
                                    <div class=" col-md-9">
                                        <input type="text" value="{{old('db_name') ?? ''}}" name="db_name"
                                               class="form-control" placeholder="Database Name"/>
                                        <strong class="text-danger" id="db_name_error"></strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="section clearfix">
                            <p>2. Please enter your account details for administration.</p>
                            <hr/>
                            <div>
                                <div class="form-group clearfix">
                                    <label for="first_name" class=" col-md-3">First Name</label>
                                    <div class="col-md-9">
                                        <input type="text" value="{{old('first_name') ?? ''}}" id="first_name"
                                               name="first_name" class="form-control" placeholder="Your first name"/>
                                        <strong class="text-danger" id="first_name_error"></strong>
                                    </div>
                                </div>
                                <div class="form-group clearfix">
                                    <label for="last_name" class=" col-md-3">Last Name</label>
                                    <div class=" col-md-9">
                                        <input type="text" value="{{old('last_name') ?? ''}}" id="last_name"
                                               name="last_name" class="form-control" placeholder="Your last name"/>
                                        <strong class="text-danger" id="last_name_error"></strong>
                                    </div>
                                </div>
                                <div class="form-group clearfix">
                                    <label for="email" class=" col-md-3">Email</label>
                                    <div class=" col-md-9">
                                        <input type="text" value="{{old('email') ?? ''}}" name="email"
                                               class="form-control" placeholder="Your email"/>
                                        <strong class="text-danger" id="email_error"></strong>
                                    </div>
                                </div>
                                <div class="form-group clearfix">
                                    <label for="password" class=" col-md-3">Password</label>
                                    <div class=" col-md-9">
                                        <input type="password" value="{{old('password') ?? ''}}" name="password"
                                               class="form-control" placeholder="Login password"/>
                                        <strong class="text-danger" id="password_error"></strong>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="section clearfix">
                            <p>3. Please enter your item purchase code.</p>
                            <hr/>
                            <div>
                                <div class="form-group clearfix">
                                    <label for="purchase_code" class="col-md-3">Item purchase code</label>
                                    <div class="col-md-9">
                                        <input type="text" value="{{old('purchase_code') ?? ''}}" id="purchase_code"
                                               name="purchase_code" class="form-control"
                                               placeholder="Enter RANDOM value"/>
                                        <strong class="text-danger" id="purchase_code_error"></strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="panel-footer">
                            <button type="submit" class="btn btn-info form-next form_submitter">
                                <span class="loader hide"> Installing...</span>
                                <span class="button-text"><i class='fa fa-chevron-right'></i> Finish</span>
                            </button>
                        </div>

                    </form>
                </div>

                <div role="tabpanel" class="tab-pane" id="finished-tab">
                    <div class="section">
                        <div class="clearfix">
                            <i class="status fa fa-check-circle-o pull-left"> </i><span class="pull-left">Congratulation! You have successfully installed <strong>  YOORI - PWA eCommerce CMS PHP Script</strong></span>
                        </div>

                        <a class="go-to-login-page" href="{{url('login')}}">
                            <div class="text-center">
                                <div class="font"><i class="fa fa-desktop"></i></div>
                                <div>Login to Admin Dashboard</div>
                            </div>
                        </a>
                    </div>


                </div>
            </div>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="{{ static_asset('admin/js/jquery-3.6.0.min.js') }}"></script>
<script type="text/javascript" src="{{static_asset('install/js/install.js')}}"></script>
</html>




