@extends('admin.partials.master')
@section('title')
    {{ __('Campaign Create') }}
@endsection
@section('marketing_active')
    active
@endsection
@section('campaign')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Create Campaign') }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}"
                       class="btn btn-icon icon-left btn-outline-primary"><i
                            class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-sm-xs-12 col-md-8 middle">
                <div class="card">
                    <div class="card-header input-title">
                        <h4>{{ __('Campaign') }}</h4>
                    </div>
                    <div class="card-body card-body-paddding">
                        <form method="POST" action="{{ route('campaign.store') }}" enctype="multipart/form-data" id="campaign-create">
                            @csrf
                            <div class="form-group">
                                <label for="title">{{ __('Title') }}</label>
                                <input type="text" name="title" id="title"
                                       placeholder="{{ __('Enter campaign title') }}" value="{{ old('title')  }}"
                                       class="form-control" required>
                                <input type="hidden"
                                       value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}"
                                       name="r">
                                @if ($errors->has('title'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('title') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="title">{{ __('Short Description') }}</label>
                                <textarea type="text" name="description" id="title"
                                          placeholder="{{ __('Enter Description') }}" value="{{ old('description')  }}"
                                          class="form-control" required></textarea>
                                @if ($errors->has('description'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('description') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="slug">{{ __('Slug') }}</label>
                                <input type="text" name="slug" placeholder="{{ __('Enter campaign slug') }}" id="slug"
                                       value="{{ old('slug') }}"
                                       class="form-control">
                                @if ($errors->has('slug'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('slug') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="date">{{ __('Period') }}</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="bx bx-calendar"></i>
                                        </div>
                                    </div>
                                    <input type="text" value="{{ old('date') }}" name="date" id="date"
                                           placeholder="{{ __('Enter campaign period') }}"
                                           class="form-control daterange-cus" required>
                                </div>
                                @if ($errors->has('date'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('date') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="background_color">{{ __('Background Color') }}</label>
                                <div class="input-group colorpickerinput">
                                    <input type="text" class="form-control" name="background_color" value="{{old('background_color')}}" id="background_color" placeholder="{{ __('Enter background color') }}">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <i class='bx bxs-color-fill' ></i>
                                        </div>
                                    </div>
                                </div>
                                @if ($errors->has('background_color'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('background_color') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="text_color">{{ __('Text Color') }}</label>
                                <div class="input-group colorpickerinput">
                                    <input type="text" class="form-control" name="text_color" value="{{old('text_color')}}" id="text_color" placeholder="{{ __('Enter campaign text color') }}">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <i class='bx bxs-color-fill' ></i>
                                        </div>
                                    </div>
                                </div>
                                @if ($errors->has('text_color'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('text_color') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="image">{{ __('Thumbnail') }} {{__('(374X374)')}}</label>
                                <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                     data-selection="single"
                                     data-target="#galleryModal" data-dismiss="modal">
                                    <input type="hidden" name="thumbnail"
                                           value="{{ old('thumbnail')}}"
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
                                                @if(@is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                    <img
                                                        src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
                                                        alt="img-image"
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
                            <div class="form-group">
                                <label for="image">{{ __('Banner') }} {{__('(1920X412)')}}</label>
                                <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                     data-selection="single"
                                     data-target="#galleryModal" data-dismiss="modal">
                                    <input type="hidden" name="banner"
                                           value="{{ old('banner')}}"
                                           class="image-selected">
                                    <span class="form-control"><span
                                            class="counter">{{ old('banner') != '' ? substr_count(old('banner'), ',') + 1  : 0 }}</span> {{ __('file chosen') }}</span>
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            {{ __('Choose File') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="selected-media-box">
                                    <div class="mt-2 gallery gallery-md d-flex">
                                        @if(old('banner') != null)
                                            <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                 data-id="{{ old('banner') }}">
                                                @php
                                                    $media = \App\Models\Media::find(old('banner'));
                                                @endphp
                                                @if(@is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                    <img
                                                        src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
                                                        alt="img-image"
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
                            <div class="form-row">
                                <div class="form-group col-md-2">
                                    <label for="image">{{ __('Featured') }}</label>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="custom-switch">
                                        <input type="checkbox" name="featured" class="custom-switch-input" checked/>
                                        <span class="custom-switch-indicator"></span>
                                    </label>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="status">{{ __('Status') }}</label>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="custom-switch">
                                        <input type="checkbox" name="status" id="status" class="custom-switch-input" checked/>
                                        <span class="custom-switch-indicator"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="product_id">{{ __('Product') }}</label>
                                <select class="product-by-ajax form-control select2" name="product_id[]" id ="product_id" multiple="multiple" aria-hidden="true"
                                        data-url="{{ route('show-div-ajax', ['page_name' => 'campaign-product-div']) }}"></select>
                                @if ($errors->has('product_id'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('product_id') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div id="div-content">

                            </div>
                            <div class="form-group text-right">
                                <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                    {{ __('Save') }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Modal -->
    @include('admin.common.selector-modal')
@endsection

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection

@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/daterangepicker.css') }}">
@endsection

@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker.min.js') }}"></script>
    <script type="text/javascript" src="{{static_asset('admin/js/ajax-div-load.js?time='.date('YmdHis')) }}"></script>

    <script type="text/javascript">
        $(function () {
            $('.daterange-cus').daterangepicker({
                autoUpdateInput: false,
                timePicker: true,
                minDate: moment(),
                locale: {
                    cancelLabel: '{{ __('Clear') }}',
                    format: 'M-DD-YYYY hh:mm A'
                }
            });
            $('.daterange-cus').on('apply.daterangepicker', function (ev, picker) {
                $(this).val(picker.startDate.format('MM-DD-YYYY hh:mm A') + ' - ' + picker.endDate.format('MM-DD-YYYY hh:mm A'));
            });
            $('.daterange-cus').on('cancel.daterangepicker', function (ev, picker) {
                $(this).val('');
            });

        });
    </script>
@endpush

