@extends('admin.partials.master')

@section('title')
    {{ __('Edit') }} {{ __('Seller') }}
@endsection
@section('payment_gateway')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('Payment Gateway') }}</h2>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-md-6">
                    <div class="row">
                        <div class="card col-md-11 middle">
                            <div class="card-header">
                                <h4>{{__('Bank Payment')}}</h4>
                                <div class="card-header-action">
                                    <button class="btn btn-link collapsed" data-toggle="collapse"
                                            data-target="#collapseOne" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                        <i class='bx bx-plus'></i>
                                    </button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="collapse" id="collapseOne">
                                        <div class="card-body">
                                            <div class="form-group row mt-2">
                                                <label
                                                    class="col-md-5 col-from-label">{{ __('Active Account') }}</label>
                                                <div class="col-md-7">
                                                    <label class="custom-switch">
                                                        <input type="checkbox"
                                                               {{ @$bank_account->status == 1 ? 'checked' : '' }} value="active-method-status-change/{{@$bank_account->id}}/is_bank_active"
                                                               name="active_account"
                                                               class="custom-switch-input account-active-status-change">
                                                        <input type="hidden" id="is_active" value="{{'is_bank_active'}}" />
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                    @if ($errors->has('bank_payment'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('bank_payment') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="form-group row mt-2">
                                                <label
                                                    class="col-md-5 col-from-label">{{ __('Default Account') }}</label>
                                                <div class="col-md-7">
                                                    <label class="custom-switch {{ @$bank_account->is_default == 1 ? 'cursor-not-allowed' : '' }} ">
                                                        <input type="checkbox"
                                                               {{ @$bank_account->is_default == 1 ? 'checked' : '' }} value="default-status-change/{{@$bank_account->id}}"
                                                               name="bank_payment"
                                                               class="custom-switch-input {{ @$bank_account->is_default == 1 ? '' : 'status-change' }}" {{ @$bank_account->is_default == 1 ? 'disabled' : '' }}>
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="bank-payment-details">
                                                <form action="{{route('seller.update.payment.account')}}">
                                                    <div class="form-group mt-2">
                                                        <label for="bank_name">{{ __('Bank Name') }}</label>
                                                        <input type="text" name="bank_name"
                                                               value="{{ old('account_details') ? old('account_details') : @$bank_account->account_details['bank_name'] }}"
                                                               class="form-control"
                                                               placeholder="{{ __('Enter Bank Name') }}">
                                                        <input type="hidden" name="account_type" value="bank"/>
                                                        @if ($errors->has('bank_name'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('bank_name') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <label for="owner_name">{{ __('Owner Name') }}</label>
                                                        <input type="text" name="owner_name"
                                                               value="{{ old('owner_name') ? old('owner_name') : @$bank_account->account_details['owner_name'] }}"
                                                               class="form-control"
                                                               placeholder="{{ __('Enter Owner Name') }}">
                                                        @if ($errors->has('owner_name'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('owner_name') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <label for="bank_phone_no">{{ __('Phone No') }}</label>
                                                        <input type="text" name="bank_phone_no"
                                                               value="{{ old('bank_phone_no') ? old('bank_phone_no') : @$bank_account->account_details['bank_phone_no'] }}"
                                                               class="form-control"
                                                               placeholder="{{ __('Enter Phone Number') }}">
                                                        @if ($errors->has('bank_phone_no'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('bank_phone_no') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <label for="branch">{{ __('Branch') }}</label>
                                                        <input type="text" name="branch"
                                                               value="{{ old('branch') ? old('branch') : @$bank_account->account_details['branch'] }}"
                                                               class="form-control"
                                                               placeholder="{{ __('Enter Branch') }}">
                                                        @if ($errors->has('branch'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('branch') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <label for="account_number">{{ __('A/C number') }}</label>
                                                        <input type="text" name="account_number"
                                                               value="{{ old('account_number') ? old('account_number') : @$bank_account->account_details['account_number'] }}"
                                                               class="form-control"
                                                               placeholder="{{ __('Enter Account Number') }}">
                                                        @if ($errors->has('account_number'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('account_number') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <label for="routing_no">{{ __('Routing No') }}</label>
                                                        <input type="text" name="routing_no"
                                                               value="{{ old('routing_no') ? old('routing_no') : @$bank_account->account_details['routing_no'] }}"
                                                               class="form-control"
                                                               placeholder="{{ __('Enter Routing No') }}">
                                                        @if ($errors->has('routing_no'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('routing_no') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                    <div class="text-right">
                                                        <button
                                                            class="btn btn-outline-primary">{{__('Update')}}</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="card col-md-11 middle">
                            <div class="card-header">
                                <h4>{{__('Paypal Payment')}}</h4>
                                <div class="card-header-action">
                                    <button class="btn btn-link collapsed" data-toggle="collapse"
                                            data-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                        <i class='bx bx-plus'></i>
                                    </button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="collapse" id="collapseTwo">
                                        <div class="card-body">
                                            <div class="form-group row mt-2">
                                                <label
                                                    class="col-md-5 col-from-label">{{ __('Active Account') }}</label>
                                                <div class="col-md-7">
                                                    <label class="custom-switch">
                                                        <input type="checkbox"
                                                               {{ @$paypal->status == 1 ? 'checked' : '' }} value="active-method-status-change/{{@$paypal->id}}/is_paypal_active"
                                                               name="active_account"
                                                               class="custom-switch-input account-active-status-change">
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                    @if ($errors->has('bank_payment'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('bank_payment') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="form-group row mt-2">
                                                <label
                                                    class="col-md-5 col-from-label">{{ __('Default Account') }}</label>
                                                <div class="col-md-7">
                                                    <label class="custom-switch {{ @$paypal->is_default == 1 ? 'cursor-not-allowed' : '' }}">
                                                        <input type="checkbox"
                                                               {{ @$paypal->is_default == 1 ? 'checked' : '' }} value="default-status-change/{{@$paypal->id}}"
                                                               name="bank_payment"
                                                               class="custom-switch-input {{ @$paypal->is_default == 1 ? '' : 'status-change' }}" {{ @$paypal->is_default == 1 ? 'disabled' : '' }}>
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="bank-payment-details">
                                                <form action="{{route('seller.update.payment.account')}}">
                                                    <div class="form-group mt-2">
                                                        <label for="bank_name">{{ __('Paypal Email') }}</label>
                                                        <input type="text" name="paypal_email"
                                                               value="{{ old('account_details') ? old('account_details') : @$paypal->account_details['paypal_email'] }}"
                                                               class="form-control"
                                                               placeholder="{{ __('Enter Paypal Email') }}">
                                                        <input type="hidden" name="account_type" value="paypal"/>
                                                        @if ($errors->has('bank_name'))
                                                            <div class="invalid-feedback">
                                                                <p>{{ $errors->first('bank_name') }}</p>
                                                            </div>
                                                        @endif
                                                    </div>
                                                    <div class="text-right">
                                                        <button
                                                            class="btn btn-outline-primary">{{__('Update')}}</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
