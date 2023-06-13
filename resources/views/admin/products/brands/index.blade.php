@extends('admin.partials.master')
@php
    @endphp
@section('title')
    {{ __('Brands Lists') }}
@endsection
@section('product_active')
    active
@endsection
@section('brands')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('All Brands') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $brands->total() . ' ' . __('brands') }}
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="{{  hasPermission('brand_create') ? 'col-sm-xs-12 col-md-7' : 'col-sm-xs-12 col-md-8 middle' }}">
                <div class="card">
                    <form action="">
                        <div class="card-header input-title">
                            <h4>{{ __('Brands') }}</h4>
                        </div>
                    </form>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-md">
                                <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>{{ __('Title') }}</th>
                                    <th>{{ __('Logo') }}</th>
                                    <th>{{ __('Status') }}</th>
                                    @if (hasPermission('brand_update') || hasPermission('brand_delete'))
                                        <th>{{ __('Options') }}</th>
                                    @endif
                                </tr>
                                @foreach ($brands as $key=>$brand)
                                    @php
                                        $title = $brand->getTranslation('title', app()->getLocale())
                                    @endphp
                                    <tr id="row_{{ $brand->id }}" class="table-data-row">
                                        <input type="hidden" value="{{$brand->id}}" id="id">
                                        <td>{{ $brands->firstItem() + $key }}</td>
                                        <td>
                                            <div class="ml-1"><a href="{{ isAppMode() ? '#' : route('brand-by-slug',$brand->slug) }}" target="{{ isAppMode() ? '_parent' : '_blank' }}">{{ $title }}</a></div>
                                        </td>
                                        <td>
                                            @if (@$brand->logo != [] && @is_file_exists(@$brand->logo['image_40x40'], $brand->logo['storage']))
                                                <img src="{{ get_media(@$brand->logo['image_40x40'], $brand->logo['storage']) }}"
                                                     alt="{{ @$brand->title }}"
                                                     class="mr-3 rounded">
                                            @else
                                                <img src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                     alt="{{ @$title }}"
                                                     class="mr-3 rounded">
                                            @endif
                                        </td>
                                        <td>
                                            <label class="custom-switch mt-2 {{ hasPermission('brand_update') ? '' : 'cursor-not-allowed' }}">
                                                <input type="checkbox" name="custom-switch-checkbox" value="brand-status-change/{{$brand->id}}"
                                                       {{ $brand->status == 1 ? 'checked' : '' }} {{  hasPermission('brand_update') ? '' : 'disabled' }} class="{{  hasPermission('brand_update') ? 'status-change' : '' }} custom-switch-input">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                        <td>
                                            @if (hasPermission('brand_update'))
                                            <a href="{{ route('brand.edit',$brand->id) }}" class="btn btn-outline-secondary btn-circle" data-url=""data-toggle="tooltip" title="" data-original-title="{{ __('Edit') }}">
                                                <i class="bx bx-edit"></i>
                                            </a>
                                            @endif
                                            @if (hasPermission('brand_delete'))
                                            <a href="javascript:void(0)"onclick="delete_row('delete/brands/',{{ $brand->id }})" class="btn btn-outline-danger btn-circle" data-toggle="tooltip" title=""data-original-title="{{ __('Delete') }}">
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
                            {{ $brands->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                        </nav>
                    </div>
                </div>
            </div>
            @if (hasPermission('brand_create'))
                <div class="col-sm-xs-12 col-md-5">
                    <div class="card" >
                        <div class="card-header input-title">
                            <h4>{{ __('Add Brand') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form method="POST" action="{{ route('brands.store') }}" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <label for="title">{{ __('Title') }} *</label>
                                    <input type="text" name="title" id="title" value="{{ old('title') }}" class="form-control" required>
                                    @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="slug">{{ __('Slug') }}</label>
                                    <input type="text" name="slug" id="slug" value="{{ old('slug') }}" class="form-control">
                                    @if ($errors->has('slug'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('slug') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="logo">{{ __('Logo') }} {{__('(130x93)')}}</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="logo" value="{{ old('logo') !='' ? old('logo') : ''}}" class="image-selected">
                                            <span class="form-control"><span class="counter">{{ old('logo') != '' ? substr_count(old('logo'), ',') + 1  : 0 }}</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        @if(old('logo') != null)
                                            <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                 data-id="{{ old('logo') }}">
                                                @php
                                                    $media = \App\Models\Media::find(old('logo'));
                                                @endphp
                                                @if(@is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                    <img
                                                        src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
                                                        alt="brand-logo"
                                                        class="img-thumbnail logo-profile">
                                                @else
                                                    <img
                                                        src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                        alt="img-thumbnail"
                                                        class="img-thumbnail logo-profile">
                                                @endif
                                                <div class="image-remove">
                                                    <a href="javascript:void(0)" class="remove"><i
                                                            class="bx bx-x"></i></a>
                                                </div>
                                            </div>
                                        @else
                                        <div class="selected-media-box">
                                            <div class="mt-4 gallery gallery-md d-flex">
                                                <img src="{{ static_asset('images/default/default-image-72x72.png') }}" data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                     alt="brand-logo" class="img-thumbnail logo-profile">
                                            </div>
                                        </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="logo">{{ __('Banner') }} {{__('(835x200)')}}</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="banner" value="{{ old('banner') !='' ? old('banner') : ''}}" class="image-selected">
                                            <span class="form-control"><span class="counter">{{ old('banner') != '' ? substr_count(old('banner'), ',') + 1  : 0 }}</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        @if(old('banner') != null)
                                            <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                 data-id="{{ old('banner') }}">
                                                @php
                                                    $media = \App\Models\Media::find(old('banner'));
                                                @endphp
                                                @if(@is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                    <img
                                                        src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
                                                        alt="img-thumbnail"
                                                        class="img-thumbnail logo-profile">
                                                @else
                                                    <img
                                                        src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                        alt="img-thumbnail"
                                                        class="img-thumbnail logo-profile">
                                                @endif
                                                <div class="image-remove">
                                                    <a href="javascript:void(0)" class="remove"><i
                                                            class="bx bx-x"></i></a>
                                                </div>
                                            </div>
                                        @else
                                        <div class="selected-media-box">
                                            <div class="mt-4 gallery gallery-md d-flex">
                                                <img src="{{ static_asset('images/default/default-image-72x72.png') }}" data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                     alt="brand-logo" class="img-thumbnail logo-profile">
                                            </div>
                                        </div>
                                        @endif
                                    </div>
                                </div>

                                 <div class="form-group">
                                    <label for="meta_title">{{ __('Meta Title') }}</label>
                                    <input type="text" name="meta_title" id="meta_title" value="{{ old('meta_title') }}" class="form-control">
                                    @if ($errors->has('meta_title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('meta_title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="meta_description">{{ __('Meta Description') }}</label>
                                    <textarea class="form-control" name="meta_description" id="meta_description">{{ old('meta_description') }}</textarea>
                                </div>
                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                        {{ __('Save') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </section>
    <!-- Modal -->
@include('admin.common.selector-modal')
@endsection
@include('admin.common.delete-ajax')

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush
