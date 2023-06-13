@extends('admin.partials.master')
@section('google_services_active')
    active
@endsection
@section('store_front_active')
    active
@endsection
@section('google_services')
    active
@endsection
@section('title')
    {{ __('Google Service') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Settings') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.store-front.theme-options-sitebar')
                <div class="col-md-9">
                    <div class="card email-card">
                        <div class="card-header">
                            <h4>{{ __('Google Service') }}</h4>
                        </div>
                        <div class="card-body col-md-10 middle">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-6 pl-0">
                                        <div class="form-group">
                                            <label class="custom-switch mt-2">
                                                <input type="checkbox"
                                                       name="custom-switch-checkbox" value="third-party-status-change/{{ 'is_google_analytics_activated' }}"
                                                       class="custom-switch-input status-change" {{ settingHelper('is_google_analytics_activated') == 1 ? 'checked' : ''}} />
                                                <span class="custom-switch-indicator"></span>
                                                <span class="custom-switch-description">{{ __('Activate') }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form action="{{ route('third.party.setting.update') }}" method="post" enctype="multipart/form-data">
                                @method('put')
                                @csrf
<!--                                <div class="form-group">
                                    <label for="stripe_key">{{ __('Tracking ID') }}</label>
                                    <input type="text" class="form-control" name="google_tracking_id" id="google_tracking_id" value="{{ old('google_tracking_id') ? old('google_tracking_id') : settingHelper('google_tracking_id') }}"  placeholder="{{ __('Google Tracking Id') }}">
                                    @if ($errors->has('google_tracking_id'))
                                        <div class="invalid-feedback">
                                            {{ $errors->first('google_tracking_id') }}
                                        </div>
                                    @endif
                                </div>-->
                                <div class="form-group">
                                    <label for="tracking_code">{{ __('tracking_code') }}</label>
                                    <textarea id="tracking_code" cols="30" rows="5" class="form-control h-130 cross-origin"
                                              placeholder="
<script>
   ....
</script>
                                            ">{{base64_decode(settingHelper('tracking_code'))}}</textarea>
                                    <textarea type="text" hidden name="tracking_code" class="form-control cross-origin-input" rows="6">{{  settingHelper('tracking_code') }}</textarea>
                                    @if ($errors->has('google_tracking_code'))
                                        <div class="invalid-feedback">
                                            {{ $errors->first('google_tracking_code') }}
                                        </div>
                                    @endif
                                </div>
                                <div class="text-md-right">
                                    <button class="btn btn-outline-primary">{{ __('Update') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
