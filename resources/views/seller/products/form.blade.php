@extends('admin.partials.master')

@section('product-create')
    active
@endsection
@section('product_active')
    active
@endsection

@php
    $title = '';
    if(isset($is_digital)):
        $title =  __('Add Digital Product');
    elseif(isset($is_catalog)):
        $title =  __('Add Catalog Product');
    elseif(isset($is_classified)):
       $title = __('Add Classified Product');
    else:
       $title = __('Add Product');
    endif;
@endphp
@section('title')
    {{ $title }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">
                        {{ $title }}
                    </h2>

                </div>
                <div class="buttons add-button">
                    <a href="{{ old('r') != '' ? old('r') : (@$r ? $r : url()->previous() )}}"
                       class="btn btn-outline-primary"><i class='bx bx-arrow-back'></i>{{ __('Back') }}</a>
                </div>
            </div>
            <form action="{{ route('seller.product.store') }}" method="post" enctype="multipart/form-data"
                  data-form="{{ route('seller.get-variants') }}" data-for="add" id="variant">
                @csrf
                <div class="col-12 col-sm-12 col-md-8 col-lg-9 middle">
                    <div class="mb-3 bg-white px-4 py-2">
                        <ul class="nav nav-pills" id="myTab3" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link bar active {{ has_key(['name','category','brand','unit','minimum_order_quantity','barcode','tags','slug','is_digital','product_file','external_link'],$errors) ? 'error' : '' }}" id="product-info-tab" data-toggle="tab" href="#product-info" role="tab"
                                   aria-controls="home"
                                   aria-selected="true">{{ __('Product Information') }}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link bar {{ has_key(['thumbnail','images','video_provider','video_url'],$errors) ? 'error' : '' }}" id="images-and-videos-tab" data-toggle="tab" href="#images-and-videos" role="tab"
                                   aria-controls="home"
                                   aria-selected="true">{{ __('Images & Videos') }}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link bar {{ has_key(['price','special_discount_type','special_discount','special_discount_period','vat_taxes','has_variant','low_stock_to_notify','stock_visibility',
                                                    'sku','current_stock','colors','variant_sku.*'],$errors) ? 'error' : '' }}"
                                   id="fast-sms-tab" data-toggle="tab" href="#price-and-stock" role="tab"
                                   aria-controls="contact"
                                   aria-selected="false">{{ __('Product Price & Stock') }}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link bar {{ has_key(['short_description','description','pdf_specification'],$errors) ? 'error' : '' }}"
                                   id="description-and-specification-tab" data-toggle="tab" href="#description-and-specification" role="tab"
                                   aria-controls="contact"
                                   aria-selected="false">{{ __('Description & Specification') }}</a>
                            </li>
                            @if(!isset($is_digital) && !isset($is_catalog) && !isset($is_classified))
                                <li class="nav-item">
                                    <a class="nav-link bar shipping-days {{ has_key(['shipping_type','shipping_fee','shipping_fee_depend_on_quantity','cash_on_delivery','estimated_shipping_days'],$errors) ? 'error' : '' }} }}" id="shipping-tab" data-toggle="tab" href="#shipping" role="tab"
                                       aria-controls="profile"
                                       aria-selected="false">{{ __('Shipping Info') }}</a>
                                </li>
                            @endif
                            @if(addon_is_activated('refund') && !isset($is_catalog) && !isset($is_classified))
                                <li class="nav-item">
                                    <a class="nav-link bar {{ has_key(['campaign','campaign_discount','campaign_discount_type','is_refundable','is_featured','todays_deal'],$errors) ? 'error' : '' }}" id="others-tab" data-toggle="tab" href="#others"
                                       role="tab" aria-controls="contact"
                                       aria-selected="false">{{ __('Others') }}</a>
                                </li>
                            @endif
                            @if(isset($is_classified))
                                <li class="nav-item">
                                    <a class="nav-link bar {{ has_key(['contact_name','email','phone_no','address','others'],$errors) ? 'error' : '' }}" id="contact-details-tab" data-toggle="tab" href="#contact-details" role="tab"
                                       aria-controls="contact"
                                       aria-selected="false">{{ __('Contact Details') }}</a>
                                </li>
                            @endif
                            <li class="nav-item">
                                <a class="nav-link bar {{ has_key(['meta_title','meta_description','meta_image','meta_keywords'],$errors) ? 'error' : '' }}" id="seo-tab" data-toggle="tab" href="#seo" role="tab"
                                   aria-controls="contact"
                                   aria-selected="false">{{ __('SEO') }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-8 col-lg-9 middle">
                        <div class="tab-content no-padding" id="myTabContent2">
                            <div class="tab-pane fade show active" id="product-info" role="tabpanel"
                                 aria-labelledby="product-info-tab">
                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{ __('Product Information') }}</h4>
                                    </div>
                                    @if(Sentinel::getUser()->sellerProfile->verified_at == null)
                                        <div class="invalid-feedback text-danger pl-4">
                                            {{ __("N.B: Your shop is inactive now. You cannot add new product.") }}
                                        </div>
                                    @endif

                                    @if(isset($is_catalog))
                                        <div class="invalid-feedback text-info pl-4">
                                            {{ __("N.B: It can't be added to cart only details will be shown.") }}
                                        </div>
                                    @endif
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="name">{{ __('Product Name') }} *</label>
                                            <input type="hidden" value="{{ old('r') !='' ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                            <input type="text" class="form-control" name="name" id="name"
                                                   value="{{ old('name') ? old('name') : (@$product_language ? $product_language->name : '') }}"
                                                   placeholder="{{ __('Product Name') }}">
                                            @if($errors->has('name'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('name') }}</p>
                                                </div>
                                            @endif
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="category">{{ __('Category') }} *</label>
                                                    <select class="form-control select2" name="category" id="category">
                                                        @foreach($categories as $key => $category)
                                                            <option
                                                                value="{{ $category->id }}" {{ old('category') == $category->id ? 'selected' : ''}}>{{ $category->getTranslation('title', App::getLocale()) }}</option>
                                                            @foreach ($category->childCategories as $childCategory)
                                                                @include('admin.products.categories.child-categories', ['child_category' => $childCategory , 'parent' => old('category'),'product' => true])
                                                            @endforeach
                                                        @endforeach
                                                    </select>

                                                    @if ($errors->has('category'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('category') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="brand">{{ __('Brand') }}</label>
                                                    <select class="form-control select2" name="brand" id="brand">
                                                        <option value="">{{ __('Select Brand') }}</option>
                                                        @foreach($brands as $brand)
                                                            <option
                                                                value="{{ $brand->id }}" {{ $brand->id == old('brand') ? 'selected' : '' }}>{{ $brand->getTranslation('title', App::getLocale()) }}</option>
                                                        @endforeach
                                                    </select>

                                                    @if ($errors->has('brand'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('brand') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="unit">{{__('Unit') }} *</label>
                                                    <input type="text" name="unit" id="unit"
                                                           value="{{ old('unit') ? old('unit') : '' }}" class="form-control"
                                                           placeholder="Unit ( e.g kg. pc. etc )">
                                                    @if ($errors->has('unit'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('unit') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="minimum_order_quantity">{{ __('Min. Order Quantity') }}
                                                        *</label>
                                                    <input type="number" name="minimum_order_quantity"
                                                           id="minimum_order_quantity" class="form-control"
                                                           value="{{ old('minimum_order_quantity') ? old('minimum_order_quantity') : 1 }}"
                                                           placeholder="{{ __('Enter minimum order quantity') }}" min="1">
                                                    @if ($errors->has('minimum_order_quantity'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('minimum_order_quantity') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="barcode">{{ __('Barcode') }}</label>
                                            <div class="input-group">
                                                <input type="text" name="barcode" id="barcode"
                                                       value="{{ old('barcode') ? old('barcode') : '' }}" class="form-control"
                                                       placeholder="{{ __('Enter product barcode') }}">
                                                <div class="input-group-append barcode">
                                                    <div class="input-group-text">
                                                        <i class="bx bx-refresh"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            @if ($errors->has('barcode'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('barcode') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="tags">{{ __('Tags') }}</label>
                                            <input type="text" name="tags" id="tags" class="form-control inputtags"
                                                   value="{{ old('tags') ? old('tags') : '' }}"
                                                   placeholder="{{ __('Write & hit enter') }}">
                                            @if ($errors->has('tags'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('tags') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="slug">{{ __('Slug') }}</label>
                                            <input type="text" name="slug" id="slug" class="form-control"
                                                   value="{{ old('slug') ? old('slug') : '' }}"
                                                   placeholder="{{__('Product Slug')}}">
                                            @if ($errors->has('slug'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('slug') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        @if(!isset($is_digital) && !isset($is_catalog) && !isset($is_classified))
                                            <div class="form-group row mt-2">
                                                <label class="col-md-5 col-from-label">{{ __('Digital') }}</label>
                                                <div class="col-md-7">
                                                    <label class="custom-switch">
                                                        <input type="checkbox" value="1" name="is_digital"
                                                               {{ old('is_digital') == 1 ? 'checked' : '' }}
                                                               class="custom-switch-input digital-product">
                                                        <span class="custom-switch-indicator"></span>
                                                        <span
                                                            class="custom-switch-description">{{ __("The product won't be shipped") }}</span>
                                                    </label>
                                                    @if ($errors->has('is_digital'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('is_digital') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        @elseif(isset($is_digital))
                                            <input type="hidden" name="is_digital" value="1">
                                        @endif
                                        <div class="digital-product-div {{ isset($is_digital) || old('is_digital') == 1 ? '' : 'd-none' }}">
                                            <div class="section-title mt-0">{{ __('Product File') }}</div>
                                            <div class="form-group">
                                                <label for="logo">{{ __('Product File') }}</label>
                                                <div class="form-group">
                                                    <div class="input-group gallery-modal" id="btnSubmit" data-for="all"
                                                         data-selection="single" data-variant="1"
                                                         data-target="#galleryModal" data-dismiss="modal">
                                                        <input type="hidden" name="product_file"
                                                               value="{{ old('product_file') !='' ? old('product_file') : '' }}"
                                                               class="image-selected">
                                                        <span class="form-control"><span
                                                                class="counter">{{ old('product_file') != '' ? substr_count(old('product_file'), ',') + 1  : '' }}</span> {{ __('file chosen') }}</span>
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                {{ __('Choose File') }}
                                                            </div>
                                                        </div>
                                                        @if ($errors->has('product_file'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('product_file') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                    <div class="selected-media-box">
                                                        <div class="mt-2 gallery gallery-md d-flex">
                                                            @if(old('product_file') !='')
                                                                <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                                     data-id="{{ old('product_file') }}">
                                                                    <img
                                                                        src="{{ static_asset('images/default/default-pdf-72x72.png') }}"
                                                                        alt="img-thumbnail"
                                                                        class="img-thumbnail logo-profile">
                                                                    <div class="image-remove">
                                                                        <a href="javascript:void(0)" class="remove"><i
                                                                                class="bx bx-x"></i></a>
                                                                    </div>
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        @if(isset($is_catalog))
                                            <input type="hidden" name="is_catalog" value="1">
                                            <div class="form-group mt-2">
                                                <label for="external_link">{{ __('External Link') }}</label>
                                                <input type="text" name="external_link"
                                                       value="{{ old('external_link') != '' ? old('external_link') : '' }}"
                                                       id="external_link" class="form-control" placeholder="{{__('External Link')}}">
                                                @if ($errors->has('external_link'))
                                                    <div class="invalid-feedback">
                                                        <p>{{ $errors->first('external_link') }}</p>
                                                    </div>
                                                @endif
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="images-and-videos" role="tabpanel"
                                 aria-labelledby="images-and-videos-tab">
                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{ __('Product Images') }}</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="thumbnail">{{ __('Thumbnail') }}(190X230)</label>
                                                    <div class="form-group">
                                                        <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                                             data-selection="single"
                                                             data-target="#galleryModal" data-dismiss="modal">
                                                            <input type="hidden" name="thumbnail"
                                                                   value="{{ old('thumbnail') !='' ? old('thumbnail') : ''}}"
                                                                   class="image-selected">
                                                            <span class="form-control"><span
                                                                    class="counter">{{ old('thumbnail') != '' ? substr_count(old('thumbnail'), ',') + 1  : 0 }}</span> {{ __('file chosen') }}</span>
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text">
                                                                    {{ __('Choose File') }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selected-media-box">
                                                            <div class="mt-2 gallery gallery-md d-flex">
                                                                @if(old('thumbnail') != null)
                                                                    <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                                         data-id="{{ old('thumbnail') }}">
                                                                        @php
                                                                            $media = \App\Models\Media::find(old('thumbnail'));
                                                                        @endphp
                                                                        @if(is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                                            <img
                                                                                src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
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
                                                                            alt="brand-logo" class="img-thumbnail logo-profile">
                                                                    </div>
                                                                @endif
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Button trigger modal -->
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="logo">{{ __('Gallery Image') }}(320X320)</label>
                                                    <div class="form-group">
                                                        <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                                             data-selection="multiple"
                                                             data-target="#galleryModal" data-dismiss="modal">
                                                            <input type="hidden" name="images"
                                                                   value="{{ old('images') !='' ? old('images') : ''}}"
                                                                   class="image-selected">
                                                            <span class="form-control"><span
                                                                    class="counter">{{ old('images') != '' ? substr_count(old('images'), ',') + 1  : 0 }}</span> {{ __('file chosen') }}</span>
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text">
                                                                    {{ __('Choose File') }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="selected-media-box">
                                                            <div class="mt-2 gallery gallery-md d-flex">
                                                                @if(old('images') != null)
                                                                    @php
                                                                        $images = explode(',', old('images'));
                                                                        $images = \App\Models\Media::find($images);
                                                                    @endphp
                                                                    @foreach($images as $key => $media)
                                                                        <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                                             data-id="{{ $media->id }}">
                                                                            @if(is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                                                <img
                                                                                    src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
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
                                                                    @endforeach
                                                                @endif
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{ __('Product Video') }}</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label for="video_provider">{{ __('Video Provider') }}</label>
                                                    <select class="form-control selectric" name="video_provider"
                                                            id="video_provider">
                                                        <option value="" selected>{{ __('Select video provider') }}</option>
                                                        <option
                                                            value="youtube" {{ old('video_provider') == 'youtube' ? 'selected' : '' }}>{{ __('Youtube') }}</option>
                                                        <option
                                                            value="vimeo" {{ old('video_provider') == 'vimeo' ? 'selected' : '' }}>{{ __('Vimeo') }}</option>
                                                        <option
                                                            value="mp4" {{ old('video_provider') == 'mp4' ? 'selected' : '' }}>{{ __('Mp4') }}</option>
                                                    </select>
                                                    @if ($errors->has('video_provider'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('video_provider') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="form-group">
                                                    <label for="video_url">{{ __('Video URL') }}</label>
                                                    <input type="text" name="video_url" id="video_url"
                                                           value="{{ old('video_url') != '' ? old('video_url') : '' }}"
                                                           class="form-control" placeholder="https://">
                                                    @if ($errors->has('video_url'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('video_url') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="price-and-stock" role="tabpane1" aria-labelledby="price-and-stock-tab">
                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{ __('Product Price & Stock') }}</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="price">{{ __('Unit Price') }} *</label>
                                            <input type="number" name="price" id="price"
                                                   value="{{ old('price') != '' ? old('price') : '' }}" class="form-control"
                                                   placeholder="0" min="0" step="any">
                                            @if ($errors->has('price'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('price') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="special_discount_type">{{ __('Special Discount Type') }}</label>
                                                    <select class="form-control selectric" name="special_discount_type"
                                                            id="special_discount_type">
                                                        <option value="" selected>{{ __('Select Type') }}</option>
                                                        <option
                                                            value="flat" {{ old('special_discount_type') == 'flat' ? 'selected' : '' }}>{{ __('Flat') }}</option>
                                                        <option
                                                            value="percentage" {{ old('special_discount_type') == 'percentage' ? 'selected' : '' }}>{{ __('Percentage') }}</option>
                                                    </select>
                                                    @if ($errors->has('special_discount_type'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('special_discount_type') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="special_discount">{{ __('Special Discount') }}</label>
                                                    <input type="number" name="special_discount" id="special_discount"
                                                           step="any" min="0"
                                                           value="{{ old('special_discount') != '' ? old('special_discount') : '' }}"
                                                           class="form-control" placeholder="{{ __('Discount') }}">
                                                    @if ($errors->has('special_discount'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('special_discount') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="special_discount_period">{{ __('Special Discount Period') }}</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">
                                                        <i class="bx bx-calendar"></i>
                                                    </div>
                                                </div>
                                                <input type="text" name="special_discount_period" id="special_discount_period"
                                                       value="{{ old('special_discount_period') != '' ? old('special_discount_period') : '' }}"
                                                       class="form-control daterange-cus">
                                            </div>
                                            @if ($errors->has('special_discount_period'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('special_discount_period') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        @if(settingHelper('vat_and_tax_type') == 'product_base')
                                            <label for="vat_taxes">{{ __('Vat & Tax') }}</label>
                                            <select class="form-control selectric" name="vat_taxes[]" multiple id="vat_taxes">
                                                <option value="" selected>{{ __('Select') }}</option>
                                                @foreach(\App\Models\VatTax::where('status', 1)->get() as $vat_tax)
                                                    <option
                                                        value="{{ $vat_tax->id }}" {{ old('vat_taxes') != '' ? (in_array($vat_tax->id,old('vat_taxes')) ? 'selected' : '') : ''}}>{{ $vat_tax->vat_tax }}
                                                        ({{ $vat_tax->percentage .'%' }})
                                                    </option>
                                                @endforeach
                                            </select>
                                            @if ($errors->has('vat_taxes'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('vat_taxes') }}</p>
                                                </div>
                                            @endif
                                        @endif
                                    </div>
                                </div>
                                @if(!isset($is_classified))
                                    <div class="card">
                                        <div class="card-header d-flex justify-content-space-between extra-padding">
                                            <h4>{{ __('Product Stock') }}</h4>
                                            <div class="text-right">
                                                <label class="custom-switch">
                                                    <input type="checkbox" value="1" name="has_variant"
                                                           {{ old('has_variant') == 1 ? 'checked' : '' }}
                                                           class="custom-switch-input variant-product variant">
                                                    <span class="custom-switch-indicator"></span>
                                                    <span class="custom-switch-description">{{ __("Has Variant") }}</span>
                                                </label>
                                                @if ($errors->has('has_variant'))
                                                    <div class="invalid-feedback">
                                                        <p>{{ $errors->first('has_variant') }}</p>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            @if(!isset($is_catalog))
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="low_stock_to_notify">{{ __('Minimum Stock Warning') }}</label>
                                                            <input type="number" name="low_stock_to_notify"
                                                                   value="{{ old('low_stock_to_notify') != '' ? old('low_stock_to_notify') : ''}}"
                                                                   class="form-control"
                                                                   placeholder="{{ __('Enter min stock amount to notify') }}">
                                                            @if ($errors->has('low_stock_to_notify'))
                                                                <div class="invalid-feedback">
                                                                    <p>{{ $errors->first('low_stock_to_notify') }}</p>
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="stock_visibility">{{ __('Stock Visibility') }} *</label>
                                                            <select class="form-control selectric" name="stock_visibility"
                                                                    id="stock_visibility">
                                                                <option
                                                                    value="hide_stock" {{ old('stock_visibility') == 'hide_stock' ? 'selected' : '' }}>{{ __('Hide Stock') }}</option>
                                                                <option
                                                                    value="visible_with_quantity" {{ old('stock_visibility') == 'visible_with_quantity' ? 'selected' : ''}}>{{ __('Visible with quantity') }}</option>
                                                                <option
                                                                    value="visible_with_text" {{ old('stock_visibility') == 'visible_with_text' ? 'selected' : '' }}>{{ __('Visible with text') }}</option>
                                                            </select>
                                                            @if ($errors->has('stock_visibility'))
                                                                <div class="invalid-feedback">
                                                                    <p>{{ $errors->first('stock_visibility') }}</p>
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            @endif
                                            <div class="without-variant {{ old('has_variant') == 1 ? 'd-none' : '' }}">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="sku">{{ __('SKU') }}</label>
                                                            <div class="input-group">
                                                                <input type="text" name="sku" id="sku"
                                                                       value="{{ old('sku') ? old('sku') : '' }}" class="form-control"
                                                                       placeholder="{{ __('Enter product sku') }}">
                                                                <div class="input-group-append barcode">
                                                                    <div class="input-group-text">
                                                                        <i class="bx bx-refresh"></i>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            @if ($errors->has('sku'))
                                                                <div class="invalid-feedback">
                                                                    <p>{{ $errors->first('sku') }}</p>
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="current_stock">{{ __('Current Stock') }}</label>
                                                            <input type="number" class="form-control" name="current_stock"
                                                                   value="{{ old('current_stock') != '' ? old('current_stock') : '' }}"
                                                                   id="current_stock"
                                                                   placeholder="{{ __('Enter current available quantity') }}">
                                                            @if ($errors->has('current_stock'))
                                                                <div class="invalid-feedback">
                                                                    <p>{{ $errors->first('current_stock') }}</p>
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="with-variant {{ old('has_variant') == 1 ? '' : 'd-none' }}">
                                                <div class="form-group">
                                                    <label class="form-label">{{ __('Colors') }}</label>
                                                    <div class="row gutters-xs">
                                                        @foreach($colors as $color)
                                                            <div class="col-auto">
                                                                <label class="colorinput" data-toggle="tooltip" title=""
                                                                       data-original-title="{{ $color->getTranslation('name', App::getLocale()) }}">
                                                                    <input name="colors[]" type="checkbox"
                                                                           value="{{ $color->id }}"
                                                                           {{old('colors') ? (in_array($color->id , old('colors')) ? 'checked' : '') : '' }}
                                                                           data-url="{{ route('seller.get-attribute-values') }}"
                                                                           class="colorinput-input attribute-sets"/>
                                                                    <span class="colorinput-color"
                                                                          style="background-color: {{ $color->code }}"></span>
                                                                </label>
                                                            </div>
                                                        @endforeach
                                                        @if ($errors->has('colors'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('colors') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-md-3">
                                                        <input type="text" class="form-control"
                                                               value="{{ __('Attribute Sets') }}"
                                                               disabled>
                                                    </div>
                                                    <div class="col-md-9">
                                                        <select class="form-control select2 attribute-sets"
                                                                data-url="{{ route('seller.get-attribute-values') }}"
                                                                name="attribute_sets[]" multiple>
                                                            @foreach($attributes as $attribute)
                                                                <option
                                                                    value="{{ $attribute->id }}" {{  old('attribute_sets') ? (in_array($attribute->id , old('attribute_sets')) ? 'selected' : '') : '' }}>{{ $attribute->getTranslation('title', \App::getLocale()) }}</option>
                                                            @endforeach
                                                        </select>
                                                        <p class="invalid-feedback text-info">{{ __('N.B: Select Attribute sets of this product to add attribute values') }}</p>
                                                    </div>
                                                </div>
                                                <div class="attribute-values">
                                                    @php
                                                        $selected_attributes = old('attribute_sets') ? old('attribute_sets') : '';
                                                        $selected_attributes = $attributes->whereIn('id',$selected_attributes);
                                                    @endphp
                                                    @foreach($selected_attributes as $attribute)
                                                        <div class="form-group row">
                                                            <div class="col-md-3">
                                                                <input type="text" class="form-control"
                                                                       value="{{ $attribute->getTranslation('title', \App::getLocale()) }}"
                                                                       disabled>
                                                            </div>
                                                            <div class="col-md-9">
                                                                <select class="form-control select2 variant"
                                                                        name="attribute_values_{{$attribute->id}}[]" multiple>
                                                                    @foreach($attribute->attributeValue as $value)
                                                                        <option value="{{ $value->id }}" {{  old('attribute_values_'.$attribute->id) ? (in_array($value->id, old('attribute_values_'.$attribute->id)) ? 'selected' : ''): '' }}>
                                                                            {{ $value->value }}
                                                                        </option>
                                                                    @endforeach
                                                                </select>
                                                            </div>
                                                        </div>
                                                    @endforeach
                                                </div>
                                                <div class="form-group row variant-table">
                                                    @if(session()->has('attributes'))
                                                        @include('admin.products.products.session-sku')
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endif
                            </div>
                            <div class="tab-pane fade"
                                 id="description-and-specification" role="tabpane6"
                                 aria-labelledby="description-and-specification-tab">
                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{ __('Product Description') }}</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="form-group short-des">
                                            <label for="short_description"
                                                   class="form-control-label">{{ __('Short Description') }}</label>
                                            <div>
                                        <textarea type="text" class="form-control" name="short_description"
                                                  id="short_description">{{ old('short_description') ? old('short_description') : '' }}</textarea>
                                            </div>
                                            <p id="total-caracteres">200</p>
                                            @if ($errors->has('short_description'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('short_description') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="description"
                                                   class="form-control-label">{{ __('Long Description') }}</label>
                                            <div>
                                        <textarea type="text" class="summernote" name="description"
                                                  id="description">{{ old('description') ? old('description') :'' }}</textarea>
                                            </div>
                                            @if ($errors->has('description'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('description') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="description_image"
                                                   class="form-control-label">{{ __('description_image') }}</label>
                                            <div>
                                                <input type="file" class="form-control" id="description_images" name="description_images[]" multiple>
                                            </div>
                                            <div class="selected-media mr-2 mb-2 mt-3 ml-0" id="description_image_modal">
                                            </div>
                                            @if ($errors->has('description_images'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('description') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{ __('PDF Specification') }}</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="logo">{{ __('PDF Specification') }}</label>
                                            <div class="form-group">
                                                <div class="input-group gallery-modal" id="btnSubmit" data-for="pdf"
                                                     data-selection="single" data-variant="1"
                                                     data-target="#galleryModal" data-dismiss="modal">
                                                    <input type="hidden" name="pdf_specification"
                                                           value="{{ old('pdf_specification') !='' ? old('pdf_specification') : '' }}"
                                                           class="image-selected">
                                                    <span class="form-control"><span
                                                            class="counter">{{ old('pdf_specification') != '' ? substr_count(old('pdf_specification'), ',') + 1  : '' }}</span> {{ __('file chosen') }}</span>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            {{ __('Choose File') }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="selected-media-box">
                                                    <div class="mt-2 gallery gallery-md d-flex">
                                                        @if(old('pdf_specification') !='')
                                                            <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                                 data-id="{{ old('pdf_specification') }}">
                                                                <img
                                                                    src="{{ static_asset('images/default/default-pdf-72x72.png') }}"
                                                                    alt="img-thumbnail"
                                                                    class="img-thumbnail logo-profile">
                                                                <div class="image-remove">
                                                                    <a href="javascript:void(0)" class="remove"><i
                                                                            class="bx bx-x"></i></a>
                                                                </div>
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="shipping" role="tabpane2"
                                 aria-labelledby="shipping-tab">
                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{__('Shipping Info')}}</h4>
                                    </div>
                                    <div class="card-body extra-padding">
                                        @if(!isset($is_catalog))
                                            @if(!isset($is_classified))
                                                @if(settingHelper('shipping_fee_type') == 'product_base')
                                                    <div class="form-group">
                                                        <label for="shipping_type">{{ __('Shipping Fee Type') }}</label>
                                                        <select class="form-control selectric shipping-type"
                                                                name="shipping_type"
                                                                id="shipping_type">
                                                            <option
                                                                value="flat_rate" {{ old('shipping_type') == 'flat_rate' ? 'selected' : '' }}>{{ __('Flat Rate') }}</option>
                                                            <option
                                                                value="free_shipping" {{ old('shipping_type') == 'free_shipping' ? 'selected' : '' }}>{{ __('Free Shipping') }}</option>
                                                        </select>
                                                        @if ($errors->has('shipping_type'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('shipping_type') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                    <div
                                                        class="shipping-cost {{ old('shipping_type') == 'free_shipping' ? 'd-none' : '' }}">
                                                        <div class="form-group">
                                                            <label for="shipping_fee">{{ __('Shipping Fee') }}</label>
                                                            <input type="number" name="shipping_fee"
                                                                   value="{{ old('shipping_fee') != '' ? old('shipping_fee') : '' }}"
                                                                   class="form-control" min="0" step="any"
                                                                   placeholder="{{ __('Enter Shipping fee') }}">
                                                            @if ($errors->has('shipping_fee'))
                                                                <div class="invalid-feedback">
                                                                    <p>{{ $errors->first('shipping_fee') }}</p>
                                                                </div>
                                                            @endif
                                                        </div>
                                                        <div class="form-group row mt-2">
                                                            <label class="col-md-6 col-from-label"
                                                                   for="shipping_fee_depend_on_quantity">{{ __('Is Depend On Quantity') }}</label>
                                                            <div class="col-md-6">
                                                                <label class="custom-switch">
                                                                    <input type="checkbox" value="1"
                                                                           name="shipping_fee_depend_on_quantity"
                                                                           {{ old('shipping_fee_depend_on_quantity') == 1 ? 'checked' :  '' }}
                                                                           class="custom-switch-input">
                                                                    <span class="custom-switch-indicator"></span>
                                                                    <span class="custom-switch-description"></span>
                                                                </label>
                                                                @if ($errors->has('shipping_fee_depend_on_quantity'))
                                                                    <div class="invalid-feedback">
                                                                        <p>{{ $errors->first('shipping_fee_depend_on_quantity') }}</p>
                                                                    </div>
                                                                @endif
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endif
                                                @if(!isset($is_digital))
                                                    <div class="section-title mt-2">{{ __('Estimated Shipping Days & COD') }}</div>
                                                    <div class="form-group row mt-2 shipping-days">
                                                        <label
                                                            class="col-md-5 col-from-label">{{ __('Cash On Delivery') }}</label>
                                                        <div class="col-md-7">
                                                            <label class="custom-switch">
                                                                <input type="checkbox" value="1" name="cash_on_delivery"
                                                                       {{ old('cash_on_delivery') == 1 ? 'checked' : '' }}
                                                                       class="custom-switch-input">
                                                                <span class="custom-switch-indicator"></span>
                                                                <span
                                                                    class="custom-switch-description">{{ __('Collect cash after delivery') }}</span>
                                                            </label>
                                                            @if ($errors->has('cash_on_delivery'))
                                                                <div class="invalid-feedback">
                                                                    <p>{{ $errors->first('cash_on_delivery') }}</p>
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="form-group mt-2 shipping-days">
                                                        <label for="estimated_shipping_days">{{ __('Shipping Days') }}</label>
                                                        <input type="text" name="estimated_shipping_days"
                                                               value="{{ old('estimated_shipping_days') != '' ? old('estimated_shipping_days') : '' }}"
                                                               id="estimated_shipping_days" class="form-control"
                                                               placeholder="0">
                                                        @if ($errors->has('estimated_shipping_days'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('estimated_shipping_days') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                @endif
                                            @endif
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="others" role="tabpane3" aria-labelledby="others-tab">
                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{__('Others')}}</h4>
                                    </div>
                                    <div class="card-body extra-padding">
                                        @if(addon_is_activated('refund'))
                                            <div class="form-group row mt-2">
                                                <label class="col-md-5 col-from-label">{{ __('Refundable') }}</label>
                                                <div class="col-md-7">
                                                    <label class="custom-switch">
                                                        <input type="checkbox" value="1" name="is_refundable"
                                                               {{ old('is_refundable') == 1 ? 'checked' : '' }}
                                                               class="custom-switch-input">
                                                        <span class="custom-switch-indicator"></span>
                                                        <span
                                                            class="custom-switch-description">{{ __('Is Product Refundable') }}</span>
                                                    </label>
                                                    @if ($errors->has('is_refundable'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('is_refundable') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            @if(isset($is_classified))
                                <div class="tab-pane fade"
                                     id="contact-details" role="tabpane3"
                                     aria-labelledby="contact-details-tab">
                                    <input type="hidden" name="is_classified" value="1">
                                    <div class="card">
                                        <div class="card-header d-flex justify-content-between extra-padding">
                                            <h4>{{ __('Contact Details') }}</h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="contact_name">{{ __('Contact Name') }}</label>
                                                        <input type="text" class="form-control" name="contact_name"
                                                               id="contact_name"
                                                               value="{{ old('contact_name') != '' ? old('contact_name') : '' }}"
                                                               placeholder="{{__('Contact Name')}}">
                                                        @if ($errors->has('contact_name'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('contact_name') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="phone_no">{{ __('Phone No') }}</label>
                                                        <input type="phone" class="form-control" name="phone_no"
                                                               value="{{ old('phone_no') != '' ? old('phone_no') : '' }}"
                                                               id="phone_no"
                                                               placeholder="{{ __('Enter Contact Phone No') }}">
                                                        @if ($errors->has('phone_no'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('phone_no') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="email">{{ __('Email') }}</label>
                                                        <input type="email" class="form-control" name="email" id="email"
                                                               value="{{ old('email') != '' ? old('email') : '' }}"
                                                               placeholder="{{__('Enter Contact Email Address')}}">
                                                        @if ($errors->has('email'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('email') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="address">{{ __('Address') }}</label>
                                                        <input type="address" class="form-control" name="address"
                                                               value="{{ old('address') != '' ? old('address') : '' }}"
                                                               id="address"
                                                               placeholder="{{ __('Enter Contact Address') }}">
                                                        @if ($errors->has('address'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('address') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="others">{{ __('Others Info') }}</label>
                                                        <textarea type="text" class="summernote" name="others"
                                                                  id="others">{{ old('others') ? old('others') :'' }}</textarea>

                                                        @if ($errors->has('others'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('others') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endif
                            <div class="tab-pane fade" id="seo" role="tabpane5" aria-labelledby="seo-tab">
                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{ __('Product SEO') }}</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="meta_title">{{ __('Meta Title') }}</label>
                                            <input type="text" name="meta_title" id="meta_title"
                                                   value="{{ old('meta_title') ? old('meta_title') : '' }}" class="form-control"
                                                   placeholder="{{ __('Meta Title') }}">
                                            @if ($errors->has('meta_title'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('meta_title') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="meta_description">{{ __('Meta Description') }}</label>
                                            <textarea class="form-control" name="meta_description"
                                                      rows="5">{{ old('meta_description') ? old('meta_description') : '' }}</textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="meta_keywords">{{ __('Meta Keywords') }}</label>
                                            <input type="text" class="form-control inputtags" name="meta_keywords"
                                                   value="{{ old('meta_keywords') ? old('meta_keywords') : '' }}"
                                                   placeholder="{{ __('Write & hit enter') }}">
                                        </div>
                                        <div class="form-group">
                                            <label for="logo">{{ __('Meta Image') .' ('.__('Open Graph').')' }}</label>
                                            <div class="form-group">
                                                <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                                     data-selection="single"
                                                     data-target="#galleryModal" data-dismiss="modal">
                                                    <input type="hidden" name="meta_image"
                                                           value="{{ old('meta_image') != '' ? old('meta_image') : '' }}"
                                                           class="image-selected">
                                                    <span class="form-control"><span
                                                            class="counter">{{ old('meta_image') != '' ? substr_count(old('meta_image'), ',') + 1  : '' }}</span> {{ __('file chosen') }}</span>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            {{ __('Choose File') }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="selected-media-box">
                                                    @if(old('meta_image') != null)
                                                        <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                             data-id="{{ old('meta_image') }}">
                                                            @php
                                                                $media = \App\Models\Media::find(old('meta_image'));
                                                            @endphp
                                                            @if(@is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                                <img
                                                                    src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
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
                                                                alt="brand-logo" class="img-thumbnail logo-profile">
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    @if(Sentinel::getUser()->sellerProfile->verified_at != null)
                        <div class="bottom-button">
                            <button type="submit" name="status" value="unpublished" class="btn btn-outline-info"
                                    tabindex="4">
                                {{ __('Save & Unpublish') }}
                            </button>
                            <button type="submit" name="status" value="published" class="btn btn-outline-primary"
                                    tabindex="4">
                                {{ __('Save & Publish') }}
                            </button>
                        </div>
                    @endif
                </div>
            </form>
        </div>
    </section>
    @include('admin.common.selector-modal')
@endsection

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}">
    <link rel="stylesheet" href="{{ static_asset('admin/css/daterangepicker.css') }}">
@endsection
@push('page-script')
    <script src="{{ static_asset('admin/js/summernote-bs4.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker.min.js') }}"></script>
@endpush
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
    <script type="text/javascript">
        $(function () {
            var toAdd = $('.daterange-cus');
            toAdd.daterangepicker({
                autoUpdateInput: false,
                timePicker: true,
                locale: {
                    cancelLabel: '{{ __('Clear') }}',
                    format: 'M-DD-YYYY hh:mm A'
                }
            });
            toAdd.on('apply.daterangepicker', function (ev, picker) {
                $(this).val(picker.startDate.format('MM-DD-YYYY hh:mm A') + ' - ' + picker.endDate.format('MM-DD-YYYY hh:mm A'));
            });
            toAdd.on('cancel.daterangepicker', function () {
                $(this).val('');
            });
            $(document).ready(function () {
                $(document).on('change', '#description_images', function () {

                    let input = this;

                    if (input.files) {
                        $('#description_image_modal').empty();
                        var filesAmount = input.files.length;

                        for (let i = 0; i < filesAmount; i++) {
                            var reader = new FileReader();

                            reader.onload = function(event) {
                                $($.parseHTML('<img class="description_image">')).attr('src', event.target.result).appendTo('#description_image_modal');
                            }

                            reader.readAsDataURL(input.files[i]);
                        }
                    }
                })
            })

        });
    </script>
@endpush
