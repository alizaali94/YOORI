@extends('admin.partials.master')

@section('title')
    {{ __('Configuration') }}
@endsection
@section('delivery_hero_active')
    active
@endsection
@section('configuration')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Configuration') }}</h2>
                    <p class="section-lead">
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Delivery Man Configuration') }}</h4>
                        </div>
                        <div class="card-body">
                            @if (hasPermission('delivery_hero_configuration_update'))
                                <form action="{{ route('delivery.hero.config.update') }}" method="POST">
                                    @csrf @method('POST')
                            @endif
                                <div class="section-title mt-0">{{ __('Payment Configuration') }}</div>
                                <div class="form-group">
                                    <label for="delivery_hero_payment_type"
                                           class="form-control-label">{{ __('Configuration') }}</label>
                                    <select name="delivery_hero_payment_type" id="delivery_hero_payment_type"
                                            class="form-control select2">
                                        <option
                                            {{ old('delivery_hero_payment_type') == 'delivery_hero_salary' ? 'selected' : (settingHelper('delivery_hero_payment_type') == 'delivery_hero_salary' || settingHelper('delivery_hero_payment_type') == '' ? 'selected' : '') }}
                                            value="delivery_hero_salary">{{ __('Salary Amount Only') }}</option>
                                        <option
                                            {{ old('delivery_hero_payment_type') == 'delivery_hero_commission' ? 'selected' : (old('delivery_hero_payment_type') == '' && settingHelper('delivery_hero_payment_type') == 'delivery_hero_commission' ? 'selected' : '') }}
                                            value="delivery_hero_commission">{{ __('Commission Rate Only') }}</option>
                                        <option
                                            {{ old('delivery_hero_payment_type') == 'salary_and_commission' ? 'selected' : (old('delivery_hero_payment_type') == '' && settingHelper('delivery_hero_payment_type') == 'salary_and_commission' ? 'selected' : '') }}
                                            value="salary_and_commission">{{ __('Salary And Commission') }}</option>
                                    </select>
                                </div>

                                <div class="section-title">{{__('Notification Configuration')}}</div>
                                <div class="table-responsive">
                                    <table class="table col-sm-xs-12 col-md-9">
                                        <tbody>
                                        <tr id="">
                                            <td>{{ __('Send Mail') }}</td>
                                            <td width="300">
                                                <label class="custom-switch mt-2 {{ hasPermission('delivery_hero_configuration_update') ? '' : 'cursor-not-allowed' }}">
                                                    <input type="checkbox" name="delivery_hero_send_mail"
                                                           {{ hasPermission('delivery_hero_configuration_update') ? '' : 'disabled' }}
                                                           class="custom-switch-input"
                                                        {{ settingHelper('delivery_hero_send_mail') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr id="">
                                            <td>{{ __('Send OTP') }}</td>
                                            <td width="300">
                                                <label class="custom-switch mt-2 {{ hasPermission('delivery_hero_configuration_update') ? '' : 'cursor-not-allowed' }}">
                                                    <input type="checkbox" name="delivery_hero_OTP"
                                                           {{ hasPermission('delivery_hero_configuration_update') ? '' : 'disabled' }}
                                                           class="custom-switch-input" {{ settingHelper('delivery_hero_OTP') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                @if(hasPermission('delivery_hero_configuration_update'))
                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary">
                                        {{ __('Update') }}
                                    </button>
                                </div>
                                @endif
                        @if (hasPermission('delivery_hero_configuration_update'))
                             </form>
                        @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
