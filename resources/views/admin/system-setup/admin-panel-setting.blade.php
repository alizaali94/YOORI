@extends('admin.partials.master')
@section('setup')
    active
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}">
@endsection
@section('white_level')
    active
@endsection
@section('title')
    {{ __('Admin Panel Setting') }}
@endsection
@section('main-content')

    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('System Setup') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.system-setup.sidebar')
                <div class="col-md-9 middle">
                    <div class="card email-card">
                        <div class="card-header">
                            <h4>{{ __('Admin Panel Setting') }}</h4>
                        </div>
                        <div class="card-body col-md-10 middle">
                            <form class="" id="lang">
                                <div class="form-group">
                                    <label for="name">{{ __('Language') }}</label>
                                    <select class="form-control selectric lang" name="lang">
                                        <option value="">{{ __('Select Language') }}</option>
                                        @foreach($languages as $language)N
                                            <option
                                                value="{{ $language->locale }}" {{($lang != '' ? ($language->locale == $lang ? 'selected' : '') : ($language->locale == 'en' ? 'selected' : '')) }}>{{ $language->name }}</option>
                                        @endforeach
                                    </select>
                                    @if ($errors->has('lang'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('lang') }}</p>
                                        </div>
                                    @endif
                                </div>
                            </form>
                            <form action="{{ route('admin.panel.setting.update')}}" method="post" enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                <div class="form-group">
                                    <label for="admin_panel_title">{{ __('Title *') }}</label>
                                    <input type="text" name="admin_panel_title" class="form-control"
                                           value="{{ old('admin_panel_title') ? old('admin_panel_title') : settingHelper('admin_panel_title', $lang) }}"
                                           id="admin_panel_title" placeholder="{{ __('Title') }}">
                                    <input type="hidden" value="{{ $lang }}" name="site_lang">

                                </div>
                                <div class="form-group">
                                    <label for="system_short_name">{{ __('System Short Name *') }}</label>
                                    <input type="text" name="system_short_name" class="form-control"
                                           value="{{ old('system_short_name') ? old('system_short_name') : settingHelper('system_short_name', $lang) }}"
                                           id="system_short_name" placeholder="{{ __('Title') }}">

                                </div>
                                <div class="form-group">
                                    <label for="admin_light_logo">{{ __('Light Logo') .' ('.__('100X38').')' }}</label>
                                    <div class="form-group">
                                        <input type="file" id="admin_light_logo" class="custom-file-input image_pick file-select" accept="image/*" data-image-for="admin_light_logo" name="admin_light_logo" id="customFile" value="{{ @$user->image_id }}" />
                                    </div>
                                    <div>
                                        @if(@settingHelper('admin_light_logo') !=[] && is_file_exists(@settingHelper('admin_light_logo')['image_72x72'],@settingHelper('admin_light_logo')['storage']))
                                            <img src="{{ get_media(@settingHelper('admin_light_logo')['image_72x72'],@settingHelper('admin_light_logo')['storage'])}}" alt="" id="img_admin_light_logo" class="img-thumbnail site-icon" />
                                        @else
                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_admin_light_logo" class="img-thumbnail site-icon" />
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group seo-image-positoin">
                                    <label for="admin_dark_logo">{{ __('Dark Logo') .' ('.__('100X38').')' }}</label>
                                    <div class="form-group">
                                        <input type="file" id="admin_dark_logo" class="custom-file-input image_pick file-select" accept="image/*" data-image-for="admin_dark_logo" name="admin_dark_logo" id="customFile" />
                                    </div>
                                    <div>
                                        @if(@settingHelper('admin_dark_logo') !=[] && is_file_exists(@settingHelper('admin_dark_logo')['image_72x72'],@settingHelper('admin_dark_logo')['storage']))
                                            <img src="{{ get_media(@settingHelper('admin_dark_logo')['image_72x72'],@settingHelper('admin_dark_logo')['storage'])}}" alt="" id="img_admin_dark_logo" class="img-thumbnail site-icon" />
                                        @else
                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_admin_dark_logo" class="img-thumbnail site-icon" />
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group seo-image-positoin">
                                    <label for="invoice_logo">{{ __('Invoice Logo') .' ('.__('100X38').')' }}</label>
                                    <div class="form-group">
                                        <input type="file" id="invoice_logo" class="custom-file-input image_pick file-select" accept="image/*" data-image-for="invoice_logo" name="invoice_logo" id="customFile" />
                                    </div>
                                    <div>
                                        @if(@settingHelper('invoice_logo') !=[] && is_file_exists(@settingHelper('invoice_logo')['image_72x72'],@settingHelper('invoice_logo')['storage']))
                                            <img src="{{ get_media(@settingHelper('invoice_logo')['image_72x72'],@settingHelper('invoice_logo')['storage'])}}" alt="" id="img_invoice_logo" class="img-thumbnail site-icon" />
                                        @else
                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_invoice_logo" class="img-thumbnail site-icon" />
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group seo-image-positoin">
                                    <label for="">{{ __('Copyright Text') }}</label>
                                    <div class="form-group row mb-12">
                                        <div class="col-sm-12 col-md-12">
                                            <textarea class="form-control"
                                                      name="admin_panel_copyright_text">{{ old('admin_panel_copyright_text') ? old('admin_panel_copyright_text') : settingHelper('admin_panel_copyright_text', $lang) }}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-md-right">
                                    <button class="btn btn-outline-primary" id="save-btn">{{ __('Update') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
