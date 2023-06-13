@php
    $currency = App\Models\Currency::find($otherLinks[0]); $currency_list = get_yrsetting('currency_list');
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
<form action="{{ route('admin.setting.currency.update') }}" method="post" enctype="multipart/form-data">
    @csrf @method('put')
    <div class="modal-body modal-padding-bottom modal-body-overflow-unset">
        <div class="form-group align-items-center">
            <label for="site-title" class="form-control-label">{{ __('Name') }}</label>
            <input type="text" class="form-control" name="name" id="name"
                   value="{{ old('name') ? old('name') : $currency->name }}" placeholder="{{ __('Enter name') }}"
                   required/>
            <input type="hidden" name="id" placeholder="id" value="{{ $currency->id }}" class="form-control"
                   id="site-title" required autofocus/>
        </div>
        <div class="form-group align-items-center">
            <label class="form-control-label">{{ __('Symbol') }}</label>
            <input type="text" class="form-control" name="symbol" id="symbol" value="{{ $currency->symbol }}"
                   placeholder="{{ __('Symbol') }}" required/>
        </div>
        <div class="form-group align-items-center">
            <label class="form-control-label">{{ __('Currency code') }}</label>
            <select class="form-control select2" id="code" name="code" value="{{ old('code') }}" required>
                <option value="">{{ __("Select currency code") }}</option>
                @foreach($currency_list as $key => $value)
                    <option {{ $currency->code == $key ? "selected" : "" }} value="{{ $key }}">{{ $key }}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group">
            <label class="form-control-label">{{ __('Exchange Rate') }} <small>({{ __('1 USD = ?') }})</small></label>
            <div class="input-group">
                <input type="text" name="exchange_rate" id="exchange_rate"
                       value="{{ $currency->exchange_rate }}"
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
    <div class="modal-footer">
        <button type="submit" class="btn btn-outline-primary">{{ __('Update') }}</button>
    </div>
</form>
