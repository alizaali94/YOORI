@extends('admin.partials.master')
@section('title')
    {{ __('Mobile Apps') }}
@endsection
@section('mobile_apps')
    active
@endsection
@section('app_intro_settings_active')
    active
@endsection
@section('app_intro_settings')
    active
@endsection

@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Mobile Apps') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.mobile-apps.sidebar')
                <div class="col-sm-xs-12 col-md-9">
                    <div class="card">
                        @if(hasPermission('mobile_app_intro_create'))
                        <div class="card-body">
                                <div class="add-intro">
                                    <a data-toggle="collapse" class="intro" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        + {{ __('Add Intro') }}
                                    </a>
                                </div>
                            <div class="collapse" id="collapseExample">
                                <form action="{{ route('app.intro.store') }}" method="post" enctype="multipart/form-data">
                                    @csrf
                                    <div class="modal-body modal-padding-bottom">
                                        <div class="form-group align-items-center">
                                            <label for="title" class="form-control-label">{{ __('Title') }}</label>
                                            <input type="text" name="title" id="title" value="{{ old('title') }}" class="form-control" required />
                                            @if ($errors->has('title'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('title') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group align-items-center">
                                            <label for="order" class="form-control-label">{{ __('Order By') }}</label>
                                            <input type="text" name="order" id="order" value="{{ old('order') }}" class="form-control" required />
                                            @if ($errors->has('order'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('order') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label for="image">{{ __('Image') }}</label>
                                            <div class="form-group">
                                                <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-selection="single"
                                                     data-target="#galleryModal" data-dismiss="modal">
                                                    <input type="hidden" name="image" value="" class="image-selected">
                                                    <span class="form-control"><span class="counter">0</span> {{ __('file chosen') }}</span>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            {{ __('Choose File') }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="selected-media-box">
                                                    <div class="mt-4 gallery gallery-md d-flex">
                                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}" data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                             alt="image" class="img-thumbnail logo-profile">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group align-items-center">
                                            <label for="description" class="form-control-label">{{ __('Description') }}</label>
                                            <textarea name="description" id="description" cols="30" rows="10" class="form-control"></textarea>
                                            @if ($errors->has('description'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('description') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="modal-footer modal-padding-bottom">
                                        <button type="submit" class="btn btn-outline-primary">{{ __('Save') }}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        @endif
                    </div>
                    <div class="card" id="settings-card">
                        <div class="card-header input-title">
                            <h4>{{ __('App Intro') }}</h4>
                        </div>
                            <div class="col-sm-xs-12 col-md-12 card-body card-body-paddding">
                                <div class="table-responsive">
                                    <table class="table table-striped table-md">
                                        <thead>
                                        <tr>
                                            <th>{{ __('#') }}</th>
                                            <th>{{ __('Image') }}</th>
                                            <th>{{ __('Title') }}</th>
                                            <th>{{ __('Description') }}</th>
                                            <th>{{ __('Status') }}</th>
                                            @if(hasPermission('mobile_app_intro_update') || hasPermission('mobile_app_intro_delete'))
                                            <th>{{ __('Options') }}</th>
                                            @endif
                                        </tr>
                                        </thead>
                                        <tbody>
                                 @foreach ($appIntros as $key=>$app_intro)
                                    <tr id="row_{{ $app_intro->id }}" class="table-data-row">
                                        <input type="hidden" value="{{$app_intro->id}}" id="id">
                                        <td>{{ $appIntros->firstItem() + $key }}</td>
                                        <td>
                                            @if ($app_intro->image != [] && @is_file_exists($app_intro->image['image_40x40'], $app_intro->image['storage']))
                                                <img src="{{ get_media($app_intro->image['image_40x40'], $app_intro->image['storage']) }}"
                                                     alt="{{ @$app_intro->title }}"
                                                     class="mr-3 rounded">
                                            @else
                                                <img src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                     alt="{{ @$title }}"
                                                     class="mr-3 rounded">
                                            @endif
                                        </td>
                                        <td>
                                            <div class="ml-1">{{$title = $app_intro->getTranslation('title', \App::getLocale()) }}</div>
                                        </td>
                                        <td>{{$title = $app_intro->getTranslation('description', \App::getLocale()) }}</td>
                                        <td>
                                            <label class="custom-switch mt-2 {{ hasPermission('mobile_app_intro_update') ? '' : 'cursor-not-allowed' }}">
                                                <input  type="checkbox" value="app-intro-status-change/{{$app_intro->id}}" {{$app_intro->status==1 ? 'checked' : ''}}
                                                {{ hasPermission('mobile_app_intro_update') ? '' : 'disabled' }}
                                                 name="custom-switch-checkbox" class="{{ hasPermission('mobile_app_intro_update') ? 'status-change' : '' }} custom-switch-input ">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>

                                        <td>
                                            @if(hasPermission('mobile_app_intro_update'))
                                                <a href="{{ route('app.intro.edit',$app_intro->id) }}" class="btn btn-outline-secondary btn-circle" data-url=""data-toggle="tooltip" title="" data-original-title="{{ __('Edit') }}">
                                                    <i class="bx bx-edit"></i>
                                                </a>
                                            @endif
                                            @if(hasPermission('mobile_app_intro_delete'))
                                            <a href="javaScript:void(0)" onclick="delete_row('delete/app_intros/',{{ $app_intro->id }})"class="btn btn-outline-danger btn-circle" data-toggle="tooltip" title=""data-original-title="{{ __('Delete') }}">
                                                <i class='bx bx-trash'></i>
                                            </a>
                                            @endif
                                        </td>
                                    </tr>
                                @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="card-footer">
                                <nav class="d-inline-block">
                                    {{ $appIntros->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                                </nav>
                            </div>
                        </div>
                     </div>
                </div>
           </div>
    </section>
    <!-- Modal -->
@include('admin.common.selector-modal')
@endsection
@include('admin.common.delete-ajax')

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush

