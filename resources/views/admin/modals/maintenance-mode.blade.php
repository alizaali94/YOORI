<form method="post" action="{{route('admin.preference.setting.update') }}">
    @csrf
    @method('put')
    <div class="modal-body modal-padding-bottom">
        <div class="form-group align-items-center">
            <label for="reject_reason" class="form-control-label">{{ __('Secret Code') }}</label>
            <input name="maintenance_mode" value="1" type="hidden">
            <input type="text" class="form-control" name="maintenance_secret" placeholder="Down secret to access server" required />
            <div class="invalid-feedback">
                <p>Note: Only with {your_domain}/secret can access the server when maintenance mode is activated. Save the secret code for accessing your server.</p>
            </div>
        </div>
        <span>Here is an example:</span>
        <span>https://example.com/1630542a-246b-4b66-afa1</span>
    </div>
    <div class="modal-footer modal-padding-bottom">
        <button type="submit" class="btn btn-outline-primary">{{ __('Send') }}</button>
    </div>
</form>

