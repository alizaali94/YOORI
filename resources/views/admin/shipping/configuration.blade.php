@extends('admin.partials.master')
@section('title')
    {{ __('Shipping Configuration') }}
@endsection
@section('shipping')
    active
@endsection
@section('shipping_active')
    active
@endsection
@section('shipping-configuration')
    active
@endsection

@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Shipping Configuration') }}</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-xs-12 col-md-6">
                <div class="card">
                    <div class="card-header input-title">
                        <h4>{{ __('Shipping Method') }}</h4>
                    </div>
                    <div class="card-body card-body-paddding">
                        @if(hasPermission('shipping_configuration_update'))
                            <form method="POST" action="{{ route('admin.store.shipping.commission-type') }}"
                                  enctype="multipart/form-data">
                                @csrf
                                @endif
                                <div class="form-group mt-2">
                                    <label for="shipping_fee_type">{{ __('Shipping Fee Type') }} *</label>
                                    <div class="custom-file">
                                        <select class="form-control selectric" name="shipping_fee_type"
                                                id="shipping_fee_type">
                                            <option value="">{{ __('Select Type') }}</option>
                                            <option
                                                value="product_base" {{ settingHelper('shipping_fee_type') == 'product_base' ? 'selected' : '' }}>{{ __('Product Base') }}</option>
                                            <option
                                                value="flat_rate" {{ settingHelper('shipping_fee_type') == 'flat_rate' ? 'selected' : '' }}>{{ __('Flat Rate') }}</option>
                                            <option
                                                value="area_base" {{ settingHelper('shipping_fee_type') == 'area_base' ? 'selected' : '' }}>{{ __('Area Base') }}</option>
                                            <option
                                                value="invoice_base" {{ settingHelper('shipping_fee_type') == 'invoice_base' ? 'selected' : '' }}>{{ __('Invoice Base') }}</option>
                                        </select>
                                    </div>
                                    @if ($errors->has('shipping_fee_type'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('shipping_fee_type') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div
                                    class="flat_rate_box {{ old('shipping_fee_type') == 'flat_rate' ? '' : (settingHelper('shipping_fee_type') == 'flat_rate' ? '' : 'd-none') }}">
                                    <div class="form-group">
                                        <label for="shipping_fee_flat_rate">{{ __('Flat Rate Fee') }}</label>
                                        <input type="text" class="form-control" name="shipping_fee_flat_rate"
                                               id="shipping_fee_flat_rate"
                                               value="{{ priceFormatUpdate(settingHelper('shipping_fee_flat_rate') ,settingHelper('default_currency'),"*")}}"
                                               placeholder="{{ __('Amount') }}">

                                        @if ($errors->has('shipping_fee_flat_rate'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('shipping_fee_flat_rate') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="shipping_fee_invoice_based {{ old('shipping_fee_type') == 'invoice_base' ? '' : (settingHelper('shipping_fee_type') == 'invoice_base' ? '' : 'd-none') }}">
                                    <div class="d-flex justify-content-between mb-2">
                                        <p class="mb-0">Price Range</p>
                                        <button type="button" class="btn btn-icon btn-sm btn-outline-primary add_row"><i
                                                class="bx bx-plus"></i></button>
                                    </div>
                                    <table class="table table-bordered">
                                        <thead>
                                        <tr>
                                            <td>{{ __('Min. Amount') }}</td>
                                            <td>{{ __('Max. Amount') }}</td>
                                            <td>{{ __('Shipping Fee') }}</td>
                                            <td>{{ __('Action') }}</td>
                                        </tr>
                                        </thead>
                                        <tbody class="invoice_based_tbody">
                                        @if(settingHelper('invoice_based_shipping_fee') && count(settingHelper('invoice_based_shipping_fee')) > 0)
                                            @foreach(settingHelper('invoice_based_shipping_fee') as $key=> $shipping_fee)
                                                <tr>
                                                    <td>
                                                        <input type="number" class="form-control"
                                                               name="invoice_based_shipping_fee[min_amount][]"
                                                               placeholder="{{ __('Amount') }}" value="{{ priceFormatUpdate($shipping_fee['min_amount'],settingHelper('default_currency'),"*") }}">
                                                    </td>
                                                    <td>
                                                        <input type="number" class="form-control"
                                                               name="invoice_based_shipping_fee[max_amount][]"
                                                               placeholder="{{ __('Amount') }}" value="{{ priceFormatUpdate($shipping_fee['max_amount'],settingHelper('default_currency'),"*")}}">
                                                    </td>
                                                    <td>
                                                        <input type="number" class="form-control"
                                                               name="invoice_based_shipping_fee[fee][]"
                                                               placeholder="{{ __('Fee') }}" value="{{  priceFormatUpdate($shipping_fee['fee'],settingHelper('default_currency'),"*") }}">
                                                    </td>
                                                    <td>
                                                        @if($key > 0)
                                                            <button type="button" class="btn btn-icon btn-sm btn-danger remove_row"><i
                                                                    class="bx bx-trash"></i></button>
                                                        @endif
                                                    </td>
                                                </tr>
                                            @endforeach
                                        @else
                                            <tr>
                                                <td>
                                                    <input type="number" class="form-control"
                                                           name="invoice_based_shipping_fee[min_amount][]"
                                                           placeholder="{{ __('Amount') }}">
                                                </td>
                                                <td>
                                                    <input type="number" class="form-control"
                                                           name="invoice_based_shipping_fee[max_amount][]"
                                                           placeholder="{{ __('Amount') }}">
                                                </td>
                                                <td>
                                                    <input type="number" class="form-control"
                                                           name="invoice_based_shipping_fee[fee][]"
                                                           placeholder="{{ __('Fee') }}">
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-icon btn-sm btn-danger remove_row"><i
                                                            class="bx bx-trash"></i></button>
                                                </td>
                                            </tr>
                                        @endif
                                        </tbody>
                                    </table>
                                    <div class="form-group">
                                        <label for="shipping_fee_default_rate">{{ __('Default Rate') }}</label>
                                        <input type="number" class="form-control" name="shipping_fee_default_rate"
                                               id="shipping_fee_default_rate"
                                               value="{{ priceFormatUpdate(settingHelper('shipping_fee_default_rate'),settingHelper('default_currency'),"*") }}"
                                               placeholder="{{ __('Amount') }}">

                                        @if ($errors->has('shipping_fee_default_rate'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('shipping_fee_default_rate') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group text-right">
                                    @if(hasPermission('shipping_configuration_update'))
                                        <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                            {{ __('Update') }}
                                        </button>
                                    @endif
                                </div>
                                @if(hasPermission('shipping_configuration_update'))
                            </form>
                        @endif
                    </div>
                </div>
            </div>
            <div class="col-sm-xs-12 col-md-6">
                <div class="card">
                    <div class="card-header input-title">
                        <h4>{{ __('Shipping Method Details') }}</h4>
                    </div>
                    <div class="card-body card-body-paddding">
                        <div class="contents mt-2">
                            Type Details:
                            <ul class="text-justify">
                                <li>
                                    1. Product Base Calculation: Shipping cost is calculate by addition of each product
                                    shipping cost.
                                </li>
                                <li>
                                    2. Flat Rate Calculation: How many products a customer purchase, doesn't matter.
                                    Shipping cost is fixed.
                                </li>
                                <li>
                                    3. Area Base Calculation: Fixed rate for each area. If customers purchase multiple
                                    products from one seller shipping cost is calculated by the customer shipping area.
                                    To configure area wise shipping cost go to <a href="{{ route('cities') }}">Cities</a>
                                </li>
                                <li>
                                    4. Invoice Base: Enter The ranges of amount for Invoice Based Shipping Fee you want to charge.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="modal invoice_based_fee">
        <table>
            <tr>
                <td>
                    <input type="number" class="form-control"
                           name="invoice_based_shipping_fee[min_amount][]"
                           placeholder="{{ __('Amount') }}">
                </td>
                <td>
                    <input type="number" class="form-control"
                           name="invoice_based_shipping_fee[max_amount][]"
                           placeholder="{{ __('Amount') }}">
                </td>
                <td>
                    <input type="number" class="form-control"
                           name="invoice_based_shipping_fee[fee][]"
                           placeholder="{{ __('Fee') }}">
                </td>
                <td>
                    <button type="button" class="btn btn-icon btn-sm btn-danger remove_row"><i
                            class="bx bx-trash"></i></button>
                </td>
            </tr>
        </table>
    </div>
@endsection
