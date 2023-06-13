@extends('admin.partials.master')
@section('preference_active')
    active
@endsection
@section('setup')
    active
@endsection
@section('preference')
    active
@endsection
@section('title')
    {{ __('Preference') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Settings') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.system-setup.sidebar')
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{ __('Preference') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md col-9 middle">
                                    <form action="{{ route('admin.preference.setting.update') }}" method="post">
                                        @csrf
                                        @method('put')
                                        <tbody>
                                        <tr>
                                            <th colspan="2">{{ __('System') }}</th>
                                        </tr>
                                        <tr>
                                            <td>{{ __('HTTPS Activation') }}
                                                <div class="invalid-feedback">
                                                    {{ __('N.B: Make sure you have SSL Installed before activating HTTPS') }}
                                                </div>
                                            </td>

                                            <td width="300">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="custom-switch-checkbox"
                                                           value="setting-status-change/{{ 'https' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('https') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {{ __('Maintenance Mode Activation') }}
                                                @if(settingHelper('maintenance_mode') == 1)
                                                    <div class="invalid-feedback">
                                                        Access
                                                        here: {{ route('home',).'/'.settingHelper('maintenance_secret') }}
                                                    </div>
                                                @endif
                                            </td>
                                            <td width="300">
                                                @if(settingHelper('maintenance_mode') == 0 || settingHelper('maintenance_mode') == '')
                                                    <label class="custom-switch mt-2 modal-menu" data-toggle="modal"
                                                           title="" data-original-title="Maintenance Mode"
                                                           data-url="{{ route('edit-info', ['page_name' => 'maintenance-mode']) }}"
                                                           data-target="#common-modal">
                                                        <input type="checkbox" name="custom-switch-checkbox"
                                                               class="custom-switch-input" {{ settingHelper('maintenance_mode') == 1 ? 'checked' : ''}} />
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                @else
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="custom-switch-checkbox"
                                                               value="setting-status-change/{{ 'maintenance_mode' }}"
                                                               class="custom-switch-input status-change" {{ settingHelper('maintenance_mode') == 1 ? 'checked' : ''}} />
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                @endif
                                            </td>
                                        </tr>
                                        <tr>
                                            <th colspan="2">{{ __('Business Related') }}</th>
                                        </tr>
                                        <tr>
                                            <td>{{ __('Seller System Activation') }}</td>
                                            <td width="300">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="custom-switch-checkbox"
                                                           value="setting-status-change/{{ 'seller_system' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('seller_system') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{{ __('Seller Product Auto Approve') }}</td>
                                            <td width="300">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="custom-switch-checkbox"
                                                           value="setting-status-change/{{ 'seller_product_auto_approve' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('seller_product_auto_approve') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{{ __('Wallet System Activation') }}</td>
                                            <td width="300">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="custom-switch-checkbox"
                                                           value="setting-status-change/{{ 'wallet_system' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('wallet_system') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{{ __('Coupon System Activation') }}</td>
                                            <td width="300">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="custom-switch-checkbox"
                                                           value="setting-status-change/{{ 'coupon_system' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('coupon_system') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{{ __('Pickup Point Activation') }}</td>
                                            <td width="300">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="custom-switch-checkbox"
                                                           value="setting-status-change/{{ 'pickup_point' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('pickup_point') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{{ __('Pay Later Payment Activation') }}</td>
                                            <td width="300">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="custom-switch-checkbox"
                                                           value="setting-status-change/{{ 'pay_later_system' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('pay_later_system') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>{{ __('Stock Out Product Hide') }}</td>
                                            <td>
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="custom-switch-checkbox"
                                                           value="setting-status-change/{{ 'stock_out_product_hide' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('stock_out_product_hide') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{{ __('use_live_api_for_currency') }}</td>
                                            <td>
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="custom-switch-checkbox"
                                                           value="setting-status-change/live_api_currency"
                                                           class="custom-switch-input status-change" {{ settingHelper('live_api_currency') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th colspan="2">{{ __('Color activation') }}</th>
                                        </tr>
                                        <tr>
                                            <td>{{ __('Color Filter Activation') }}</td>
                                            <td>
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="custom-switch-checkbox"
                                                           value="setting-status-change/{{ 'color' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('color') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </form>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.common-modal')
