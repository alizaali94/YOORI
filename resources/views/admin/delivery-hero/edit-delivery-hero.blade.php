@extends('admin.partials.master')

@section('title')
    {{ __('Update Delivery Man') }}
@endsection
@section('delivery_hero_active')
    active
@endsection
@section('delivery_hero')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Update Delivery Mans') }}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-9 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Delivery Man Info') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding phone-block">
                            <form action="{{ route('delivery.hero.update') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                @method('PUT')
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                        <input type="hidden" value="{{ @$user->id }}" name="id">

                                        <label for="first_name">{{ __('First Name') }} *</label>
                                        <input type="text" name="first_name" id="first_name"
                                               value="{{ old('first_name') ? old('first_name') : @$user->first_name }}"
                                               class="form-control" placeholder="Enter First Name" required>
                                        @if ($errors->has('first_name'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('first_name') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="last_name">{{ __('Last Name') }} *</label>
                                        <input type="text" name="last_name" id="last_name"
                                               value="{{ old('last_name') ? old('first_name') : @$user->last_name }}"
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
                                        <input type="email" name="email" id="email"
                                               value="{{ old('email') ? old('email') : (isDemoServer() && isset($user->email) ? emailAddressMask($user->email) : @$user->email) }}"
                                               placeholder="{{__('Enter Email Address')}}" class="form-control" required>
                                        @if ($errors->has('email'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('email') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="phone">{{ __('Phone') }} *</label>
                                        <input type="hidden" name="phone" value="{{ old('phone') ? old('phone') : (isDemoServer() && isset($user->phone) ? Str::of($user->phone)->mask('*', 0, strlen($user->phone)-3) : $user->phone) }}" >
                                        <input type="tel" class="form-control intl-phone-input change-number" name="telphn" id="txtPhone" value="{{ old('phone') ? old('phone') : (isDemoServer() && isset($user->phone) ? Str::of($user->phone)->mask('*', 0, strlen($user->phone)-3) : $user->phone) }}" required />

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
                                               placeholder="{{__('Enter Password')}}" class="form-control">
                                        @if ($errors->has('password'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('password') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-12 mt-4 text-center">
                                        @if (@$user->images != [] && @is_file_exists(@$user->images['image_128x128']))
                                            <img src="{{ static_asset($user->images['image_128x128']) }}"
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
                                                   value="{{ @$user->image_id }}" />
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
                                                <option value="{{ $country->id }}" @if($user->deliveryHero){{ $country->id == $user->deliveryHero->country_id ? "selected" : "" }}@endif>{{ $country->name }}</option>
                                            @endforeach
                                        </select>

                                        @if ($errors->has('country'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('country') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="state-dropdown">{{ __('State') }}</label>
                                        <select class="form-control select2" name="state_id" id="state-dropdown">
                                            <option value="">{{ __('Select State') }}</option>
                                            @if($user->deliveryHero)
                                                @foreach($user->deliveryHero->country->states as $key => $state)
                                                    <option value="{{ $state->id }}" {{ $state->id == $user->deliveryHero->state_id ? "selected" : "" }} >{{ $state->name }}
                                                @endforeach
                                            @endif
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
                                            <option value="">{{ __('Select State First') }}</option>
                                            @if($user->deliveryHero && $user->deliveryHero->state && $user->deliveryHero->state->cities)
                                                @foreach($user->deliveryHero->state->cities as $key => $city)
                                                    <option value="{{ $city->id }}" {{ $city->id == $user->deliveryHero->city_id ? "selected" : "" }} >{{ $city->name }}
                                                @endforeach
                                            @endif

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
                                                  class="form-control">{{ $user->deliveryHero ? $user->deliveryHero->address : "" }}</textarea>
                                        @if ($errors->has('address'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('address') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="salary">{{ __('Salary') }} {{ (settingHelper('delivery_hero_payment_type') == 'delivery_hero_commission') ? '(N/A)' : '' }}</label>
                                        <input type="number" step=".01" name="salary" id="salary"
                                               {{ settingHelper('delivery_hero_payment_type') == 'delivery_hero_commission' ? 'disabled' : '' }}
                                               value="{{ old('salary') ? old('salary') : priceFormatUpdate(@$user->deliveryHero->salary,settingHelper('default_currency'),$type="*") }}"
                                               class="form-control" placeholder="{{__('Enter Salary Amount')}}">

                                        @if ($errors->has('salary'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('salary') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="commission">{{ __('Commission') }} {{ settingHelper('delivery_hero_payment_type') == 'delivery_hero_salary' ? '(N/A)' : '' }}</label>
                                        <input type="number" step=".01" name="commission" id="commission"
                                               {{ settingHelper('delivery_hero_payment_type') == 'delivery_hero_salary' ? 'disabled' : '' }}
                                               value="{{ old('commission') ? old('commission') : priceFormatUpdate(@$user->deliveryHero->commission,settingHelper('default_currency'),$type="*") }}"
                                               class="form-control" placeholder="{{__('Enter Commission Rate')}}">

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
                                            <option value="{{ $value->id }}" @if($user->deliveryHero){{ $value->id == $user->deliveryHero->pickup_hub_id ? "selected" : "" }}@endif>{{ $value->getTranslation('name') }}</option>
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
                                        <input type="text" name="driving_licence" id="driving_licence" value="{{ old('driving_licence') ? old('driving_licence') : @$user->driving_licence }}"
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
                                            <input type="file" id="licence_image" class="custom-file-input image_pick file-select"  data-image-for="licence" name="driving_licence_image" id="customFile"/>
                                            @if ($errors->has('driving_licence_image'))
                                                <div class="invalid-feedback">
                                                    {{ $errors->first('driving_licence_image') }}
                                                </div>
                                            @endif
                                        </div>
                                        <div>
                                            @if(@$user->deliveryhero->driving_licence_image !='' && file_exists(@$user->deliveryhero->driving_licence_image['image_72x72']))
                                                <img src="{{ static_asset(@$user->deliveryhero->driving_licence_image['image_72x72'])}}" alt="" id="img_licence"class="img-thumbnail site-icon">
                                            @else
                                                <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="driving_licence_image" id="img_licence" class="img-thumbnail site-icon ">
                                            @endif
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
