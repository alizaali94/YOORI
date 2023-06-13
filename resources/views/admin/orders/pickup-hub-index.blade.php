@extends('admin.partials.master')
@php
    @endphp
@section('title')
    {{ __('Pick-up Hubs Lists') }}
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
                    <h2 class="section-title">{{ __('All Pick-up Hubs') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $pickups->total() . ' ' . __('items') }}
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="{{ (hasPermission('pickup_hub_create') && settingHelper('pickup_point') == 1)? 'col-sm-xs-12 col-md-7' : 'col-sm-xs-12 col-md-8 middle' }}">
                <div class="card">
                    <form action="">
                        <div class="card-header input-title">
                            <h4>{{ __('Pick-up Hubs') }}</h4>
                        </div>
                    </form>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-md">
                                <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>{{ __('Name') }}</th>
                                    <th>{{ __('Phone') }}</th>
                                    <th>{{ __('Hub Manager') }}</th>
                                    <th>{{ __('Status') }}</th>
                                    @if(hasPermission('pickup_hub_update') || hasPermission('pickup_hub_delete'))
                                    <th>{{ __('Options') }}</th>
                                    @endif
                                </tr>
                                @foreach($pickups as $key=>$pickup)
                                    <tr id="row_{{ $pickup->id }}" class="table-data-row">
                                        <td>{{$key+1}}</td>
                                        <td>{{ $pickup->getTranslation('name', \App::getLocale()) }}</td>
                                        <td>
                                            {{ isDemoServer() && isset($pickup->phone) ? Str::of($pickup->phone)->mask('*', 0, strlen($pickup->phone)-3) : $pickup->phone }}
                                        </td>
                                        <td>{{ $pickup->incharge->first_name }} {{ $pickup->incharge->last_name }}</td>
                                        <td>
                                            <label class="custom-switch mt-2 {{ hasPermission('pickup_hub_update') ? '' : 'cursor-not-allowed' }}">
                                                <input type="checkbox" name="custom-switch-checkbox" {{ $pickup->pick_up_status == 1 ? 'checked' : '' }}
                                                    {{ hasPermission('pickup_hub_update') ? '' : 'disabled' }}
                                                    value="pickup-hub-status-change/{{$pickup->id}}"
                                                      class="{{ hasPermission('pickup_hub_update') ? 'status-change' : '' }} custom-switch-input">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                        <td>
                                            @if(hasPermission('pickup_hub_update'))
                                            <a href="{{route('pickup.hub.edit',$pickup->id)}}"
                                                class="btn btn-outline-secondary btn-circle"
                                                data-toggle="tooltip" title=""
                                                data-original-title="{{ __('Edit') }}"><i class="bx bx-edit"></i>
                                             </a>
                                            @endif
                                            @if(hasPermission('pickup_hub_delete'))
                                            <a href="javascript:void(0)"
                                                onclick="delete_row('delete/pickup_hubs/',{{$pickup->id}})"
                                                class="btn btn-outline-danger btn-circle" data-toggle="tooltip"
                                                title=""
                                                data-original-title="{{ __('Delete') }}"><i class="bx bx-trash"></i>
                                            </a>
                                            @endif
                                        </td>
                                    </tr>
                                @endforeach

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            @if(hasPermission('pickup_hub_create' && settingHelper('pickup_point') == 1))
            <div class="col-sm-xs-12 col-md-5">
                <div class="card" >
                    <div class="card-header input-title">
                        <h4>{{ __('Add New Pick-up Hub') }}</h4>
                    </div>
                    <div class="card-body card-body-paddding">
                        <form method="POST" action="{{ route('pickup.hub.store') }}">
                            @csrf
                            <div class="form-group">
                                <label for="name">{{ __('Name') }} *</label>
                                <input type="text" name="name" id="name" value="{{ old('name') }}" class="form-control" required>
                                @if ($errors->has('name'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('name') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="address">{{ __('Address') }} *</label>
                                <textarea name="address" id="address" value="{{ old('address') }}" class="form-control" rows="8" required></textarea>
                                @if ($errors->has('address'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('address') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="phone">{{ __('Phone') }} *</label>
                                <input type="phone" name="phone" id="phone" value="{{ old('phone') }}" class="form-control" required>
                                @if ($errors->has('phone'))
                                    <div class="invalid-feedback">
                                        <p>{{ $errors->first('phone') }}</p>
                                    </div>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="user_id">{{__('Pick-up Hub Manager')}} *</label>
                                <select class="customer-by-ajax form-control selectric" value="{{old('user_id')}}" name="user_id" id ="user_id"  aria-hidden="true" required >
                                        <option value="" selected>{{__('Select Manager')}}</option>
                                    @foreach($staffs as $staff)
                                        <option value="{{$staff->id}}">{{$staff->first_name}} {{$staff->last_name}}</option>
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
                                    {{ __('Save') }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            @endif
        </div>
    </section>
    <!-- Modal -->
@endsection
@include('admin.common.delete-ajax')

