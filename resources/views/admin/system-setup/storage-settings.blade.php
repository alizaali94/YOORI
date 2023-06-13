@extends('admin.partials.master')
@section('storage_setting_active')
    active
@endsection
@section('setup')
    active
@endsection
@section('storage.setting')
    active @endsection
@section('title')
    {{ __('Storage Settings') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Settings') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.system-setup.sidebar')
                <div class="col-md-9">
                    <div class="card email-card">

                        <div class="card-header">
                            <h4>{{ __('Storage Settings') }}</h4>
                        </div>
                        <div class="col-md-10 middle card-body card-body-paddding">
                            <form action="{{ route('storage.update') }}" method="POST">
                                @csrf
                                @method('put')
                                <div class="form-group">
                                    <label class="form-control-label">{{ __('Default Storage') }}</label>
                                    <div class="custom-file">
                                        <select name="default_storage" id="default_storage"
                                                class="form-control selectric">
                                            <option
                                                {{ old('default_storage') == 'local' ? 'selected' : (old('default_storage') == '' && settingHelper('default_storage') == 'local' ? 'selected' : '') }}
                                                value="local">Local
                                            </option>
                                            <option
                                                {{ old('default_storage') == 'aws_s3' ? 'selected' : (old('default_storage') == '' && settingHelper('default_storage') == 'aws_s3' ? 'selected' : '') }}
                                                value="aws_s3">AWS S3
                                            </option>
                                            <option
                                                {{ old('default_storage') == 'wasabi' ? 'selected' : (old('default_storage') == '' && settingHelper('default_storage') == 'wasabi' ? 'selected' : '') }}
                                                value="wasabi">Wasabi
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div id="awsDiv"
                                     class="{{ old('default_storage') == 'aws_s3' ? '' : (old('default_storage') == '' && settingHelper('default_storage') == 'aws_s3' ? '' : 'd-none') }}">
                                    <div class="form-group">
                                        <label for="aws_access_key_id"
                                               class="form-control-label">{{ __('AWS Access Key ID') }}</label>
                                        <input type="text" name="aws_access_key_id" id="aws_access_key_id"
                                               value="{{ old('aws_access_key_id') ? old('aws_access_key_id') : (isDemoServer() ? Str::of(settingHelper('aws_access_key_id'))->mask('*', 3, 15) : settingHelper('aws_access_key_id') ) }}"
                                               class="form-control" placeholder="{{ __('AWS access key') }}"/>
                                        @if ($errors->has('aws_access_key_id'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('aws_access_key_id') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="aws_secret_access_key"
                                               class="form-control-label">{{ __('AWS Secret Access Key') }}</label>
                                        <input type="text" name="aws_secret_access_key" id="aws_access_key_id"
                                               value="{{ old('aws_secret_access_key') ? old('aws_secret_access_key') : (isDemoServer() ? Str::of(settingHelper('aws_secret_access_key'))->mask('*', 3, 25) : settingHelper('aws_secret_access_key') ) }}"
                                               class="form-control" placeholder="{{ __('AWS secret access key') }}"/>
                                        @if ($errors->has('aws_secret_access_key'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('aws_secret_access_key') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="aws_default_region"
                                               class="form-control-label">{{ __('AWS Default Region') }}</label>
                                        <input type="text" name="aws_default_region" id="aws_default_region"
                                               value="{{ old('aws_default_region') ? old('aws_default_region') : settingHelper('aws_default_region') }}"
                                               class="form-control" placeholder="{{ __('AWS default region') }}"/>
                                        @if ($errors->has('aws_default_region'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('aws_default_region') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="aws_bucket"
                                               class="form-control-label">{{ __('AWS Bucket') }}</label>
                                        <input type="text" name="aws_bucket" id="aws_bucket"
                                               value="{{ old('aws_bucket') ? old('aws_bucket') : settingHelper('aws_bucket') }}"
                                               class="form-control" placeholder="{{ __('AWS bucket') }}"/>
                                        @if ($errors->has('aws_bucket'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('aws_bucket') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>

                                <div id="wasabiDiv"
                                     class="{{ old('default_storage') == 'wasabi' ? '' : (old('default_storage') == '' && settingHelper('default_storage') == 'wasabi' ? '' : 'd-none') }}">
                                    <div class="form-group">
                                        <label for="wasabi_access_key_id"
                                               class="form-control-label">{{ __('Wasabi Access Key ID') }}</label>
                                        <input type="text" name="wasabi_access_key_id" id="wasabi_access_key_id"
                                               value="{{ old('wasabi_access_key_id') ? old('wasabi_access_key_id') : (isDemoServer() ? Str::of(settingHelper('wasabi_access_key_id'))->mask('*', 3, 15) : settingHelper('wasabi_access_key_id') ) }}"
                                               class="form-control" placeholder="{{ __('Wasabi access key') }}"/>
                                        @if ($errors->has('wasabi_access_key_id'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('wasabi_access_key_id') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="wasabi_secret_access_key"
                                               class="form-control-label">{{ __('Wasabi Secret Access Key') }}</label>
                                        <input type="text" name="wasabi_secret_access_key" id="wasabi_access_key_id"
                                               value="{{ old('wasabi_secret_access_key') ? old('wasabi_secret_access_key') : (isDemoServer() ? Str::of(settingHelper('wasabi_secret_access_key'))->mask('*', 3, 25) : settingHelper('wasabi_secret_access_key') ) }}"
                                               class="form-control" placeholder="{{ __('Wasabi secret access key') }}"/>
                                        @if ($errors->has('wasabi_secret_access_key'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('wasabi_secret_access_key') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="wasabi_default_region"
                                               class="form-control-label">{{ __('Wasabi Default Region') }}</label>
                                        <input type="text" name="wasabi_default_region" id="wasabi_default_region"
                                               value="{{ old('wasabi_default_region') ? old('wasabi_default_region') : settingHelper('wasabi_default_region') }}"
                                               class="form-control" placeholder="{{ __('Wasabi default region') }}"/>
                                        @if ($errors->has('wasabi_default_region'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('wasabi_default_region') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="wasabi_bucket"
                                               class="form-control-label">{{ __('Wasabi Bucket') }}</label>
                                        <input type="text" name="wasabi_bucket" id="wasabi_bucket"
                                               value="{{ old('wasabi_bucket') ? old('wasabi_bucket') : settingHelper('wasabi_bucket') }}"
                                               class="form-control" placeholder="{{ __('Wasabi bucket') }}"/>
                                        @if ($errors->has('wasabi_bucket'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('wasabi_bucket') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                        {{ __('Update') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card email-card">

                        <div class="card-header">
                            <h4>{{ __('Image Optimization') }}</h4>
                        </div>
                        <div class="col-md-10 middle card-body card-body-paddding">
                            <div class="table-responsive">
                                <table class="table table-md middle">
                                    <div class="form-group">
                                        <tbody>
                                        <form action="{{ route('admin.preference.setting.update') }}" method="post">
                                            @csrf
                                            @method('put')
                                            <tr id="">
                                                <td>{{ __('Disable Image Optimization') }}</td>
                                                <td width="300">
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="custom-switch-checkbox"
                                                               value="setting-status-change/{{ 'image_optimization' }}"
                                                               class="custom-switch-input status-change" {{ settingHelper('image_optimization') == 1 ? 'checked' : ''}} />
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                        </form>
                                        </tbody>
                                    </div>
                                </table>
                                <table class="table table-md middle {{ settingHelper('image_optimization') == 1 ? 'd-none' : ''}}">
                                <div class="form-group">
                                    <form action="{{ route('admin.optimization.setting.update') }}" method="post">
                                        @csrf
                                        @method('put')
                                        <tbody>
                                        <tr id="">
                                            <td>{{ __('Optimization Percentage') }}</td>
                                            <td width="300">
                                                <input type="number" name="image_optimization_percentage"
                                                       id="image_optimization_percentage"
                                                       value="{{ old('image_optimization_percentage') ? old('image_optimization_percentage') : settingHelper('image_optimization_percentage') }}"
                                                       class="form-control" placeholder="%"/>
                                                @if ($errors->has('image_optimization_percentage'))
                                                    <div class="invalid-feedback">
                                                        <p>{{ $errors->first('image_optimization_percentage') }}</p>
                                                    </div>
                                                @endif
                                            </td>
                                        </tr>
                                        <tr class="text-right">
                                            <td></td>
                                            <td>
                                                <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                                    {{ __('Update') }}
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </form>
                                </div>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
