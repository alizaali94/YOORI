<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ __('Payment') }}</title>

    <link rel="stylesheet" href="{{ static_asset('frontend/css/materialdesignicons.min.css') }}?version=130">
    <link rel="stylesheet" href="{{ static_asset('admin/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ static_asset('frontend/css/main.css') }}">
    <link rel="stylesheet" href="{{ static_asset('frontend/css/development.css') }}">
    <link rel="stylesheet" href="{{ static_asset('frontend/css/responsive.css') }}">
    <link rel="stylesheet" href="{{ static_asset('admin/css/toastr.min.css') }}">
    <link rel="stylesheet" href="{{ static_asset('frontend/css/vue-toastr-2.min.css') }}">

    <style>
        :root {
            --primary-color: {{ settingHelper('primary_color')}};
            --menu-active-color: {{ settingHelper('menu_active_color') }};
            --menu-bg-color: {{ settingHelper('menu_background_color') }};
            --menu-text-color: {{ settingHelper('menu_text_color') }};
            --primary-font: '{{primaryFont()}}', sans-serif;
            --profile-sidebar: {{ settingHelper('menu_background_color').'10' }};
            --sidebar-base-color: {{ settingHelper('primary_color').'20'}};
            --btn-bg-color: {{ settingHelper('button_background_color') }};
            --btn-txt-color: {{ settingHelper('button_text_color') }};
            --btn-bdr-color: {{ settingHelper('button_border_color') }};
        }

        @if(settingHelper('full_width_menu_background') !='1' && settingHelper('header_theme') == 'header_theme1')
               .header-menu.header_theme1 {
            background-color: transparent !important;
        }

        @endif
        @if(base64_decode(settingHelper('custom_css')))
            {{ base64_decode(settingHelper('custom_css')) }}
        @endif
            @if(settingHelper('is_tawk_messenger_activated') == 1)
        .fb_dialog_content iframe {
            margin-right: 90px !important;
        }
        @endif
    </style>
</head>
<body>

<section class="shopping-cart api">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-5">
                <div class="sg-shipping">
                    <div class="card-list">
                        <ul class="global-list grid-3">
                            @if(settingHelper('is_paypal_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" value="paypal"
                                               id="paypal" name="payment">
                                        <label for="paypal">
                                            <img src="{{ url('public/images/payment-method/paypal.svg') }}" alt="paypal"
                                                 class="img-fluid">
                                            {{ __('pay_with_payPal') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(settingHelper('is_stripe_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="stripe" value="stripe"
                                               name="payment">
                                        <label for="stripe">
                                            <img src="{{ url('public/images/payment-method/stripe.svg') }}" alt="stripe"
                                                 class="img-fluid">
                                            {{ __('pay_with_stripe') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(settingHelper('is_sslcommerz_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" name="payment"
                                               id="ssl_commerze" value="ssl_commerze">
                                        <label for="ssl_commerze">
                                            <img src="{{ url('public/images/payment-method/sslcommerze.svg') }}"
                                                 alt="ssl_commerze"
                                                 width="90">
                                            {{ __('pay_with_sSLCOMMERZE') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(settingHelper('is_paytm_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="paytm" value="paytm"
                                               name="payment">
                                        <label for="paytm">
                                            <img src="{{ url('public/images/payment-method/paytm.svg') }}" alt="paytm"
                                                 class="img-fluid">
                                            {{ __('pay_with_paytm') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(settingHelper('is_razorpay_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="razor_pay" value="razor_pay"
                                               @change="integrateRazorPay" name="payment">
                                        <label for="razor_pay">
                                            <img src="{{ url('public/images/payment-method/razorpay.svg') }}"
                                                 alt="razor_pay"
                                                 width="90"
                                                 class="img-fluid">
                                            {{ __('pay_with_razorpay') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(settingHelper('is_jazz_cash_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="jazzCash" value="jazz_cash"
                                               name="payment">
                                        <label for="jazzCash">
                                            <img src="{{ url('public/images/payment-method/jazzCash.svg') }}"
                                                 alt="jazzCash"
                                                 width="90"
                                                 class="img-fluid">
                                            {{ __('pay_with_jazzCash') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(settingHelper('is_mollie_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="mollie" value="mollie"
                                               name="payment">
                                        <label for="mollie">
                                            <img src="{{ url('public/images/payment-method/mollie.svg') }}"
                                                 alt="mollie"
                                                 width="90"
                                                 class="img-fluid">
                                            {{ __('pay_with_mollie') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if($paystack_activated)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="paystack" value="paystack"
                                               name="payment">
                                        <label for="paystack">
                                            <img src="{{ url('public/images/payment-method/paystack.svg') }}"
                                                 alt="paystack"
                                                 width="90"
                                                 class="img-fluid">
                                            {{ __('pay_with_paystack') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if($fw_activated)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="flutter_wave" value="flutter_wave"
                                               name="payment">
                                        <label for="flutter_wave">
                                            <img src="{{ url('public/images/payment-method/fw.svg') }}"
                                                 alt="flutter_wave"
                                                 width="90"
                                                 class="img-fluid">
                                            {{ __('pay_with_flutter') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(settingHelper('is_kkiapay_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="kkiapay" value="kkiapay"
                                               name="payment">
                                        <label for="kkiapay">
                                            <img src="{{ url('public/images/payment-method/kkiapay.svg') }}"
                                                 alt="kkiapay"
                                                 width="90" class="img-fluid">{{ __('pay_with_kkiapay') }}</label>
                                    </div>
                                </li>
                            @endif

                            @if(settingHelper('pay_later_system') == 1 && authUser())
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="pay_later"
                                               value="pay_later" name="payment">
                                        <label for="pay_later">
                                            <img src="{{ url('public/images/payment-method/paylater.svg') }}"
                                                 alt="pay_later"
                                                 width="90" class="img-fluid">
                                            {{ __('pay_later') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(!$check_cod)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="cash"
                                               value="cash_on_delivery" name="payment">
                                        <label for="cash">
                                            <img src="{{ url('public/images/payment-method/cash.svg') }}" alt="cash"
                                                 class="img-fluid">
                                            {{ __('cash_on_delivery') }}
                                        </label>
                                    </div>
                                </li>
                            @endif

                            @if(in_array('offline_payment',$addons))
                                @foreach($offline_methods as $offline)
                                    <li>
                                        <div class="input-checkbox">
                                            <input type="radio" data-id="{{ $offline->id }}" data-value="{{$offline->getTranslation('name',app()->getLocale())}}" data-instructions="{{ $offline->getTranslation('instructions',app()->getLocale()) }}" id="offline_{{$offline->id}}"
                                                   value="offline_method" name="payment">
                                            <label for="offline_{{$offline->id}}">
                                                <img src="{{ $offline->image }}" alt="{{ $offline->getTranslation('name',app()->getLocale()) }}"
                                                     class="img-fluid">
                                                {{ $offline->getTranslation('name',app()->getLocale()) }}
                                            </label>
                                        </div>
                                    </li>
                                @endforeach
                            @endif
                        </ul>

                    @if(authUser() && authUser()->balance >= $orders->sum('total_payable') && settingHelper('wallet_system') == 1)
                            <div class="row text-center">
                                <div class="col-lg-12">
                                    <div class="separator mb-3">
                                    <span class="bg-white px-3">
                                        <span class="opacity-60">{{ __('or') }}</span>
                                    </span>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <p>{{ __('your_wallet_balance') }}
                                        : {{ get_price(authUser()->balance,$currency) }}</p>
                                    <button type="button" id="wallet_submit" data-type="wallet"
                                            class="btn btn-primary form_submit">{{ __('pay_with_wallet') }}</button>
                                    <button class="btn btn-primary d-none loading" type="button" disabled>
                                        <span class="spinner-border spinner-border-sm" role="status"
                                              aria-hidden="true"></span>
                                        <span class="sr-only"></span>
                                    </button>
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>

            <div class="col-lg-4 pl-lg-5">
                <div class="order-summary paymentCustom">
                    <div class="peymentToggler">
                        <div class="paymentHeader showHide">
                            <h6>{{ __('price_details') }}</h6>

                            <div class="sg-card">
                                @php
                                    $action_url = authUser() ? url('api/complete-order') : url('api/complete-order?&guest=1');
                                @endphp
                                <ul class="global-list">
                                    <li>{{ __('subtotal') }}
                                        <span>{{ get_price($orders->sum('sub_total'),$currency) }}</span>
                                    </li>
                                    <li>{{ __('tax') }}
                                        <span>{{ get_price($orders->sum('total_tax'),$currency) }}</span>
                                    </li>
                                    <li>{{ __('discount') }}
                                        <span>{{ get_price($orders->sum('discount'),$currency) }}</span></li>
                                    <li>{{ __('shipping_cost') }}
                                        <span>{{ get_price($orders->sum('shipping_cost'),$currency) }}</span></li>
                                    @if(settingHelper('coupon_system') == 1)
                                        <li>{{ __('coupon_discount') }}
                                            <span>{{ get_price($orders->sum('coupon_discount'),$currency) }}</span></li>
                                    @endif
                                </ul>
                            </div>
                        </div>

                        <div class="paymentBTN-group">
                            <div class="order-total sm-fixed-bottom">
                                <p>{{ __('total') }}<span id="iconHi"><span
                                                class="icon mdi mdi-name mdi-chevron-down"></span></span>
                                    <span>{{ get_price($orders->sum('total_payable'),$currency) }}</span></p>

                                <a href="javascript:void(0)"
                                   class="btn btn-primary paymentBTNFixed disable_btn">{{ __('pay_now') }}</a>

                                <div class="div_btns d-none">
                                    <a href="{{ url("stripe/redirect?trx_id=$trx_id&payment_mode=api&code=$code&token=$token&curr=$currency")  }}"
                                       class="btn btn-primary paymentBTNFixed payment_btns d-none stripe_btn"> {{ __('pay_now') }}</a>

                                    <a href="{{ url("user/payment/paytmRedirect?payment_mode=api") }}"
                                       class="btn btn-primary paymentBTNFixed payment_btns d-none paytm_btn">{{ __('pay_now') }}</a>

                                    <a href="{{ url("get/ssl-response?payment_type=ssl_commerze&code=$code&trx_id=$trx_id&payment_mode=api&token=$token") }}"
                                       class="btn btn-primary paymentBTNFixed payment_btns d-none ssl_commerze_btn"> {{ __('pay_now') }}</a>

                                    <a href="javascript:void(0)"
                                       class="btn btn-primary paymentBTNFixed payment_btns d-none paystack_btn">{{ __('pay_now') }}</a>

                                    <a href="{{ url("mollie/payment/?code=$code&trx_id=$trx_id&payment_mode=api&token=$token") }}"
                                       class="btn btn-primary paymentBTNFixed payment_btns d-none mollie_btn"> {{ __('pay_now') }}</a>

                                    <a href="#"
                                       class="btn btn-primary paymentBTNFixed payment_btns d-none flutter_wave_btn"
                                       data-toggle="modal" data-target="#fw_modal">{{ __('pay_now') }}</a>

                                    <button class="btn btn-primary kkiapay-button paymentBTNFixed payment_btns d-none kkiapay_btn">{{ __('pay_now') }}</button>

                                    <button id="cod_n_pay_later_submit" type="button"
                                            class="btn btn-primary paymentBTNFixed d-none payment_btns confirm_btn form_submit">{{ __('confirm') }}</button>

                                    <button class="btn btn-primary paymentBTNFixed d-none loading" type="button"
                                            disabled>
                                        <span class="spinner-border spinner-border-sm" role="status"
                                              aria-hidden="true"></span>
                                        <span class="sr-only"></span>
                                    </button>

                                    <a href="javascript:void(0)"
                                       class="btn btn-primary paymentBTNFixed payment_btns d-none offline_method_btn"
                                       data-toggle="modal" data-target="#offline"> {{ __('pay_with') }}
                                        <span></span></a>
                                </div>

                                <div class="mx-auto w_40 payment_btns d-none paypal_btn"
                                     id="paypal-button-container"></div>
                                <form name="jsform" class="d-none jazz_cash_btn payment_btns" action="{{ $jazz_url }}"
                                      method="POST">
                                    @foreach($jazz_data as $key=> $data)
                                        <input type="hidden" name="{{ $key }}"
                                               value="{{ $data }}">
                                    @endforeach
                                    <button type="submit"
                                            class="btn btn-primary paymentBTNFixed jazz_btn">{{ __('pay_with_jazzCash') }}
                                    </button>
                                </form>

                                <form action="{{ $action_url }}" method="post">@csrf
                                    <input type="hidden" name="trx_id" value="{{ $trx_id }}">
                                    <input type="hidden" name="code" value="{{ $code }}">
                                    <input type="hidden" name="token" value="{{ $token }}">
                                    <input type="hidden" name="payment_type" value="razor_pay">
                                    <input type="hidden" name="amount" value="{{ $orders->sum('total_payable') }}">
                                    <div id="razor_pay_btn_append"></div>
                                </form>
                            </div>
                        </div>
                    </div>


                    <div class="sm-content-show"></div>


                </div>
            </div>
        </div><!-- /.row -->
    </div>
</section><!-- /.shopping-cart -->

<!--offline -->
<div class="modal fade" id="offline" tabindex="-1" aria-labelledby="offline_modal"
     aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ __('pay_with') }} <span></span></h5>
                <button type="button" class="close modal_close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="offline_form" id="offline_form">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label>Upload File</label>
                                <div class="input-group">
                                    <div class="custom-file d-flex">
                                        <label class="upload-image form-control" for="upload-1">
                                            <input type="file" id="upload-1" name="file">
                                            <i id="upload-image">{{ __('upload_file') }}</i>
                                        </label>
                                        <label class="upload-image upload-text" for="upload-2">
                                            <input type="file" id="upload-2" name="file">
                                            <img src="{{ $default_assets['review_image'] }}" alt="file"
                                                 class="img-fluid">
                                            {{ __('upload') }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 instruction_body">
                            <label>{{ __('instructions') }}</label>
                            <div class="instruction"></div>
                        </div>
                        <div class="col-lg-12 text-center mt-3">
                            <button type="button" class="btn btn-primary form_submit"
                                    id="offline_submit">{{ __('proceed') }}</button>
                            <button class="btn btn-primary d-none loading" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span class="sr-only"></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div><!-- /.modal-body -->
        </div>
    </div>
</div>
<!--Flutterwave -->
@php
    $action_url = authUser() ? url("api/complete-order?trx_id=$trx_id&code=$code&payment_type=flutter_wave") : url("api/complete-order?trx_id=$trx_id&code=$code&payment_type=flutter_wave&guest=1");
@endphp
<div class="modal fade" id="fw_modal" tabindex="-1" aria-labelledby="fw_modal"
     aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ __('pay_with_flutter') }}</h5>
                <button type="button" class="close modal_close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
                <form method="POST" action="https://checkout.flutterwave.com/v3/hosted/pay">
                    <div class="row">
                        <input type="hidden" name="public_key" value="{{ settingHelper('flutterwave_public_key') }}"/>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <input type="text" name="customer[name]" class="form-control"
                                       placeholder="{{ __('name') }}" required/>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <input type="email" name="customer[email]" class="form-control"
                                   placeholder="{{ __('email') }}" required/>
                        </div>
                        <input type="hidden" name="tx_ref"/>
                        <input type="hidden" name="amount"
                               value="{{ round($orders->sum('total_payable') * $ngn_exchange_rate) }}"/>
                        <input type="hidden" name="currency" value="NGN"/>
                        <input type="hidden" name="meta[token]" value="54"/>
                        <input type="hidden" name="redirect_url" value="{{ $action_url }}"/>
                    </div>
                    <div class="col-lg-12 text-center">
                        <button type="submit" id="start-payment-button" class="btn btn-primary flutter_wave">
                            {{ __('pay') }} {{ get_price($orders->sum('total_payable'),$currency) }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<input type="hidden" class="total_amount" value="{{ $orders->sum('total_payable') }}">
<input type="hidden" class="trx_id" value="{{ $trx_id }}">
<input type="hidden" class="code" value="{{ $code }}">
<input type="hidden" class="url" value="{{ url('/') }}">
<input type="hidden" class="auth_user" value="{{ authUser() }}">
<input type="hidden" class="is_sslcommerz_sandbox_mode_activated"
       value="{{ settingHelper('is_sslcommerz_sandbox_mode_activated') == 1 }}">
<input type="hidden" class="payment_success_url" value="{{ route('api.payment.success') }}">
<input type="hidden" id="stripe_key" value="{{ settingHelper('stripe_key') }}">

<script type="text/javascript" src="{{ static_asset('admin/js/jquery-3.3.1.min.js') }}"></script>
<script>
    window.url = '';
    window.base_url = $('.url').val();
    window.amount = $('.total_amount').val();
    window.trx_id = $('.trx_id').val();
    window.code = $('.code').val();
    window.user = $('.auth_user').val();
    window.ssl_sandobx_activated = $('.is_sslcommerz_sandbox_mode_activated').val();
    window.token = '{{ $token }}';
</script>
<script type="text/javascript" src="{{ static_asset('admin/js/popper.min.js') }}"></script>
<script type="text/javascript" src="{{ static_asset('admin/js/bootstrap.min.js') }}"></script>
<script src="{{ static_asset('frontend/js/vue-toastr-2.js') }}"></script>

@if(settingHelper('is_kkiapay_activated') == 1)
    <script amount="{{ round($orders->sum('total_payable') * $xof->exchange_rate) }}"
            callback="{{ authUser() ? url("api/complete-order?payment_type=kkiapay&trx_id=$trx_id&code=$code&payment_type=kkiapay&token=$token") : url("api/complete-order?payment_type=kkiapay&trx_id=$trx_id&code=$code&payment_type=kkiapay&guest=1") }}"
            data=""
            url="{{ $dark_logo }}"
            position="center"
            theme="{{ settingHelper('menu_background_color') }}"
            sandbox="{{ settingHelper('is_kkiapay_sandbox_enabled') == 1 ? 'true' : 'false' }}"
            key="{{ settingHelper('kkiapay_public_api_key') }}"
            src="{{ asset('public/frontend/js/k.js') }}"></script>
@endif

@if(settingHelper('is_paypal_activated') == 1)
    <script data-namespace="paypal_sdk"
            src="https://www.paypal.com/sdk/js?client-id={{ settingHelper('paypal_client_id') }}&currency=USD"></script>
    <script src="{{ static_asset('frontend/js/paypal.js') }}"></script>
@endif

@if($paystack_activated)
    <script src="https://js.paystack.co/v2/inline.js">
        @endif

        <script type="text/javascript" src="{{ static_asset('admin/js/toastr.min.js') }}"></script>

    @if(settingHelper('is_razorpay_activated') == 1)
        <script>
            let myScript = document.createElement('script');

            myScript.setAttribute('type', 'text/javascript');
            myScript.setAttribute('language', 'javascript');
            myScript.setAttribute('data-key', '{{ settingHelper('razorpay_key') }}');
            myScript.setAttribute('data-amount', {{ round($orders->sum('total_payable') * 100 * $indian_currency->exchange_rate) }});
            myScript.setAttribute('data-name', '{{ settingHelper('system_name') }}');
            myScript.setAttribute('data-description', 'Razorpay');
            myScript.setAttribute('data-image', '{{ $dark_logo }}');
            myScript.setAttribute('data-prefill.name', '');
            myScript.setAttribute('data-prefill.email', '');
            myScript.setAttribute('data-prefill.address', '');
            myScript.setAttribute('data-theme.color', '{{ settingHelper('menu_background_color') }}');
            myScript.setAttribute('src', '{{ static_asset('frontend/js/razor_pay_checkout.js') }}');
            document.getElementById('razor_pay_btn_append').insertAdjacentElement('afterend', myScript);
        </script>
    @endif
    <script>
        let ref = reference();
        (function ($) {
            'use strict';
            $(document).ready(function () {
                // Append script
                $(document).on('change', 'input[name="payment"]', function () {
                    let val = $(this).val();

                    $('.razorpay-payment-button').addClass('d-none');
                    $('.payment_btns').addClass('d-none');
                    $('.div_btns').removeClass('d-none');

                    let btn_selector = $('.' + val + '_btn');
                    if(val == 'offline_method')
                    {
                        let name = $(this).data('value');
                        let instructions = $(this).data('instructions');
                        let text = '{{ __('pay_with') }}'+' ' + name;
                        btn_selector.text(text);
                        $('#offline .modal-title').text(text);
                        $('#offline .instruction').html(instructions);
                    }
                    if (val) {
                        btn_selector.removeClass('d-none');
                    }
                    if (val == 'cash_on_delivery' || val == "pay_later" || val == "wallet") {
                        $('.confirm_btn').removeClass('d-none');
                    } else if (val == 'razor_pay') {
                        $('.razorpay-payment-button').show().removeClass('d-none');
                    }
                    if (val) {
                        $('.disable_btn').hide();
                    } else {
                        $('.disable_btn').show();
                    }

                });

                $(document).on('click', '#cod_n_pay_later_submit,#wallet_submit,#offline_submit', function (e) {
                    e.preventDefault();
                    let payment_type = $('input[name="payment"]:checked').val();
                    let type = $(this).data('type');
                    $('.payment_btns').addClass('d-none');

                    if (type && type == 'wallet') {
                        payment_type = 'wallet'
                    }

                    let form = document.getElementById('offline_form');
                    let formData = new FormData(form);

                    if (window.user) {
                        let id = $('input[name="payment"]:checked').data('id');
                        formData.append('payment_type', payment_type);
                        formData.append('trx_id', window.trx_id);
                        formData.append('code', window.code);
                        formData.append('token', window.token);
                        if (payment_type == 'offline_method') {
                            formData.append('id', id);
                        }
                    } else {
                        formData.append('payment_type', payment_type);
                        formData.append('trx_id', window.trx_id);
                        formData.append('code', window.code);
                        formData.append('guest', 1);
                    }

                    $.ajax({
                        type: 'POST',
                        url: '{{ url('api/complete-order') }}',
                        processData: false,
                        contentType: false,
                        data: formData,
                        success: function (response) {
                            $('.form_submit').removeClass('d-none');
                            $('.loading').addClass('d-none');
                            if (response.error) {
                                toastr.error(response.error);
                            } else {
                                window.location.href = '{{ route('api.payment.success') }}';
                                toastr.success(response.success);
                            }
                        },
                        error: function (response) {
                            toastr.error(response.error);
                            $('.form_submit').removeClass('d-none');
                            $('.loading').addClass('d-none');
                        }
                    })
                });

                $(document).on('click', '.paystack_btn', function () {
                    let key = "{{ settingHelper('paystack_public_key') }}";
                    let amount = $('.total_amount').val() * parseFloat('{{ $ngn_exchange_rate }}') * 100;
                    const paystack = new PaystackPop();
                    paystack.newTransaction({
                        key: key,
                        amount: parseFloat(amount).toFixed(2),
                        email: 'yoori@spagreen.net',
                        channels: ['card', 'bank', 'ussd', 'mobile_money'],
                        currency: 'GHS',
                        reference: ref,
                        onSuccess: (transaction) => {
                            let id = '{{ authId() }}';
                            let guest = 0;
                            if (id && id > 0) {
                                guest = 1;
                            }

                            $.ajax({
                                url: '{{ url("api/complete-order") }}',
                                method: 'POST',
                                data: {
                                    trx_id: "{{ $trx_id }}",
                                    code: "{{ $code }}",
                                    token: "{{ $token }}",
                                    payment_type: 'paystack',
                                    ref: transaction.reference,
                                    guest: guest,
                                },
                                success: function (response) {
                                    window.location.href = $('.payment_success_url').val();
                                }
                            })

                        },
                        onCancel: () => {
                            // user closed popup
                        }
                    });
                });

            });
        })(jQuery);

        function reference() {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            $('input[name = "tx_ref"]').val(text);

            return text;
        }

        let theButton = document.getElementById('iconHi');
        let theText = document.querySelector('.showHide');

        theButton.onclick = function () {
            theText.classList.toggle('ulHide');
            $("html, body").animate({scrollTop: 800}, 600);
        };

    </script>
</body>
</html>