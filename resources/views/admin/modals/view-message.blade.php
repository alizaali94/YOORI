
@php
    $contact = App\Models\ContactUs::find($otherLinks[0]);
@endphp
<form method="post"
      enctype="multipart/form-data">
    @csrf
    @method('put')
    <div class="modal-body modal-padding-bottom modal-body-overflow-unset">
        <div class="form-group align-items-center">
            <label for="tax-name" class="form-control-label">{{ __('Email') }}</label>
            <input type="text" name="vat_tax" placeholder="TaxType" disabled value="{{ $contact->email }}" class="form-control" id="tax-name" required autofocus />
        </div>
        <div class="form-group align-items-center">
            <label for="tax-name" class="form-control-label">{{ __('Message') }}</label>
            <textarea type="text" name="" placeholder="TaxType" disabled class="form-control" id="tax-name" required>{{ $contact->message }}</textarea>
        </div>
    </div>
</form>
