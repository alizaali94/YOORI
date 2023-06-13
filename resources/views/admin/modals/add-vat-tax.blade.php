<form action="{{ route('vat.tax.store') }}" method="post" enctype="multipart/form-data">
  @csrf
  <div class="modal-body modal-padding-bottom">
      <div class="form-group align-items-center">
          <label for="tax-name" class="form-control-label">{{ __('TaxType') }}</label>
          <input type="text" name="vat_tax" placeholder="TaxType" value="{{ old('vat_tax') }}" class="form-control" id="tax-name" required autofocus />
          @if ($errors->has('vat_tax'))
          <div class="invalid-feedback">
              <p>{{ $errors->first('vat_tax') }}</p>
          </div>
          @endif
      </div>
      <div class="form-group align-items-center">
        <label for="percentage" class="form-control-label">{{ __('Percentage') }} {{ __('(%)') }}</label>
        <input type="number" name="percentage" min="0" step="any" placeholder="Percentage" id="percentage" value="{{ old('percentage') }}" class="form-control" required autofocus />
        @if ($errors->has('percentage'))
        <div class="invalid-feedback">
            <p>{{ $errors->first('percentage') }}</p>
        </div>
        @endif
    </div>
  </div>
  <div class="modal-footer modal-padding-bottom">
      <button type="submit" class="btn btn-outline-primary">{{ __('Save') }}</button>
  </div>
</form>
