@php
 $vat_tax = App\Models\VatTax::find($otherLinks[0]);
@endphp
<form action="{{ route('vat.tax.update') }}" method="post" enctype="multipart/form-data">
    @csrf @method('put')
    <div class="modal-body modal-padding-bottom">
        <div class="form-group align-items-center">
            <label for="tax-name" class="form-control-label">{{ __('TaxType') }}</label>
            <input type="text" name="vat_tax" placeholder="Name" value="{{ $vat_tax->vat_tax }}" class="form-control" id="tax-name" required autofocus />
            <input type="hidden" name="id" value="{{ $vat_tax->id }}" />
        </div>
        <div class="form-group align-items-center">
            <label for="percentage" class="form-control-label">{{ __('Percentage') }} {{ __('(%)') }}</label>
            <input type="number" name="percentage" min="0" step="any" placeholder="Percentage" id="percentage" value="{{$vat_tax->percentage}}" class="form-control" autofocus />
            @if ($errors->has('percentage'))
            <div class="invalid-feedback">
                <p>{{ $errors->first('percentage') }}</p>
            </div>
            @endif
        </div>
    </div>
    <div class="modal-footer modal-padding-bottom">
        <button type="submit" class="btn btn-outline-primary">{{ __('Update') }}</button>
    </div>
</form>
