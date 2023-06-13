@extends('admin.partials.master')
@section('installed_addon')
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
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Installed Addons') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $addons->total() . ' ' . __('Addon installed') }}
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-xs-12 col-md-7">
                <div class="card">
                    <form action="">
                        <div class="card-header input-title">
                            <h4>{{ __('Installed Addons') }}</h4>
                        </div>
                    </form>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-md">
                                <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>{{ __('Name') }}</th>
                                    <th>{{ __('Image') }}</th>
                                    <th>{{ __('Version') }}</th>
                                    @if(hasPermission('addon_update'))
                                        <th>{{ __('Status') }}</th>
                                    @endif
                                </tr>
                                @foreach ($addons as $key=>$addon)
                                    <tr id="row_{{ $addon->id }}" class="table-data-row">
                                        <input type="hidden" value="{{$addon->id}}" id="id">
                                        <td>{{ $addons->firstItem() + $key }}</td>
                                        <td>{{ $addon->name }}</td>
                                        <td>
                                            @if ($addon->image != '' && @is_file_exists($addon->image,$addon->storage))
                                                <img
                                                    src="{{ get_media($addon->image,$addon->storage) }}"
                                                    alt="{{ @$addon->title }}"
                                                    class="mr-3 rounded">
                                            @else
                                                <img src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                     alt="{{ @$title }}"
                                                     class="mr-3 rounded">
                                            @endif
                                        </td>
                                        <td>{{ $addon->version }}</td>
                                        @if(hasPermission('addon_update'))
                                        <td>
                                            <label class="custom-switch mt-2">
                                                <input type="checkbox" name="custom-switch-checkbox"
                                                       value="addon-status-change/{{$addon->id}}"
                                                       {{ $addon->status == 1 ? 'checked' : '' }} class="status-change custom-switch-input">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                        @endif

                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer">
                        <nav class="d-inline-block">
                            {{ $addons->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                        </nav>
                    </div>
                </div>
            </div>
            <div class="col-sm-xs-12 col-md-5">
                <div class="card">
                    <div class="card-header input-title">
                        <h4>{{ __('Install/Update') }}</h4>
                    </div>
                    <div class="card-body card-body-paddding">
                        @if(Session::has('response'))
                            <div class="mb-2">
                                @foreach(Session::get('response') as $error)
                                    <div class="invalid-feedback">
                                        * {{ $error }}
                                    </div>
                                @endforeach
                            </div>
                        @endisset
                        <form method="POST" action="{{ route('install.new.addon') }}" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group">
                                <label for="purchase_code">{{ __('Purchase code') }} *</label>
                                <input type="text" name="purchase_code" id="purchase_code"
                                       placeholder="{{ __('Enter your purchase code')  }}"
                                       value="{{ old('purchase_code') }}" class="form-control" required>
                                @if ($errors->has('purchase_code'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('purchase_code') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="file">{{ __('Addon') }} <small>{{ __('(Zip File)') }}</small></label>
                                <div class="form-group">
                                    <input type="file" class="custom-file-input image_pick file-select"
                                           accept=".zip,.rar,.7zip" name="addon_zip_file" id="customFile"/>
                                    @if ($errors->has('addon_zip_file'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('addon_zip_file') }}</p>
                                        </div>
                                    @endif
                                </div>
                            </div>
                            @if(hasPermission('addon_update'))
                            <div class="form-group text-right">
                                <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                    {{ __('Save') }}
                                </button>
                            </div>
                            @endif
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

