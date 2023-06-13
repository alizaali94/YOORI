@extends('admin.partials.master')
@section('currency_active')
    active
@endsection
@section('setup')
    active
@endsection
@section('currency')
    active
@endsection
@section('title')
    {{ __('Currency') }}
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
                        <div class="text-right">
                            <a href="javascript:void(0)" class="btn btn-outline-primary currency-add-btn modal-menu"
                                data-title="{{__('Set Currency Formats')}}"
                                data-url="{{ route('edit-info', ['page_name' => 'set-currency-format']) }}"
                                data-toggle="modal" data-target="#common-modal">
                                <i class="bx bx-plus"></i>{{ __('Set Currency Formats') }}
                            </a>
                            <a href="javascript:void(0)" class="btn btn-outline-primary currency-add-btn modal-menu"
                                data-title="{{__('Add Currency')}}"
                                data-url="{{ route('edit-info', ['page_name' => 'add-currency']) }}" data-toggle="modal"
                                data-target="#common-modal">
                                <i class="bx bx-plus"></i>{{ __('Add Currency') }}
                            </a>
                        </div>
                        <h6 class="text-left currency-header">{{ __('All Currencies') }}</h6>
                        <div class="table-responsive">
                            @if ($errors->any())
                                <div class="modal-data-validate">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                            <table class="table table-striped table-md">
                                <tbody>
                                    <tr class="currency-table-header">
                                        <th>{{ __('#') }}</th>
                                        <th>{{ __('Currency name') }}</th>
                                        <th>{{ __('Exchange rate') }} <small>({{ __('1 USD = ?') }})</small></th>
                                        <th>{{ __('Currency symbol') }}</th>
                                        <th>{{ __('Currency code') }}</th>
                                        <th>{{ __('Status') }}</th>
                                        <th>{{ __('Options') }}</th>
                                    </tr>
                                    @foreach ($currencies as $key => $currency)
                                        <tr id="row_{{ $currency->id }}" class="table-data-row">
                                            <input type="hidden" value="{{ $currency->id }}" id="id">
                                            <td>{{ $currencies->firstItem() + $key }}</td>
                                            <td>
                                                <div class="d-flex">
                                                    <div>{{ $currency->name }}</div>
                                                </div>
                                            </td>
                                            <td>{{ $currency->exchange_rate }}</td>
                                            <td>{{ $currency->symbol }}</td>
                                            <td>{{ $currency->code }}</td>
                                            <td>
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" name="custom-switch-checkbox"
                                                        value="currency-status-change/{{ $currency->id }}"
                                                        {{ $currency->status == 1 ? 'checked' : '' }}
                                                        class="status-change custom-switch-input"
                                                        {{ $currency->id == settingHelper('default_currency') ? "disabled" :"" }}>
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <a href="javascript:void(0)"
                                                    class="btn btn-outline-secondary btn-circle modal-menu"
                                                    data-title="{{__('Update Currency')}}"
                                                    data-url="{{ route('edit-info', ['page_name' => 'edit-currency', 'param1' => $currency->id]) }}"
                                                    data-toggle="modal" data-target="#common-modal">
                                                    <i class="bx bx-edit"></i>
                                                </a>
                                                @if($currency->id != settingHelper('default_currency') && count($currencies) > 1)
                                                    <a href="javascript:void(0)"
                                                        onclick="delete_row('delete/currencies/',{{ $currency->id }})"
                                                        class="btn btn-outline-danger btn-circle" data-toggle="tooltip" title=""
                                                        data-original-title="{{ __('Delete') }}">
                                                        <i class='bx bx-trash'></i>
                                                    </a>
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $currencies->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')
@include('admin.common.common-modal')
@push('script')
    <script>
        $(document).ready(function() {
            $(document).on('click', '.get_conversion_rate', function() {
                var selected_currency = $('#code').val();
                if(!selected_currency)
                {
                    toastr.error('{{ __('select_currency_code') }}');
                    return false;
                }
                var requestURL = 'https://api.exchangerate.host/convert?from=USD&to='+selected_currency;
                var request = new XMLHttpRequest();
                request.open('GET', requestURL);
                request.responseType = 'json';
                request.send();

                request.onload = function() {
                    var response = request.response;

                    if(response.result)
                    {
                        $('#exchange_rate').val(response.result);
                    }
                    else
                    {
                        toastr.error('{{ __('use_your_manual_entry') }}');
                    }
                }
            });
        });
    </script>
@endpush