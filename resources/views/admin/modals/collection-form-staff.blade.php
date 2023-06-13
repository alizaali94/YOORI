@php
    $user = App\Models\User::find($otherLinks[0]);
@endphp
    <form action="{{ route('collect.form.staff') }}" method="post" enctype="multipart/form-data">
        @csrf
        @method('post')
        <div class="modal-body modal-padding-bottom modal-body-overflow-unset">
            <div class="form-group align-items-center">
                <label for="name" class="form-control-label">{{ __('Staff Name') }}</label>
                <input type="text" id="name" value="{{ $user->full_name }}"
                       class="form-control" readonly disabled/>
            </div>
            <div class="form-group align-items-center">
                <label for="collection" class="form-control-label">{{ __('Current Balance') }}</label>
                <input type="hidden" value="{{ $user->id }}"
                       class="form-control" name="user_id"/>
                <input type="text" id="collection"
                       value="{{ format_price($user->balance) }}"
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
