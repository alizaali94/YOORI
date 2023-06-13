@extends('admin.partials.master')
@section('title')
    {{ __('All Attribute values') }}
@endsection
@section('attribute_value_active')
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
                    <h2 class="section-title">{{__('Attribute Values')}}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $attributeValues->total(). ' ' . __('Attributes') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="{{ hasPermission('attribute_value_create') ? 'col-sm-xs-12 col-md-7' : 'col-sm-xs-12 col-md-8 middle' }}">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Values') }} </h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>{{__('#')}}</th>
                                        <th>{{__('Attribute')}}</th>
                                        <th>{{__('Values')}}</th>
                                        @if (hasPermission('attribute_value_update') || hasPermission('attribute_value_delete'))
                                            <th class="option">{{__('Options')}}</th>
                                        @endif
                                    </tr>
                                    @foreach($attributeValues as $key => $values )

                                        <tr id="{{ $attributeValues->firstItem() + $key }}">
                                            <td>{{ $attributeValues->firstItem() + $key }}</td>
                                            <td>{{ $values->attribute->getTranslation('title', \App::getLocale()) }}</td>
                                            <td>
                                                <p>{{ $values->value }}</p>
                                            </td>
                                            <td>
                                                @if (hasPermission('attribute_value_update'))
                                                    <a href="{{ route('attribute.values.edit', $values->id ) }}" class="btn btn-outline-secondary btn-circle"data-toggle="tooltip" title=""
                                                       data-original-title="{{ __('Edit') }}"><i class="bx bx-edit"></i>
                                                    </a>
                                                @endif
                                                @if (hasPermission('attribute_value_delete'))
                                                    <a href="javascript:void(0)" onclick="delete_row('delete/attribute_values/',{{ $values->id }})"class="btn btn-outline-danger btn-circle" data-toggle="tooltip" title=""
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
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $attributeValues->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
                @if (hasPermission('attribute_value_create'))
                    <div class="col-sm-xs-12 col-md-5">
                        <div class="card">
                            <div class="card-header">
                                <h4>{{__('Add Value')}}</h4>
                            </div>
                            <div class="card-body card-body-paddding">
                                <form method="POST" action="{{ route('attribute.values.store') }}">
                                    @csrf
                                    <div class="form-group">
                                        <label for="id">{{__('Attribute')}}</label>
                                        <select class="form-control select2" name="id" id="id" required>
                                            <option value="">{{ __("Select attribute") }}</option>
                                            @foreach($attributes as $key => $value)
                                                <option value="{{ $value->id }}"> {{$title = $value->getTranslation('title', \App::getLocale()) }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="attribute">{{__('Value')}}</label>
                                        <input id="attribute" type="text" class="form-control" name="value"
                                               placeholder="{{__('Value')}}" tabindex="1"
                                               required autofocus>
                                        @if ($errors->has('value'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('value') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group text-right">
                                        <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                            {{__('Save')}}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')
