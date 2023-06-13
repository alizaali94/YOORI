@extends('admin.partials.master')
@php
    @endphp
@section('title')
    {{ __('Pick-up Hubs Update') }}
@endsection
@section('order_active')
    active
@endsection
@section('pickup-hubs')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Update Pickup Hub') }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}"
                       class="btn btn-outline-primary"><i class='bx bx-arrow-back'></i>{{ __('Back') }}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-6 middle">
                    <div class="card">
                        <div class="card-header input-title" id="Add">
                            <h4>{{ __('Update Pickup Hub') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form class="" id="lang">
                                <div class="form-group">
                                    <label for="name">{{ __('Language') }}</label>

                                    <select class="form-control selectric lang" name="lang">
                                        <option value="">{{ __('Select Language') }}</option>
                                        @foreach($languages as $language)
                                            <option
                                                value="{{ $language->locale }}" {{($lang != '' ? ($language->locale == $lang ? 'selected' : '') : ($language->locale == 'en' ? 'selected' : '')) }}>{{ $language->name }}</option>
                                        @endforeach
                                    </select>

                                    @if ($errors->has('lang'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('lang') }}</p>
                                        </div>
                                    @endif
                                </div>
                            </form>
                            <form method="POST" action="{{route('pickup.hub.update')}}">
                                @csrf
                                @method('put')
                                <div class="form-group">
                                    <label for="name">{{ __('Name') }} *</label>
                                    <input type="hidden"
                                           value="{{ $pickups_lang->translation_null == 'not-found' ? '' : $pickups_lang->id }}"
                                           name="pickup_hub_lang_id">
                                    <input type="hidden" value="{{$pickups_lang->pickupHub->id}}" name="pickup_hub_id">
                                    <input type="hidden" value="{{$lang}}" name="lang">

                                    <input type="text" name="name" id="name" value="{{ $pickups_lang->name }}"
                                           class="form-control" required>
                                    @if ($errors->has('name'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('name') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="address">{{ __('Address') }} *</label>
                                    <textarea name="address" id="address" class="form-control" rows="8"
                                              required>{{$pickups_lang->address}}</textarea>
                                    @if ($errors->has('address'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('address') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="phone">{{ __('Phone') }} *</label>
                                    <input type="phone" name="phone" id="phone"
                                           value="{{ $pickups_lang->pickupHub->phone }}" class="form-control" required>
                                    @if ($errors->has('phone'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('phone') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="user_id">{{__('Pick-up Hub Manager')}} *</label>
                                    <select class="customer-by-ajax form-control selectric" value="" name="user_id"
                                            id="user_id" aria-hidden="true" required>
                                        <option value="" selected>{{__('Select Manager')}}</option>

                                        @foreach($staffs as $staff)
                                            <option
                                                value="{{$staff->id}}" {{$pickups_lang->pickupHub->user_id == $staff->id ? 'selected' : ''}}>{{$staff->first_name}} {{$staff->last_name}}</option>
                                        @endforeach

                                    </select>

                                    @if ($errors->has('user_id'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('user_id') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                        {{ __('Update') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Modal -->
@endsection
@include('admin.common.delete-ajax')

