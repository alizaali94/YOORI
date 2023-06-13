@extends('admin.partials.master')
@section('video_shopping_config')
    active
@endsection
@section('video_shopping_menu')
    active
@endsection

@section('title')
    {{ __('Video Shopping Config') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Video Shopping Configuration') }}</h2>
            <div id="output-status"></div>
                <div class="col-md-9 middle">
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{ __('Configuration') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md col-9 middle">
                                    <form action="{{ route('admin.preference.setting.update') }}" method="post">
                                        @csrf
                                        @method('put')
                                        <tbody>
                                        @if(settingHelper('seller_system') == 1)
                                            <tr>
                                                <td>{{ __('Seller Video Shopping Activation') }}
{{--                                                    <div class="text-warning">--}}
{{--                                                        {{ __('N.B: Make sure you have activated seller system before activating this.') }}--}}
{{--                                                    </div>--}}
                                                </td>

                                                <td width="300">
                                                    <label class="custom-switch mt-2">
                                                        <input type="checkbox" name="custom-switch-checkbox" value="setting-status-change/{{ 'seller_video_shopping' }}" class="custom-switch-input status-change" {{ settingHelper('seller_video_shopping') == 1 ? 'checked' : ''}} />
                                                        <span class="custom-switch-indicator"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                        @endif
                                        </tbody>
                                    </form>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
@endsection
