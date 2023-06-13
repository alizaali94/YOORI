<!-- set currency format modal -->
<form action="{{ route('admin.currency.format.set') }}" method="post"
      enctype="multipart/form-data">
    @csrf
    @method('put')
    <div class="modal-body modal-padding-bottom modal-body-overflow-unset">
        <div class="form-group align-items-center">
            <label class="form-control-label">{{ __('Symbol Format') }}</label>
            <select class="form-control selectric" name="currency_symbol_format" required>
                <option value="amount_symbol" {{ settingHelper('currency_symbol_format') == 'amount_symbol' ? 'selected' : ''}}>[{{__('Amount')}}][{{__('Symbol')}}]</option>
                <option value="symbol_amount" {{ settingHelper('currency_symbol_format') == 'symbol_amount' ? 'selected' : ''}}>[{{__('Symbol')}}][{{__('Amount')}}]</option>
                <option value="amount__symbol" {{ settingHelper('currency_symbol_format') == 'amount__symbol' ? 'selected' : ''}}>[{{__('Amount')}}][{{__('Space')}}][{{__('Symbol')}}]</option>
                <option value="symbol__amount" {{ settingHelper('currency_symbol_format') == 'symbol__amount' ? 'selected' : ''}}>[{{__('Symbol')}}][{{__('Space')}}][{{__('Amount')}}]</option>
            </select>
        </div>
        <div class="form-group align-items-center">
            <label class="form-control-label">{{ __('Decimal Separator') }}</label>
            <select class="form-control selectric" name="decimal_separator" required>
                <option value="." {{ settingHelper('decimal_separator') == '.' ? 'selected' : ''}}>{{ __('1,23,456.78') }}</option>
                <option value="," {{ settingHelper('decimal_separator') == ',' ? 'selected' : ''}}>{{ __('1.23.456,78') }}</option>
            </select>
        </div>
        <div class="form-group align-items-center">
            <label class="form-control-label">{{ __('No of Decimals') }}</label>
            <select class="form-control selectric" name="no_of_decimals" required>
                <option value="3" {{ settingHelper('no_of_decimals') == '3' ? 'selected' : '' }}>12.345</option>
                <option value="2" {{ settingHelper('no_of_decimals') == '2' ? 'selected' : '' }}>123.45</option>
                <option value="1" {{ settingHelper('no_of_decimals') == '1' ? 'selected' : '' }}>1234.5</option>
                <option value="0" {{ settingHelper('no_of_decimals') == '0' ? 'selected' : '' }}>12345</option>
            </select>
        </div>
    </div>
    <div class="modal-footer bg-whitesmoke br modal-padding-bottom ">
        <button type="submit" class="btn btn-outline-primary">{{ __('Update') }}</button>
    </div>
</form>
