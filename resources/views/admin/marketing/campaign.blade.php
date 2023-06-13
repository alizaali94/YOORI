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
                        {{ __('You have total') . ' ' . $campaigns->total() . ' ' . __('campaigns') }}
                    </p>
                </div>
                @if(hasPermission('campaign_create'))
                <div class="buttons add-button">
                    <a href="{{ route('campaign.create') }}" class="btn btn-icon icon-left btn-outline-primary">
                        <i class="bx bx-plus"></i>{{ __('Add Campaign') }}</a>
                </div>
                @endif
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
                                    <th>{{ __('Featured') }}</th>
                                    <th>{{ __('Flash Sale') }}</th>
                                    @if(hasPermission('campaign_update') || hasPermission('campaign_delete') || hasPermission('campaign_product_read'))
                                    <th>{{ __('Options') }}</th>
                                    @endif
                                </tr>
                                @foreach ($campaigns as $key => $value)

                                    <tr id="row_{{ $value->id }}" class="table-data-row">
                                        <td>{{ $campaigns->firstItem() + $key  }}</td>
                                        <td>
                                            <a href="{{ isAppMode() ? '#' : route('campaign.details',$value->slug) }}" target="{{isAppMode() ? '_parent' : '_blank'}}">{{ $value->getTranslation('title', \App::getLocale()) }}</a>
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
                                        <td><label class="custom-switch mt-2 {{ hasPermission('campaign_update') ? '' : 'cursor-not-allowed' }}">
                                                <input type="checkbox" name="custom-switch-checkbox"
                                                       value="campaign-status-change/{{$value->id}}"
                                                       {{ hasPermission('campaign_update') ? '' : 'disabled' }}
                                                       {{ $value->status == 1 ? 'checked' : '' }} class="{{ hasPermission('campaign_update') ? 'status-change' : '' }} custom-switch-input">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                        <td><label class="custom-switch mt-2 {{ hasPermission('campaign_update') ? '' : 'cursor-not-allowed' }}">
                                                <input type="checkbox" name="custom-switch-checkbox"
                                                       value="campaign-featured-change/{{$value->id}}"
                                                       {{ hasPermission('campaign_update') ? '' : 'disabled' }}
                                                       {{ $value->featured == 1 ? 'checked' : '' }} class="{{ hasPermission('campaign_update') ? 'status-change' : '' }} custom-switch-input">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                        <td><label class="custom-switch mt-2 {{ hasPermission('campaign_update') ? '' : 'cursor-not-allowed' }}">
                                                <input type="checkbox" name="custom-switch-checkbox"
                                                       value="campaign-flash-sale-change/{{$value->id}}"
                                                       {{ hasPermission('campaign_update') ? '' : 'disabled' }}
                                                       {{ $value->flash_sale == 1 ? 'checked' : '' }} class="{{ hasPermission('campaign_update') ? 'status-change' : '' }} custom-switch-input">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                        <td>
                                            @if(hasPermission('campaign_product_read'))
                                            <a href="{{ route('campaign.product.requests',$value->id) }}"
                                                class="btn btn-outline-primary btn-circle"
                                                data-toggle="tooltip" title="" data-original-title="{{ __('Campaign Request') }}">
                                                 <i class="bx bx-sync"></i>
                                             </a>
                                             <a href="{{ route('campaign.products',$value->id) }}"
                                                class="btn btn-outline-info btn-circle"
                                                data-toggle="tooltip" title="" data-original-title="{{ __('Products') }}">
                                                 <i class="bx bx-show"></i>
                                             </a>
                                            @endif
                                            @if(hasPermission('campaign_update'))
                                            <a href="{{ route('campaign.edit',$value->id) }}"
                                                class="btn btn-outline-secondary btn-circle"
                                                data-toggle="tooltip" title="" data-original-title="{{ __('Edit') }}">
                                                 <i class="bx bx-edit"></i>
                                             </a>
                                            @endif
                                            @if(hasPermission('campaign_delete'))
                                            <a href="javascript:void(0)"
                                                onclick="delete_row('delete/campaigns/',{{ $value->id }})"
                                                class="btn btn-outline-danger btn-circle" data-toggle="tooltip" title=""
                                                data-original-title="{{ __('Delete') }}">
                                                    <i class='bx bx-trash'></i>
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
                            {{ $campaigns->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')

