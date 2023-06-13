@extends('admin.partials.master')
@section('attribute_active')
    active
@endsection
@section('product_active')
    active
@endsection
@section('title')
     {{ __('Update Attribute') }}
@endsection
@section('main-content')
<section class="section">
    <div class="section-body">
        <div class="d-flex justify-content-between">
            <div class="d-block">
                <h2 class="section-title">{{__('All Attribute')}}</h2>
            </div>
            <div class="buttons add-button">
                <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" class="btn btn-outline-primary"><i
                        class='bx bx-arrow-back'></i>{{__('Back')}}</a>
            </div>
        </div>
        <div class="row">
            <div class="col-6 middle">
                <div class="card">
                    <div class="card-header">
                        <h4>{{__('Update Attribute')}}</h4>
                    </div>
                    <div class="card-body card-body-paddding">
                        <form class="" id="lang">
                            <div class="form-group">
                                <label for="name">{{ __('Language') }}</label>
                                <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                <select class="form-control selectric lang" name="lang">
                                    <option value="">{{ __('Select Language') }}</option>
                                    @foreach($languages as $language)
                                        <option value="{{ $language->locale }}" {{($lang != '' ? ($language->locale == $lang ? 'selected' : '') : ($language->locale == 'en' ? 'selected' : '')) }}>{{ $language->name }}</option>
                                    @endforeach
                                </select>

                                @if ($errors->has('lang'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('lang') }}</p>
                                    </div>
                                @endif
                            </div>
                        </form>
                        <form method="POST" action="{{ route('attribute.update') }}">
                            @csrf
                            <div class="form-group">
                                <label for="title">{{__('Title')}}</label>
                                <input type="hidden" value="{{ $attribute_language->translation_null == 'not-found' ? '' : $attribute_language->id }}" name="attribute_lang_id">
                                <input type="hidden" value="{{ $attribute_language->attribute->id }}" name="attribute_id">
                                <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                <input type="hidden" value="{{ $lang}}" name="lang">
                                <input id="title" type="text" class="form-control" name="title"
                                       placeholder="{{__('Title')}}" tabindex="1" value="{{ $attribute_language->title }}"
                                       required autofocus>
                               @if ($errors->has('title'))
                               <div class="invalid-feedback">
                                   <p>{{ $errors->first('title') }}</p>
                               </div>
                               @endif
                            </div>

                            <div class="form-group">
                                <label for="category">{{ __('Category') }}</label>
                                <select class="form-control select2" name="category[]" id="category" multiple>
                                    @foreach($categories as $key => $category)
                                        <option value="{{ $category->id }}" {{  old('category') ? (in_array($category->id, old('category'))  ? 'selected' : '') : (in_array($category->id, $attribute_language->attribute->categories->pluck('id')->toArray()) ? 'selected' : '')}} >{{ $category->getTranslation('title', App::getLocale()) }}</option>
                                    @endforeach
                                </select>

                                @if ($errors->has('category'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('category') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group text-right">
                                <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                    {{__('Update')}}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
