@extends('admin.partials.master')
@section('title')
    {{ __('Video Shopping Edit') }}
@endsection
@section('video_shopping')
    active
@endsection

@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Edit Details') }}</h2>
                </div>
                @if(hasPermission('video_shopping_read'))
                    <div class="buttons add-button">
                        <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" class="btn btn-icon icon-left btn-outline-primary"><i
                                class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                    </div>
                @endif
            </div>
            <div class="row">
                <div class="col-7 middle">
                    <div class="card">
                        <div class="card-body card-body-paddding">
                            <div class="card-header input-title">
                                <h4>{{ __('Video Details') }}</h4>
                            </div>
                            <form class="" id="lang">
                                <div class="form-group">
                                    <label for="name">{{ __('Language') }}</label>
                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                    <select class="form-control selectric lang" name="lang">
                                        <option value="">{{ __('Select Language') }}</option>
                                        @foreach($languages as $language)
                                            <option
                                                value="{{ $language->locale }}" {{($lang != '' ? ($language->locale == $lang ? 'selected' : '') : ($language->locale == 'en' ? 'selected' : '')) }}>{{ $language->name }}</option>
                                        @endforeach
                                    </select>

                                    @if ($errors->has('lang'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('lang') }}</p>
                                        </div>
                                    @endif
                                </div>
                            </form>

                            <form action="{{ route('video.shopping.update') }}" method="POST"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('PUT')

                                <div class="form-group">
                                    <label for="title">{{ __('Title') }}</label>
                                    <input type="text" name="title" id="title"
                                           value="{{ old('title') ? old('title') : $video_language->title }}"
                                           class="form-control" required>

                                    <input type="hidden"value="{{ $video_language->translation_null == 'not-found' ? '' : $video_language->id }}"
                                           name="video_lang_id">
                                    <input type="hidden" value="{{ $video_language->videoShopping->id }}" name="video_id">
                                    <input type="hidden" value="{{ $lang }}" name="lang">
                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">

                                    @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="slug">{{ __('Slug') }}</label>
                                    <input type="text" name="slug" id="slug"
                                           value="{{ old('slug') ? old('slug') : $video_language->videoShopping->slug }}"
                                           class="form-control">
                                    @if ($errors->has('slug'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('slug') }}</p>
                                        </div>
                                    @endif
                                </div>

                                <div class="form-group">
                                    <label for="logo">{{ __('Thumbnail') }} {{__('(299x536)')}}</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="thumbnail" value="{{ old('thumbnail') !='' ? old('thumbnail') : $video_language->videoShopping->thumbnail_id }}" class="image-selected">
                                            <span class="form-control"><span class="counter">{{ old('thumbnail') != '' ? substr_count(old('thumbnail'), ',') + 1  : ($video_language->videoShopping->thumbnail_id != '' ? substr_count($video_language->videoShopping->thumbnail_id, ',') + 1 : 0) }}</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selected-media-box">
                                            <div class="mt-4 gallery gallery-md d-flex">
                                                @php
                                                    $thumb = old('thumbnail') ? old('thumbnail') : $video_language->videoShopping->thumbnail_id;
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
                                                            alt="brand-logo" class="img-thumbnail logo-profile">
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-control-label">{{ __('Video Type') }}</label>
                                    <div class="custom-file">
                                        <select name="video_type" id="video_type"
                                                class="form-control selectric">
                                            <option {{ old('video_type') == 'youtube' ? 'selected' :  ($video_language->videoShopping->video_type == 'youtube' ? 'selected' : '') }} value="youtube">Youtube </option>
                                            <option {{ old('video_type') == 'embedded_video' ? 'selected' :  ($video_language->videoShopping->video_type == 'embedded_video' ? 'selected' : '') }} value="embedded_video">Embedded Video </option>
                                            <option {{ old('video_type') == 'mp4' ? 'selected' : ($video_language->videoShopping->video_type == 'mp4' ? 'selected' : '') }} value="mp4">MP4 </option>
                                            <option {{ old('video_type') == 'vimeo' ? 'selected' : ($video_language->videoShopping->video_type == 'vimeo' ? 'selected' : '') }} value="vimeo">Vimeo </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="video_url">{{ __('Video URL') }}</label>
                                    <input type="text" name="video_url" id="video_url" value="{{ old('video_url') ? old('video_url') : $video_language->videoShopping->video_url }}" class="form-control">
                                    @if ($errors->has('video_url'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('video_url') }}</p>
                                        </div>
                                    @endif
                                </div>

                                <div class="form-group">
                                    <label for="">{{ __('Video Section Style') }}</label>
                                    <div class="row gutters-sm imagecheck-margin">
                                        <div class="col-6 col-sm-4 col-md-3">
                                            <label class="imagecheck mb-4">
                                                <input name="style" type="checkbox" value="style_1" data-value="1" class="imagecheck-input" {{ old('style') ? (old('style') == 'style_1' ? 'checked': '') : ($video_language->videoShopping->style == 'style_1' ? 'checked' : '') }}/>
                                                <div class="imagecheck-figure theme">
                                                    <img src="{{ static_asset('images/default/video_sec_style_1.png') }}" class="imagecheck-image imagecheck-height" />
                                                </div>
                                            </label>
                                        </div>
                                        <div class="col-6 col-sm-4 col-md-3">
                                            <label class="imagecheck mb-4">
                                                <input name="style" type="checkbox" value="style_2" data-value="3" class="imagecheck-input"
                                                    {{ old('style') ? (old('style') == 'style_2' ? 'checked': '') : ($video_language->videoShopping->style == 'style_2' ? 'checked' : '') }} />
                                                <div class="imagecheck-figure theme">
                                                    <img src="{{ static_asset('images/default/video_sec_style_2.png') }}" class="imagecheck-image imagecheck-height" />
                                                </div>
                                            </label>
                                        </div>
                                        <div class="col-6 col-sm-4 col-md-3">
                                            <label class="imagecheck mb-4">
                                                <input name="style" type="checkbox" value="style_3" data-value="3" class="imagecheck-input" {{ old('style') ? (old('style') == 'style_3' ? 'checked': '') : ($video_language->videoShopping->style == 'style_3' ? 'checked' : '') }} />
                                                <div class="imagecheck-figure theme">
                                                    <img src="{{ static_asset('images/default/video_sec_style_3.png') }}" class="imagecheck-image imagecheck-height" />
                                                </div>
                                            </label>
                                        </div>
                                        <div class="col-6 col-sm-4 col-md-3">
                                            <label class="imagecheck mb-4">
                                                <input name="style" type="checkbox" value="style_4" data-value="4" class="imagecheck-input" {{ old('style') ? (old('style') == 'style_4' ? 'checked': '') : ($video_language->videoShopping->style == 'style_4' ? 'checked' : '') }} />
                                                <div class="imagecheck-figure theme">
                                                    <img src="{{ static_asset('images/default/video_sec_style_4.png') }}" class="imagecheck-image imagecheck-height" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    @if ($errors->has('style'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('style') }}</p>
                                        </div>
                                    @endif
                                </div>

                                <div class="form-group">
                                    <label for="product_id">{{ __('Product') }}</label>
                                    <select class="product-by-ajax form-control select2" name="product_id[]" id ="product_id" multiple="multiple" aria-hidden="true"
                                            data-url="{{ route('show-div-ajax', ['page_name' => 'campaign-product-div']) }}">

                                        @foreach($products as $key => $product)
                                            <option
                                                {{ old('product_id') ? (in_array($product->id, old('product_id')) ? "selected" : "" ) :
                                                    (in_array($product->id, $product_ids) ? "selected" : "")  }}
                                                selected value="{{ $product->id }}">{{ $product->getTranslation('name', \App::getLocale()) }}
                                            </option>
                                        @endforeach
                                    </select>
                                    @if ($errors->has('product_id'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('product_id') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group row mt-2">
                                    <label class="col-md-5 col-from-label">{{ __('Is Live Video') }}</label>
                                    <div class="col-md-7">
                                        <label class="custom-switch">
                                            <input  type="checkbox" value="1" name="is_live"
                                                    {{ old('is_live')? (old('is_live')  == 1 ? 'checked': '') : ($video_language->videoShopping->is_live == 1 ? 'checked' : '') }}
                                                    class="custom-switch-input ">
                                            <span class="custom-switch-indicator"></span>
                                        </label>
                                        @if ($errors->has('is_live'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('is_live') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row mt-2">
                                    <label class="col-md-5 col-from-label">{{ __('Enable Related Products Section') }}</label>
                                    <div class="col-md-7">
                                        <label class="custom-switch">
                                            <input  type="checkbox" value="1" name="enable_related_product"
                                                    {{ old('enable_related_product')? (old('enable_related_product')  == 1 ? 'checked': '') : ($video_language->videoShopping->enable_related_product == 1 ? 'checked' : '') }}
                                                    class="custom-switch-input ">
                                            <span class="custom-switch-indicator"></span>
                                        </label>
                                        @if ($errors->has('enable_related_product'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('enable_related_product') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="meta_title">{{ __('Meta Title') }}</label>
                                    <input type="text" name="meta_title" id="meta_title"
                                           value="{{ old('meta_title') ? old('meta_title') : $video_language->meta_title }}"
                                           class="form-control">
                                    @if ($errors->has('meta_title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('meta_title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="meta_description">{{ __('Meta Description') }}</label>
                                    <textarea class="form-control" name="meta_description"
                                              id="meta_description">{{ $video_language->meta_description }}</textarea>
                                </div>
                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                        {{ __('Update') }}
                                    </button>
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
@include('admin.common.product-by-ajax')
@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush


