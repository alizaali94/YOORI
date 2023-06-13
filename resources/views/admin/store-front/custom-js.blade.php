@extends('admin.partials.master')
@section('store_front_active')
    active
@endsection
@section('custom-js')
    active
@endsection
@section('title')
    {{ __('Custom JS') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Store Front') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.store-front.theme-options-sitebar')
                <div class="col-md-9">
                    <div class="card email-card">
                        <div class="card-header">
                            <h4>{{ __('Custom JS') }}</h4>
                        </div>
                        <div class="card-body col-md-10 middle">
                            <form method="post" action="{{route('update')}}">
                                @csrf
                                @method('put')
                                <div class="form">
                                    <div class="form-group">
                                        <label for="header_script">{{ __('Header Script') }}</label>
                                        <textarea id="custom_header_script" cols="30" rows="5" class="form-control h-130 cross-origin"
                                                  placeholder="
<script>
   ....
</script>
                                            ">{{base64_decode(settingHelper('custom_header_script'))}}</textarea>
                                        <textarea type="text" hidden name="custom_header_script" class="form-control cross-origin-input" rows="6">{{  settingHelper('custom_header_script') }}</textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="footer_script">{{ __('Footer Script') }}</label>
                                        <textarea id="custom_footer_script" cols="30" rows="5" class="form-control h-130 cross-origin"
                                        placeholder="
<script>
   ....
</script>
                                         ">{{base64_decode(settingHelper('custom_footer_script'))}}</textarea>
                                        <textarea type="text" hidden name="custom_footer_script" class="form-control cross-origin-input" rows="6">{{  settingHelper('custom_footer_script') }}</textarea>
                                    </div>
                                    <div class="text-md-right">
                                        <button class="btn btn-outline-primary" id="save-btn">
                                            {{ __('Update') }}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
