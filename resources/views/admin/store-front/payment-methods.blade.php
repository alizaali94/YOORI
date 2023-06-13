@extends('admin.partials.master')
@section('footer_content')
    active
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}" />
@endsection
@section('payment_method_banner')
    active
@endsection
@section('title')
    {{ __('Payment Method Banner') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="row">
                @include('admin.store-front.footer-content-sidebar')
                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                    <div class="tab-content no-padding" id="myTab2Content">
                        <div class="tab-pane fade show active" id="about" role="tabpane1" aria-labelledby="about-tab">
                            <div class="card">
                                <div class="card-header">
                                    {{__('Payment Methods Widget')}}
                                </div>
                                <div class="card-body col-md-10 middle">
                                    <form method="post" action="{{route('update')}}" enctype="multipart/form-data">
                                        @csrf
                                        @method('put')

                                        <table class="table topbar-setting-switcher" style="width: 1200px">
                                            <tr>
                                                <td class="no-padding-w30 coookie-marign">{{ __('Visa Payment Method Banner') }}</td>
                                                <td>
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="" value="setting-status-change/{{ 'visa_pay_banner' }}" {{ settingHelper('visa_pay_banner') == 1 ? 'checked' : ''}} class="custom-switch-input
                                                    status-change">
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="no-padding-w30 coookie-marign">{{ __('Mater Card Payment Method Banner') }}</td>
                                                <td>
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="" value="setting-status-change/{{ 'master_card_pay_banner' }}" {{ settingHelper('master_card_pay_banner') == 1 ? 'checked' : ''}} class="custom-switch-input
                                                    status-change">
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="no-padding-w30 coookie-marign">{{ __('American-Express Payment Method banner') }}</td>
                                                <td>
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="" value="setting-status-change/{{ 'american_express_pay_banner' }}" {{ settingHelper('american_express_pay_banner') == 1 ? 'checked' : ''}} class="custom-switch-input
                                                    status-change">
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="no-padding-w30 coookie-marign">{{ __('Paypal Payment Method banner') }}</td>
                                                <td>
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="" value="setting-status-change/{{ 'paypal_payment_banner' }}" {{ settingHelper('paypal_payment_banner') == 1 ? 'checked' : ''}} class="custom-switch-input
                                                    status-change">
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="no-padding-w30 coookie-marign">{{ __('Apple-Pay Payment Method banner') }}</td>
                                                <td>
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="" value="setting-status-change/{{ 'apple_pay_banner' }}" {{ settingHelper('apple_pay_banner') == 1 ? 'checked' : ''}} class="custom-switch-input
                                                    status-change">
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="no-padding-w30 coookie-marign">{{ __('Amazon-Pay Payment Method banner') }}</td>
                                                <td>
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="" value="setting-status-change/{{ 'amazon_pay_banner' }}" {{ settingHelper('amazon_pay_banner') == 1 ? 'checked' : ''}} class="custom-switch-input
                                                    status-change">
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="no-padding-w30 coookie-marign">{{ __('After-Pay Payment Method banner') }}</td>
                                                <td>
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="" value="setting-status-change/{{ 'after_pay_banner' }}" {{ settingHelper('after_pay_banner') == 1 ? 'checked' : ''}} class="custom-switch-input
                                                    status-change">
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>

                                        <div class="form-group">
                                            <label for="payment_method_banner">{{ __('Payment Method Banner') }} {{__('(48X28)')}}</label>
                                            <div class="form-group">
                                                <input
                                                    type="file"
                                                    id="payment_method_banner"
                                                    class="custom-file-input image_pick file-select"
                                                    data-image-for="payment_method_banner"
                                                    name="payment_method_banner" accept="image/*"
                                                    id="customFile"
                                                    value="{{ @$user->image_id }}"
                                                />
                                            </div>
                                            <div  class="position-absolute">
                                                @if(@settingHelper('payment_method_banner') !=[] && is_file_exists(@settingHelper('payment_method_banner')['image_72x72'], settingHelper('payment_method_banner')['storage']))
                                                    <img src="{{ get_media(@settingHelper('payment_method_banner')['image_72x72'], settingHelper('payment_method_banner')['storage'])}}" alt="" id="img_payment_method_banner" class="img-thumbnail site-icon" />
                                                @else
                                                    <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_payment_method_banner" class="img-thumbnail site-icon" />
                                                @endif
                                                @if(@settingHelper('payment_method_banner') != [])
                                                    <div class="delete-image">
                                                        <a href="javascript:void(0)" id="banner_delete" class="position-icon"><i class="bx bx-x"></i></a>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="text-right btn-margin">
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
