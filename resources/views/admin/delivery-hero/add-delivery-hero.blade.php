@extends('admin.partials.master')

@section('title')
    {{ __('Add Delivery Man') }}
@endsection
@section('delivery_hero_active')
    active
@endsection
@section('add_delivery_hero')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Add Delivery Man') }}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Delivery Man Info') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding phone-block">
                            <form action="{{ route('delivery.hero.add') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="first_name">{{ __('First Name') }} *</label>
                                        <input type="text" name="first_name" id="first_name"
                                               value="{{ old('first_name') }}"
                                               class="form-control" placeholder="{{ __('Enter First Name') }}" required>
                                        @if ($errors->has('first_name'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('first_name') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="last_name">{{ __('Last Name') }} *</label>
                                        <input type="text" name="last_name" id="last_name"
                                               value="{{ old('last_name') }}"
                                               class="form-control" placeholder="{{__('Enter Last Name')}}" required>
                                        @if ($errors->has('last_name'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('last_name') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="email">{{ __('Email') }} *</label>
                                        <input type="email" name="email" id="email" value="{{ old('email') }}"
                                               placeholder="{{__('Enter Email Address')}}" class="form-control" required>
                                        @if ($errors->has('email'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('email') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="phone">{{ __('Phone') }} *</label>
                                        <input type="hidden" name="phone" value="{{ old('phone') }}" >
                                        <input type="tel" class="form-control intl-phone-input change-number" name="telphn" id="txtPhone" value="{{ old('phone') }}" required />

                                    @if ($errors->has('phone'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('phone') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="password">{{ __('Password') }} *</label>
                                        <input type="password" name="password" id="password"
                                               value="{{ old('password') }}"
                                               placeholder="{{__('Enter Delivery Man Password')}}" class="form-control" required>
                                        @if ($errors->has('password'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('password') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group  col-md-12 mt-4 text-center">
                                        @if (@$user->images != [] && is_file_exists(@$user->images['image_128x128'],$user->images['storage']))
                                            <img src="{{ get_media($user->images['image_128x128'],$user->images['storage']) }}"
                                                 alt="{{ @$user->first_name }}" id="img_profile"
                                                 class="img-thumbnail user-profile ">
                                        @else
                                            <img src="{{ static_asset('images/default/user.jpg') }}"
                                                 alt="{{ @$user->first_name }}" id="img_profile"
                                                 class="img-thumbnail user-profile">
                                        @endif
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label for="">{{ __('Profile Image') }}</label>
                                        <div class="form-group">
                                            <input type="file" class="custom-file-input image_pick file-select"  data-image-for="profile" name="image" id="customFile"
                                                   value="{{ @$user->image_id }}" accept="image/*" />
                                            @if ($errors->has('image'))
                                                <div class="invalid-feedback">
                                                    <p>{{ $errors->first('image') }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="country-dropdown">{{ __('Country') }} *</label>
                                        <select class="form-control select2" name="country_id" id="country-dropdown">
                                            <option value="">{{ __('Select Country') }}</option>
                                            @foreach($countries as $key => $country)
                                                <option value="{{ $country->id }}">{{ $country->name }}</option>
                                            @endforeach
                                        </select>

                                        @if ($errors->has('country_id'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('country_id') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="state-dropdown">{{ __('State') }}</label>
                                        <select class="form-control select2" name="state_id" id="state-dropdown">
                                            <option value="">{{ __('Select State') }}</option>
                                        </select>

                                        @if ($errors->has('state'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('state') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="city-dropdown">{{ __('City') }}</label>
                                        <select class="form-control select2" name="city_id" id="city-dropdown">
                                            <option value="">{{ __('Select City') }}</option>
                                        </select>

                                        @if ($errors->has('city'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('city') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="address">{{ __('Address') }}</label>
                                        <textarea name="address" id="address" cols="30" rows="10"
                                                  class="form-control"></textarea>
                                        @if ($errors->has('address'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('address') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="delivery_fee">{{ __('Salary') }} {{ (settingHelper('delivery_hero_payment_type') == 'delivery_hero_commission') ? '(N/A)' : '' }}</label>
                                        <input type="number" step=".01" name="salary" id="salary"
                                               {{ settingHelper('delivery_hero_payment_type') == 'delivery_hero_commission' ? 'disabled' : '' }}
                                               value="{{ old('salary') }}"
                                               class="form-control" placeholder="{{__('Enter Salary Amount')}}">

                                        @if ($errors->has('salary'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('salary') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="return_fee">{{ __('Commission Per Delivery') }} {{ settingHelper('delivery_hero_payment_type') == 'delivery_hero_salary' ? '(N/A)' : '' }}</label>
                                        <input type="number" step=".01" name="commission" id="commission"
                                               value="{{ old('commission') }}" {{ settingHelper('delivery_hero_payment_type') == 'delivery_hero_salary' ? 'disabled' : '' }}
                                               class="form-control" placeholder="{{__('Enter Commission')}}">

                                        @if ($errors->has('commission'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('commission') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="pickup_hub_id">{{ __('Pickup Hub') }}</label>
                                        <select class="form-control select2" name="pickup_hub_id" id="pickup_hub_id">
                                            <option value="">{{ __('Select Pickup Hub') }}</option>
                                            @foreach($pickupHubs as $key => $value)
                                            <option value="{{ $value->id }}">{{ $value->getTranslation('name') }}</option>
                                            @endforeach
                                        </select>

                                        @if ($errors->has('pickup_hub_id'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('pickup_hub_id') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="driving_licence">{{ __('Driving Licence') }}</label>
                                        <input type="text" name="driving_licence" id="driving_licence" value="{{ old('driving_licence') }}"
                                               placeholder="{{__('Enter Driving Licence')}}" class="form-control">

                                        @if ($errors->has('driving_licence'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('driving_licence') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="licence_image">{{ __('Licence Image') }}</label>
                                        <div class="form-group">
                                            <input type="file" id="licence_image" class="custom-file-input image_pick file-select" placeholder="{{__('Enter Driving Licence')}}" data-image-for="licence" name="driving_licence_image" id="customFile"/>
                                            @if ($errors->has('driving_licence_image'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('driving_licence_image') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div>
                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="driving_licence_image" id="img_licence" class="img-thumbnail site-icon ">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-12 text-right">
                                        <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                            {{ __('Save') }}
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
    @include('admin.common.int-telephone')
@endsection
@include('admin.common.delete-ajax')
@include('admin.common.common-modal')
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/ajax-country-city-state.js') }}"></script>
@endpush
@section('style')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/css/intlTelInput.css">
@endsection
