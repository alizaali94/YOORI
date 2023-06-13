@extends('admin.partials.master')
@section('title')
    {{ __('Seller Setting') }}
@endsection
@section('sellers_active')
    active
@endsection
@section('seller_settings_active')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Seller Settings') }}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-6">
                    <div class="row">
                        <div class="col-sm-xs-12 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4>{{ __('Seller Products Commission') }}</h4>
                                </div>
                                <div class="card-body col-sm-xs-12">
                                    <div class="table-responsive">
                                        <table class="table col-sm-xs-12">
                                            <tbody>
                                            <form action="{{ route('admin.preference.setting.update') }}" method="post">
                                                @csrf
                                                @method('put')
                                                <tr>
                                                    <td>{{ __('Category Based Commission') }}</td>
                                                    <td width="300">
                                                        <label class="custom-switch mt-2 {{ hasPermission('seller_commission_update') ? '' : 'cursor-not-allowed' }}">
                                                            <input type="checkbox" name="custom-switch-checkbox"
                                                                   value="setting-status-change/{{ 'category_commission_status' }}"
                                                                   class="custom-switch-input {{ hasPermission('seller_commission_update') ? 'status-change' : '' }}"
                                                                {{ hasPermission('seller_commission_update') ? '' : 'disabled' }}
                                                                {{ settingHelper('category_commission_status') == 1 ? 'checked' : ''}} />
                                                            <span class="custom-switch-indicator"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                                <tr class="{{ settingHelper('category_commission_status') == 1 ? 'd-none' : '' }}">
                                                    <td>{{ __('Seller Based Commission') }}</td>
                                                    <td width="300">
                                                        <label class="custom-switch mt-2 {{ hasPermission('seller_commission_update') ? '' : 'cursor-not-allowed' }}">
                                                            <input type="checkbox" name="custom-switch-checkbox"
                                                                   value="setting-status-change/{{ 'seller_commission_status' }}"
                                                                   {{ hasPermission('seller_commission_update') ? '' : 'disabled' }}
                                                                   class="{{ hasPermission('seller_commission_update') ? 'status-change': '' }} custom-switch-input seller_commission" {{ settingHelper('seller_commission_status') == 1 ? 'checked' : ''}} />
                                                            <span class="custom-switch-indicator"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                            </form>
                                            <tr>
                                                <td colspan="2">
                                                    <div class="seller_commission_rate {{ settingHelper('category_commission_status') == 1 ? 'd-none' : ''}} {{ settingHelper('seller_commission_status') == 1 ? 'show active' : 'd-none'}}">
                                                        @if(hasPermission('seller_commission_update'))
                                                            <form action="{{ route('admin.seller.commission') }}" method="post"
                                                                  enctype="multipart/form-data" class="">
                                                                @csrf
                                                                @method('put')
                                                                @endif

                                                                <div class="form-group">
                                                                    <label for="seller_commission">{{ __('Seller Commission') }}</label>
                                                                    <div class="input-group">
                                                                        <input type="number" step="any" name="seller_commission"
                                                                               value="{{ old('seller_commission') ? old('seller_commission') : settingHelper('seller_commission') }}" class="form-control"
                                                                               placeholder="{{ __('Enter Seller Commission') }}">
                                                                        <div class="input-group-append barcode">
                                                                            <div class="input-group-text">
                                                                                %
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    @if ($errors->has('seller_commission'))
                                                                        <div class="invalid-feedback">
                                                                            {{ $errors->first('seller_commission') }}
                                                                        </div>
                                                                    @endif
                                                                </div>
                                                                <div class="form-group text-right">
                                                                    @if(hasPermission('seller_commission_update'))
                                                                        <button type="submit" class=" btn btn-outline-primary" tabindex="1">
                                                                            {{ __('Update') }}
                                                                        </button>
                                                                    @endif
                                                                </div>
                                                                @if(hasPermission('seller_commission_update'))
                                                            </form>
                                                        @endif
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-xs-12 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4>{{ __('Seller Page Contact message to seller mail') }}</h4>
                                </div>
                                <div class="card-body col-sm-xs-12">
                                    <div class="table-responsive">
                                        <table class="table col-sm-xs-12">
                                            <tbody>
                                            <tr>

                                                <td>{{ __('Message to seller mail') }}</td>
                                                <td width="300">
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="custom-switch-checkbox" value="setting-status-change/{{ 'contact_message_to_seller_mail' }}" class="custom-switch-input status-change" {{ settingHelper('contact_message_to_seller_mail') == 1 ? 'checked' : ''}} />
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-xs-12 col-md-6">
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{ __('Commission Info') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <div class="contents mt-2">
                                Type Details:
                                <ul class="text-justify">
                                    <li>
                                        1. Category Based Commission: If Category Based Commission is enbaled, Seller product based commission will not be applicable.
                                    </li>
                                    <li>
                                        2. Seller Based Commission: Given Seller Based Commission percentage amount will be will be deducted from seller earnings.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection @include('admin.common.delete-ajax')
