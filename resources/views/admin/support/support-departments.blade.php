@extends('admin.partials.master')

@section('title')
    {{ __('Support Department') }}
@endsection
@section('support_active')
    active
@endsection
@section('support_department_active')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body ">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('Support Departments')}}</h2>
                    <p class="section-lead">

                    </p>
                </div>
            </div>
            <div class="row">
                <div class="{{ hasPermission('support_department_create') ? 'col-sm-xs-12 col-md-7' : 'col-sm-xs-12 col-md-8 middle' }}">
                    <div class="card">
                        <form action="">
                            <div class="card-header input-title">
                                <h4>{{__('Departments')}}</h4>
                            </div>
                        </form>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>{{__('#')}}</th>
                                        <th>{{__('Title')}}</th>
                                        <th>{{__('Status')}}</th>
                                        @if(hasPermission('support_department_update') || hasPermission('support_department_delete'))
                                        <th>{{__('Options')}}</th>
                                        @endif
                                    </tr>
                                    @foreach($departments as $key => $department)
                                        <tr id="row_{{ $department->id }}" class="table-data-row">
                                            <td>{{$key+1}}</td>
                                            <td>
                                                <div class="ml-1">{{$department->getTranslation('title', \App::getLocale()) }}</div>
                                            </td>
                                            <td>
                                                <label class="custom-switch mt-2 {{ hasPermission('support_department_update') ? '' : 'cursor-not-allowed' }}">
                                                    <input type="checkbox" value="support-department-status-change/{{$department->id}}" name="custom-switch-checkbox"
                                                           class="{{ hasPermission('support_department_update') ? 'status-change' : '' }} custom-switch-input"  {{ $department->status == 1 ? 'checked' : '' }} {{ hasPermission('support_department_update') ? '' : 'disabled' }}>
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                            <td>
                                                @if(hasPermission('support_department_update'))
                                                <a href="{{route('support.department.edit',$department->id)}}"
                                                    class="btn btn-outline-secondary btn-circle"
                                                    data-toggle="tooltip" title=""
                                                    data-original-title="{{ __('Edit') }}"><i class="bx bx-edit"></i>
                                                 </a>
                                                @endif
                                                @if(hasPermission('support_department_delete'))
                                                <a href="javascript:void(0)"
                                                    onclick="delete_row('delete/support_departments/',{{$department->id}})"
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
                        <div class="card-footer">
                            <nav class="d-inline-block">
                            </nav>
                        </div>
                    </div>
                </div>
                @if(hasPermission('support_department_create'))
                <div class="col-sm-xs-12 col-md-5">
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{__('Add Department')}}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form method="POST" action="{{route('support.department.store')}}">
                                @csrf
                                <div class="form-group">
                                    <label for="title">{{__('Title')}}</label>
                                    <input type="text" class="form-control" name="title" id="title"value="{{old('title')}}"
                                           placeholder="{{__('Title')}}" tabindex="1"
                                           required>
                                    @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="slug">{{__('Slug')}}</label>
                                    <input id="slug" type="text" class="form-control" name="slug"
                                           value="{{old('slug')}}"
                                           placeholder="{{__('Slug')}}" tabindex="1">
                                    @if ($errors->has('slug'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('slug') }}</p>
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


