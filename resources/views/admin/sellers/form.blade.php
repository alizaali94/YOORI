@extends('admin.partials.master')

@php
    $route = isset($user) ? route('admin.seller.update') : route('admin.seller.store');
    $title = isset($user) ? __('Edit') : __('Add');
    $button_name = isset($user) ? __('Update') : __('Add');
@endphp

@section('title')
    {{ $title }} {{ __('Seller') }}
@endsection
@section('sellers')
    active
@endsection

@section('main-content')
<section class="section">
    <div class="section-body">
        <div class="d-flex justify-content-between">
            <div class="d-block">
                <h2 class="section-title">{{ $title }} {{ __('seller') }}</h2>
            </div>
            <div class="buttons add-button">
                <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" class="btn btn-icon icon-left btn-outline-primary"><i
                        class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
            </div>
        </div>
        <form action="{{ $route }}" enctype="multipart/form-data" method="POST">
            @csrf
            @isset($user)
                @method('PUT')
            @endisset
            <div class="row">
                <div class="col-sm-xs-12 col-md-6">
                    <div class="card">
                        <div class="card-header input-title" id="Add">
                            <h4>{{ __('Seller Info') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding phone-block">
                            <div class="form-row">
                                <div class="form-group col-sm-xs-12 col-md-6">
                                    <label for="first_name"> {{ __('First Name') }} *</label>
                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                    <input type="hidden" value="{{ @$user->id }}" name="id">
                                    <input type="text" name="first_name" id="first_name"
                                           value="{{ old('first_name') ? old('first_name') : @$user->first_name }}"
                                           class="form-control" required>
                                    @if ($errors->has('first_name'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('first_name') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group col-sm-xs-12 col-md-6">
                                    <label for="last_name">{{ __('Last Name') }} *</label>
                                    <input type="text" id="last_name" name="last_name"
                                           value="{{ old('last_name') ? old('last_name') : @$user->last_name }}"
                                           class="form-control" required>
                                    @if ($errors->has('last_name'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('last_name') }}</p>
                                        </div>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="phone">{{ __('Phone') }} *</label>
                                <input type="hidden" name="phone"   value="{{ old('phone') ? old('phone') : (isDemoServer() && isset($user->phone) ? Str::of($user->phone)->mask('*', 0, strlen($user->phone)-3) : @$user->phone) }}">
                                <input type="tel" class="form-control intl-phone-input change-number" name="telphn" id="txtPhone"   value="{{ old('phone') ? old('phone') : (isDemoServer() && isset($user->phone) ? Str::of($user->phone)->mask('*', 0, strlen($user->phone)-3) : @$user->phone) }}" required />

                                @if ($errors->has('phone'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('phone') }}</p>
                                    </div>
                                @endif
                            </div>

                            <div class="form-group">
                                <label for="email">{{ __('Email') }} *</label>
                                <input type="text" name="email" id="email" class="form-control"
                                       value="{{ old('email') ? old('email') : (isDemoServer() && isset($user->email) ? emailAddressMask($user->email) : @$user->email) }}" required>
                                @if ($errors->has('email'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('email') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="password">{{ __('Password') }} {{ !isset($user) ? '*' : ''  }}</label>
                                <input type="password" id="password" name="password" class="form-control"
                                {{ isset($user) ? '' : 'required' }}">
                                @if ($errors->has('password'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('password') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group mt-4 text-center">
                                @if (@$user->images != [] && is_file_exists(@$user->images['image_128x128']))
                                    <img src="{{ static_asset($user->images['image_128x128']) }}"
                                         alt="{{ @$user->first_name }}" id="img_profile"
                                         class="img-thumbnail user-profile ">
                                @else
                                    <img src="{{ static_asset('images/default/user.jpg') }}"
                                         alt="{{ @$user->first_name }}" id="img_profile"
                                         class="img-thumbnail user-profile ">
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="">{{ __('Profile Image') }}</label>
                                <div class="form-group">
                                    <input type="file" class="custom-file-input image_pick file-select"  data-image-for="profile" name="image" id="customFile"
                                           value="{{ @$user->image_id }}" accept="image/*" />
                                    @if ($errors->has('image'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('image') }}</p>
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-xs-12 col-md-6">
                    <div class="card">
                        <div class="card-header input-title" id="Add">
                            <h4>{{ __('Shop Details') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <div class="form-group">
                                <label for="shop_name">{{ __('Shop Name') }} *</label>
                                <input type="text" id="shop_name" name="shop_name"
                                       value="{{ old('shop_name') ? old('shop_name') : @$user->sellerProfile->shop_name }}"
                                       class="form-control" required>
                                @if ($errors->has('shop_name'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('shop_name') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="slug">{{ __('Slug') }}</label>
                                <input type="text" id="slug" name="slug"
                                       value="{{ old('slug') ? old('slug') : @$user->sellerProfile->slug }}"
                                       class="form-control">
                                @if ($errors->has('slug'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('slug') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="phone_no">{{ __('Phone') }} *</label>
                                <input type="text" id="phone_no" name="phone_no"
                                       value="{{ old('phone') ? old('phone') : (isDemoServer() && isset($user->sellerProfile->phone_no) ? Str::of($user->sellerProfile->phone_no)->mask('*', 0, strlen($user->sellerProfile->phone_no)-3) : @$user->sellerProfile->phone_no) }}"
                                       class="form-control" required>

                            @if ($errors->has('phone_no'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('phone_no') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="address">{{ __('Address') }} *</label>
                                <input type="text" id="address" name="address"
                                       value="{{ old('address') ? old('address') : @$user->sellerProfile->address }}"
                                       class="form-control" required>
                                @if ($errors->has('address'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('address') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="shop_logo">{{ __('Logo') }} ({{ __('72*72') }})</label>
                                <div class="form-group">
                                    <input type="file" id="shop_logo" class="custom-file-input image_pick file-select"  data-image-for="logo" name="logo" id="customFile"
                                           value="" accept="image/*"/>
                                </div>

                                <div>
                                    @if(@$user->sellerProfile->logo !=[] && is_file_exists(@$user->sellerProfile->logo['image_72x72']))
                                        <img src="{{ static_asset(@$user->sellerProfile->logo['image_72x72'])}}" alt="" id="img_logo"class="img-thumbnail site-icon">
                                    @else
                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_logo" class="img-thumbnail site-icon ">
                                    @endif
                                </div>
                            </div>
                            <div class="form-group seo-image-positoin">
                                <label for="shop_banner">{{ __('Banner') }} ({{ __('297*203') }})</label>
                                <div class="form-group">
                                    <input type="file" id="shop_banner" class="custom-file-input image_pick file-select"  data-image-for="banner" name="banner"
                                           value="{{ @$user->image_id}}" accept="image/*" />
                                </div>
                                <div>
                                    @if(@$user->sellerProfile->banner !=[] && is_file_exists(@$user->sellerProfile->banner['image_72x72']))
                                        <img src="{{ static_asset(@$user->sellerProfile->banner['image_72x72'])}}" id="img_banner" alt="" class="img-thumbnail site-icon">
                                    @else
                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_banner" class="img-thumbnail site-icon ">
                                    @endif
                                </div>
                            </div>

                            <div class="form-group seo-image-positoin">
                                <label for="thumbnail">{{ __('Shop Page Banner') }}({{__('1905*350')}})</label>
                                <div class="form-group">
                                    <div class="input-group gallery-modal" id="btnSubmit"
                                         data-for="image" data-selection="single"
                                         data-target="#galleryModal" data-dismiss="modal">
                                        <input type="hidden" name="shop_banner"
                                               value="{{ old('shop_banner') !='' ? old('shop_banner') :  @$user->sellerProfile->shop_banner_id}}"
                                               class="image-selected">
                                        <span class="form-control"><span
                                                class="counter">{{ old('shop_banner') != '' ? substr_count(old('shop_banner'), ',') + 1  : ( @$user->sellerProfile->shop_banner_id != '' ? substr_count( @$user->sellerProfile->shop_banner_id, ',') + 1 : 0) }}</span> {{ __('file chosen') }}</span>
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                {{ __('Choose File') }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="selected-media-box">
                                        <div class="mt-2 gallery gallery-md d-flex">
                                            @php
                                                $thumb = old('shop_banner') ? old('shop_banner') :  @$user->sellerProfile->shop_banner_id;
                                                $thumbnail = \App\Models\Media::find($thumb);
                                            @endphp
                                            @if($thumbnail)
                                                <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                     data-id="{{ $thumbnail->id }}">
                                                    @if(is_file_exists($thumbnail->image_variants['image_72x72'], $thumbnail->image_variants['storage']))
                                                        <img
                                                            src="{{ get_media($thumbnail->image_variants['image_72x72'], $thumbnail->image_variants['storage'])}}"
                                                            alt="img-thumbnail"
                                                            class="img-thumbnail logo-profile">
                                                    @else
                                                        <img
                                                            src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                            alt="img-thumbnail"
                                                            class="img-thumbnail logo-profile">
                                                    @endif
                                                    <div class="image-remove">
                                                        <a href="javascript:void(0)" class="remove"><i
                                                                class="bx bx-x"></i></a>
                                                    </div>
                                                </div>
                                            @else
                                                <div class="selected-media mr-2 mb-2 mt-3 ml-0">
                                                    <img
                                                        src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                        data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                        alt="brand-logo"
                                                        class="img-thumbnail logo-profile">
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="meta_title">{{ __('Meta Title') }}</label>
                                <input type="text" id="meta_title" name="meta_title"
                                       value="{{ old('meta_title') ? old('meta_title') : @$user->sellerProfile->meta_title }}"
                                       class="form-control">
                                @if ($errors->has('meta_title'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('meta_title') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="meta_description" >{{__('Meta Description')}}</label>
                                <textarea class="form-control" name="meta_description"  id="meta_description" value="{{old('meta_description')}}" placeholder="{{__('Description')}}">{{ @$user->sellerProfile->meta_description }}</textarea>
                                @if ($errors->has('meta_description'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('meta_description') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group text-right">
                                <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                    {{ $button_name }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>
@include('admin.common.selector-modal')
@include('admin.common.int-telephone')

@endsection
@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/css/intlTelInput.css">
@endsection
@push('page-script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush
