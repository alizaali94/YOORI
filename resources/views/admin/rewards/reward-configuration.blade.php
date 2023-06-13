@extends('admin.partials.master')
@section('reward_system')
    active
@endsection
@section('reward_config')
    active
@endsection
@section('title')
    {{ __('Reward Configuration') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('Reward Configuration')}}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{__('Set Reward')}}</h4>
                        </div>
                        @if(hasPermission('reward_configuration_update'))
                        <form method="POST" action="{{route('store.reward.config')}}">
                            @csrf
                        @endif
                            <div class="card-body">
                                <div class="form">
                                    <div class="form-group">
                                        <label for="set_reward" class="form-control-label">{{ __('Set Reward') }}<small>({{ '1 USD = ?' }}) * </small></label>
                                        <input type="number" value="{{settingHelper('reward_convert_rate')}}" class="form-control" placeholder="{{__('Set Reward Points')}}" name="reward_convert_rate" id="set_reward" />
                                    </div>
                                    @if ($errors->has('set_reward'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('set_reward') }}</p>
                                        </div>
                                    @endif
                                </div>
                                @if(hasPermission('reward_configuration_update'))
                                <div class="text-right">
                                    <button type="submit" class="btn btn-outline-primary" >{{__('Update')}}</button>
                                </div>
                                @endif
                            </div>
                        @if(hasPermission('reward_configuration_update'))
                        </form>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection


