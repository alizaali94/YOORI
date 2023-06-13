@extends('admin.partials.master')
@section('store_front_active')
    active
@endsection
@section('custom-css')
    active
@endsection
@section('title')
    {{ __('Custom CSS') }}
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
                            <h4>{{ __('Custom CSS') }}</h4>
                        </div>
                        <div class="card-body col-md-10 middle">
                            <form method="post" action="{{route('update')}}">
                                @csrf
                                @method('put')
                                <div class="form">
                                    <div class="form-group">
                                        <label for="css">{{ __('CSS') }}</label>
                                        <textarea cols="30" rows="5" class="form-control h-130 cross-origin"
                                            placeholder="
<style>
    ....
</style>
                                            ">{{ base64_decode(settingHelper('custom_css')) }}</textarea>
                                        <textarea type="text" hidden name="custom_css" class="form-control cross-origin-input" rows="6">{{  settingHelper('custom_css') }}</textarea>
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
