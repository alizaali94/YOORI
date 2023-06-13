@extends('admin.partials.master')

@section('title')
    {{ __('Add') }} {{ __('Wholesale Product') }}
@endsection
@section('wholesale')
    active
@endsection
@section('wholesale_product_create')
    active
@endsection

@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">
                        {{ __('Add Wholesale Product') }}
                    </h2>

                </div>
                <div class="buttons add-button">
                    <a href="{{ old('r') != '' ? old('r') : (@$r ? $r : url()->previous() )}}"
                       class="btn btn-outline-primary"><i class='bx bx-arrow-back'></i>{{ __('Back') }}</a>
                </div>
            </div>

            <form action="{{ route('wholesale.product.create.post') }}" method="post" enctype="multipart/form-data"
                  id="variant">
                @csrf
                <div class="col-12 col-sm-12 col-md-8 col-lg-9 middle">
                    <div class="mb-3 bg-white px-4 py-2">
                        <ul class="nav nav-pills" id="myTab3" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link bar active {{ has_key(['name','category','brand','unit','minimum_order_quantity','barcode','tags','slug'],$errors) ? 'error' : '' }}" id="product-info-tab" data-toggle="tab" href="#product-info" role="tab"
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
                                                    'sku','current_stock','colors','contact_name','email','phone_no','address','others'],$errors) ? 'error' : '' }}"
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
                            <li class="nav-item">
                                <a class="nav-link bar {{ has_key(['shipping_type','shipping_fee','shipping_fee_depend_on_quantity','cash_on_delivery','is_digital','estimated_shipping_days','product_file'],$errors) ? 'error' : '' }} }}" id="shipping-tab" data-toggle="tab" href="#shipping" role="tab"
                                   aria-controls="profile"
                                   aria-selected="false">{{ __('Shipping Info') }}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link bar {{ has_key(['campaign','campaign_discount','campaign_discount_type','is_refundable','is_featured','todays_deal','external_link'],$errors) ? 'error' : '' }}" id="others-tab" data-toggle="tab" href="#others"
                                   role="tab" aria-controls="contact"
                                   aria-selected="false">{{ __('Others') }}</a>
                            </li>
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
                                        <h4>{{ __('Product Price') }}</h4>
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
                                        <div class="section-title mt-0">{{ __('Vat & Tax Type') }}</div>
                                        @if(settingHelper('vat_and_tax_type') == 'product_base')
                                            <div class="form-group">
                                                <label for="vat_taxes">{{ __('Select') }}</label>
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
                                            </div>
                                        @else
                                            {{ __('Product base VAT & Tax is disabled. Configure your VAT & Tax here') }} <a
                                                href="{{ route('vat.tax') }}">{{ __('VAT & Tax Configuration') }}</a>
                                        @endif
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{ __('Product Stock') }}</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="without-variant">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group mt-2">
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
                                                    <div class="form-group mt-2">
                                                        <label for="stock_visibility">{{ __('Select Visibility') }} *</label>
                                                        <select class="form-control selectric" name="stock_visibility" id="stock_visibility">
                                                            <option
                                                                value="hide_stock" {{ old('stock_visibility') == 'hide_stock' ? 'selected' : '' }}>{{ __('Hide Stock') }}</option>
                                                            <option
                                                                value="visible_with_quantity" {{ old('stock_visibility') == 'visible_with_quantity' ? 'selected' : ''}}>{{ __('Visible with quantity') }}</option>
                                                            <option
                                                                value="visible_with_te t" {{ old('stock_visibility') == 'visible_with_text' ? 'selected' : '' }}>{{ __('Visible with text') }}</option>
                                                        </select>
                                                        @if ($errors->has('stock_visibility'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('stock_visibility') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
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
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{ __('Wholesale Price') }}</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="form-inline">
                                            <div class="drag-brop-menu" id="drag-brop-menu">
                                                @if(old('wholesaleprice'))
                                                    @foreach(old('wholesaleprice') as $key => $wholesale)
                                                        @php
                                                            $old_min_qty = old('min_qty')[$key];
                                                            $old_max_qty = old('max_qty')[$key];
                                                            $price = $wholesale;
                                                        @endphp
                                                        <div class="menu-item" data-id="1">
                                                            <input type="hidden" class="" name="is_wholesale" value="1">
                                                            <input type="number" class="form-control mb-2 mr-sm-2 wholesale_min_qty" data-id="1" name="min_qty[]" value="{{ @$old_min_qty }}" min="0" placeholder="{{__('Minimum QTY')}}">
                                                            <input type="number" class="form-control mb-2 mr-sm-2 wholesale_max_qty" data-id="1" name="max_qty[]" value="{{ @$old_max_qty }}" min="0" placeholder="{{__('Maximum QTY')}}">
                                                            <input type="number" class="form-control mb-2 mr-sm-2 wholesale_min_price" id="link" name="wholesaleprice[]" value="{{ @$price }}" min="0" step="any" placeholder="{{__('Price per piece')}}">
                                                            @if($key > 0)
                                                                <button type="button" class="btn btn-icon btn-sm btn-danger remove-menu-row" onclick="$(this).parent().remove()"><i class="bx bx-trash"></i></button>
                                                            @endif
                                                        </div>
                                                    @endforeach
                                                @else
                                                    <div class="menu-item" data-id="1">
                                                        <input type="hidden" class="" name="is_wholesale" value="1">
                                                        <input type="number" class="form-control mb-2 mr-sm-2 wholesale_min_qty" data-id="1" name="min_qty[]" value="1" readonly min="0" placeholder="{{__('Minimum QTY')}}">
                                                        <input type="number" class="form-control mb-2 mr-sm-2 wholesale_max_qty" data-id="1" name="max_qty[]" min="0" placeholder="{{__('Maximum QTY')}}">
                                                        <input type="number" class="form-control mb-2 mr-sm-2 wholesale_min_price" id="link" name="wholesaleprice[]" value="{{ @$price }}" min="0" step="any" placeholder="{{__('Price per piece')}}">
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="row ">
                                            <div class="col-md-6">
                                                <a href="javascript:void(0)" class="btn btn-outline-primary ml-2" id="add-item">{{ __('Add More') }}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="description-and-specification" role="tabpane6" aria-labelledby="description-and-specification-tab">
                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{ __('Product Description') }}</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="form-group short-des">
                                            <label for="short_description" class="form-control-label">{{ __('Short Description') }}</label>
                                            <div>
                                        <textarea type="text" class="form-control" name="short_description"
                                                  id="short_description">{{ old('short_description') ? old('short_description') :'' }}</textarea>
                                            </div>
                                            <p id="total-caracteres">200</p>
                                            @if ($errors->has('short_description'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('short_description') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="description" class="form-control-label">{{ __('Long Description') }}</label>
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
                                                     data-selection="single"
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
                            <div class="tab-pane fade" id="shipping" role="tabpane2" aria-labelledby="shipping-tab">
                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{__('Shipping Info')}}</h4>
                                    </div>
                                    <div class="card-body extra-padding">
                                        @if(settingHelper('shipping_fee_type') == 'product_base')
                                            <div class="section-title">
                                                {{ __('Shipping Fee') }}
                                            </div>
                                            <div class="form-group mt-2">
                                                <label for="shipping_type">{{ __('Shipping Fee Type') }}</label>
                                                <select class="form-control selectric shipping-type" name="shipping_type"
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
                                            <div class="shipping-cost {{ old('shipping_type') == 'free_shipping' ? 'd-none' : '' }}">
                                                <div class="form-group mt-2">
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
                                        @else
                                            {{ __('Product base shipping fee is disabled. Configure your shipping fee here') }}
                                            <a href="{{ route('shipping-configuration') }}">{{ __('Shipping Configuration') }}</a>
                                        @endif
                                        <div class="section-title mt-0">{{ __('Estimated Shipping Days & COD') }}</div>
                                        <div class="form-group row mt-2">
                                            <label class="col-md-5 col-from-label">{{ __('Cash On Delivery') }}</label>
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
                                                   id="estimated_shipping_days" class="form-control" placeholder="0">
                                            @if ($errors->has('estimated_shipping_days'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('estimated_shipping_days') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="others" role="tabpane3" aria-labelledby="others-tab">
                                <div class="card">
                                    <div class="card-header extra-padding">
                                        <h4>{{__('Statuses')}}</h4>
                                    </div>
                                    <div class="card-body extra-padding">
                                        @if(addon_is_activated('refund'))
                                            <div class="form-group row mt-2">
                                                <label class="col-md-5 col-from-label">{{ __('Refundable') }}</label>
                                                <div class="col-md-7">
                                                    <label class="custom-switch">
                                                        <input  type="checkbox" value="1" name="is_refundable"
                                                                {{ old('is_refundable') == 1 ? 'checked' : '' }}
                                                                class="custom-switch-input">
                                                        <span class="custom-switch-indicator"></span>
                                                        <span class="custom-switch-description">{{ __('Is Product Refundable') }}</span>
                                                    </label>
                                                    @if ($errors->has('is_refundable'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('is_refundable') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        @endif
                                        <div class="form-group row mt-2">
                                            <label class="col-md-5 col-from-label">{{ __('Featured') }}</label>
                                            <div class="col-md-7">
                                                <label class="custom-switch">
                                                    <input type="checkbox" value="1" name="is_featured"
                                                           {{ old('is_featured') == 1 ? 'checked' : '' }}
                                                           class="custom-switch-input">
                                                    <span class="custom-switch-indicator"></span>
                                                    <span class="custom-switch-description">{{ __('Add to Featured') }}</span>
                                                </label>
                                                @if ($errors->has('is_featured'))
                                                    <div class="invalid-feedback">
                                                        <p>{{ $errors->first('is_featured') }}</p>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="form-group row mt-2">
                                            <label class="col-md-5 col-from-label">{{ __("Today's Deal") }}</label>
                                            <div class="col-md-7">
                                                <label class="custom-switch">
                                                    <input type="checkbox" value="1" name="todays_deal"
                                                           {{ old('todays_deal') == 1 ? 'checked' : '' }}
                                                           class="custom-switch-input">
                                                    <span class="custom-switch-indicator"></span>
                                                    <span
                                                        class="custom-switch-description">{{ __("Add to Today's Deal") }}</span>
                                                </label>
                                                @if ($errors->has('todays_deal'))
                                                    <div class="invalid-feedback">
                                                        <p>{{ $errors->first('todays_deal') }}</p>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            </div>
                        </div>
                    </div>
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
                </div>
            </form>
        </div>
    </section>
    @include('admin.common.selector-modal')
    @include('admin.wholesale-product.pricing')
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
