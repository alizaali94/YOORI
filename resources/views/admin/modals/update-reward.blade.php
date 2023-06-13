@php
    $product =$otherLinks;

@endphp
<form  method="post" action="{{route('update.reward')}}">
    @csrf
    @method('put')
    <div class="modal-body modal-padding-bottom">
        <div class="form-group align-items-center">
            <label for="test_number" class="form-control-label">{{ __('Update Reward') }}</label>
            <input name="product_id" value="{{$product[0]}}" type="hidden">
            <input type="number" name="reward" placeholder="Enter Reward" id="reward" value="{{ $product[1] }}" class="form-control" required />

        </div>
    </div>
    <div class="modal-footer modal-padding-bottom">
        <button type="submit" class="btn btn-outline-primary">{{ __('Send') }}</button>
    </div>
</form>

