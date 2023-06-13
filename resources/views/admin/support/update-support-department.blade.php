@extends('admin.partials.master')

@section('title')
    {{ __('Blog Categories') }}
@endsection
@section('support_active')
    active
@endsection
@section('support_department_active')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Edit Support Department') }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{  route('support.department') }}" class="btn btn-icon icon-left btn-outline-primary"><i
                            class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-7 middle">
                    <div class="card">
                        <div class="card-body card-body-paddding">
                            <div class="card-header input-title">
                                <h4>{{ __('Support Department') }}</h4>
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

                            <form action="{{ route('support.department.update') }}" method="POST"
                                  enctype="multipart/form-data">
                                @csrf
                                @method('PUT')

                                <div class="form-group">
                                    <label for="title">{{ __('Title') }}</label>
                                    <input type="hidden"
                                           value="{{ $departments->translation_null == 'not-found' ? '' : $departments->id }}"
                                           name="support_department_lang_id">
                                    <input type="hidden" value="{{$departments->supportDepartment->id}}" name="support_department_id">
                                    <input type="hidden" value="{{$lang}}" name="lang">
                                    <input type="text" name="title" id="title"
                                           value="{{ old('title') ? old('title') : $departments->title }}"
                                           class="form-control" placeholder="{{__('Title')}}" required>
                                    @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="slug">{{ __('Slug') }}</label>
                                    <input type="text" name="slug" id="slug"
                                           value="{{ old('slug') ? old('slug') : $departments->supportDepartment->slug }}"
                                           class="form-control" placeholder="{{__('Slug')}}">
                                    @if ($errors->has('slug'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('slug') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group text-right">
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

