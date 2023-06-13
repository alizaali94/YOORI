@extends('admin.partials.master')
@section('title')
    {{ __('VAT & Tax') }}
@endsection
@section('vat_tax_active')
    active
@endsection
@section('setup')
    active
@endsection
@section('vat.tax')
    active
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
                        <h4>{{ __('VAT & Tax Configuration') }}</h4>
                    </div>
                    <div class="card-body card-body-paddding">
                        <form method="POST" action="{{ route('admin.update.vat-tax-configuration') }}" enctype="multipart/form-data">
                            @csrf
                            @method('put')
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label for="vat_and_tax_type">{{ __('Select Type') }}</label>
                                        <div class="custom-file">
                                            <select class="form-control selectric" name="vat_and_tax_type" id ="vat_and_tax_type">
                                                <option value="">{{ __('Select Type') }}</option>
                                                <option value="product_base" {{ settingHelper('vat_and_tax_type') == 'product_base' ? 'selected' : '' }}>{{ __('Product Base') }}</option>
                                                <option value="order_base" {{ settingHelper('vat_and_tax_type') == 'order_base' ? 'selected' : '' }}>{{ __('Order Base') }}</option>
                                            </select>
                                        </div>
                                        @if ($errors->has('vat_and_tax_type'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('vat_and_tax_type') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-lg-12 order_amount {{ settingHelper('vat_and_tax_type') == 'product_base' ? 'd-none' : '' }}">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label>{{ __('Percentage') }} (%)</label>
                                                <div class="custom-file">
                                                    <input type="number" name="order_wise_tax_percentage" value="{{ settingHelper('order_wise_tax_percentage') }}" class="form-control" placeholder="{{ __('Percentage') }}">
                                                </div>
                                                @if ($errors->has('order_wise_tax_percentage'))
                                                    <div class="invalid-feedback">
                                                        <p>{{ $errors->first('order_wise_tax_percentage') }}</p>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label for="vat_type">{{ __('tax_deduction') }}</label>
                                                <div class="custom-file">
                                                    <select class="form-control selectric" name="vat_type" id ="vat_type">
                                                        <option value="before_tax" {{ settingHelper('vat_type') == 'before_tax' ? 'selected' : '' }}>{{ __('before_tax') }}</option>
                                                        <option value="after_tax" {{ settingHelper('vat_type') == 'after_tax' ? 'selected' : '' }}>{{ __('after_tax') }}</option>
                                                    </select>
                                                </div>
                                                @if ($errors->has('order_wise_tax_percentage'))
                                                    <div class="invalid-feedback">
                                                        <p>{{ $errors->first('order_wise_tax_percentage') }}</p>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group text-right">
                                <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                    {{ __('Update') }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card">
                    <div class="text-right">
                        <a
                            href="javascript:void(0)"
                            class="btn btn-outline-primary currency-add-btn modal-menu"
                            data-url="{{ route('edit-info', ['page_name' => 'add-vat-tax']) }}"
                            data-title="{{__('Add New TaxType')}}"
                            data-toggle="modal"
                            data-target="#common-modal">
                            <i class="bx bx-plus"> </i>{{ __('Add New Tax') }}
                        </a>
                    </div>
                    <h6 class="text-left currency-header">{{ __('All Taxes') }}</h6>
                    <div class="table-responsive">
                        @if ($errors->any() && !$errors->has('order_wise_tax_percentage') && $errors->has('vat_and_tax_type'))
                        <div class="modal-data-validate">
                            <ul>
                                @foreach ($errors->all() as $key=> $error)
                                    {{ dd($errors->value) }}
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                        @endif
                        <table class="table table-striped table-md">
                            <tbody>
                                <tr class="currency-table-header">
                                    <th>#</th>
                                    <th>{{ __('TaxType') }}</th>
                                    <th>{{ __('Percentage') }}</th>
                                    <th>{{ __('Status') }}</th>
                                    <th>{{ __('Options') }}</th>
                                </tr>
                                @foreach ($vat_tax as $key => $value)
                                <tr id="{{ $vat_tax->firstItem() + $key }}">
                                    <td>{{ $vat_tax->firstItem() + $key }}</td>
                                    <td>
                                        <div class="d-flex">
                                            <div>{{ $value->vat_tax }}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex">
                                            <div>{{ $value->percentage }} %</div>
                                        </div>
                                    </td>
                                    <td>
                                        <label class="custom-switch mt-2">
                                            <input type="checkbox" value="vat-tax-status-change/{{ $value->id }}" name="custom-switch-checkbox" {{ $value->status == 1 ? 'checked' : '' }} class="custom-switch-input status-change" />
                                            <span class="custom-switch-indicator"></span>
                                        </label>
                                    </td>
                                    <td class="tax-table-options">
                                        @if(!vat_tax($value->id))
                                            <a href="javascript:void(0)"
                                               class="btn btn-outline-secondary btn-circle modal-menu"
                                               data-url="{{ route('edit-info', ['page_name' => 'edit-vat-tax','param1'=>$value->id])}}"
                                               data-title="Update TaxType"
                                               data-toggle="modal"
                                               data-target="#common-modal"
                                               data-original-title="Edit">
                                                <i class="bx bx-edit"></i>
                                            </a>
                                            <a href="javascript:void(0)" onclick="delete_row('delete/vat_taxes/',{{ $value->id }})" class="btn btn-outline-danger btn-circle" data-toggle="tooltip" data-original-title="Delete">
                                                <i class="bx bx-trash"></i>
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
                            {{ $vat_tax->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
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
