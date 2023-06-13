@extends('admin.partials.master')
@section('header_content')
    active
@endsection
@section('header')
    active
@endsection
@section('title')
    {{ __('Header Content') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="row">
                @include('admin.store-front.header-content-sidebar')
                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                    <div class="tab-content no-padding" id="myTab2Content">
                        <div class="tab-pane fade show active" id="header" role="tabpane1" aria-labelledby="header-tab">
                            <div class="card">
                                <div class="card-header">
                                    {{ __('Header') }}
                                </div>
                                <div class="card-body col-md-10 middle">
                                    <form method="post" action="{{route('update')}}" enctype="multipart/form-data">
                                        @csrf @method('put')
                                        <div class="form-group">
                                            <div class="row gutters-sm imagecheck-margin">
                                                <div class="col-6 col-sm-4">
                                                    <label class="imagecheck mb-4">
                                                        <input name="header_theme" type="checkbox" id="header_theme" value="header_theme1" class="imagecheck-input" @if(old('header_theme') ? old('header_theme') : settingHelper('header_theme') == 'header_theme1') checked @endif/>
                                                        <div class="imagecheck-figure theme">
                                                            <img src="{{ static_asset('images/default/header_1.png') }}" class="imagecheck-image imagecheck-height" />
                                                        </div>
                                                    </label>
                                                </div>
                                                <div class="col-6 col-sm-4">
                                                    <label class="imagecheck mb-4">
                                                        <input name="header_theme" type="checkbox" id="header_theme" value="header_theme2" class="imagecheck-input" @if(old('header_theme') ? old('header_theme') : settingHelper('header_theme') == 'header_theme2') checked @endif />
                                                        <div class="imagecheck-figure theme">
                                                            <img src="{{ static_asset('images/default/header_2.png') }}" class="imagecheck-image imagecheck-height" />
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="light_logo">{{ __('Logo Light') }} {{__('(138X52)')}}</label>
                                            <div class="form-group">
                                                <input type="file" id="light_logo" class="custom-file-input image_pick file-select" accept="image/*" data-image-for="light_logo" name="light_logo" id="customFile" value="{{ @$user->image_id }}" />
                                            </div>
                                            <div>
                                                @if(@settingHelper('light_logo') != [] && is_file_exists(@settingHelper('light_logo')['image_138x52']))
                                                    <img src="{{ static_asset(@settingHelper('light_logo')['image_138x52'])}}" alt="" id="img_light_logo" class="img-thumbnail site-icon" />
                                                @else
                                                    <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_light_logo" class="img-thumbnail site-icon" />
                                                @endif
                                            </div>
                                        </div>

                                        <div class="form-group seo-image-positoin">
                                            <label for="dark_logo">{{ __('Logo Dark') }} {{__('(138X52)')}}</label>
                                            <div class="form-group">
                                                <input type="file" id="dark_logo" class="custom-file-input image_pick file-select" accept="image/*" data-image-for="dark_logo" name="dark_logo" id="customFile" value="{{ @$user->image_id }}" />
                                            </div>
                                            <div>
                                                @if(@settingHelper('dark_logo') != [] && is_file_exists(@settingHelper('dark_logo')['image_138x52']))
                                                    <img src="{{ static_asset(@settingHelper('dark_logo')['image_138x52'])}}" alt="" id="img_dark_logo" class="img-thumbnail site-icon" />
                                                @else
                                                    <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_dark_logo" class="img-thumbnail site-icon" />
                                                @endif
                                            </div>
                                        </div>
                                        <table class="table topbar-setting-switcher">
                                            <tr>
                                                <td class="no-padding-w30 coookie-marign">{{ __('Show Contact Number') }}</td>
                                                <td>
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="" value="setting-status-change/{{ 'header_contact_number' }}" {{ settingHelper('header_contact_number') == 1 ? 'checked' : ''}} class="custom-switch-input
                                                    status-change">
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                                        <div class="text-right btn-margin">
                                            <button class="btn btn-outline-primary" id="save-btn">{{ __('Update') }}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
