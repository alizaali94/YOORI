@extends('admin.partials.master')
@section('available_addon_active')
    active
@endsection
@section('addon_utility')
    active
@endsection
@section('title')
    {{ __('Available Addons') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="row">
                @if(@$curl_info["http_code"] == "200")
                    @foreach($decodedResponse->plugins as $addon )
                        <div class="col-12 col-sm-6 col-md-3 col-lg-3">
                            @if($addon->is_new == true)
                                <span class="btn btn-danger btn-sm addon-badge card-badge">{{__('New')}}</span>
                            @endif
                            <div class="card addon-card">
                                <img class="card-img" src="{{ $addon->inline_image_url }}" alt="Bologna">
                                <div class="card-body">
                                    <h5 class="card-title">{{ $addon->name }}</h5>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <h4>{{ $addon->price }}</h4>
                                        </div>
                                        <div>
                                            <a target="_blank" href="{{ $addon->preview_link }}" class="btn btn-info btn-sm">{{__('Preview')}}</a>
                                            <a href="{{ $addon->affiliate_link }}" class="btn btn-primary btn-sm">{{__('Purchase')}}</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer plugin-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                    <div class="views">{{__('Released')}}: {{ $addon->release_date }}</div>
                                    <div class="stats"> {{__('Version')}}: {{ $addon->version }}</div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @else
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 error-connection">
                        <div class="center text-danger ">
                            <h6>{{ __("There is a problem to connect with server.Please make sure your internet connection!") }}</h6>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </section>
@endsection

