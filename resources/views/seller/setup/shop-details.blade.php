@extends('admin.partials.master')

@section('title')
    {{ __('Edit Shop') }}
@endsection
@section('shop_active')
    active
@endsection
@section('shop_details')
    active
@endsection

@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Edit Shop') }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}"
                       class="btn btn-icon icon-left btn-outline-primary"><i
                            class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
            <form action="{{ route('seller.shop.details.update') }}" enctype="multipart/form-data" method="POST">
                @csrf
                @method('PUT')
                <div class="row">
                    <div class="col-sm-xs-12 col-md-8">
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
                                           value="{{ old('phone_no') ? old('phone_no') : @$user->sellerProfile->phone_no }}"
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
                                        <input type="file" id="shop_logo"
                                               class="custom-file-input image_pick file-select" data-image-for="logo"
                                               name="logo" id="customFile"
                                               value=""/>
                                    </div>
                                    <div>
                                        @if(@$user->sellerProfile->logo !=[] && is_file_exists(@$user->sellerProfile->logo['image_72x72']))
                                            <img src="{{ static_asset(@$user->sellerProfile->logo['image_72x72'])}}"
                                                 alt="" id="img_logo" class="img-thumbnail site-icon">
                                        @else
                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                 alt="{{ @$user->first_name }}" id="img_logo"
                                                 class="img-thumbnail site-icon ">
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group seo-image-positoin">
                                    <label for="shop_banner">{{ __('Banner') }} ({{ __('297*146') }})</label>
                                    <div class="form-group">
                                        <input type="file" id="shop_banner"
                                               class="custom-file-input image_pick file-select" data-image-for="banner"
                                               name="banner"
                                               value="{{ @$user->image_id}}"/>
                                    </div>
                                    <div>
                                        @if(@$user->sellerProfile->banner !=[] && is_file_exists(@$user->sellerProfile->banner['image_72x72']))
                                            <img src="{{ static_asset(@$user->sellerProfile->banner['image_72x72'])}}"
                                                 id="img_banner" alt="" class="img-thumbnail site-icon">
                                        @else
                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                 alt="{{ @$user->first_name }}" id="img_banner"
                                                 class="img-thumbnail site-icon ">
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group seo-image-positoin">
                                    <label for="thumbnail">{{ __('Shop Page Banner') }}(1905*350)</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit"
                                             data-for="image" data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="shop_banner"
                                                   value="{{ old('shop_banner') !='' ? old('shop_banner') : Sentinel::getUser()->sellerProfile->shop_banner_id}}"
                                                   class="image-selected">
                                            <span class="form-control"><span
                                                    class="counter">{{ old('shop_banner') != '' ? substr_count(old('shop_banner'), ',') + 1  : (Sentinel::getUser()->sellerProfile->shop_banner_id != '' ? substr_count(Sentinel::getUser()->sellerProfile->shop_banner_id, ',') + 1 : 0) }}</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selected-media-box">
                                            <div class="mt-2 gallery gallery-md d-flex">
                                                @php
                                                    $thumb = old('shop_banner') ? old('shop_banner') : Sentinel::getUser()->sellerProfile->shop_banner_id;
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
                                    <label for="thumbnail">{{ __('Tagline') }}</label>
                                    <textarea name="shop_tagline" class="form-control" placeholder="{{__('Shop tagline')}}">{{old('shop_tagline') ? old('shop_tagline') : Sentinel::getUser()->sellerProfile->shop_tagline}}</textarea>
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
                                    <label for="meta_description">{{__('Meta Description')}}</label>
                                    <textarea class="form-control" name="meta_description" id="meta_description"
                                              value="{{old('meta_description')}}"
                                              placeholder="{{__('Description')}}">{{ @$user->sellerProfile->meta_description }}</textarea>
                                    @if ($errors->has('meta_description'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('meta_description') }}</p>
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-xs-12 col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <h4>{{ __('Social Link') }}</h4>
                            </div>
                            <div class="card-body">
                                <div class="form-group mt-2">
                                    <label for="facebook">{{ __('Facebook') }}</label>
                                    <input type="url" name="facebook"
                                           value="{{ old('facebook') ? old('facebook') : @$user->sellerProfile->facebook }}"
                                           class="form-control"
                                           placeholder="{{ __('Enter Facebook Link') }}">
                                    @if ($errors->has('facebook'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('facebook') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group mt-2">
                                    <label for="google">{{ __('Google') }}</label>
                                    <input type="url" name="google"
                                           value="{{ old('google') ? old('google') : @$user->sellerProfile->google }}"
                                           class="form-control"
                                           placeholder="{{ __('Enter Google Link') }}">
                                    @if ($errors->has('google'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('google') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group mt-2">
                                    <label for="twitter">{{ __('Twitter') }}</label>
                                    <input type="url" name="twitter"
                                           value="{{ old('twitter') ? old('twitter') : @$user->sellerProfile->twitter }}"
                                           class="form-control"
                                           placeholder="{{ __('Enter Twitter Link') }}">
                                    @if ($errors->has('twitter'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('twitter') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group mt-2">
                                    <label for="youtube">{{ __('Youtube') }}</label>
                                    <input type="url" name="youtube"
                                           value="{{ old('youtube') ? old('youtube') : @$user->sellerProfile->youtube }}"
                                           class="form-control"
                                           placeholder="{{ __('Enter Youtube Link') }}">
                                    @if ($errors->has('youtube'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('youtube') }}</p>
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h4>{{ __('Others') }}</h4>
                            </div>
                            <div class="card-body">
                                <div class="form-group mt-2">
                                    <label for="license_no">{{ __('license_no') }}</label>
                                    <input type="text" name="license_no"
                                           value="{{ old('license_no') ? old('license_no') : @$user->sellerProfile->license_no }}"
                                           class="form-control"
                                           placeholder="{{ __('Enter Licence No') }}">
                                    @if ($errors->has('license_no'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('license_no') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group mt-2">
                                    <label for="tax_paper">{{ __('Tax Paper') }}</label>
                                    <div class="form-group">
                                        <input type="file" id="tax_paper"
                                               class="custom-file-input image_pick file-select" data-image-for="tax_paper"
                                               name="tax_paper"
                                               value="tax_paper"/>
                                    </div>
                                    <div>
                                        @if(@$user->sellerProfile->tax_paper !=[] && is_file_exists(@$user->sellerProfile->tax_paper['image_72x72']))
                                            <img src="{{ static_asset(@$user->sellerProfile->tax_paper['image_72x72'])}}"
                                                 id="img_banner" alt="" class="img-thumbnail site-icon">
                                        @else
                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                 alt="tax_paper" id="img_tax_paper"
                                                 class="img-thumbnail site-icon ">
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bottom-button">
                        <button type="submit" class="btn btn-outline-primary" >
                            {{ __('Update') }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    @include('admin.common.selector-modal')
@endsection
@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('page-script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush
