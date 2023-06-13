@extends('admin.partials.master')
@section('title')
    {{ __('Campaign Update') }}
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
                    <h2 class="section-title">{{ __('Update Campaign') }}</h2>
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
                    <div class="card-body card-body-paddding"><form class="" id="lang">
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
                        <form method="POST" action="{{ route('campaign.update') }}" enctype="multipart/form-data" id="campaign-create">
                            @csrf
                            <div class="form-group">
                                <label for="title">{{ __('Title') }}</label>
                                <input type="text" placeholder="{{ __('Enter campaign title') }}" name="title" id="title" value="{{ old('title') ? old('title') : $campaignByLang->title }}"
                                       class="form-control" required>
                                <input type="hidden"
                                       value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}"
                                       name="r">
                                <input type="hidden"
                                       value="{{ $campaignByLang->translation_null == 'not-found' ? '' : $campaignByLang->id }}"
                                       name="campaign_lang_id">
                                <input type="hidden" value="{{ $campaignByLang->campaign->id }}" name="campaign_id">
                                <input type="hidden" value="{{ $lang }}" name="lang">
                                @if ($errors->has('title'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('title') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="title">{{ __('Short Description') }}</label>
                                <textarea type="text" name="description" id="title"
                                       placeholder="{{ __('Enter Description') }}"
                                          class="form-control" required>{{ old('description') ? old('description') : $campaignByLang->description }}</textarea>
                                @if ($errors->has('description'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('description') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="slug">{{ __('Slug') }}</label>
                                <input type="text" name="slug" id="slug" value="{{ old('slug') ? old('slug') : $campaignByLang->campaign->slug }}"
                                       class="form-control" required>
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
                                    <input type="text" value="{{ old('date') ? old('date') : $date }}" name="date" id="date"
                                           class="form-control daterange-cus">
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
                                    <input type="text" class="form-control" name="background_color" value="{{ old('background_color') ? old('background_color') : $campaignByLang->campaign->background_color }}" id="background_color" placeholder="{{ __('Enter background color') }}" required>
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
                                    <input type="text" class="form-control" name="text_color" value="{{ old('text_color') ? old('text_color') : $campaignByLang->campaign->text_color }}" id="text_color" placeholder="{{ __('Enter campaign text color') }}" required>
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
                                <label for="image">{{ __('Thumbnail') }}</label>
                                <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                     data-selection="single"
                                     data-target="#galleryModal" data-dismiss="modal">
                                    <input type="hidden" name="thumbnail" value="{{ old('thumbnail') !='' ? old('thumbnail') :  $campaignByLang->campaign->thumbnail_id }}" class="image-selected">
                                    <span class="form-control"><span class="counter">{{ old('thumbnail') != '' ? substr_count(old('thumbnail'), ',') + 1  : ($campaignByLang->campaign->thumbnail_id != '' ? substr_count(@$campaignByLang->campaign->thumbnail_id, ',') + 1 : 0) }}</span> {{ __('file chosen') }}</span>
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            {{ __('Choose File') }}
                                        </div>
                                    </div>
                                </div>

                                <div class="selected-media-box">
                                    <div class="mt-2 gallery gallery-md d-flex">

                                        @php
                                            $thumb = old('thumbnail') ? old('thumbnail') : $campaignByLang->campaign->thumbnail_id;
                                            $thumbnail = \App\Models\Media::find($thumb);
                                        @endphp
                                        @if($thumbnail)
                                            <div class="selected-media mr-2 mb-2 mt-3 ml-0" data-id="{{ $thumbnail->id }}">
                                                @if(is_file_exists($thumbnail->image_variants['image_72x72'], $thumbnail->image_variants['storage']))
                                                    <img src="{{ get_media($thumbnail->image_variants['image_72x72'], $thumbnail->image_variants['storage'])}}" alt="img-thumbnail"
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
                            <div class="form-group">
                                <label for="image">{{ __('Banner') }}</label>
                                <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                     data-selection="single"
                                     data-target="#galleryModal" data-dismiss="modal">
                                    <input type="hidden" name="banner" value="{{ old('banner') !='' ? old('banner') :  $campaignByLang->campaign->banner_id }}" class="image-selected">
                                    <span class="form-control"><span class="counter">{{ old('banner') != '' ? substr_count(old('banner'), ',') + 1  : ($campaignByLang->campaign->banner_id != '' ? substr_count(@$campaignByLang->campaign->banner_id, ',') + 1 : 0) }}</span> {{ __('file chosen') }}</span>
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            {{ __('Choose File') }}
                                        </div>
                                    </div>
                                </div>

                                <div class="selected-media-box">
                                    <div class="mt-2 gallery gallery-md d-flex">

                                        @php
                                            $thumb = old('banner') ? old('banner') : $campaignByLang->campaign->banner_id;
                                            $thumbnail = \App\Models\Media::find($thumb);
                                        @endphp
                                        @if($thumbnail)
                                            <div class="selected-media mr-2 mb-2 mt-3 ml-0" data-id="{{ $thumbnail->id }}">
                                                @if(is_file_exists($thumbnail->image_variants['image_72x72'], $thumbnail->image_variants['storage']))
                                                    <img src="{{ get_media($thumbnail->image_variants['image_72x72'], $thumbnail->image_variants['storage'])}}" alt="img-thumbnail"
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
                            <div class="form-row">
                                <div class="form-group col-md-2">
                                    <label for="image">{{ __('Featured') }}</label>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="custom-switch">
                                        <input type="checkbox" name="featured" class="custom-switch-input"
                                            {{ $campaignByLang->campaign->featured ==1 ? "checked" :""}}/>
                                        <span class="custom-switch-indicator"></span>
                                    </label>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="status">{{ __('Status') }}</label>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="custom-switch">
                                        <input type="checkbox" name="status" id="status" class="custom-switch-input"
                                            {{ $campaignByLang->campaign->status ==1 ? "checked" :""}}/>
                                        <span class="custom-switch-indicator"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="product_id">{{ __('Product') }}</label>
                                <select class="product-by-ajax form-control select2" multiple="multiple" name="product_id[]" id ="product_id"  aria-hidden="true"
                                        data-url="{{ route('show-div-ajax', ['page_name' => 'campaign-product-div']) }}" required>
                                        @foreach($campaignByLang->campaign->campaignProducts as $key => $product)

                                            <option
                                                {{ old('product_id') ? (in_array($product->id, old('product_id')) ? "selected" : "" ) :
                                                    (in_array($product->id, $product_ids) ? "selected" : "")  }}
                                                        selected value="{{ $product->product_id }}">{{ $product->product->getTranslation('name', \App::getLocale()) }}
                                            </option>
                                        @endforeach
                                </select>
                                @if ($errors->has('product_id'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('product_id') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div id="div-content">
                                <table class="table table-responsive table-bordered table-hover table-md">
                                    <tbody>
                                    <tr class="">
                                        <th>{{ __('#') }}</th>
                                        <th>{{ __('Product') }}</th>
                                        <th>{{ __('Price') }}</th>
                                        <th>{{ __('Discount') }}</th>
                                        <th>{{ __('Discount Type') }}</th>
                                    </tr>
                                    @foreach ($campaignByLang->campaign->campaignProducts as $key => $camProduct)

                                        <tr id="row_{{ $camProduct->product_id }}" class="table-data-row">
                                            <td>{{$key +1 }}</td>
                                            <td>
                                                <div class="d-flex">
                                                    <div>{{ $camProduct->product->getTranslation('name', \App::getLocale()) }}</div>
                                                </div>
                                            </td>
                                            <td>{{ priceFormatUpdate($camProduct->product->price,settingHelper('default_currency'),$type="*") }}</td>
                                            <td style="width: 20%"><input class="form-control" type="number" step="any" min="0" name="discount_{{$camProduct->product_id}}" value="{{ old("discount_".$camProduct->product_id) ? old("discount_".$camProduct->product_id) : priceFormatUpdate($camProduct->discount,settingHelper('default_currency'),$type="*") }}" required></td>
                                            <td style="width: 10%">
                                                <select class="form-control selectric"  name="discount_type_{{$camProduct->product_id}}" id="symbol" required>
                                                    <option {{ $camProduct->discount_type == "flat" ? "selected" : "" }} value="flat">{{ __("Flat") }}</option>
                                                    <option {{ $camProduct->discount_type == "percentage" ? "selected" : "" }} value="percentage">{{ __("Percent") }}</option>
                                                </select>
                                            </td>

                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
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
    <script src="{{static_asset('admin/js/ajax-div-load.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/daterangepicker.min.js') }}"></script>
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

