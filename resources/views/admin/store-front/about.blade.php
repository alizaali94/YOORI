@extends('admin.partials.master')
@section('footer_content')
    active
@endsection
@section('about')
    active
@endsection
@section('title')
    {{ __('About') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="row">
                @include('admin.store-front.footer-content-sidebar')
                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                    <div class="tab-content no-padding" id="myTab2Content">
                        <div class="tab-pane fade show active" id="about" role="tabpane1"aria-labelledby="about-tab">
                            <div class="card">
                                <div class="card-header">
                                    {{ __('About Widget') }}
                                </div>
                                <div class="card-body col-md-10 middle">
                                    <form method="post" action="{{route('update')}}" enctype="multipart/form-data">
                                        @csrf
                                        @method('put')
                                        <div class="form-group">
                                            <div class="row gutters-sm imagecheck-margin">
                                                <div class="col-6 col-sm-4">
                                                    <label class="imagecheck mb-4">
                                                        <input name="footer_theme" type="checkbox" id="footer_theme1" value="footer_theme1" class="footer_theme1 imagecheck-input"  @if(old('footer_theme') ? old('footer_theme') : settingHelper('footer_theme') == 'footer_theme1') checked @endif/>
                                                        <div class="imagecheck-figure theme">
                                                            <img src="{{ static_asset('images/default/footer_1.png') }}" class="imagecheck-image imagecheck-height">
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="footer_logo">{{ __('Footer Logo') }} {{__('(90X34)')}}</label>
                                            <div class="form-group">
                                                <input type="file" id="footer_logo" class="custom-file-input image_pick file-select" accept="image/*" data-image-for="footer_logo" name="footer_logo" id="customFile"
                                                       value="{{ @$user->image_id }}"/>
                                            </div>
                                            <div>
                                                @if(@settingHelper('footer_logo') !=[] && @is_file_exists(@settingHelper('footer_logo')['image_72x72'],@settingHelper('footer_logo')['storage']))
                                                    <img src="{{ get_media(@settingHelper('footer_logo')['image_72x72'],@settingHelper('footer_logo')['storage'])}}" alt="" id="img_footer_logo"class="img-thumbnail site-icon">
                                                @else
                                                    <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_footer_logo" class="img-thumbnail site-icon ">
                                                @endif
                                            </div>
                                        </div>
                                        <div class="form-group seo-image-positoin">
                                            <div class="d-flex justify-content-between">
                                                <label for="about_description" class="about-desc">
                                                    {{__('About Description')}}
                                                </label>
                                                <div>
                                                    <select class="form-control selectric about-select-lang site-lang" name="site_lang" data-title="about_description" data-url="{{ route('about-description-by-lang') }}">
                                                        <option value="">{{ __('Select Language') }}</option>
                                                        @foreach($languages as $language)
                                                            <option
                                                                value="{{ $language->locale }}" {{ App::getLocale() == $language->locale ? 'selected' : '' }}>{{ $language->name }}</option>
                                                        @endforeach
                                                    </select>
                                                    @if ($errors->has('lang'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('lang') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="form-group row mb-12">
                                                <div class="col-sm-12 col-md-12">
                                                    <textarea name="about_description" class="summernote" id="about_description" placeholder="{{__('About Description')}}">{{old('about_description') ? old('about_description') : settingHelper('about_description', App::getLocale())}}</textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-md-right">
                                            <button class="btn btn-outline-primary" id="save-btn">{{__('Update')}}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}">
@endsection
@push('page-script')
    <script src="{{ static_asset('admin/js/summernote-bs4.js') }}"></script>
@endpush

