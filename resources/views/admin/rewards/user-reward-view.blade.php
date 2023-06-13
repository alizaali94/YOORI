@extends('admin.partials.master')

@section('title')
    {{ __('Reward Details') }}
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
                    <h2 class="section-title">{{ __('Reward Details') }}</h2>
                </div>
                    <div class="buttons add-button">
                        <a href="{{route('user.rewards')}}" class="btn btn-icon icon-left btn-outline-primary">
                            <i class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                    </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Details') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Product Name') }}</th>
                                        <th>{{ __('Earned At') }}</th>
                                        <th>{{ __('Points') }}</th>

                                    </tr>
                                    @foreach($rewards as $key => $reward)
                                        <tr>
                                            <td>{{$key+1}}</td>
                                            <td>{{$reward->product->getTranslation('name',\App::getLocale())}}</td>
                                            <td>{{\Carbon\Carbon::parse($reward->created_at)->toFormattedDateString()}}</td>
                                            <td>{{$reward->reward}}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $rewards->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
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

