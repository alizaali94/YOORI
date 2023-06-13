@extends('admin.partials.master')
@section('header_content')
    active
@endsection
@section('menu')
    active
@endsection
@section('title')
    {{ __('Menu') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="row">
                @include('admin.store-front.header-content-sidebar')
                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                    <div class="tab-content no-padding" id="myTab2Content">
                        <div class="card">
                            <div class="card-header">
                                {{__(' Navigation Menu')}}
                            </div>
                            <form action="{{ route('header.menu.update') }}" method="POst" id="url-short" data-url="{{ route('header.menu.update') }}">
                                @csrf
                                <div class="card-body p-0  mb-4">
                                    <div class="alert-body w-100 p-4">
                                        <div class="alert alert-light alert-has-icon p-0 mb-0">
                                            <div class="alert-icon pl-2"><i class="bx bx-bulb"></i></div>
                                            <small id="passwordHelpBlock" class="form-text">
                                                {{__('If you want to use others web link like (https://www.google.com/maps,https:/, www.facebook.com/profile) then insert link, otherwise insert just slug ("blogs,products,brands")')}}
                                            </small>
                                        </div>
                                    </div>
                                    <div class="form-inline">
                                        <div class="cf nestable-lists">
                                            <div class="dd" id="nestable3">
                                                <ol class="dd-list">
                                                    @if(@count(settingHelper('header_menu')) != 0 && settingHelper('header_menu') != [])
                                                        @foreach(@settingHelper('header_menu') as $key => $value)
                                                            <li class="dd-item dd3-item">
                                                                <input type="hidden" name="menu_lenght[]" id="menu_lenght" value="1">
                                                                <div class="dd-handle dd3-handle move"><i class="bx bx-menu move"></i></div>
                                                                <div class="dd3-content">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <input type="text" class="form-control mb-1 mr-sm-2 test" name="label[]" id="label" value="{{ @$value['label'] }}" required placeholder="{{__('Label')}}">
                                                                        </div>
                                                                        <div class="col-md-7">
                                                                            <input type="text" class="form-control mb-1 mr-sm-2 test" id="link" name="url[]" value="{{ @$value['url'] == 'javascript:void(0)' ? '#' : @$value['url'] }}" required placeholder="{{__('Link')}}">
                                                                        </div>
                                                                        <div class="col-md-2">
                                                                            <button type="button" onclick="$(this).closest('.dd-item').remove()" class="btn btn-outline-danger btn-circle mb-1 remove-menu-row"><i class="bx bx-trash"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            @if(count($value) > 2)
                                                            <ol class="dd-list">
                                                                @if(@is_array($value[0]))
                                                                    @foreach(array_splice($value, 2) as $j => $sub)
                                                                            <li class="dd-item dd3-item">

                                                                                <input type="hidden" name="menu_lenght[]" id="menu_lenght" value="2">
                                                                                <div class="dd-handle dd3-handle move"><i class="bx bx-menu move"></i></div>
                                                                                <div class="dd3-content">
                                                                                    <div class="row">
                                                                                        <div class="col-md-3">
                                                                                            <input type="text" class="form-control mb-1 mr-sm-2 test" name="label[]" id="label" value="{{ @$sub['label'] }}" required placeholder="{{__('Label')}}">
                                                                                        </div>
                                                                                        <div class="col-md-7">
                                                                                            <input type="text" class="form-control mb-1 mr-sm-2 test" id="link" name="url[]" value="{{ @$sub['url'] == 'javascript:void(0)' ? '#' : @$sub['url'] }}" required placeholder="{{__('Link')}}">
                                                                                        </div>
                                                                                        <div class="col-md-2">
                                                                                            <button type="button" onclick="$(this).closest('.dd-item').remove()" class="btn btn-outline-danger btn-circle mb-1 remove-menu-row"><i class="bx bx-trash"></i></button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                        </li>
                                                                    @endforeach
                                                                @endif
                                                            </li>
                                                            </ol>
                                                            @endif
                                                        @endforeach
                                                    @else
                                                        <li class="dd-item dd3-item">
                                                            <input type="hidden" name="menu_lenght[]" id="menu_lenght" value="1">
                                                            <div class="dd-handle dd3-handle move"><i class="bx bx-menu move"></i></div>
                                                            <div class="dd3-content">
                                                                <div class="row">
                                                                    <div class="col-md-3">
                                                                        <input type="text" class="form-control mb-1 mr-sm-2 test" name="label[]" id="label" placeholder="{{__('Label')}}">
                                                                    </div>
                                                                    <div class="col-md-7">
                                                                        <input type="text" class="form-control mb-1 mr-sm-2 test" id="link" name="url[]" placeholder="{{__('Link')}}">
                                                                    </div>
                                                                    <div class="col-md-2">
                                                                        <button type="button" onclick="$(this).closest('.dd-item').remove()" class="btn btn-outline-danger btn-circle mb-1 remove-menu-row"><i class="bx bx-trash"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    @endif
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <a href="javascript:void(0)" id="add-menu-item" class="btn btn-outline-primary ml-2">{{ __('Add More') }}</a>
                                        </div>
                                        <div class="col-md-6 float-right">
                                            <button type="submit" class="btn btn-outline-primary float-right menu-update-btn">{{ __('Update') }}</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@include('admin.store-front.new-menu')
@endsection
@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/nestable.css') }}">
@endsection
@push('page-script')
    <script src="{{ static_asset('admin/js/jquery.nestable.js') }}"></script>
    <script src="{{ static_asset('admin/js/custom-nested.js') }}"></script>
@endpush
