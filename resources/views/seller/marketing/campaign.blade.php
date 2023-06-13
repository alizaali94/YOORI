@extends('admin.partials.master')
@section('title')
    {{ __('Campaign') }}
@endsection
@section('marketing_active')
    active
@endsection
@section('campaign')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('All Campaign') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $campaigns->total() . ' ' . __('items') }}
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-xs-12 col-md-12">
                <div class="card">
                    <form action="">
                        <div class="card-header input-title">
                            <h4>{{ __('Campaign') }}</h4>
                        </div>
                    </form>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-md">
                                <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>{{ __('Title') }}</th>
                                    <th>{{ __('Banner') }}</th>
                                    <th>{{ __('Start Date') }}</th>
                                    <th>{{ __('End Date') }}</th>
                                    <th>{{ __('Status') }}</th>
                                    <th>{{ __('Flash Sale') }}</th>
                                    <th>{{ __('Options') }}</th>
                                </tr>
                                @foreach ($campaigns as $key => $value)
                                    <tr id="row_{{ $value->id }}" class="table-data-row">
                                        <td>{{ $campaigns->firstItem() + $key  }}</td>
                                        <td>
                                            {{ $value->getTranslation('title', \App::getLocale()) }}
                                        </td>
                                        <td>
                                            <figure class="">
                                                @if ($value->banner != [] && is_file_exists(@$value->banner['image_40x40'],$value->banner['storage']))
                                                    <img src="{{ get_media($value->banner['image_40x40'],$value->banner['storage']) }}"
                                                         alt="{{ $value->getTranslation('title', \App::getLocale()) }}">
                                                @else
                                                    <img src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                         alt="{{ $value->getTranslation('title', \App::getLocale()) }}">
                                                @endif
                                            </figure>
                                        </td>
                                        <td>{{ $value->start_date != '' ? date('M d, Y h:i a', strtotime($value->start_date)) : '' }}</td>
                                        <td> {{ $value->start_date != '' ? date('M d, Y h:i a', strtotime($value->end_date)) : '' }} </td>
                                        <td>
                                            <label class="custom-switch cursor-not-allowed mt-2">
                                                <input type="checkbox" name="custom-switch-checkbox"
                                                       disabled {{ $value->status == 1 ? 'checked' : '' }}
                                                       class="custom-switch-input">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label class="custom-switch cursor-not-allowed mt-2">
                                                <input type="checkbox" name="custom-switch-checkbox" disabled
                                                       {{ $value->flash_sale == 1 ? 'checked' : '' }} class="custom-switch-input">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                        <td>
                                            <a href="{{ route('seller.add.to.campaign',$value->id) }}"
                                                class="btn btn-outline-primary btn-circle"
                                                data-toggle="tooltip" title="" data-original-title="{{ __('Request Product') }}">
                                                 <i class="bx bx-sync"></i>
                                            </a>
                                            <a href="{{ route('seller.campaign.products',$value->id) }}"
                                                class="btn btn-outline-info btn-circle"
                                                data-toggle="tooltip" title="" data-original-title="{{ __('Campaign Products') }}">
                                                 <i class="bx bx-show"></i>
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer">
                        <nav class="d-inline-block">
                            {{ $campaigns->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')

