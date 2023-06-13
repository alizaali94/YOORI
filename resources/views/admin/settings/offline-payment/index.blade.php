@extends('admin.partials.master')
@section('title')
    {{ __('Offline Payment Methods') }}
@endsection
@section('offline_payment')
    active
@endsection
@section('offline_payment_methods')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('All Offline Payment Methods') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $methods->total() . ' ' . __('Methods') }}
                    </p>
                </div>
                @if(hasPermission('offline_payment_create'))
                    <div class="buttons add-button">
                        <a href="{{ route('offline.payment.method.create') }}" class="btn btn-icon icon-left btn-outline-primary">
                            <i class="bx bx-plus"></i>{{ __('Add Method') }}</a>
                    </div>
                @endif
            </div>
        </div>
        <div class="row">
            <div class="col-sm-xs-12 col-md-12">
                <div class="card">
                    <form action="">
                        <div class="card-header input-title">
                            <h4>{{ __('Methods') }}</h4>
                        </div>
                    </form>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-md">
                                <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>{{ __('Thumbnail') }}</th>
                                    <th>{{ __('Type') }}</th>
                                    <th>{{ __('Name') }}</th>
                                    <th>{{ __('Status') }}</th>
                                    @if(hasPermission('offline_payment_update') || hasPermission('offline_payment_delete') )
                                        <th>{{ __('Options') }}</th>
                                    @endif
                                </tr>
                                @foreach ($methods as $key => $method)
                                    <tr id="row_{{ $method->id }}" class="table-data-row">
                                        <td>{{ $methods->firstItem() + $key  }}</td>
                                        <td>
                                            <figure class="">
                                                @if ($method->thumbnail != [] && is_file_exists($method->thumbnail['image_40x40'],$method->thumbnail['storage']))
                                                    <img src="{{ get_media($method->thumbnail['image_40x40'],$method->thumbnail['storage']) }}"
                                                         alt="{{ $method->getTranslation('title', \App::getLocale()) }}">
                                                @else
                                                    <img src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                         alt="{{ $method->getTranslation('title', \App::getLocale()) }}">
                                                @endif
                                            </figure>
                                        </td>
                                        <td>
                                            {{ __($method->type) }}
                                        </td>
                                        <td>
                                            {{ $method->getTranslation('name', \App::getLocale()) }}
                                        </td>
                                        <td><label class="custom-switch mt-2 {{ hasPermission('offline_payment_update') ? '' : 'cursor-not-allowed' }}">
                                                <input type="checkbox" name="custom-switch-checkbox"
                                                       value="offline-method-status-change/{{$method->id}}"
                                                       {{ hasPermission('offline_payment_update') ? '' : 'disabled' }}
                                                       {{ $method->status == 1 ? 'checked' : '' }} class="{{ hasPermission('offline_payment_update') ? 'status-change' : '' }} custom-switch-input">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                        <td>
                                            @if(hasPermission('offline_payment_update'))
                                                <a href="{{ route('offline.payment.method.edit',$method->id) }}"
                                                   class="btn btn-outline-secondary btn-circle"
                                                   data-toggle="tooltip" title="" data-original-title="{{ __('Edit') }}">
                                                    <i class="bx bx-edit"></i>
                                                </a>
                                            @endif
                                            @if(hasPermission('offline_payment_delete'))
                                                <a href="javascript:void(0)"
                                                   onclick="delete_row('delete/offline_methods/',{{ $method->id }})"
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
                            {{ $methods->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')

