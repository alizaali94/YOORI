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
            <div class="card-body banner-{{ $content_count }}">
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
                                <div class="col-md-4">
                                    <div class="form-group">
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
                                        <div class="selected-media-box">
                                            <div class="mt-2 gallery gallery-md d-flex">
                                                @php
                                                    $thumb = \App\Models\Media::find($thumbnail);
                                                @endphp
                                                @if($thumb)
                                                    <div class="selected-media mr-2 mb-2 mt-3 ml-0" data-id="{{ $thumb->id }}">
                                                        @if(is_file_exists($thumb->image_variants['image_72x72'], $thumb->image_variants['storage']))
                                                            <img src="{{ get_media($thumb->image_variants['image_72x72'], $thumb->image_variants['storage'])}}" alt="img-thumbnail"
                                                                 class="img-thumbnail logo-profile">
                                                        @else
                                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="img-thumbnail"
                                                                 class="img-thumbnail logo-profile">
                                                        @endif
                                                        <div class="image-remove">
                                                            <a href="javascript:void(0)" class="remove"><i class="bx bx-x"></i></a>
                                                        </div>
                                                    </div>
                                                @else
                                                    <div class="selected-media mr-2 mb-2 mt-3 ml-0">
                                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}" data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                             alt="brand-logo" class="img-thumbnail logo-profile">
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <input type="text" class="form-control mr-sm-2 menu-url-input"
                                           id="link" name="banner_url_{{ $content_count }}[]"
                                           value="{{ $banner_contetns['url'][$key] ? $banner_contetns['url'][$key] : '/'}}"
                                           placeholder="{{__('Link/Slug')}}">

                                </div>
                                <div class="col-md-1">
                                    <button type="button" class="btn btn-outline-danger btn-circle mb-2 remove-menu-row" data-type="banner-image">
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
                    <a href="javaScript:void(0)" class="btn btn-outline-secondary add-store-content {{ @$key >= 3 ? 'd-none' : '' }}"
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
                            <input type="text" class="form-control mt-2 mr-sm-2 menu-url-input"
                                   id="link" name="banner_url_{{ $for_content }}[]" value="{{ '/' }}"
                                   placeholder="{{__('Link/Slug')}}">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <button type="button" class="btn btn-outline-danger btn-circle mb-2 remove-menu-row" data-type="banner-image">
                    <i class="bx bx-trash"></i></button>
            </div>
        </div>
    </div>
@elseif($type == 'featured_products')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __('Featured Products') }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <div class="card-body campaign-{{ $content_count }}">
                <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
                <input type="hidden" name="contents[]" value="featured_products">
                <div class="limit-2-custom-message">
                    <select class="select2 limit-3-custom-message" style="width: 100%;" name="featured_products_{{ $content_count }}[]" multiple required>
                        @php
                            $featured_products = Sentinel::getUser()->sellerFeaturedProducts()->get();
                        @endphp
                        @foreach($featured_products as $product)
                            <option value="{{ $product->id }}" {{ @$contents ? (in_array($product->id, $contents['featured_products']) ? 'selected' : '') : '' }}>
                                {{ @$product->getTranslation('name', \App::getLocale()) }}
                            </option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
    </div>
@elseif($type == 'new_arrival')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between border-0">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __("New Arrivals") }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
            <input type="hidden" name="contents[]" value="new_arrival">
            <input type="hidden" name="new_arrival_{{ $content_count }}" value="{{ $content_count }}">
        </div>
    </div>
@elseif($type == 'best_rated_products')
    <div class="drag-brop-menu content-{{ $content_count }}">
        <div class="menu-item card" data-id="{{  $content_count }}">
            <div class="card-header d-flex justify-content-between border-0">
                <a href="javaScript:void(0)" class="d-flex"><i class="bx bx-menu move"></i>
                    <h4>{{ __("Best Rated Products") }}</h4>
                </a>

                <button type="button" onclick="$(this).parent().parent().remove()"
                        class="btn remove-menu-row">
                    <i class="bx bx-trash"></i></button>
            </div>
            <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
            <input type="hidden" name="contents[]" value="best_rated_products">
            <input type="hidden" name="best_rated_products_{{ $content_count }}" value="{{ $content_count }}">
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
            <input type="hidden" name="best_selling_products_{{ $content_count }}" value="{{ $content_count }}">
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
            <input type="hidden" name="content_numbers[]" value="{{ $content_count }}">
            <input type="hidden" name="contents[]" value="offer_ending_soon">
            <input type="hidden" name="offer_ending_soon_{{ $content_count }}" value="{{ $content_count }}">
        </div>
    </div>
@endif
