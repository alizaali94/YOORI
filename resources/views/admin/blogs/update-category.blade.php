@extends('admin.partials.master')

@section('title')
    {{ __('Blog Categories') }}
@endsection
@section('blogs_active')
    active
@endsection
@section('blog_category')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Edit Blog Category') }}</h2>
                </div>
                    <div class="buttons add-button">
                        <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" class="btn btn-icon icon-left btn-outline-primary"><i
                                class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                    </div>
            </div>
            <div class="row">
                <div class="col-7 middle">
                    <div class="card">
                        <div class="card-body card-body-paddding">
                            <div class="card-header input-title">
                                <h4>{{ __('Blog Category') }}</h4>
                            </div>
                            <form class="" id="lang">
                                <div class="form-group">
                                    <label for="name">{{ __('Language') }}</label>

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

                            <form action="{{ route('admin.update.blog.category') }}" method="POST"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('PUT')

                                <div class="form-group">
                                    <label for="title">{{ __('Title') }}</label>
                                    <input type="hidden"
                                           value="{{ $category_language->translation_null == 'not-found' ? '' : $category_language->id }}"
                                           name="blog_category_lang_id">
                                    <input type="hidden" value="{{ $category_language->blogCategory->id }}" name="blog_category_id">
                                    <input type="hidden" value="{{ $lang }}" name="lang">
                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                    <input type="text" name="title" id="title"
                                           value="{{ old('title') ? old('title') : $category_language->title }}"
                                           class="form-control" required>
                                    @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="slug">{{ __('Slug') }}</label>
                                    <input type="text" name="slug" id="slug"
                                           value="{{ old('slug') ? old('slug') : $category_language->blogCategory->slug }}"
                                           class="form-control">
                                    @if ($errors->has('slug'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('slug') }}</p>
                                        </div>
                                    @endif
                                </div>

                                <div class="form-group">
                                    <label for="meta_title">{{ __('Meta Title') }}</label>
                                    <input type="text" name="meta_title" id="meta_title"
                                           value="{{ old('meta_title') ? old('meta_title') : $category_language->meta_title }}"
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
                                              id="meta_description">{{ old('meta_description') ? old('meta_description') : $category_language->meta_description }}</textarea>
                                </div>
                                <div class="card-footer text-right">
                                    <button class="btn btn-outline-primary">{{ __('Update') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')

