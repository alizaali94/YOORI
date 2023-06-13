@extends('admin.partials.master')

@section('title')
    {{ isset($post) ? __('Edit Blog') : __('Create Blog') }}
@endsection
@section('blogs_active')
    active
@endsection
@section('blog_post')
    active
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}">
@endsection

@php
    $route = isset($post) ? route('blog.update') : route('blog.store');
    $title = isset($post) ? __('Update Post') : __('Create New Post');
    $subTitle = isset($post) ? __('Update Your Post') : __('Write Your Post');
    $button_name = isset($post) ? __('Update') : __('Create');
@endphp

@section('main-content')

    <section class="section">
        <div class="section-body">

            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ $title }}</h2>
                </div>
                @if(hasPermission('category_read'))
                    <div class="buttons add-button">
                        <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" class="btn btn-outline-primary"><i class='bx bx-arrow-back'></i>{{ __('Back') }}</a>
                    </div>
                @endif
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ $subTitle }}</h4>
                        </div>
                        <div class="card-body">
                            @isset($post)
                            <form class="" id="lang">
                                <div class="form-group row mb-4">
                                    <label for="lang" class="col-form-label text-md-right col-12 col-md-3 col-lg-3" for="lang_id">{{ __('Language') }}</label>
                                    <div class="col-sm-12 col-md-7">
                                        <select class="form-control selectric lang" name="lang" id="lang_id">
                                            <option value="">{{ __('Select Language') }}</option>
                                            @foreach($languages as $language)
                                                <option value="{{ $language->locale }}" {{($lang != '' ? ($language->locale == $lang ? 'selected' : '') : ($language->locale == 'en' ? 'selected' : '')) }}>{{ $language->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>

                                    @if ($errors->has('lang'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('lang') }}</p>
                                        </div>
                                    @endif
                                </div>
                            </form>
                            @endisset
                            <form action="{{ $route }}" method="post"
                                  enctype="multipart/form-data">
                                @csrf
                                @isset($post)
                                    @method('PUT')
                                @endisset
                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3" for="title">{{ __('Title') }}</label>
                                    <div class="col-sm-12 col-md-7">
                                        @isset($post)
                                            <input type="hidden" value="{{ $post->translation_null == 'not-found' ? '' : $post->id }}" name="blog_lang_id">
                                            <input type="hidden" value="{{ $post->blog->id }}" name="blog_id">
                                            <input type="hidden" value="{{ $lang }}" name="lang">
                                        @endisset
                                        <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                        <input type="text" name="title" id="title" value="{{ old('title') ? old('title') : @$post->title }}" class="form-control" required>

                                        @if ($errors->has('title'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('title') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3" for="slug">{{ __('Slug') }}</label>
                                    <div class="col-sm-12 col-md-7">
                                        <input type="text" name="slug" id="slug" value="{{ old('slug') ? old('slug') : @$post->blog->slug }}" class="form-control">

                                        @if ($errors->has('slug'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('slug') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3" for="category_id">{{ __('Category') }}</label>
                                    <div class="col-sm-12 col-md-7">
                                        <select class="form-control selectric" name="category_id" id="category_id" required>
                                            <option value="">{{ __('Select Category') }}</option>
                                            @foreach($categories as $key => $category)
                                            <option value="{{ $category->id }}" @isset($post) {{ $category->id == $post->blog->category_id ? 'selected' : '' }} @else {{ $category->id == old('category') ? 'selected' : '' }} @endisset  >{{  $category->getTranslation('title', \App::getLocale()) }}</option>
                                            @endforeach
                                        </select>

                                        @if ($errors->has('blog_category_id'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('blog_category_id') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3" for="status">{{__('Status')}}</label>
                                    <div class="col-sm-12 col-md-7">
                                        <select class="form-control selectric" name="status" id="status">
                                            <option value="">{{ __('Select Status') }}</option>
                                            <option value="published" @isset($post) {{ $post->blog->status == 'published' ? 'selected' : '' }} @else {{ old('status') == 'draft' ? 'selected' : '' }} @endisset>{{__('Publish')}}</option>
                                            <option value="draft" @isset($post) {{ $post->blog->status == 'draft' ? 'selected' : '' }} @else {{ old('status') == 'draft' ? 'selected' : '' }} @endisset>{{__('Draft')}}</option>
                                            <option value="pending" @isset($post) {{ $post->blog->status == 'pending' ? 'selected' : '' }} @else {{ old('status') == 'pending' ? 'selected' : '' }} @endisset>{{__('Pending')}}</option>
                                        </select>

                                        @if ($errors->has('status'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('status') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3" for="short_description">{{  __('Short Description') }}</label>
                                    <div class="col-sm-12 col-md-7">
                                        <textarea name="short_description" class="form-control" id="short_description">{{ old('short_description') ? old('short_description') : @$post->short_description }}</textarea>
                                        @if ($errors->has('short_description'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('short_description') }}</p>
                                            </div>
                                        @endif
                                    </div>

                                </div>
                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3" for="long_description">{{ __('Long Description') }}</label>
                                    <div class="col-sm-12 col-md-7">
                                        <textarea class="summernote" id="long_description" name="long_description">{{ old('long_description') ? old('long_description') : @$post->long_description }}</textarea>

                                        @if ($errors->has('long_description'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('long_description') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row mb-4">
                                    <label for="logo" class="col-form-label text-md-right col-12 col-md-3 col-lg-3" for="image">{{ __('Thumbnail') }} (260x175)</label>
                                    <div class="col-sm-12 col-md-7">
                                        <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="image"  value="{{ old('image') !='' ? old('image') : (@$post->blog->image_id ? $post->blog->image_id : '' )}}" id="image" class="image-selected">
                                            <span class="form-control"><span class="counter">{{ old('image') != '' ? substr_count(old('image'), ',') + 1  : (@$post->blog->image_id != '' ? substr_count(@$post->blog->image_id, ',') + 1 : 0) }}</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                            @if ($errors->has('image'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('image') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="selected-media-box">
                                            <div class="mt-2 gallery gallery-md d-flex">
                                                @php
                                                    $thumb = old('image') ? old('image') : @$post->blog->image_id;
                                                    $thumbnail = \App\Models\Media::find($thumb);
                                                @endphp
                                                @if($thumbnail)
                                                    <div class="selected-media mr-2 mb-2 mt-3 ml-0" data-id="{{ $thumbnail->id }}">
                                                        @if(@is_file_exists($thumbnail->image_variants['image_72x72'], $thumbnail->image_variants['storage']))
                                                            <img src="{{ get_media($thumbnail->image_variants['image_72x72'], $thumbnail->image_variants['storage'])}}" alt="img-thumbnail"
                                                                 class="img-thumbnail logo-profile">
                                                        @else
                                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="img-thumbnail"
                                                                 class="img-thumbnail logo-profile">
                                                        @endif
                                                        <div class="image-remove">
                                                            <a href="javaScript:void(0)" class="remove"><i class="bx bx-x"></i></a>
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
                                <div class="form-group row mb-4">
                                    <label for="logo" class="col-form-label text-md-right col-12 col-md-3 col-lg-3" for="image">{{ __('Banner') }}(900x300)</label>
                                    <div class="col-sm-12 col-md-7">
                                        <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="banner"  value="{{ old('banner') !='' ? old('banner') : (@$post->blog->banner_id ? $post->blog->banner_id : '' )}}" id="image" class="image-selected">
                                            <span class="form-control"><span class="counter">{{ old('banner') != '' ? substr_count(old('banner'), ',') + 1  : (@$post->blog->banner_id != '' ? substr_count(@$post->blog->banner_id, ',') + 1 : 0) }}</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                            @if ($errors->has('banner'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('banner') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="selected-media-box">
                                            <div class="mt-2 gallery gallery-md d-flex">
                                                @php
                                                    $thumb = old('banner') ? old('banner') : @$post->blog->banner_id;
                                                    $banner = \App\Models\Media::find($thumb);
                                                @endphp
                                                @if($banner)
                                                    <div class="selected-media mr-2 mb-2 mt-3 ml-0" data-id="{{ $banner->id }}">
                                                        @if(@is_file_exists($banner->image_variants['image_72x72'], $banner->image_variants['storage']))
                                                            <img src="{{ get_media($banner->image_variants['image_72x72'], $banner->image_variants['storage'])}}" alt="img-thumbnail"
                                                                 class="img-thumbnail logo-profile">
                                                        @else
                                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="img-thumbnail"
                                                                 class="img-thumbnail logo-profile">
                                                        @endif
                                                        <div class="image-remove">
                                                            <a href="javaScript:void(0)" class="remove"><i class="bx bx-x"></i></a>
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
                                <div class="form-group row">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3" for="tags">{{ __('Tags') }}</label>
                                    <div class="col-sm-12 col-md-7">
                                        <input type="text" name="tags" id="tags" class="form-control inputtags"
                                               value="{{ isset($post) ? $post->tags : (old('tags') ? old('tags') : '') }}"
                                               placeholder="{{ __('Write & hit enter') }}">
                                        @if ($errors->has('tags'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('tags') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3" for="meta_keyword">{{__('Meta Keyword')}}</label>
                                    <div class="col-sm-12 col-md-7">
                                        <input type="text" class="form-control inputtags" id="meta_keyword" value="{{ old('meta_keyword') ? old('meta_keyword') : @$post->meta_keyword }}" name="meta_keyword">
                                        @if ($errors->has('meta_keyword'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('meta_keyword') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3" for="meta_title">{{  __('Meta Title') }}</label>
                                    <div class="col-sm-12 col-md-7">
                                        <input name="meta_title" class="form-control" id="meta_title" value="{{ old('meta_title') ? old('meta_title') : @$post->meta_title }}">

                                        @if ($errors->has('meta_title'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('meta_title') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row mb-4">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3" for="meta_description">{{  __('Meta Description') }}</label>
                                    <div class="col-sm-12 col-md-7">
                                        <textarea name="meta_description" class="form-control" id="meta_description">{{ old('meta_description') ? old('meta_description') : @$post->meta_description }}</textarea>
                                        @if ($errors->has('meta_description'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('meta_description') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group row mb-4 text-right">
                                    <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3"></label>
                                    <div class="col-sm-12 col-md-7 ">
                                        <button class="btn btn-outline-primary">{{ $button_name }}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modal -->
    @include('admin.common.selector-modal')
@endsection

@push('page-script')
    <script src="{{ static_asset('admin/js/summernote-bs4.js') }}"></script>
@endpush
@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush
