@extends('admin.partials.master')

@section('title')
    {{ __('My Profile') }}
@endsection
@section('password-change')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ Sentinel::getUser()->first_name.'!' }}</h2>
            <p class="section-lead">
                {{ __('Update your information on this page.') }}
            </p>
            <div class="row mt-sm-4">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card profile-widget">
                        @include('admin.common.sidebar')
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-8">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{__('Change Password')}}</h4>
                        </div>
                        <div class="card-body p-0">
                            <form action="{{ Sentinel::getUser()->user_type == 'seller' ? route('seller.password.update') : route('password.update') }}" enctype="multipart/form-data" method="POST">
                                @csrf
                                @method('PUT')
                                <div class="card-body card-body-paddding">
                                    <div class="form-group">
                                        <label for="old_password">{{ __('Old Password') }} *</label>
                                        <input type="password" id="old_password" placeholder="{{ __('Enter Old Password') }}" value="{{ old('old_password') }}" name="old_password" class="form-control" required >
                                        @if ($errors->has('old_password'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('old_password') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="new_password">{{ __('New Password') }} *</label>
                                        <input type="password" id="new_password" placeholder="{{ __('Enter New Password') }}" value="{{ old('new_password') }}" name="new_password" class="form-control" required>
                                        @if ($errors->has('new_password'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('new_password') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="confirm_password">{{ __('Confirm Password') }} *</label>
                                        <input type="password" id="confirm_password" placeholder="{{ __('Password Confirmation') }}" value="{{ old('confirm_password') }}" name="confirm_password" class="form-control" required>
                                        @if ($errors->has('password'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('password') }}</p>
                                            </div>
                                        @endif
                                    </div>

                                            <div class="form-group text-right">
                                                <button type="submit" class="btn btn-outline-primary" tabindex="4">
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


