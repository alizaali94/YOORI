@extends('admin.partials.master')
@section('title')
     {{ __('Update Attribute value') }}
@endsection
@section('attribute_active')
    active
@endsection
@section('product_active')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Update Attribute value') }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" class="btn btn-outline-primary"><i
                            class='bx bx-arrow-back'></i>{{__('Back')}}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-6 middle">
                    <div class="card card-body-paddding">
                        <div class="card-header">
                            <h4>{{ __('Update Attribute value') }}</h4>
                        </div>
                        <div class="card-body">
                            <form method="POST" action="{{ route('attribute.values.update') }}">
                                @csrf
                                <div class="form-group">
                                    <label for="attribute">{{ __('Attribute Value') }}</label>
                                    <input type="hidden" name="id" value="{{ $data->id }}" />
                                    <input type="hidden" value="{{ old('r') ? old('r') : (@$r ? $r : url()->previous() )}}" name="r">
                                    <input id="attribute" type="text" class="form-control" value="{{ $data->value }}" name="value" placeholder="{{ __('Value') }}" tabindex="1" required autofocus>
                                    @if ($errors->has('value'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('value') }}</p>
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
@endsection
@include('admin.common.delete-ajax')
