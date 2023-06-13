@extends('admin.partials.master')

@section('title')
    {{ __('Staff Lists') }}
@endsection
@section('staff_active')
    active
@endsection
@section('staffs')
    active
@endsection
@php
    if(isset($_GET['q'])){
        $q          = $_GET['q'];
    }
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Staff Lists') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $users->total() . ' ' . __('Staffs') }}
                    </p>
                </div>
                @if(hasPermission('staff_create'))
                    <div class="buttons add-button">
                        <a href="{{ route('staffs.create') }}" class="btn btn-icon icon-left btn-outline-primary">
                            <i class="bx bx-plus"></i>{{ __('Add Staff') }}</a>
                    </div>
                @endif
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Staffs') }}</h4>
                            <div class="card-header-form">
                                <form class="form-inline" id="sorting">
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="q" value="{{ @$q }}"
                                               placeholder="{{ __('Search') }}">
                                        <div class="input-group-btn">
                                            <button class="btn btn-outline-primary"><i class="bx bx-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>{{ __('#') }}</th>
                                        <th>{{ __('Name') }}</th>
                                        <th>{{ __('Phone') }}</th>
                                        <th>{{ __('Last Login') }}</th>
                                        <th>{{ __('Role') }}</th>
                                        <th>{{ __('Status') }}</th>
                                        <th>{{ __('Balance') }}</th>
                                        @if (hasPermission('staff_update') || hasPermission('staff_delete') || hasPermission('staff_ban'))
                                            <th>{{ __('Options') }}</th>
                                        @endif
                                    </tr>
                                    @foreach ($users as $key => $user)
                                        <tr id="row_{{$user->id}}">
                                            <td>{{ $users->firstItem() + $key }}</td>
                                            <td width="300">
                                                <div class="d-flex">
                                                    <figure class="avatar mr-2">
                                                        @if ($user->images != [] && @is_file_exists($user->images['image_40x40']))
                                                            <img src="{{ static_asset($user->images['image_40x40']) }}"
                                                                 alt="{{ $user->first_name }}">
                                                        @else
                                                            <img
                                                                src="{{ static_asset('images/default/user40x40.jpg') }}"
                                                                alt="{{ $user->first_name }}">
                                                        @endif
                                                        @if(\Illuminate\Support\Facades\Cache::has('user-is-online-' . $user->id))
                                                            <i class="avatar-presence online"></i>
                                                        @else
                                                                <i class="avatar-presence offline"></i>
                                                        @endif
                                                    </figure>
                                                    <div class="ml-1">
                                                        {{ $user->first_name . ' ' . $user->last_name }}<br/>
                                                        <i class='bx bx-check-circle
                                                            {{ \Cartalyst\Sentinel\Laravel\Facades\Activation::completed($user) == true ? "text-success" : "text-warning" }} '>
                                                        </i>
                                                        {{ isDemoServer() ? emailAddressMask($user->email) : $user->email }}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{{ isDemoServer() ? Str::of($user->phone)->mask('*', 0, strlen($user->phone)-3) : $user->phone }}</td>
                                            <td>{{ $user->last_login != '' ? date('M d, Y h:i a', strtotime($user->last_login)) : '' }}</td>
                                            <td>{{ @$user->role->name }}</td>
                                            <td>
                                                @if($user->is_user_banned == 1)
                                                    <div class="d-flex">
                                                        <div
                                                            class="ml-1 badge badge-pill badge-danger">{{ __('Banned') }}</div>
                                                    </div>
                                                @else
                                                    <label class="custom-switch mt-2 {{ hasPermission('staff_update') ? '' : 'cursor-not-allowed' }}">
                                                        <input type="checkbox" name="custom-switch-checkbox"
                                                               value="customer-status-change/{{$user->id}}"
                                                               {{ $user->status == 1 ? 'checked' : '' }}  {{ hasPermission('staff_update') ? '' : 'disabled'}} class="{{ hasPermission('staff_update') ? 'status-change' : '' }} custom-switch-input">
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                @endif
                                            </td>
                                            <td>{{ get_price($user->balance) }}</td>
                                            <td>
                                                @if (hasPermission('staff_update'))
                                                    <a href="{{ route('staffs.edit', $user->id) }}"
                                                       class="btn btn-outline-secondary btn-circle"
                                                       data-toggle="tooltip" title=""
                                                       data-original-title="{{ __('Edit') }}"><i class="bx bx-edit"></i>
                                                    </a>
                                                @endif
                                                <a href="javaScript:void(0)" data-toggle="dropdown"
                                                   class="btn btn-outline-secondary btn-circle" title=""
                                                   data-original-title="{{ __('Options') }}">
                                                    <i class='bx bx-dots-vertical-rounded'></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                    @if(hasPermission('staff_ban'))
                                                        @if($user->is_user_banned == 0)
                                                            <a href="{{ route('user.ban', $user->id) }}"
                                                               class="dropdown-item has-icon"><i
                                                                    class='bx bx-lock'></i>{{ __('Ban This staff') }}</a>
                                                        @else
                                                            <a href="{{ route('user.ban', $user->id) }}"
                                                               class="dropdown-item has-icon"><i
                                                                    class='bx bx-lock-open'></i>{{ __('Unban This staff') }}
                                                            </a>
                                                        @endif
                                                    @endif
                                                    @if (hasPermission('staff_update'))
                                                        @if(\Cartalyst\Sentinel\Laravel\Facades\Activation::completed($user) == true)
                                                            <a href="{{ route('staff.email.verify', $user->id) }}"
                                                               class="dropdown-item has-icon"><i
                                                                    class='bx bx-x-circle'></i>{{ __('Unverify Account') }}
                                                            </a>
                                                        @else
                                                            <a href="{{ route('staff.email.verify', $user->id) }}"
                                                               class="dropdown-item has-icon"><i
                                                                    class='bx bx-check-circle'></i>{{ __('Verify Account') }}
                                                            </a>
                                                        @endif
                                                    @endif
                                                    <a href="javascript:void(0)"
                                                       data-title="{{__('Account Deposit')}}"
                                                       data-url="{{ route('edit-info', ['page_name' => 'collection-form-staff', 'param1' => $user->id]) }}"
                                                       data-toggle="modal" data-target="#common-modal"
                                                       class="dropdown-item has-icon modal-menu"><i
                                                            class='bx bx-collection' ></i>{{ __('Account Deposit') }}
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $users->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')
@include('admin.common.common-modal')

