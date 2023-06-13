@extends('admin.partials.master')
@section('header_content')
    active
@endsection
@section('banner')
    active
@endsection
@section('title')
    {{ __('Banner') }}
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
                                {{__('Banner Section')}}
                            </div>
                            <div class="card-body col-8 middle">
                                <form method="post" action="{{route('update')}}" enctype="multipart/form-data">
                                    @csrf @method('put')
                                    <div class="form-group">
                                        <label for="banner_logo">{{ __('Banner Image') }}</label>
                                        <div class="form-group">
                                            <input type="file" id="banner_logo" class="custom-file-input image_pick file-select" data-image-for="banner_image" name="banner_image" id="customFile" value="{{ @$user->image_id }}" />
                                        </div>
                                        <div>
                                            @if(@settingHelper('banner_image') != [] && file_exists(@settingHelper('banner_image')['image_72x72']))
                                                <img src="{{ static_asset(@settingHelper('banner_image')['image_72x72'])}}" alt="" id="img_banner_image" class="img-thumbnail site-icon" />
                                            @else
                                                <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_profile" class="img-thumbnail site-icon" />
                                            @endif
                                        </div>
                                    </div>
                                    <div class="form-group seo-image-positoin">
                                        <label for="banner_link">{{__('Banner Link')}}</label>
                                        <input type="url" class="form-control" name="banner_link" value="{{old('banner_link') ? old('banner_link') : settingHelper('banner_link')}}" id="banner_link" placeholder="{{__('Banner Link')}}" />
                                    </div>
                                    <div class="text-md-right">
                                        <button class="btn btn-outline-primary" id="save-btn">{{__('Update')}}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
