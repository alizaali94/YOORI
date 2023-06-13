@extends('admin.partials.master')
@section('title')
    {{ __('Mobile Apps') }}
@endsection
@section('mobile_apps')
    active
@endsection
@section('mobile_slider_active')
    active
@endsection
@section('mobile_slider_settings')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Mobile Apps') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.mobile-apps.sidebar')
                <div class="col-md-9 col-sm">
                    <div class="d-flex justify-content-between">
                        <div class="d-block">
                            <h2 class="section-title">{{__('All Sliders')}}</h2>
                            <p class="section-lead">
                                {{ __('You have total') . ' ' . $sliders->total() . ' ' . __('Sliders') }}
                            </p>
                        </div>
                        @if (hasPermission('slider_create'))
                            <div class="buttons add-button">
                                <a href="{{ route('create.mobile.slider') }}"
                                   class="btn btn-icon icon-left btn-outline-primary">
                                    <i class="bx bx-plus"></i>{{ __('Add Slider') }}</a>
                            </div>
                        @endif
                    </div>
                    <div class="row">
                        <div class="col-sm-xs-12 col-md-12">
                            <div class="card">
                                <form action="">
                                    <div class="card-header input-title">
                                        <h4>{{__('Sliders')}}</h4>
                                    </div>
                                </form>
                                <div class="card-body p-0">
                                    <div class="table-responsive">
                                        <table class="table table-striped table-md">
                                            <tbody>
                                            <tr>
                                                <th>{{__('#')}}</th>
                                                <th>{{__('Order')}}</th>
                                                <th>{{__('Action Type')}}</th>
                                                <th>{{__('Background')}}</th>
                                                <th>{{ __('Status') }}</th>
                                                @if (hasPermission('slider_update') || hasPermission('slider_delete'))
                                                    <th>{{__('Options')}}</th>
                                                @endif
                                                </tr>
                                            @foreach($sliders as $key => $slider)
                                                <tr id="row_{{ $slider->id }}" class="table-data-row">
                                                    <td>{{ $sliders->firstItem() + $key }}</td>
                                                    <td>{{ $slider->order }}</td>
                                                    <td class="text-capitalize">{{ $slider->action_type }}</td>
                                                    <td>
                                                        @if ($slider->bg_image_id && array_key_exists('image_40x40',$slider->bg_image) && @is_file_exists($slider->bg_image['image_40x40'], $slider->bg_image['storage']))
                                                            <img
                                                                src="{{ get_media($slider->bg_image['image_40x40'], $slider->bg_image['storage']) }}"
                                                                alt="{{ @$slider->title }}"
                                                                class="mr-3 rounded">
                                                        @else
                                                            <img
                                                                src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                                alt="{{ @$title }}"
                                                                class="mr-3 rounded">
                                                        @endif
                                                    </td>

                                                    <td>
                                                        <label
                                                            class="custom-switch mt-2 {{ hasPermission('slider_update') ? '' : 'cursor-not-allowed' }}">
                                                            <input type="checkbox" name="custom-switch-checkbox"
                                                                   value="slider-status-change/{{$slider->id}}"
                                                                   {{ $slider->status == 1 ? 'checked' : '' }} {{  hasPermission('slider_update') ? '' : 'disabled' }} class="{{  hasPermission('slider_update') ? 'status-change' : '' }} custom-switch-input">
                                                            <span class="custom-switch-indicator"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        @if(hasPermission('slider_update'))
                                                            <a href="{{route('edit.mobile.slider',$slider->id)}}"
                                                               class="btn btn-outline-secondary btn-circle"
                                                               data-toggle="tooltip" title=""
                                                               data-original-title="{{ __('Edit') }}"><i
                                                                    class="bx bx-edit"></i></a>
                                                        @endif
                                                        @if(hasPermission('slider_delete'))
                                                            <a href="javascript:void(0)"
                                                               onclick="delete_row('delete/sliders/',{{ $slider->id }})"
                                                               class="btn btn-outline-danger btn-circle"
                                                               data-toggle="tooltip"
                                                               title=""
                                                               data-original-title="{{ __('Delete') }}"><i
                                                                    class="bx bx-trash"></i></a>
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
                                        {{ $sliders->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')
