@extends('admin.partials.master')

@php
    $route = isset($method_language) ? route('offline.payment.method.update') : route('offline.payment.method.store');
    $title = isset($method_language) ? __('Offline Method Edit') : __('Offline Method Add');
    $button_name = isset($method_language) ? __('Update') : __('Add');
@endphp

@section('title')
    {{ $title }}
@endsection
@section('offline_payment')
    active
@endsection
@section('offline_payment_methods')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ $title }}</h2>
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
                        <h4>{{ __('Information') }}</h4>
                    </div>
                    <div class="card-body card-body-paddding">
                        @isset($method_language)
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
                        @endisset
                        <form method="POST" action="{{ $route }}" enctype="multipart/form-data">
                            @csrf
                            @isset($method_language)
                                @method('put')
                            @endisset
                            <div class="form-group">
                                <label for="name">{{ __('Name') }}</label>
                                @isset($method_language)
                                    <input type="hidden" value="{{ $method_language->translation_null == 'not-found' ? '' : $method_language->id }}"
                                           name="offline_method_lang_id">
                                    <input type="hidden" value="{{ $method_language->offlineMethod->id }}" name="offline_method_id">
                                    <input type="hidden" value="{{ $lang }}" name="lang">
                                @endisset
                                <input type="text" name="name" id="name"
                                       placeholder="{{ __('Enter method name') }}" value="{{ old('name') ? old('name') : (@$method_language->name) }}"
                                       class="form-control" required>
                                <input type="hidden"
                                       value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}"
                                       name="r">
                                @if ($errors->has('name'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('name') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="couponType">{{ __('Payment Type') }} *</label>
                                <div class="custom-file">
                                    <select class="form-control selectric payment-type" name="type" required>
                                        <option
                                            {{ old('type') == "custom_payment" || @$method_language->offlineMethod->type == "custom_payment" ? 'selected' : "" }}
                                            value="custom_payment">{{ __('Custom Payment') }}
                                        </option>
                                        <option
                                            {{ old('type') == "bank_payment" || @$method_language->offlineMethod->type == "bank_payment" ? 'selected' : "" }}
                                            value="bank_payment">{{ __('Bank Payment') }}
                                        </option>
                                        <option
                                            {{ old('type') == "c" || @$method_language->offlineMethod->type == "cheque_payment" ? 'selected' : "" }}
                                            value="cheque_payment">{{ __('Cheque Payment') }}
                                        </option>
                                    </select>
                                </div>
                                @if ($errors->has('type'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('type') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="thumbnail">{{ __('Thumbnail') }} (80X40)</label>
                                <div class="form-group">
                                    <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                         data-selection="single"
                                         data-target="#galleryModal" data-dismiss="modal">
                                        <input type="hidden" name="thumbnail"
                                               value="{{ old('thumbnail') !='' ? old('thumbnail') : @$method_language->offlineMethod->thumbnail_id}}"
                                               class="image-selected">
                                        <span class="form-control"><span
                                                class="counter">{{ old('thumbnail') != '' ? substr_count(old('thumbnail'), ',') + 1  : (@$method_language->offlineMethod->thumbnail_id != '' ? 1 : 0) }}</span> {{ __('file chosen') }}</span>
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                {{ __('Choose File') }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="selected-media-box">
                                        <div class="mt-2 gallery gallery-md d-flex">
                                            @php
                                                $thumbnail = old('thumbnail') != null ? old('thumbnail') : @$method_language->offlineMethod->thumbnail_id;
                                            @endphp
                                            @if( $thumbnail != '')
                                                <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                     data-id="{{ $thumbnail }}">
                                                    @php
                                                        $media = \App\Models\Media::find($thumbnail);
                                                    @endphp
                                                    @if(is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                        <img
                                                            src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
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
                            <div class="bank_payment {{ old('type') == "bank_payment" || @$method_language->offlineMethod->type == 'bank_payment' ? '' : 'd-none' }} form-group">
                                <div class="d-flex justify-content-between mt-1">
                                    <label for="thumbnail">{{ __('Bank Information') }}</label>
                                    <div>
                                        <a href="javascript:void(0)" class="btn btn-outline-primary mb-2" id="add-item" data-area="content-area">
                                            <i class="bx bx-plus"></i>{{ __('Add More') }}
                                        </a>
                                    </div>
                                </div>
                                <table class="table table-striped table-bordered table-responsive">
                                    <thead>
                                        <tr>
                                            <td scope="col" width="18%">{{ __('Bank Name') }} *</td>
                                            <td scope="col" width="18%">{{ __('Branch') }} *</td>
                                            <td scope="col" width="18%">{{ __('AC Holder Name') }} *</td>
                                            <td scope="col" width="18%">{{ __('AC Number') }} *</td>
                                            <td scope="col" width="18%">{{ __('Routing Number') }} *</td>
                                            <td width="6%">{{ __('Action') }}</td>
                                        </tr>
                                    </thead>
                                    <tbody id="content-area">
                                        @if(old('bank_name') || @$method_language->offlineMethod->type == 'bank_payment')
                                            @php
                                                $banks = old('bank_name') ?  old('bank_name') : @$method_language->offlineMethod->bank_details;
                                            @endphp
                                            @foreach($banks as $key => $bank)
                                                <tr class="item">
                                                    <th scope="row" width="18%">
                                                        <input type="text" name="bank_name[]" value="{{ old('bank_name')[$key] ?? $method_language->offlineMethod->bank_details[$key]['bank_name'] }}" class="form-control">
                                                    </th>
                                                    <td width="18%">
                                                        <input type="text" name="bank_branch[]" value="{{ old('bank_branch')[$key] ?? $method_language->offlineMethod->bank_details[$key]['bank_branch'] }}" class="form-control">
                                                    </td>
                                                    <td width="18%">
                                                        <input type="text" name="account_holder_name[]" value="{{ old('account_holder_name')[$key] ?? $method_language->offlineMethod->bank_details[$key]['account_holder_name']}}" class="form-control">
                                                    </td>
                                                    <td width="18%">
                                                        <input type="text" name="account_number[]" value="{{ old('account_number')[$key] ?? $method_language->offlineMethod->bank_details[$key]['account_number']}}" class="form-control">
                                                    </td>
                                                    <td width="18%">
                                                        <input type="number" name="routing_number[]" value="{{ old('routing_number')[$key] ?? $method_language->offlineMethod->bank_details[$key]['routing_number']}}" class="form-control">
                                                    </td>
                                                    <td width="6%">
                                                        @if($key > 0)
                                                            <button type="button" class="btn btn-icon btn-sm btn-danger remove-menu-row" onclick="$(this).closest('tr').remove();"><i class="bx bx-trash"></i></button>
                                                        @endif
                                                    </td>
                                                </tr>
                                            @endforeach
                                        @else
                                            <tr class="item">
                                                <th scope="row" width="18%">
                                                    <input type="text" name="bank_name[]" value="" class="form-control">
                                                </th>
                                                <td width="18%">
                                                    <input type="text" name="bank_branch[]" value="" class="form-control">
                                                </td>
                                                <td width="18%">
                                                    <input type="text" name="account_holder_name[]" value="" class="form-control">
                                                </td>
                                                <td width="18%">
                                                    <input type="text" name="account_number[]" value="" class="form-control">
                                                </td>
                                                <td width="18%">
                                                    <input type="number" name="routing_number[]" value="" class="form-control">
                                                </td>
                                                <td width="6%"></td>
                                            </tr>
                                        @endif
                                    </tbody>
                                </table>
                            </div>
                            <div class="form-group">
                                <label for="instructions">{{ __('Instructions') }}</label>
                                <textarea name="instructions" class="summernote" id="instructions" placeholder="{{__('About Description')}}">
                                    {{old('instructions') ? old('instructions') : (@$method_language->instructions)}}
                                </textarea>
                            </div>
                            <div class="form-group text-right">
                                <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                    {{ $button_name }}
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
    @include('admin.settings.offline-payment.bank-row')
@endsection

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection

@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush

@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}">
@endsection
@push('page-script')
    <script src="{{ static_asset('admin/js/summernote-bs4.js') }}"></script>
@endpush
