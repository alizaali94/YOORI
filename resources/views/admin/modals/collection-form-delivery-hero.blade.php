@php
    $user = App\Models\User::find($otherLinks[0]);
@endphp
@if($user->deliveryHero)
    <form action="{{ route('collect.form.delivery.hero') }}" method="post" enctype="multipart/form-data">
        @csrf @method('post')
        <div class="modal-body modal-padding-bottom modal-body-overflow-unset">
            <div class="form-group align-items-center">
                <label for="name" class="form-control-label">{{ __('Delivery Man Name') }}</label>
                <input type="text" id="name" value="{{ $user->first_name . ' ' . $user->last_name }}"
                       class="form-control" readonly disabled/>
            </div>
            <div class="form-group align-items-center">
                <label for="collection" class="form-control-label">{{ __('Current Balance') }}</label>
                <input type="hidden" value="{{ $user->deliveryHero->id }}"
                       class="form-control" name="delivery_hero_id"/>
                <input type="text" id="collection"
                       value="{{ get_price(priceFormatUpdate($user->balance,settingHelper('default_currency'),"*")) }}"
                       class="form-control" readonly disabled/>
            </div>
            <div class="form-group align-items-center">
                <label for="payable" class="form-control-label">{{ __('Amount') }}</label>
                <input type="number" step="any" name="amount" id="amount" value="{{ old('amount') }}"
                       class="form-control" required/>
                @if ($errors->has('amount'))
                    <div class="invalid-feedback">
                        <p>{{ $errors->first('amount') }}</p>
                    </div>
                @endif
            </div>
        </div>
        <div class="modal-footer modal-padding-bottom">
            <button type="submit" class="btn btn-outline-primary">{{ __('Save') }}</button>
        </div>
    </form>
@else
    <div class="modal-body modal-padding-bottom modal-body-overflow-unset text-center">
        <p class="text-danger">{{__('Please Complete Delivery Man Profile')}}</p>
    </div>
    <div class="modal-footer modal-padding-bottom">
    </div>
@endif
