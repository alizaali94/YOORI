<section class="shopping-cart api">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-5">
                <div class="payment-chacker my-3">
                    <form action="#">
                        <div class="auto-renew">
                            <input type="radio" id="auto-renew-package" name="renew-package" value="auto-renew-package">
                            <label for="auto-renew-package">Auto Renew Package</label>
                        </div>
                        <div class="disable-auto-renew">
                            <input type="radio" id="disable-renew-package" name="renew-package" value="disable-renew-package">
                            <label for="disable-renew-package">Disable Renew Package</label>
                        </div>
                    </form>
                </div>
                <div class="sg-shipping disable_section">
                    <div class="card-list">
                        <ul class="global-list grid-2">
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
                            @if(in_array('offline_payment',$addons))
                                @foreach($offline_methods as $offline)
                                    <li>
                                        <div class="input-checkbox">
                                            <input type="radio" data-id="{{ $offline->id }}" data-value="{{$offline->getTranslation('name',app()->getLocale())}}" data-instructions="{{ $offline->getTranslation('instructions',app()->getLocale()) }}" id="offline_{{$offline->id}}"
                                                   value="offline_method" name="payment">
                                            <label for="offline_{{$offline->id}}">
                                                <img src="{{ $offline->image }}" alt="{{ $offline->name }}"
                                                     class="img-fluid">
                                                {{ $offline->name }}
                                            </label>
                                        </div>
                                    </li>
                                @endforeach
                            @endif
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
<!--                <div class="wallet-balance">
                    @if(authUser() && authUser()->balance >= $amount && settingHelper('wallet_system') == 1)
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="separator mb-3">
                                <span class="bg-white">
                                    <span class="opacity-60">{{ __('or') }}</span>
                                </span>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <p>{{ __('your_wallet_balance') }} : {{ get_price(authUser()->balance,$currency) }}</p>
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
                </div>-->
                <div class="order-summary paymentCustom">
                    <div class="peymentToggler">
                        <div class="paymentHeader showHide">
                            <h6>{{ __('price_details') }}</h6>
                            <div class="sg-card">
                                @php
                                    $action_url = authUser() ? url('api/complete-order') : url('api/complete-order?&guest=1');
                                @endphp
                            </div>
                        </div>

                        <div class="paymentBTN-group">
                            <div class="order-total sm-fixed-bottom">
                                <p>{{ __('total') }}
                                    <!-- <span id="iconHi">
                                        <span class="icon mdi mdi-name mdi-chevron-down"></span>
                                    </span> -->
                                    <span>{{ get_price($amount,$currency) }}</span></p>

                                <a href="javascript:void(0)" class="btn btn-primary paymentBTNFixed disable_btn">{{ __('pay_now') }}</a>

                                <div class="div_btns d-none">
                                    <a href="{{ url("stripe/redirect?trx_id=$trx_id&payment_mode=api&code=$code&token=$token&curr=$currency")  }}" class="btn btn-primary paymentBTNFixed payment_btns d-none stripe_btn"> {{ __('pay_now') }}</a>

                                    <a href="{{ url("user/payment/paytmRedirect?payment_mode=api") }}" class="btn btn-primary paymentBTNFixed payment_btns d-none paytm_btn">{{ __('pay_now') }}</a>

                                    <a href="{{ url("get/ssl-response?payment_type=ssl_commerze&code=$code&trx_id=$trx_id&payment_mode=api&token=$token") }}" class="btn btn-primary paymentBTNFixed payment_btns d-none ssl_commerze_btn"> {{ __('pay_now') }}</a>

                                    <a href="javascript:void(0)" class="btn btn-primary paymentBTNFixed payment_btns d-none paystack_btn">{{ __('pay_now') }}</a>

                                    <a href="{{ url("mollie/payment/?code=$code&trx_id=$trx_id&payment_mode=api&token=$token") }}" class="btn btn-primary paymentBTNFixed payment_btns d-none mollie_btn"> {{ __('pay_now') }}</a>

                                    <a href="#" class="btn btn-primary paymentBTNFixed payment_btns d-none flutter_wave_btn" data-toggle="modal" data-target="#fw_modal">{{ __('pay_now') }}</a>

                                    <button id="cod_n_pay_later_submit" type="button" class="btn btn-primary paymentBTNFixed d-none payment_btns confirm_btn form_submit">{{ __('confirm') }}</button>

                                    <button class="btn btn-primary paymentBTNFixed d-none loading" type="button" disabled>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span class="sr-only"></span>
                                    </button>

                                    <a href="javascript:void(0)" class="btn btn-primary paymentBTNFixed payment_btns d-none offline_method_btn" data-toggle="modal" data-target="#offline"> {{ __('pay_with') }} <span></span></a>
                                </div>

                                <div class="mx-auto w_40 payment_btns d-none paypal_btn" id="paypal-button-container"></div>
                                <form name="jsform" class="d-none jazz_cash_btn payment_btns" action="{{ $jazz_url }}"
                                    method="POST">
                                    @foreach($jazz_data as $key=> $data)
                                        <input type="hidden" name="{{ $key }}"
                                            value="{{ $data }}">
                                    @endforeach
                                    <button type="submit" class="btn btn-primary paymentBTNFixed jazz_btn">{{ __('pay_with_jazzCash') }}
                                    </button>
                                </form>

                                <form action="{{ $action_url }}" method="post">@csrf
                                    <input type="hidden" name="trx_id" value="{{ $trx_id }}">
                                    <input type="hidden" name="code" value="{{ $code }}">
                                    <input type="hidden" name="token" value="{{ $token }}">
                                    <input type="hidden" name="payment_type" value="razor_pay">
                                    <input type="hidden" name="amount" value="{{ $amount }}">
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
                               value="{{ round($amount * $ngn_exchange_rate) }}"/>
                        <input type="hidden" name="currency" value="NGN"/>
                        <input type="hidden" name="meta[token]" value="54"/>
                        <input type="hidden" name="redirect_url" value="{{ $action_url }}"/>
                    </div>
                    <div class="col-lg-12 text-center">
                        <button type="submit" id="start-payment-button" class="btn btn-primary flutter_wave">
                            {{ __('pay') }} {{ get_price($amount,$currency) }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<input type="hidden" class="total_amount" value="{{ $amount }}">
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

@if(settingHelper('is_paypal_activated') == 1)
    <script data-namespace="paypal_sdk"
            src="https://www.paypal.com/sdk/js?client-id={{ settingHelper('paypal_client_id') }}&currency=USD"></script>
    <script src="{{ static_asset('frontend/js/paypal.js') }}"></script>
@endif

@if($paystack_activated)
    <script src="https://js.paystack.co/v2/inline.js">
        @endif


        <script type="text/javascript" src="{{ static_asset('admin/js/toastr.min.js') }}"></script>

    @if(settingHelper('is_razorpay_activated') == 1 && $indian_currency)
        <script>
            let myScript = document.createElement('script');

            myScript.setAttribute('type', 'text/javascript');
            myScript.setAttribute('language', 'javascript');
            myScript.setAttribute('data-key', '{{ settingHelper('razorpay_key') }}');
            myScript.setAttribute('data-amount', {{ round($amount * 100 * $indian_currency->exchange_rate) }});
            myScript.setAttribute('data-name', '{{ settingHelper('system_name') }}');
            myScript.setAttribute('data-description', 'Razorpay');
            myScript.setAttribute('data-image', '{{ url('/') }}');
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
                        let method = $('input[name="payment"]:checked').data('value');
                        formData.append('payment_type', payment_type);
                        formData.append('trx_id', window.trx_id);
                        formData.append('code', window.code);
                        formData.append('token', window.token);
                        if (payment_type == 'offline_method') {
                            formData.append('id', method.id);
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
                        channels : ['card', 'bank', 'ussd', 'mobile_money'],
                        currency : 'GHS',
                        reference : ref,
                        onSuccess: (transaction) => {
                            let id = '{{ authId() }}';
                            let guest = 0;
                            if(id && id > 0)
                            {
                                guest = 1;
                            }

                            $.ajax({
                                url : '{{ url("api/complete-order") }}',
                                method : 'POST',
                                data : {
                                    trx_id : "{{ $trx_id }}",
                                    code : "{{ $code }}",
                                    token : "{{ $token }}",
                                    payment_type : 'paystack',
                                    ref : transaction.reference,
                                    guest : guest,
                                },
                                success : function (response){
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
            $("html, body").animate({ scrollTop: 800 }, 600);
        };

    </script>