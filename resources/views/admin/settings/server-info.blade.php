@extends('admin.partials.master')

@section('server-info')
    active
@endsection

@section('title')
    {{ __('Server Information') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body mt-3">
            <div class="row">
                <div class="col-md-8 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{__('Server Information')}}</h4>
                        </div>
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>{{ __('Name') }}</th>
                                    <th data-breakpoints="lg">{{ __('Current Version') }}</th>
                                    <th data-breakpoints="lg">{{ __('Required Version') }}</th>
                                    <th>{{ __('Status') }}</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Php version</td>
                                    <td>{{ phpversion() }}</td>
                                    <td>7.3 or later</td>
                                    <td>
                                        <i class="bx bx-{{ floatval(phpversion()) >= 7.3 && floatval(phpversion()) < 9.0 ? 'check text-success' : 'x text-danger' }}"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>MySQL</td>
                                    <td>
                                        @php
                                            $results = DB::select( DB::raw("select version()") );
                                            $mysql_version =  $results[0]->{'version()'};
                                        @endphp
                                        {{ $mysql_version }}
                                    </td>
                                    <td>5.7+</td>
                                    <td>
                                        <i class="bx bx-{{ $mysql_version >= 5.7 ? 'check text-success' : 'x text-danger' }}"></i>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4>{{__('Server Information')}}</h4>
                        </div>
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>{{ __('Config Name') }}</th>
                                    <th data-breakpoints="lg">{{ __('Current') }}</th>
                                    <th data-breakpoints="lg">{{ __('Recommended') }}</th>
                                    <th>{{ __('Status') }}</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>file_uploads</td>
                                    <td>
                                        @if(ini_get('file_uploads') == 1)
                                            On
                                        @else
                                            Off
                                        @endif
                                    </td>
                                    <td>On</td>
                                    <td>
                                        <i class="bx bx-{{ ini_get('file_uploads') == 1 ? 'check text-success' : 'x text-danger' }}"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>max_file_uploads</td>
                                    <td>
                                        {{ ini_get('max_file_uploads') }}
                                    </td>
                                    <td>20+</td>
                                    <td>
                                        <i class="bx bx-{{ ini_get('max_file_uploads') >= 20 ? 'check text-success' : 'x text-danger' }}"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>upload_max_filesize</td>
                                    <td>
                                        {{ ini_get('upload_max_filesize')}}
                                    </td>
                                    <td>128M+</td>
                                    <td>
                                        @php
                                            $upload_max_filesize = ini_get('upload_max_filesize');
                                            if (preg_match('/^(\d+)(.)$/', $upload_max_filesize, $matches)) {
                                                if ($matches[2] == 'G') {
                                                    $upload_max_filesize = $matches[1] * 1024 * 1024 * 1024; // nnnM -> nnn GB
                                                } else if ($matches[2] == 'M') {
                                                    $upload_max_filesize = $matches[1] * 1024 * 1024; // nnnM -> nnn MB
                                                } else if ($matches[2] == 'K') {
                                                    $upload_max_filesize = $matches[1] * 1024; // nnnK -> nnn KB
                                                }
                                            }
                                        @endphp
                                        <i class="bx bx-{{ $upload_max_filesize >= (128 * 1024 * 1024) ? 'check text-success' : 'x text-danger' }}"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>post_max_size</td>
                                    <td>
                                        {{ ini_get('post_max_size')}}
                                    </td>
                                    <td>128M+</td>
                                    <td>
                                        @php
                                            $post_max_size = ini_get('post_max_size');
                                            if (preg_match('/^(\d+)(.)$/', $post_max_size, $matches)) {
                                                if ($matches[2] == 'G') {
                                                    $post_max_size = $matches[1] * 1024 * 1024 * 1024; // nnnM -> nnn GB
                                                } else if ($matches[2] == 'M') {
                                                    $post_max_size = $matches[1] * 1024 * 1024; // nnnM -> nnn MB
                                                } else if ($matches[2] == 'K') {
                                                    $post_max_size = $matches[1] * 1024; // nnnK -> nnn KB
                                                }
                                            }
                                        @endphp
                                        <i class="bx bx-{{ $post_max_size >= (128 * 1024 * 1024) ? 'check text-success' : 'x text-danger' }}"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>allow_url_fopen</td>
                                    <td>
                                        @if(ini_get('allow_url_fopen') == 1)
                                            On
                                        @else
                                            Off
                                        @endif
                                    </td>
                                    <td>On</td>
                                    <td>
                                        <i class="bx bx-{{ ini_get('allow_url_fopen') == 1 ? 'check text-success' : 'x text-danger' }}"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>max_execution_time</td>
                                    <td>
                                        @if(ini_get('max_execution_time') == '-1')
                                            Unlimited
                                        @else
                                            {{ ini_get('max_execution_time') }}
                                        @endif
                                    </td>
                                    <td>600+</td>
                                    <td>
                                        <i class="bx bx-{{ ini_get('max_execution_time') == -1 || ini_get('max_execution_time') >= 600 ? 'check text-success' : 'x text-danger' }}"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>max_input_time</td>
                                    <td>
                                        @if(ini_get('max_input_time') == '-1')
                                            Unlimited
                                        @else
                                            {{ ini_get('max_input_time') }}
                                        @endif
                                    </td>
                                    <td>120+</td>
                                    <td>
                                        <i class="bx bx-{{ ini_get('max_input_time') == -1 || ini_get('max_input_time') >= 120 ? 'check text-success' : 'x text-danger' }}"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>max_input_vars</td>
                                    <td>
                                        {{ ini_get('max_input_vars') }}
                                    </td>
                                    <td>1000+</td>
                                    <td>
                                        <i class="bx bx-{{ ini_get('max_input_vars') >= 1000 ? 'check text-success' : 'x text-danger' }}"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>memory_limit</td>
                                    <td>
                                        @if(ini_get('memory_limit') == '-1')
                                            Unlimited
                                        @else
                                            {{ ini_get('memory_limit') }}
                                        @endif
                                    </td>
                                    <td>256M+</td>
                                    <td>
                                        @php
                                            $memory_limit = ini_get('memory_limit');
                                            if (preg_match('/^(\d+)(.)$/', $memory_limit, $matches)) {
                                                if ($matches[2] == 'G') {
                                                    $memory_limit = $matches[1] * 1024 * 1024 * 1024; // nnnM -> nnn GB
                                                } else if ($matches[2] == 'M') {
                                                    $memory_limit = $matches[1] * 1024 * 1024; // nnnM -> nnn MB
                                                } else if ($matches[2] == 'K') {
                                                    $memory_limit = $matches[1] * 1024; // nnnK -> nnn KB
                                                }
                                            }
                                        @endphp
                                        <i class="bx bx-{{ ini_get('memory_limit') == -1 || $memory_limit >= (256 * 1024 * 1024) ? 'check text-success' : 'x text-danger' }}"></i>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4>{{__('Filesystem Permissions')}}</h4>
                        </div>
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th width="25%">Extension/settings</th>
                                    <th width="27%">Current Settings</th>
                                    <th>Required Settings</th>
                                    <th class="text-center">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                @php
                                    $curl_success = false;
                                    $gd_success = false;
                                    $allow_url_fopen_success = false;
                                    $timezone_success = true;
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
                                @endphp

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
                                        <i class="bx bx-{{ $gd_success ? 'check text-success' : 'x text-danger' }}"></i>
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
                                        <i class="bx bx-{{ $curl_success ? 'check text-success' : 'x text-danger' }}"></i>
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
                                        <i class="bx bx-{{ $allow_url_fopen_success ? 'check text-success' : 'x text-danger' }}"></i>
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
                                        <i class="bx bx-{{ extension_loaded('zip') ? 'check text-success' : 'x text-danger' }}"></i>
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
                                        <i class="bx bx-{{ extension_loaded('zlib') ? 'check text-success' : 'x text-danger' }}"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>OpenSSL PHP Extension</td>
                                    <td>
                                        @if( OPENSSL_VERSION_NUMBER < 0x009080bf)
                                            @php $all_requirement_success = false; @endphp
                                            Off
                                        @else
                                            On
                                        @endif
                                    </td>
                                    <td>On</td>
                                    <td class="text-center">
                                        <i class="bx bx-{{ OPENSSL_VERSION_NUMBER > 0x009080bf ? 'check text-success' : 'x text-danger' }}"></i>
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
                                        <i class="bx bx-{{ PDO::getAvailableDrivers() ? 'check text-success' : 'x text-danger' }}"></i>
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
                                        <i class="bx bx-{{ extension_loaded('bcmath') ? 'check text-success' : 'x text-danger' }}"></i>
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
                                        <i class="bx bx-{{ extension_loaded('ctype') ? 'check text-success' : 'x text-danger' }}"></i>
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
                                        <i class="bx bx-{{ extension_loaded('fileinfo') ? 'check text-success' : 'x text-danger' }}"></i>
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
                                        <i class="bx bx-{{ extension_loaded('mbstring') ? 'check text-success' : 'x text-danger' }}"></i>
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
                                        <i class="bx bx-{{ extension_loaded('tokenizer') ? 'check text-success' : 'x text-danger' }}"></i>
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
                                        <i class="bx bx-{{ extension_loaded('xml') ? 'check text-success' : 'x text-danger' }}"></i>
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
                                        <i class="bx bx-{{ extension_loaded('json') ? 'check text-success' : 'x text-danger' }}"></i>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4>{{__('Filesystem Permissions')}}</h4>
                        </div>
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>{{ __('File or Folder') }}</th>
                                    <th>{{ __('Status') }}</th>
                                </tr>
                                </thead>
                                @php
                                    $required_paths = ['.env','app','bootstrap/cache','storage','resources','routes']
                                @endphp
                                <tbody>
                                @foreach ($required_paths as $path)
                                    <tr>
                                        <td>{{ $path }}</td>
                                        <td>
                                            <i class="bx bx-{{ is_writable(base_path($path)) ? 'check text-success' : 'x text-danger' }}"></i>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
