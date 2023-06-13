@extends('admin.partials.master')
@php
    $title = isset($edit) ? trans('Slider Edit') : __('Slider Add')
@endphp
@section('title')
    {{ $title }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body ">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ $title }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}"
                       class="btn btn-icon icon-left btn-outline-primary"><i
                                class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card email-card">
                        <div class="card-header input-title">
                            <h4>{{ isset($edit) ? trans('Edit Slider') : __('Add New Slider')}}</h4>
                        </div>
                        <div class="col-md-10 middle card-body card-body-paddding">
                            @php
                                $route = isset($edit) ? route('sliders.update',$edit->id) : route('sliders.store')
                            @endphp
                            <form action="{{ $route }}" method="post"
                                  enctype="multipart/form-data">
                                @isset($edit)
                                    @method('put')
                                @endisset
                                @csrf
                                <div class="form-group">
                                    <label for="action_type" class="form-control-label">{{ __('Action Type') }}</label>
                                    <div class="custom-file">
                                        @php
                                            $action_type = 'product';
                                        @endphp
                                            <select class="form-control selectric" name="action_type" id="action_type">
                                            <option value="product" {{ isset($edit) ?($edit->action_type == 'product' ? 'selected' : '') : ''}}>{{__('Product')}}</option>
                                            <option value="category" {{ isset($edit) ?($edit->action_type == 'category' ? 'selected' : '') : ''}}>{{__('Category')}}</option>
                                            <option value="brand" {{ isset($edit) ?($edit->action_type == 'brand' ? 'selected' : '') : ''}}>{{__('Brand')}}</option>
                                            @if(settingHelper('seller_system') == 1)
                                                <option value="seller" {{ isset($edit) ?($edit->action_type == 'seller' ? 'selected' : '') : ''}}>{{__('Seller')}}</option>
                                            @endif
                                            <option value="blog" {{ isset($edit) ?($edit->action_type == 'blog' ? 'selected' : '') : ''}}>{{__('Blog')}}</option>
                                            <option value="url" {{ isset($edit) ?($edit->action_type == 'url' ? 'selected' : '') : ''}}>{{__('URL')}}</option>
                                        </select>
                                    </div>
                                    @if ($errors->has('action_type'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('action_type') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="productDiv"
                                     style="{{ old('action_type') ? (old('action_type') == 'product' ? '' : 'display:none') : (isset($edit) ? ($edit->action_type == 'product' ? '': 'display:none') : '')}}">
                                    <div class="form-group">
                                        <label for="product_id">{{ __('Action To') }}</label>
                                        <input type="hidden" name="for_mobile" value="for_mobile"/>
                                        <select class="product-by-ajax form-control select2" id="product_id"
                                                name="product_id" aria-hidden="true">
                                            @if(isset($edit) && $edit->action_type == 'product')
                                                @php
                                                    $product = \App\Models\Product::find($edit->link);
                                                @endphp
                                                @if($product)
                                                    <option value="{{ $product->id }}"
                                                            selected>{{ $product->getTranslation('name',app()->getLocale()) }}</option>
                                                @endif
                                            @endif
                                        </select>
                                        @if ($errors->has('product_id'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('product_id') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="categoryDiv" style="{{ old('action_type') ? (old('action_type') == 'category' ? '' : 'display:none')
                                                        : (isset($edit) ? ($edit->action_type == 'category' ? '': 'display:none') : 'display:none')}}">
                                    <div class="form-group">
                                        <label for="category">{{ __('Action To') }}</label>
                                        <select class="filter-categories-by-ajax form-control" name="category_id"
                                                aria-hidden="true" id="category_id">
                                            @if(isset($edit) && $edit->action_type == 'category')
                                                @php
                                                    $category = \App\Models\Category::find($edit->link);
                                                @endphp
                                                @if($category)
                                                    <option value="{{ $category->id }}"
                                                            selected>{{ $category->getTranslation('title',app()->getLocale()) }}</option>
                                                @endif
                                            @endif
                                        </select>
                                    </div>
                                </div>
                                <div class="blogDiv" style="{{ old('action_type') ? (old('action_type') == 'blog' ? '' : 'display:none')
                                                        : (isset($edit) ? ($edit->action_type == 'blog' ? '': 'display:none') : 'display:none')}}">
                                    <div class="form-group">
                                        <label for="blog">{{ __('Action To') }}</label>
                                        <select class="filter-blogs-by-ajax form-control" name="blog_id"
                                                aria-hidden="true" id="blog_id">
                                            @if(isset($edit) && $edit->action_type == 'blog')
                                                @php
                                                    $blog = \App\Models\Blog::find($edit->link);
                                                @endphp
                                                @if($blog)
                                                    <option value="{{ $blog->id }}"
                                                            selected>{{ $blog->getTranslation('title',app()->getLocale()) }}</option>
                                                @endif
                                            @endif
                                        </select>
                                    </div>
                                </div>
                                <div class="brandDiv" style="{{ old('action_type') ? (old('action_type') == 'brand' ? '' : 'display:none')
                                                        : (isset($edit) ? ($edit->action_type == 'brand' ? '': 'display:none') : 'display:none')}}">
                                    <div class="form-group">
                                        <label for="brand">{{ __('Action To') }}</label>
                                        <select class="form-control select2" name="brand_id" id="brand">
                                            <option value="">{{ __('Select Brand') }}</option>
                                            @foreach($brands as $brand)
                                                <option
                                                        value="{{ $brand->id }}" {{ $brand->id == old('brand') || (isset($edit) && $edit->link == $brand->id) ? 'selected' : '' }}>{{ $brand->getTranslation('title', App::getLocale()) }}</option>
                                            @endforeach
                                        </select>

                                        @if ($errors->has('brand'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('brand') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="sellerDiv" style="{{ old('action_type') ? (old('action_type') == 'seller' ? '' : 'display:none')
                                                        : (isset($edit) ? ($edit->action_type == 'seller' ? '': 'display:none') : 'display:none')}}">
                                    @if(settingHelper('seller_system') == 1)
                                        <div class="form-group">
                                            <label for="brand">{{ __('Action To') }}</label>
                                            <select class="seller-by-ajax form-control select2" name="sl" id="seller_id"
                                                    aria-hidden="true">
                                                @if(isset($edit) && $edit->action_type == 'seller')
                                                    @php
                                                        $seller = \App\Models\SellerProfile::find($edit->link);
                                                    @endphp
                                                    @if($seller)
                                                        <option value="{{ $seller->id }}"
                                                                selected>{{ $seller->shop_name }}</option>
                                                    @endif
                                                @endif
                                            </select>
                                        </div>
                                    @endif
                                </div>
                                <div class="urlDiv" style="{{ old('action_type') ? (old('action_type') == 'url' ? '' : 'display:none')
                                                        : (isset($edit) ? ($edit->action_type == 'url' ? '': 'display:none') : 'display:none')}}">
                                    <div class="form-group">
                                        <label for="slider_url">{{ __('URL') }}</label>
                                        <input type="text" class="form-control" name="slider_url" id="slider_url"
                                               value="{{ isset($edit) ? $edit->link : old('url') }}"
                                               placeholder="{{__('URL')}}">
                                        @if ($errors->has('url'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('url') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div>
                                    <div class="form-group">
                                        <label for="order">{{ __('Order') }}</label>
                                        <input type="number" class="form-control" name="order" id="order"
                                               value="{{ isset($edit) ? $edit->order : old('order') }}"
                                               placeholder="{{__('Order')}}">
                                        @if ($errors->has('order'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('order') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="logo">{{ __('Background Image') }} ({{ __('1905*464') }})</label>
                                        <div class="form-group">
                                            <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                                 data-selection="single"
                                                 data-target="#galleryModal" data-dismiss="modal">
                                                <input type="hidden" name="bg_image"
                                                       value="{{ isset($edit) ? $edit->bg_image_id : '' }}"
                                                       class="image-selected">
                                                <span class="form-control"><span
                                                            class="counter">{{ isset($edit) && $edit->bg_image_id ? 1 : 0 }}</span> {{ __('file chosen') }}</span>
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">
                                                        {{ __('Choose File') }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="selected-media-box">
                                                <div class="mt-2 gallery gallery-md d-flex">
                                                    <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                         data-id="{{ isset($edit) ? $edit->bg_image_id : null }}">
                                                        @if (isset($edit) && $edit->bg_image_id && array_key_exists('image_72x72',$edit->bg_image) && @is_file_exists($edit->bg_image['image_72x72'], $edit->bg_image['storage']))
                                                            <img
                                                                    src="{{ get_media($edit->bg_image['image_72x72'], $edit->bg_image['storage']) }}"
                                                                    alt="{{ isset($slider_language) ? $slider_language->title : old('title') }}"
                                                                    class="img-thumbnail logo-profile">
                                                        @else
                                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                 data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                 alt="category-banner"
                                                                 class="img-thumbnail logo-profile">
                                                        @endif
                                                        @isset($edit)
                                                            <div class="image-remove">
                                                                <a href="javascript:void(0)" class="remove"><i
                                                                            class="bx bx-x"></i></a>
                                                            </div>
                                                        @endisset
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group text-right">
                                    @isset($edit)
                                        <button type="submit" class="btn btn-outline-primary"
                                                tabindex="4"> {{__('Update')}}</button>
                                    @else
                                        <button type="submit" class="btn btn-outline-primary"
                                                tabindex="4"> {{__('save')}}</button>
                                    @endif
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    @include('admin.common.selector-modal')
@endsection
@include('admin.common.delete-ajax')
@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/ajax-live-search.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/ajax-div-load.js') }}"></script>
@endpush

