@php
    $refund = App\Models\Refund::find($otherLinks[0]);
@endphp
<form method="post" action="{{\Sentinel::getUser()->user_type == 'seller' ? route('seller.reject.refund') : route('reject.refund') }}">
    @csrf
    @method('put')
    <div class="modal-body modal-padding-bottom">
        <div class="form-group align-items-center">
{{--            <label for="reject_reason" class="form-control-label">{{ __('Reject Reason') }}</label>--}}
            <input name="id" value="{{$refund->id}}" type="hidden">
            <textarea type="number" name="reject_reason" placeholder="Enter Reject Reason" id="reject_reason" value="" class="form-control" rows="12" required >{{$refund->reject_reason}}</textarea>
        </div>
    </div>
    <div class="modal-footer modal-padding-bottom">
        <button type="submit" class="btn btn-outline-primary">{{ __('Send') }}</button>
    </div>
</form>

