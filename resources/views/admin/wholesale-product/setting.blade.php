@extends('admin.partials.master')

@section('title')
    {{ __('Wholesale Product Setting') }}
@endsection
@section('wholesale')
    active
@endsection
@section('wholesale_setting')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Setting') }}</h2>
                    <p class="section-lead">
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Wholesale Product Setting') }}</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table col-sm-xs-12 col-md-9">
                                    <tbody>
                                    <tr id="">
                                        <td>{{ __('Allow seller to add product') }}</td>
                                        <td width="300">
                                            <label class="custom-switch mt-2">
                                                <input type="checkbox" name="seller_can_create_wholesale"
                                                       value="setting-status-change/{{ 'seller_can_create_wholesale' }}" class="custom-switch-input status-change"
                                                    {{ settingHelper('seller_can_create_wholesale') == 1 ? 'checked' : ''}} />
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr id="">
                                        <td>{{ __('Show price variations table on product detail') }}</td>
                                        <td width="300">
                                            <label class="custom-switch mt-2">
                                                <input type="checkbox" name="wholesale_price_variations_show"
                                                       value="setting-status-change/{{ 'wholesale_price_variations_show' }}" class="custom-switch-input status-change" {{ settingHelper('wholesale_price_variations_show') == 1 ? 'checked' : ''}} />
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
    </section>
@endsection
