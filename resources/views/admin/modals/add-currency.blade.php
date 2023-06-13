<!-- add currency modal -->
@php
    $currency_list = get_yrsetting('currency_list');
    $currency_lists = [];
    $req_url = 'https://api.exchangerate.host/symbols';
    $response_json = file_get_contents($req_url);
    if(false !== $response_json) {
        try {
            $response = json_decode($response_json);
            if($response->success === true) {
                $currency_lists = $response->symbols;
            }
        } catch(Exception $e) {
           // Handle JSON parse error...
        }
    }
@endphp
<form action="{{ route('admin.setting.currency.store') }}" method="post" enctype="multipart/form-data">
    @csrf @method('post')
    <div class="modal-body modal-padding-bottom modal-body-overflow-unset">
        <div class="form-group align-items-center">
            <label for="name" class="form-control-label">{{ __('Currency Name') }}</label>

            <input type="text" class="form-control" name="name" id="name" value="{{ old('name') }}"
                   placeholder="{{ __('Enter name') }}" required/>
        </div>
        <div class="form-group align-items-center">
            <label for="symbol" class="form-control-label">{{ __('Symbol') }}</label>
            <input type="text" class="form-control" name="symbol" id="symbol" value="{{ old('symbol') }}"
                   placeholder="{{ __('Symbol') }}" required/>
        </div>
        <div class="form-group align-items-center">
            <label class="form-control-label">{{ __('Currency Code') }}</label>
            <select class="form-control select2" id="code" name="code" value="{{ old('code') }}" required>
                <option value="">{{ __("Select currency code") }}</option>
                @foreach($currency_list as $key => $value)
                    <option value="{{ $key }}">{{ $key }}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group">
            <label class="form-control-label">{{ __('Exchange Rate') }} <small>({{ __('1 USD = ?') }})</small></label>
            <div class="input-group">
                <input type="text" name="exchange_rate" id="exchange_rate"
                       value="{{ old('exchange_rate') ? old('exchange_rate') : '' }}"
                       class="form-control"
                       placeholder="{{ __('Exchange Rate') }}">
                <div class="input-group-append get_conversion_rate">
                    <div class="input-group-text">
                        <i class="bx bx-refresh"></i>
                    </div>
                </div>
            </div>

            @if ($errors->has('exchange_rate'))
                <div class="invalid-feedback">
                    <p>{{ $errors->first('exchange_rate') }}</p>
                </div>
            @endif
        </div>
    </div>
    <div class="modal-footer modal-padding-bottom">
        <button type="submit" class="btn btn-outline-primary">{{ __('Save') }}</button>
    </div>
</form>
