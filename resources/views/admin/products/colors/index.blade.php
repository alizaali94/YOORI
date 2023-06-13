@extends('admin.partials.master')
@section('color_active')
active
@endsection
@section('product_active')
    active
@endsection
@section('title')
     {{ __('Colors') }}
@endsection
@section('main-content')
<section class="section">
    <div class="section-body">
        <div class="d-flex justify-content-between">
            <div class="d-block">
                <h2 class="section-title">{{ __('All Colors') }}</h2>
                <p class="section-lead">
                    {{ __('You have total') . ' ' . $colors->total() . ' ' . __('colors') }}
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-{{ hasPermission('color_create') ? 'col-sm-xs-12 col-md-7' : 'col-sm-xs-12 col-md-8 middle' }}">
                <div class="card">
                    <form action="">
                        <div class="card-header input-title">
                            <h4>{{ __('Colors') }}</h4>
                        </div>
                    </form>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-md">
                                <tbody>
                                <tr>
                                    <th>{{ __('#') }}</th>
                                    <th>{{ __('Name') }}</th>
                                    <th>{{ __('Code') }}</th>
                                    @if (hasPermission('color_update') || hasPermission('color_delete'))
                                    <th>{{ __('Options') }}</th>
                                    @endif
                                </tr>
                                @foreach($colors as $key=>$color)
                                <tr>
                                    <td>{{ $colors->firstItem() + $key }}</td>
                                    <td>
                                        <div class="d-flex">
                                            <div class="ml-1">{{$title = $color->getTranslation('name', \App::getLocale()) }}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex">
                                            <div class="ml-1" style="color:{{$color->code}}">{{$color->code}}</div>
                                        </div>
                                    </td>
                                    <td>
                                        @if (hasPermission('color_update'))
                                            <a href="{{ route('color.edit',$color->id) }}" class="btn btn-outline-secondary btn-circle"data-toggle="tooltip" title=""data-original-title="{{ __('Edit') }}">
                                                <i class="bx bx-edit"></i>
                                            </a>
                                        @endif
                                        @if (hasPermission('color_delete'))
                                            <a href="javascript:void(0)" onclick="delete_row('delete/colors/',{{ $color->id }})"class="btn btn-outline-danger btn-circle" data-toggle="tooltip" title=""
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
                            {{ $colors->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                        </nav>
                    </div>
                </div>
            </div>
            @if (hasPermission('color_create'))
                <div class="col-sm-xs-12 col-md-5">
                    <div class="card">
                        <div class="card-header input-title" id="Add">
                            <h4>{{ __('Add Color') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form method="post" action="{{ route('color.store') }}">
                                @csrf
                                <div class="form-group">
                                    <label for="name">{{ __('Name') }}</label>
                                    <input id="name" type="text" class="form-control" name="name" placeholder="{{ __('Name') }}" value="{{old('name')}}" tabindex="1"
                                        required autofocus>
                                        @if ($errors->has('name'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('name') }}</p>
                                        </div>
                                        @endif
                                 </div>
                                <div class="form-group">
                                    <label for="code">{{ __('Color Code') }}</label>
                                    <div class="input-group colorpickerinput">
                                        <input type="text" class="form-control" name="code" value="{{old('code')}}" id="code" placeholder="{{ __('Code') }}">
                                        <div class="input-group-append">
                                            <div class="input-group-text">
                                                <i class='bx bxs-color-fill' ></i>
                                            </div>
                                        </div>
                                    </div>
                                    @if ($errors->has('code'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('code') }}</p>
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
    </div>
</section>
@endsection
@include('admin.common.delete-ajax')
