@extends('admin.partials.master')

@section('title')
    {{ __('User Rewards List') }}
@endsection
@section('reward_system')
    active
@endsection
@section('user_rewards')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Users Reward List') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $reward_users->total() . ' ' . __('Reward Users') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Users') }}</h4>
                            <div class="card-header-form">

                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Customer Name') }}</th>
                                        <th>{{ __('Points') }}</th>
                                        <th>{{ __('Last Uses') }}</th>
                                        <th>{{ __('Earned At') }}</th>
                                        @if(hasPermission('user_reward_update'))
                                        <th>{{ __('Statement') }}</th>
                                        @endif
                                    </tr>
                                    @foreach($reward_users as $key => $reward)
                                        <tr id="">
                                            <td>{{$key+1}}</td>
                                            <td>
                                                <a href="#"
                                                   class="modal-menu"
                                                   data-title="{{__('Profile')}}"
                                                   data-url="{{ route('edit-info', ['page_name' => 'customer-profile', 'param1' => $reward->user_id]) }}"
                                                   data-toggle="modal" data-target="#common-modal">
                                                    {{$reward->user ? $reward->user->full_name : ''}}
                                                </a>
                                            </td>
                                            <td>{{$reward->rewards}}</td>
                                            <td>{{\Carbon\Carbon::parse($reward->last_converted)->toFormattedDateString()}}</td>
                                            <td>{{\Carbon\Carbon::parse($reward->created_at)->toFormattedDateString()}}</td>
                                            <td>
                                            @if(hasPermission('user_reward_update'))
                                                <a href="{{route('user.reward.view',$reward->id)}}" type="button" class="btn btn-sm btn-outline-info"><i class="bx bxs-show"></i></a>
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
                                {{ $reward_users->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
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
