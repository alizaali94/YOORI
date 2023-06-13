@if($type == 'banner')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __('Banner') }}</h4>
                </a>
                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <div class="card-body mobile_banner banner-{{ $content_count }}">
                <div class="alert alert-light alert-has-icon p-0">
                    <div class="alert-icon pl-2"><i class="bx bx-bulb"></i></div>
                    <div class="alert-body">
                        @php
                            $banner_contetns = @$contents ? $contents['banner'] : [];
                        @endphp
                        <div class="form-text">{{ __('Recommended banner ratio 16:9') }}</div>
                    </div>
                </div>
                <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
                <input type="hidden" name="contents[]" value="banner">
                @if(isset($contents))
                    @foreach($banner_contetns['thumbnail'] as $key => $thumbnail)
                        <div class="banner-item mb-2">
                            <div class="item row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="selected-media-box">
                                                    <div class="mt-2 gallery gallery-md d-flex">
                                                        @php
                                                            $thumb = \App\Models\Media::find($thumbnail);
                                                        @endphp
                                                        @if($thumb)
                                                            <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                                 data-id="{{ $thumb->id }}">
                                                                @if(@is_file_exists($thumb->image_variants['image_72x72'], $thumb->image_variants['storage']))
                                                                    <img src="{{ get_media($thumb->image_variants['image_72x72'], $thumb->image_variants['storage'])}}"
                                                                         alt="img-thumbnail"
                                                                         class="img-thumbnail logo-profile">
                                                                @else
                                                                    <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
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
                                                                <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                     data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                     alt="brand-logo"
                                                                     class="img-thumbnail logo-profile">
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                                     data-selection="single"
                                                     data-target="#galleryModal" data-dismiss="modal">
                                                    <input type="hidden" name="banner_thumbnail_{{ $content_count }}[]"
                                                           class="image-selected" value="{{ $thumbnail }}">
                                                    <span class="form-control"><span
                                                                class="counter">
                                                    {{ $thumbnail != '' ? substr_count($thumbnail, ',') + 1 : 0 }}
                                                </span> {{ __('file chosen') }}</span>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            {{ __('Choose File') }}
                                                        </div>
                                                    </div>
                                                </div>
                                                @if(isset($mobile) && $mobile == 1)
                                                    <div class="row mt-3">
                                                        <div class="col-lg-6">
                                                            <div class="form-group">
                                                                <label for="action_type"
                                                                       class="form-control-label">{{ __('Action Type') }}</label>
                                                                <div class="custom-file">
                                                                    @php
                                                                        $action_type = 'product';
                                                                    @endphp
                                                                    <select class="form-control selectric action_type"
                                                                            data-count="{{ $content_count }}"
                                                                            name="action_type_{{ $content_count }}[]">
                                                                        <option value="product" {{ arrayCheck('action_type',$banner_contetns) && arrayCheck($key,$banner_contetns['action_type']) && $banner_contetns['action_type'][$key] == 'product' ? 'selected' : '' }}>{{__('Product')}}</option>
                                                                        <option value="category" {{ arrayCheck('action_type',$banner_contetns) && arrayCheck($key,$banner_contetns['action_type']) && $banner_contetns['action_type'][$key] == 'category' ? 'selected' : '' }}>{{__('Category')}}</option>
                                                                        <option value="brand" {{ arrayCheck('action_type',$banner_contetns) && arrayCheck($key,$banner_contetns['action_type']) && $banner_contetns['action_type'][$key] == 'brand' ? 'selected' : '' }}>{{__('Brand')}}</option>
                                                                        @if(settingHelper('seller_system') == 1)
                                                                            <option value="seller" {{ arrayCheck('action_type',$banner_contetns) && arrayCheck($key,$banner_contetns['action_type']) && $banner_contetns['action_type'][$key] == 'seller' ? 'selected' : '' }}>{{__('Seller')}}</option>
                                                                        @endif
                                                                        <option value="blog" {{ arrayCheck('action_type',$banner_contetns) && arrayCheck($key,$banner_contetns['action_type']) && $banner_contetns['action_type'][$key] == 'blog' ? 'selected' : '' }}>{{__('Blog')}}</option>
                                                                        {{--                                                                        <option value="url" {{ isset($banner_contetns['action_type'][$key]) && $banner_contetns['action_type'][$key] == 'url' ? 'selected' : '' }}>{{__('URL')}}</option>--}}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="productDiv" id="product_{{ $content_count }}"
                                                                 style="{{ arrayCheck('action_type',$banner_contetns) && arrayCheck($key,$banner_contetns['action_type']) && $banner_contetns['action_type'][$key] == 'product' ? '' : 'display:none' }}">
                                                                <div class="form-group">
                                                                    <label>{{ __('Action To') }}</label>
                                                                    <select class="product-by-ajax product-by-ajax form-control select2"
                                                                            id="product_id_{{ $content_count }}"
                                                                            name="product_id_{{ $content_count }}[{{ $key }}]"
                                                                            aria-hidden="true">
                                                                        @if(arrayCheck('action_to',$banner_contetns) && arrayCheck($key,$banner_contetns['action_to'][$key]))
                                                                            @php
                                                                                $product = \App\Models\Product::find($banner_contetns['action_to'][$key][$key]);
                                                                            @endphp
                                                                            @if($product)
                                                                                <option value="{{ $product->id }}"
                                                                                        selected>{{ $product->getTranslation('name',app()->getLocale()) }}</option>
                                                                            @endif
                                                                        @endif
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="categoryDiv" id="category_{{ $content_count }}"
                                                                 style="
                                                            {{ arrayCheck('action_type',$banner_contetns) && arrayCheck($key,$banner_contetns['action_type']) && $banner_contetns['action_type'][$key] == 'category' ? '' : 'display:none' }}">
                                                                <div class="form-group">
                                                                    <label>{{ __('Action To') }}</label>
                                                                    <select class="filter-categories-by-ajax form-control"
                                                                            name="category_id_{{ $content_count }}[{{ $key }}]"
                                                                            aria-hidden="true"
                                                                            id="category_id_{{ $content_count }}">
                                                                        @if(arrayCheck('action_to',$banner_contetns) && arrayCheck($key,$banner_contetns['action_to'][$key]))
                                                                            @php
                                                                                $category = \App\Models\Category::find($banner_contetns['action_to'][$key][$key]);
                                                                            @endphp
                                                                            @if($category)
                                                                                <option value="{{ $category->id }}"
                                                                                        selected>{{ $category->getTranslation('title',app()->getLocale()) }}</option>
                                                                            @endif
                                                                        @endif
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="blogDiv" id="blog_{{ $content_count }}" style="
                                                            {{ arrayCheck('action_type',$banner_contetns) && arrayCheck($key,$banner_contetns['action_type']) && $banner_contetns['action_type'][$key] == 'blog' ? '' : 'display:none' }}">
                                                                <div class="form-group">
                                                                    <label>{{ __('Action To') }}</label>
                                                                    <select class="filter-blogs-by-ajax form-control"
                                                                            name="blog_id_{{ $content_count }}[{{ $key }}]"
                                                                            aria-hidden="true" id="blog_id">
                                                                        @if(arrayCheck('action_to',$banner_contetns) && arrayCheck($key,$banner_contetns['action_to'][$key]))
                                                                            @php
                                                                                $blog = \App\Models\Blog::find($banner_contetns['action_to'][$key][$key]);
                                                                            @endphp

                                                                            @if($blog)
                                                                                <option value="{{ $blog->id }}"
                                                                                        selected>{{ $blog->getTranslation('title',app()->getLocale()) }}</option>
                                                                            @endif
                                                                        @endif
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="brandDiv" id="brand_{{ $content_count }}" style="{{
                                                                        arrayCheck('action_type',$banner_contetns) && arrayCheck($key,$banner_contetns['action_type']) && $banner_contetns['action_type'][$key] == 'brand' ? '' : 'display:none' }}">
                                                                <div class="form-group">
                                                                    <label>{{ __('Action To') }}</label>
                                                                    <select class="form-control select2"
                                                                            name="brand_id_{{ $content_count }}[{{ $key }}]"
                                                                            id="brand_id_{{ $content_count }}">
                                                                        <option value="">{{ __('Select Brand') }}</option>
                                                                        @foreach($brands as $brand)
                                                                            <option
                                                                                    value="{{ $brand->id }}" {{ arrayCheck('action_type',$banner_contetns) && arrayCheck($key,$banner_contetns['action_type']) && $banner_contetns['action_type'][$key] == 'brand' && $brand->id == $banner_contetns['action_to'][$key][$key] ? 'selected' : '' }}>{{ $brand->getTranslation('title', App::getLocale()) }}</option>
                                                                        @endforeach
                                                                    </select>

                                                                    @if ($errors->has('brand'))
                                                                        <div class="invalid-feedback">
                                                                            <p>{{ $errors->first('brand') }}</p>
                                                                        </div>
                                                                    @endif
                                                                </div>
                                                            </div>
                                                            @if(settingHelper('seller_system') == 1)
                                                                <div class="sellerDiv" id="seller_{{ $content_count }}"
                                                                     style="{{
                                                                            arrayCheck('action_type',$banner_contetns) && arrayCheck($key,$banner_contetns['action_type']) && $banner_contetns['action_type'][$key] == 'seller' ? '' : 'display:none' }}">
                                                                    <div class="form-group">
                                                                        <label>{{ __('Action To') }}</label>
                                                                        <select class="seller-by-ajax form-control select2"
                                                                                name="sl_{{ $content_count }}[{{ $key }}]"
                                                                                aria-hidden="true">
                                                                            @if(arrayCheck('action_to',$banner_contetns) && arrayCheck($key,$banner_contetns['action_to'][$key]))
                                                                                @php
                                                                                    $seller = \App\Models\SellerProfile::find($banner_contetns['action_to'][$key][$key]);
                                                                                @endphp
                                                                                @if($seller)
                                                                                    <option value="{{ $seller->id }}"
                                                                                            selected>{{ $seller->shop_name }}</option>
                                                                                @endif
                                                                            @endif
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                @else
                                                    <input type="text" class="form-control mt-2 mr-sm-2 menu-url-input"
                                                           id="link" name="banner_url_{{ $content_count }}[]"
                                                           value="{{ $banner_contetns['url'][$key] ? $banner_contetns['url'][$key] : '/' }}"
                                                           placeholder="{{__('Link/Slug')}}">
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <button type="button" class="btn btn-outline-danger btn-circle mb-2 remove-menu-row"
                                            data-type="banner-image">
                                        <i class="bx bx-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @else
                    @php
                        $type         = 'banner-image';
                        $for_content  = $content_count;
                    @endphp
                    @include('admin.store-front.home-page-contents', compact('type','content_count','for_content'))
                @endif

            </div>
            <div class="row">
                <div class="col-md-6 ml-4 mb-2">
                    <a href="javaScript:void(0)"
                       class="btn btn-outline-secondary add-home-content {{ @$key >= 3 ? 'd-none' : '' }}"
                       data-type="banner-image" data-area="banner-{{ $content_count }}"
                       data-content="{{ $content_count }}"
                       class="btn btn-outline-primary"><i class="bx bx-plus"></i> {{ __('Add New') }}</a>
                </div>
            </div>
        </div>
    </div>
@elseif($type == 'banner-image')
    <div class="banner-item mb-2 content-{{ $content_count }}">
        <div class="item row">
            <div class="col-md-10">
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="selected-media-box">
                                <div class="mt-2 gallery gallery-md d-flex">
                                    <div class="selected-media mr-2 mb-2 mt-3 ml-0">
                                        <img
                                                src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                alt="brand-logo" class="img-thumbnail logo-profile">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-10">
                            <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                 data-selection="single"
                                 data-target="#galleryModal" data-dismiss="modal">
                                <input type="hidden" name="banner_thumbnail_{{ $for_content }}[]"
                                       class="image-selected">
                                <span class="form-control"><span
                                            class="counter">0</span> {{ __('file chosen') }}</span>
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        {{ __('Choose File') }}
                                    </div>
                                </div>
                            </div>
                            @if(isset($mobile) && $mobile == 1)
                                <div class="row mt-3">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="action_type"
                                                   class="form-control-label">{{ __('Action Type') }}</label>
                                            <div class="custom-file">
                                                @php
                                                    $action_type = 'product';
                                                @endphp
                                                <select class="form-control selectric action_type"
                                                        data-count="{{ $content_count }}"
                                                        name="action_type_{{ $for_content }}[]">
                                                    <option value="product">{{__('Product')}}</option>
                                                    <option value="category">{{__('Category')}}</option>
                                                    <option value="brand">{{__('Brand')}}</option>
                                                    @if(settingHelper('seller_system') == 1)
                                                        <option value="seller">{{__('Seller')}}</option>
                                                    @endif
                                                    <option value="blog">{{__('Blog')}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="productDiv" id="product_{{ $content_count }}"
                                             style="{{ old('action_type') ? (old('action_type') == 'product' ? '' : 'display:none') : (isset($edit) ? ($edit->action_type == 'product' ? '': 'display:none') : '')}}">
                                            <div class="form-group">
                                                <label>{{ __('Action To') }}</label>
                                                <input type="hidden" name="for_mobile" value="for_mobile"/>
                                                <select class="product-by-ajax form-control select2"
                                                        id="product_id_{{ $content_count }}"
                                                        name="product_id_{{ $for_content }}[]" aria-hidden="true">
                                                    <option value="">{{ __('Product') }}</option>
                                                </select>
                                                @if ($errors->has('product_id'))
                                                    <div class="invalid-feedback">
                                                        <p>{{ $errors->first('product_id') }}</p>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="categoryDiv" id="category_{{ $content_count }}" style="{{ old('action_type') ? (old('action_type') == 'category' ? '' : 'display:none')
                                                        : (isset($edit) ? ($edit->action_type == 'category' ? '': 'display:none') : 'display:none')}}">
                                            <div class="form-group">
                                                <label>{{ __('Action To') }}</label>
                                                <select class="filter-categories-by-ajax form-control select2"
                                                        name="category_id_{{ $for_content }}[]" aria-hidden="true"
                                                        id="category_id_{{ $content_count }}">
                                                    <option value="">{{ __('Category') }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="blogDiv" id="blog_{{ $content_count }}" style="{{ old('action_type') ? (old('action_type') == 'blog' ? '' : 'display:none')
                                                        : (isset($edit) ? ($edit->action_type == 'blog' ? '': 'display:none') : 'display:none')}}">
                                            <div class="form-group">
                                                <label>{{ __('Action To') }}</label>
                                                <select class="filter-blogs-by-ajax form-control select2"
                                                        name="blog_id_{{ $for_content }}[]"
                                                        aria-hidden="true" id="blog_id">
                                                    <option value="">{{ __('Blog') }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="brandDiv" id="brand_{{ $content_count }}" style="{{ old('action_type') ? (old('action_type') == 'brand' ? '' : 'display:none')
                                                        : (isset($edit) ? ($edit->action_type == 'brand' ? '': 'display:none') : 'display:none')}}">
                                            <div class="form-group">
                                                <label>{{ __('Action To') }}</label>
                                                <select class="form-control select2"
                                                        name="brand_id_{{ $for_content }}[]"
                                                        id="brand_id_{{ $content_count }}">
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
                                        @if(settingHelper('seller_system') == 1)
                                            <div class="sellerDiv" id="seller_{{ $content_count }}" style="{{ old('action_type') ? (old('action_type') == 'seller' ? '' : 'display:none')
                                                            : (isset($edit) ? ($edit->action_type == 'seller' ? '': 'display:none') : 'display:none')}}">
                                                <div class="form-group">
                                                    <label>{{ __('Action To') }}</label>
                                                    <select class="seller-by-ajax form-control select2"
                                                            name="sl_{{ $for_content }}[]"
                                                            aria-hidden="true">
                                                        <option selected value=""> {{ __('seller') }} </option>
                                                    </select>
                                                </div>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            @else
                                <input type="text" class="form-control mt-2 mr-sm-2 menu-url-input"
                                       id="link" name="banner_url_{{ $for_content }}[]" value="{{ '/' }}"
                                       placeholder="{{__('Link/Slug')}}">
                            @endif
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <button type="button" class="btn btn-outline-danger btn-circle mb-2 remove-menu-row"
                        data-type="banner-image">
                    <i class="bx bx-trash"></i></button>
            </div>
        </div>
    </div>
@elseif($type == 'campaign')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __('Campaigns') }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <div class="card-body campaign-{{ $content_count }}">
                <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
                <input type="hidden" name="contents[]" value="campaign">
                <select class="form-control select2" name="campaign_{{$content_count}}[]" required multiple>
                    <option value="" disabled>{{ __('Select Campaigns') }}</option>
                    @php
                        $date = date('Y-m-d h:i:s');
                        $campaigns = \App\Models\Campaign::latest()->where('status', 1)->where('start_date','<=',now())->where('end_date','>=',now())->get();
                    @endphp
                    @foreach($campaigns as $campaign)
                        <option
                                value="{{ $campaign->id }}" {{ @$contents ? (in_array($campaign->id, $contents['campaign']) ? 'selected' : '') : '' }}>{{ $campaign->getTranslation('title', \App::getLocale()) }}</option>
                    @endforeach
                </select>
            </div>
        </div>
    </div>
@elseif($type == 'popular_category')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __('Popular Categories') }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <div class="card-body campaign-{{ $content_count }}">
                <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
                <input type="hidden" name="contents[]" value="popular_category">
                <select class="form-control select2 lang" name="popular_category_{{ $content_count }}[]" multiple
                        required>
                    <option value="">{{ __('Select Category') }}</option>
                    @php
                        $categories = \App\Models\Category::with('childCategories.categories')->where('parent_id', null)->where('status',1)->get();
                    @endphp
                    @foreach($categories as $key => $category)
                        <option
                                value="{{ $category->id }}" {{ @$contents ? (in_array($category->id, $contents['popular_category']) ? 'selected' : '') : '' }}>{{ $category->getTranslation('title', \App::getLocale()) }}</option>
                        @foreach ($category->childCategories as $childCategory)
                            @include('admin.products.categories.child-categories', ['child_category' => $childCategory, 'parent' => @$contents ? @$contents['popular_category'] : array()])
                        @endforeach
                    @endforeach
                </select>
            </div>
        </div>
    </div>
@elseif($type == 'top_category')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __('Top Categories') }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <div class="card-body campaign-{{ $content_count }}">
                <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
                <input type="hidden" name="contents[]" value="top_category">
                <select class="form-control select2 lang" name="top_category_{{ $content_count }}[]" multiple required>
                    <option value="">{{ __('Select Category') }}</option>
                    @php
                        $categories = \App\Models\Category::with('childCategories.categories')->where('parent_id', null)->where('status',1)->get();
                    @endphp
                    @foreach($categories as $key => $category)
                        <option value="{{ $category->id }}" {{ @$contents ? (in_array($category->id, $contents['top_category']) ? 'selected' : '') : '' }}>{{ $category->getTranslation('title', \App::getLocale()) }}</option>
                        @foreach ($category->childCategories as $childCategory)
                            @include('admin.products.categories.child-categories', ['child_category' => $childCategory, 'parent' => @$contents ? @$contents['top_category'] : array()])
                        @endforeach
                    @endforeach
                </select>
            </div>
        </div>
    </div>
@elseif($type == 'todays_deal')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between border-0">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __("Today's Deal") }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
            <input type="hidden" name="contents[]" value="todays_deal">
            <input type="hidden" name="todays_deal_{{ $content_count }}" value="{{ $content_count }}">
        </div>
    </div>
@elseif($type == 'latest_product')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between border-0">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __("Latest Products") }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
            <input type="hidden" name="contents[]" value="latest_product">
            <input type="hidden" name="latest_product_{{ $content_count }}" value="{{ $content_count }}">
        </div>
    </div>
@elseif($type == 'flash_deal')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between border-0">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __("Flash Deal") }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
            <input type="hidden" name="contents[]" value="flash_deal">
            <input type="hidden" name="flash_deal_{{ $content_count }}" value="{{ $content_count }}">
        </div>
    </div>
@elseif($type == 'best_selling_products')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between border-0">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __("Best Selling Products") }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
            <input type="hidden" name="contents[]" value="best_selling_products">
            <input type="hidden" name="best_selling_products_{{ $content_count }}[]" value="{{ $content_count }}">
        </div>
    </div>
@elseif($type == 'category_section')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __("Category Sections") }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <div class="card-body campaign-{{ $content_count }}">
                <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
                <input type="hidden" name="contents[]" value="category_section">
                <input type="hidden" name="category_section_{{ $content_count }}[]" value="{{ $content_count }}">
                <div class="form-group">
                    <select class="form-control select2 lang" name="category_section_{{ $content_count }}_category"
                            required>
                        <option value="">{{ __('Select Category') }}</option>
                        @php
                            $categories = \App\Models\Category::with('childCategories.categories')->where('parent_id', null)->where('status',1)->get();
                        @endphp
                        @foreach($categories as $key => $category)
                            <option value="{{ $category->id }}" {{ @$contents ? ($category->id ==  $contents['category_section']['category'] ? 'selected' : '') : '' }}>
                                {{ $category->getTranslation('title', \App::getLocale()) }}
                            </option>
                            @foreach ($category->childCategories as $childCategory)
                                @include('admin.products.categories.child-categories', ['child_category' => $childCategory, 'parent' => @$contents ? $contents['category_section']['category'] : ''])
                            @endforeach
                        @endforeach
                    </select>
                </div>
                <div class="banner-item mb-2">
                    <div class="item row">
                        <div class="col-md-10">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <div class="selected-media-box">
                                            <div class="mt-2 gallery gallery-md d-flex">
                                                @php
                                                    $thumb = '';
                                                        if (isset($contents)):
                                                            $thumb = \App\Models\Media::find($contents['category_section']['banner']);
                                                        endif;
                                                @endphp
                                                @if($thumb)
                                                    <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                         data-id="{{ $thumb->id }}">
                                                        @if(@is_file_exists($thumb->image_variants['image_72x72'], $thumb->image_variants['storage']))
                                                            <img src="{{ get_media($thumb->image_variants['image_72x72'], $thumb->image_variants['storage'])}}"
                                                                 alt="img-thumbnail"
                                                                 class="img-thumbnail logo-profile">
                                                        @else
                                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
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
                                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                             data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                             alt="brand-logo" class="img-thumbnail logo-profile">
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-10">
                                        <label for="banner">{{ __('Banner') }} (405 * 745)</label>
                                        <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                             data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="category_section_{{ $content_count }}_banner"
                                                   id="banner"
                                                   class="image-selected"
                                                   value="{{ @$contents ? $contents['category_section']['banner'] : '' }}">
                                            <span class="form-control"><span
                                                        class="counter">
                                                    {{ @$contents['category_section']['banner'] != '' ? substr_count($contents['category_section']['banner'], ',') + 1 : 0 }}
                                                </span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        <label for="banner_url" class="mt-2">{{ __('Banner URL') }}</label>
                                        <input type="text" class="form-control mr-sm-2 menu-url-input"
                                               id="banner_url" name="category_section_{{ $content_count }}_banner_url"
                                               value="{{ @$contents ? $contents['category_section']['banner_url'] : '/' }}"
                                               placeholder="{{__('Link/Slug')}}">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@elseif($type == 'offer_ending_soon')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between border-0">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __("Offer Ending Soon") }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <div class="card-body campaign-{{ $content_count }}">
                <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
                <input type="hidden" name="contents[]" value="offer_ending_soon">
                <input type="hidden" name="offer_ending_soon_{{ $content_count }}[]" value="{{ $content_count }}">
                <div class="banner-item mb-2">
                    <div class="item row">
                        <div class="col-md-10">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-2">
                                        <div class="selected-media-box">
                                            <div class="mt-2 gallery gallery-md d-flex">
                                                @php
                                                    $thumb = '';
                                                        if (isset($contents['offer_ending_soon']['banner'])):
                                                            $thumb = \App\Models\Media::find($contents['offer_ending_soon']['banner']);
                                                        endif;
                                                @endphp
                                                @if($thumb)
                                                    <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                         data-id="{{ $thumb->id }}">
                                                        @if(@is_file_exists($thumb->image_variants['image_72x72'], $thumb->image_variants['storage']))
                                                            <img src="{{ get_media($thumb->image_variants['image_72x72'], $thumb->image_variants['storage'])}}"
                                                                 alt="img-thumbnail"
                                                                 class="img-thumbnail logo-profile">
                                                        @else
                                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
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
                                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                             data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                             alt="brand-logo" class="img-thumbnail logo-profile">
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-10">
                                        <label for="banner">{{ __('Banner') }} (405 * 745)</label>
                                        <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                             data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="offer_ending_soon_{{ $content_count }}_banner"
                                                   id="banner"
                                                   class="image-selected"
                                                   value="{{ @$contents ? @$contents['offer_ending_soon']['banner'] : '' }}">
                                            <span class="form-control"><span
                                                        class="counter">
                                                    {{ @$contents['offer_ending_soon']['banner'] != '' ? substr_count($contents['offer_ending_soon']['banner'], ',') + 1 : 0 }}
                                                </span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        <label for="banner_url" class="mt-2">{{ __('Banner URL') }}</label>
                                        <input type="text" class="form-control mr-sm-2 menu-url-input"
                                               id="banner_url" name="offer_ending_soon_{{ $content_count }}_banner_url"
                                               value="{{ @$contents ? @$contents['offer_ending_soon']['banner_url'] : '/' }}"
                                               placeholder="{{__('Link/Slug')}}">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@elseif($type == 'latest_news')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between border-0">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __("Latest News") }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
            <input type="hidden" name="contents[]" value="latest_news">
            <input type="hidden" name="latest_news_{{ $content_count }}[]" value="{{ $content_count }}">
        </div>
    </div>
@elseif($type == 'popular_brands')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between border-0">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __("Popular Brands") }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
            <input type="hidden" name="contents[]" value="popular_brands">
            <input type="hidden" name="popular_brands_{{ $content_count }}[]" value="{{ $content_count }}">
        </div>
    </div>
@elseif($type == 'top_sellers')
    @if(settingHelper('seller_system') == 1)
        <div class="drag-brop-menu content-{{ $content_count }}">
            <div class="menu-item card" data-id="{{  $content_count }}">
                <div class="card-header d-flex justify-content-between border-0">
                    <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                        <h4>{{ __("Top Shops") }}</h4>
                    </a>

                    <button type="button" onclick="$(this).parent().parent().remove()"
                            class="btn remove-menu-row">
                        <i class="bx bx-trash"></i></button>
                </div>
                <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
                <input type="hidden" name="contents[]" value="top_sellers">
                <input type="hidden" name="top_sellers_{{ $content_count }}[]" value="{{ $content_count }}">
            </div>
        </div>
    @endif
@elseif($type == 'featured_sellers')
    @if(settingHelper('seller_system') == 1)
        <div class="drag-brop-menu content-{{ $content_count }}">
            <div class="menu-item card" data-id="{{  $content_count }}">
                <div class="card-header d-flex justify-content-between">
                    <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                        <h4>{{ __('Featured Shops') }}</h4>
                    </a>

                    <button type="button" onclick="$(this).parent().parent().remove()"
                            class="btn remove-menu-row">
                        <i class="bx bx-trash"></i></button>
                </div>
                <div class="card-body campaign-{{ $content_count }}">
                    <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
                    <input type="hidden" name="contents[]" value="featured_sellers">
                    <div class="limit-2-custom-message">
                        <select class="select2" style="width: 100%;" name="featured_sellers_{{ $content_count }}[]"
                                multiple required>
                            @php
                                $sellers = \App\Models\User::with('sellerProfile')->whereHas('sellerProfile',function ($query){
                                    $query->Available();
                                })->where('user_type', 'seller')->get();
                            @endphp
                            @foreach($sellers as $seller)
                                <option value="{{ $seller->id }}" {{ @$contents ? (in_array($seller->id, $contents['featured_sellers']) ? 'selected' : '') : '' }}>
                                    {{ @$seller->sellerProfile->shop_name.' ('.$seller->first_name.' '.$seller->last_name.')' }}
                                </option>
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>
        </div>
    @endif
@elseif($type == 'express_sellers')
    @if(settingHelper('seller_system') == 1)
        <div class="drag-brop-menu content-{{ $content_count }}">
            <div class="menu-item card" data-id="{{  $content_count }}">
                <div class="card-header d-flex justify-content-between">
                    <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                        <h4>{{ __('Express Shops') }}</h4>
                    </a>

                    <button type="button" onclick="$(this).parent().parent().remove()"
                            class="btn remove-menu-row">
                        <i class="bx bx-trash"></i></button>
                </div>
                <div class="card-body campaign-{{ $content_count }}">
                    <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
                    <input type="hidden" name="contents[]" value="express_sellers">
                    <div class="limit-4-custom-message">
                        <select class="select2" style="width: 100%;" name="express_sellers_{{ $content_count }}[]"
                                multiple required>
                            @php
                                $sellers = \App\Models\User::with('sellerProfile')->whereHas('sellerProfile',function ($query){
                                    $query->Available();
                                })->where('user_type', 'seller')->get();
                            @endphp
                            @foreach($sellers as $seller)
                                <option value="{{ $seller->id }}" {{ @$contents ? (in_array($seller->id, $contents['express_sellers']) ? 'selected' : '') : '' }}>
                                    {{ @$seller->sellerProfile->shop_name.' ('.$seller->first_name.' '.$seller->last_name.')' }}
                                </option>
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>
        </div>
    @endif
@elseif($type == 'best_sellers')
    @if(settingHelper('seller_system') == 1)
        <div class="drag-brop-menu content-{{ $content_count }}">
            <div class="menu-item card" data-id="{{  $content_count }}">
                <div class="card-header d-flex justify-content-between border-0">
                    <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                        <h4>{{ __("Best Shops") }}</h4>
                    </a>

                    <button type="button" onclick="$(this).parent().parent().remove()"
                            class="btn remove-menu-row">
                        <i class="bx bx-trash"></i></button>
                </div>
                <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
                <input type="hidden" name="contents[]" value="best_sellers">
                <input type="hidden" name="best_sellers_{{ $content_count }}[]" value="{{ $content_count }}">
            </div>
        </div>
    @endif
@elseif($type == 'download_section')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between border-0">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __("App Download Section") }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <div class="card-body download_section-{{ $content_count }}">
                <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
                <input type="hidden" name="contents[]" value="download_section">
                <input type="hidden" name="download_section_{{ $content_count }}[]" value="{{ $content_count }}">
                <div class="col-md-12">
                    <div class="form-group">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="selected-media-box">
                                        <div class="mt-2 gallery gallery-md d-flex">
                                            @php
                                                $thumb = '';
                                                    if (isset($contents)):
                                                        $thumb = \App\Models\Media::find($contents['download_section']['banner']);
                                                    endif;
                                            @endphp
                                            @if($thumb)
                                                <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                     data-id="{{ $thumb->id }}">
                                                    @if(@is_file_exists($thumb->image_variants['image_72x72'], $thumb->image_variants['storage']))
                                                        <img src="{{ get_media($thumb->image_variants['image_72x72'], $thumb->image_variants['storage'])}}"
                                                             alt="img-thumbnail"
                                                             class="img-thumbnail logo-profile">
                                                    @else
                                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
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
                                                    <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                         data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                         alt="brand-logo" class="img-thumbnail logo-profile">
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <label for="banner">{{ __('Banner') }} (405 * 745)</label>
                                    <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                         data-selection="single"
                                         data-target="#galleryModal" data-dismiss="modal">
                                        <input type="hidden" name="download_section_{{ $content_count }}_banner"
                                               id="banner"
                                               class="image-selected"
                                               value="{{ @$contents ? $contents['download_section']['banner'] : '' }}">
                                        <span class="form-control"><span
                                                    class="counter">
                                                    {{ @$contents['download_section']['banner'] != '' ? substr_count($contents['download_section']['banner'], ',') + 1 : 0 }}
                                                </span> {{ __('file chosen') }}</span>
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                {{ __('Choose File') }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="text">{{ __('Text') }} *</label>
                        <input type="text" name="download_section_{{ $content_count }}_text" id="text" required
                               value="{{ @$contents ? $contents['download_section']['text'] : '' }}"
                               class="form-control" placeholder="{{__('Text')}}">
                    </div>
                    <div class="form-group">
                        <label for="sub_text">{{ __('Sub-Text') }}</label>
                        <textarea name="download_section_{{ $content_count }}_sub_text" id="sub_text"
                                  value="{{ old('sub_text') }}"
                                  class="form-control">{{ @$contents ? $contents['download_section']['sub_text'] : '' }}</textarea>
                    </div>

                </div>
            </div>
        </div>
    </div>
@elseif($type == 'video_shopping')
    @if(addon_is_activated('video_shopping'))
        <div class="drag-brop-menu content-{{ $content_count }}">
            <div class="menu-item card" data-id="{{  $content_count }}">
                <div class="card-header d-flex justify-content-between border-0">
                    <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                        <h4>{{ __("Video Shopping") }}</h4>
                    </a>

                    <button type="button" onclick="$(this).parent().parent().remove()"
                            class="btn remove-menu-row">
                        <i class="bx bx-trash"></i></button>
                </div>
                <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
                <input type="hidden" name="contents[]" value="video_shopping">
                <input type="hidden" name="video_shopping_{{ $content_count }}[]" value="{{ $content_count }}">
            </div>
        </div>
    @endif
@endif
