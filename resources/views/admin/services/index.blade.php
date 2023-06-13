@extends('admin.partials.master')
@section('service_active')
    active
@endsection
@section('title')
    {{ __('Services') }}
@endsection
@section('main-content')
<section class="section">
    <div class="section-body ">
        <div class="d-flex justify-content-between">
            <div class="d-block">
                <h2 class="section-title">{{__('All Benefits')}}</h2>
                <p class="section-lead">
                    {{ __('You have total') . ' ' . $services->total() . ' ' . __('Services') }}
                </p>
            </div>
            @if (hasPermission('service_create'))
                @if($services->total() < 4)
                <div class="buttons add-button">
                    <a href="{{ route('services.create') }}" class="btn btn-icon icon-left btn-outline-primary">
                        <i class="bx bx-plus"></i>{{ __('Add Benefit') }}</a>
                </div>
                    @endif
            @endif
        </div>
        <div class="row">
            <div class="col-sm-xs-12 col-md-12">
                <div class="card">
                    <form action="">
                        <div class="card-header input-title">
                            <h4>{{__('Benefits')}}</h4>
                        </div>
                    </form>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-md">
                                <tbody>
                                <tr>
                                    <th>{{__('#')}}</th>
                                    <th>{{__('Title')}}</th>
                                    <th>{{__('Sub Title')}}</th>
                                    <th>{{__('Position')}}</th>
                                    <th>{{__('Image')}}</th>
                                    @if(hasPermission('service_update') || hasPermission('service_delete'))
                                    <th>{{__('Options')}}</th>
                                    @endif
                                </tr>
                                @foreach($services as $key => $service)

                                <tr id="row_{{ $service->id }}" class="table-data-row">
                                    <td>{{ $services->firstItem() + $key }}</td>
                                    <td><div class="ml-1">{{ $service->getTranslation('title',languageCheck()) }}</div></td>
                                    <td><div class="ml-1">{{ $service->getTranslation('sub_title',languageCheck()) }}</div></td>
                                    <td>{{ $service->position }}</td>
                                    <td>
                                        @if(@$service->image['images'] !='' && is_file_exists(@$service->image['images']['image_40x40'],$service->image['images']['storage']))
                                            <img src="{{ get_media(@$service->image['images']['image_40x40'],$service->image['images']['storage'])}}" alt="" id="img_image" class="img-thumbnail site-icon" />
                                        @else
                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{ @$user->first_name }}" id="img_image" class="img-thumbnail site-icon" />
                                        @endif
                                    </td>
                                    <td>
                                        @if(hasPermission('service_update'))
                                        <a href="{{route('services.edit',$service->id)}}" class="btn btn-outline-secondary btn-circle"
                                           data-toggle="tooltip" title=""
                                           data-original-title="{{ __('Edit') }}"><i class="bx bx-edit"></i></a>
                                        @endif
                                        @if(hasPermission('service_delete'))
                                        <a href="javascript:void(0)" onclick="delete_row('delete/services/',{{ $service->id }})"
                                           class="btn btn-outline-danger btn-circle" data-toggle="tooltip"
                                           title=""
                                           data-original-title="{{ __('Delete') }}"><i class="bx bx-trash"></i></a>
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
                            {{ $services->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@include('admin.common.selector-modal')
@endsection
@include('admin.common.delete-ajax')

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush
