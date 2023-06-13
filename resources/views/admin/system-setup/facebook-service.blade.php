@extends('admin.partials.master')
@section('facebook_services_active')
    active
@endsection
@section('store_front_active')
    active
@endsection
@section('facebook_services')
    active
@endsection
@section('title')
    {{ __('Facebook Service') }}
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
                            <h4>{{ __('Facebook Pixel') }}</h4>
                        </div>
                        <div class="col-md-10 middle card-body card-body-paddding">
                            <div class="card-body col-md-10 middle">
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-6 pl-0">
                                            <div class="form-group">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox"
                                                           name="custom-switch-checkbox" value="third-party-status-change/{{ 'is_facebook_pixel_activated' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('is_facebook_pixel_activated') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                    <span class="custom-switch-description">{{ __('Activate') }}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form action="{{ route('third.party.setting.update') }}" method="post"  enctype="multipart/form-data">
                                    @method('put')
                                    @csrf
                                    <div class="form-group">
                                        <label for="facebook_pixel_id">{{ __('Facebook Pixel ID') }}</label>
                                        <textarea id="facebook_pixel_id" cols="30" rows="5" class="form-control h-130 cross-origin"
                                                  placeholder="
<script>
   ....
</script>
                                            ">{{base64_decode(settingHelper('facebook_pixel_id'))}}</textarea>
                                        <textarea type="text" hidden name="facebook_pixel_id" class="form-control cross-origin-input" rows="6">{{  settingHelper('facebook_pixel_id') }}</textarea>
                                        @if ($errors->has('facebook_pixel_id'))
                                            <div class="invalid-feedback">
                                                {{ $errors->first('facebook_pixel_id') }}
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
        </div>
    </section>
@endsection