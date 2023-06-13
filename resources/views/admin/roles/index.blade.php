@extends('admin.partials.master')
@php
$route = isset($role) ? route('role.update') : route('role.store');
$title = isset($role) ? __('Edit') : __('Staff');
@endphp
@section('title')
    {{ $title }} {{ __('Roles') }}
@endsection
@section('staff_active')
    active
@endsection
@section('roles')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Staff Roles') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $roles->total() . ' ' . __('staff roles') }}
                    </p>
                </div>
                @if(hasPermission('role_create'))
                    <div class="buttons add-button">
                        <a href="{{ route('role.create') }}" class="btn btn-icon icon-left btn-outline-primary">
                            <i class="bx bx-plus"></i>{{ __('Add New Role') }}</a>
                    </div>
                @endif
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Role Lists') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Role') }}</th>
                                        <th>{{ __('Permissions') }}</th>
                                        @if (hasPermission('role_update') || hasPermission('role_delete'))
                                            <th>{{ __('Options') }}</th>
                                        @endif
                                    </tr>
                                    @foreach ($roles as $key => $role)
                                        <tr id="row_{{ $role->id }}">
                                            <td>{{ $roles->firstItem() + $key }}</td>
                                            <td>{{ $role->name }}</td>
                                            <td>
                                                @if (!empty($role->permissions))
                                                    <label class="label label-default"><span
                                                            class="btn btn-outline-success">{{ count($role->permissions) }}</span></label>
                                                @else
                                                    <label
                                                        class="label label-default"><span>{{ __('No Permission') }}</span></label>
                                                @endif
                                            </td>
                                            <td>
                                                @if (hasPermission('role_update'))
                                                <a href="{{ route('role.edit', $role->id) }}" class="btn btn-outline-secondary btn-circle" data-toggle="tooltip" title="" data-original-title="{{ __('Edit') }}">
                                                    <i class='bx bx-edit'></i></a>
                                                @endif
                                                @if (hasPermission('role_delete'))
                                                <a href="javascript:void(0)" onclick="delete_row('delete/roles/', {{ $role->id }})" class="btn btn-outline-danger btn-circle" data-toggle="tooltip" title=""
                                                   data-original-title="{{ __('Delete') }}"><i class='bx bx-trash'></i></a>
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $roles->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')
