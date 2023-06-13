@php
    $type =$otherLinks[0];
@endphp
<form  method="post" action="{{ route('test-sms') }}">
    @csrf
    <div class="modal-body modal-padding-bottom">
        <div class="form-group align-items-center">
            <label for="test_number" class="form-control-label">{{ __('Test Number') }}</label>
            <input name="sms_sender" value="{{ $type }}" type="hidden">
            <input type="number" name="test_number" placeholder="Enter Test Number" id="test_number" value="{{ old('percentage') }}" class="form-control" required />

        </div>
        @if($type == 'fast2sms')
        <div class="form-group align-items-center">
            <label for="fast2_template_id" class="form-control-label">{{ __('Fast2SMS Template ID') }}</label>
            <input type="number" name="fast2_template_id" placeholder="Fast2SMS Template ID" id="fast2_template_id" value="{{ old('percentage') }}" class="form-control" required />
        </div>
        @endif
    </div>
    <div class="modal-footer modal-padding-bottom">
        <button type="submit" class="btn btn-outline-primary">{{ __('Send') }}</button>
    </div>
</form>

