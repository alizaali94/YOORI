@extends('admin.partials.master')
@section('title')
    {{ __('Video Shopping') }}
@endsection
@section('video_shopping')
    active
@endsection
@section('video_shopping_menu')
    active
@endsection

@php
    $q              = isset($_GET['q']) ? $_GET['q'] : null;
@endphp

@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('All Videos') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $videos->total() . ' ' . __('videos') }}
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="{{  hasPermission('video_shopping_create') ? 'col-sm-xs-12 col-md-7' : 'col-sm-xs-12 col-md-8 middle' }}">
                <div class="card">
                    <form action="">
                        <div class="card-header input-title">
                            <h4>{{ __('Videos') }}</h4>
                            <div class="card-header-form">
                                <form class="form-inline" id="sorting">
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="q" value="{{ @$q }}"
                                               placeholder="{{ __('Search') }}">
                                        <div class="input-group-btn">
                                            <button class="btn btn-outline-primary"><i class="bx bx-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </form>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-md">
                                <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>{{ __('Title') }}</th>
                                    <th>{{ __('Created By') }}</th>
                                    <th>{{ __('Thumbnail') }}</th>
                                    <th>{{ __('Status') }}</th>
                                    @if (hasPermission('video_shopping_update') || hasPermission('video_shopping_delete'))
                                        <th>{{ __('Options') }}</th>
                                    @endif
                                </tr>
                                @foreach ($videos as $key=>$video)
                                    <tr id="row_{{ $video->id }}" class="table-data-row">
                                        <input type="hidden" value="{{$video->id}}" id="id">
                                        <td>{{ $videos->firstItem() + $key }}</td>
                                        <td>
                                            <div class="ml-1">
                                                <a target="{{ isAppMode() ? '_parent' : '_blank' }}" href="{{ isAppMode() ? '#' : route('video.details',$video->slug) }}">{{$title = $video->getTranslation('title', \App::getLocale()) }}</a>
                                            </div>
                                        </td>
                                        <td>
                                            @if($video->user_id != 1)
                                                @if(isset($video->user))
                                                    {{ $video->user->full_name }}
                                                    @if(isset($video->user->sellerProfile))
                                                        ({{ $video->user->sellerProfile->shop_name }})
                                                    @endif
                                                @endif
                                            @else
                                                <div class="badge badge-warning">{{__('Admin')}}</div>
                                            @endif
                                        </td>
                                        <td>
                                            @if (@$video->thumbnail != [] && @is_file_exists(@$video->thumbnail['image_40x40'], $video->thumbnail['storage']))
                                                <img src="{{ get_media(@$video->thumbnail['image_40x40'], $video->thumbnail['storage']) }}"
                                                     alt="{{ @$video->title }}"
                                                     class="mr-3 rounded">
                                            @else
                                                <img src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                     alt="{{ @$title }}"
                                                     class="mr-3 rounded">
                                            @endif
                                        </td>
                                        <td>
                                            <label class="custom-switch mt-2 {{ hasPermission('video_shopping_update') ? '' : 'cursor-not-allowed' }}">
                                                <input type="checkbox" name="custom-switch-checkbox" value="video-shopping-status-change/{{$video->id}}"
                                                       {{ $video->status == 1 ? 'checked' : '' }} {{  hasPermission('video_shopping_update') ? '' : 'disabled' }} class="{{  hasPermission('video_shopping_update') ? 'status-change' : '' }} custom-switch-input">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                        <td>
                                            @if (hasPermission('video_shopping_update'))
                                                <a href="{{ route('video.shopping.edit',$video->id) }}" class="btn btn-outline-secondary btn-circle" data-url=""data-toggle="tooltip" title="" data-original-title="{{ __('Edit') }}">
                                                    <i class="bx bx-edit"></i>
                                                </a>
                                            @endif
                                            @if (hasPermission('video_shopping_delete'))
                                                <a href="javascript:void(0)"onclick="delete_row('delete/video_shoppings/',{{ $video->id }})"class="btn btn-outline-danger btn-circle" data-toggle="tooltip" title=""data-original-title="{{ __('Delete') }}">
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
                            {{ $videos->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                        </nav>
                    </div>
                </div>
            </div>
            @if (hasPermission('video_shopping_create'))
                <div class="col-sm-xs-12 col-md-5">
                    <div class="card" >
                        <div class="card-header input-title">
                            <h4>{{ __('Add Video') }}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form method="POST" action="{{ route('shopping.video.store') }}" enctype="multipart/form-data">
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
                                    <label for="logo">{{ __('Thumbnail') }} {{__('(299x536)')}}</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-selection="single"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="thumbnail" value="{{ old('thumbnail') !='' ? old('thumbnail') : ''}}" class="image-selected">
                                            <span class="form-control"><span class="counter">{{ old('thumbnail') != '' ? substr_count(old('thumbnail'), ',') + 1  : 0 }}</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selected-media-box">
                                            <div class="mt-4 gallery gallery-md d-flex">
                                                @if(old('thumbnail') != null)
                                                    <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                         data-id="{{ old('thumbnail') }}">
                                                        @php
                                                            $media = \App\Models\Media::find(old('thumbnail'));
                                                        @endphp
                                                        @if(@is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                            <img
                                                                src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
                                                                alt="video-thumbnail"
                                                                class="img-thumbnail logo-profile">
                                                        @else
                                                            <img
                                                                src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                alt="video-thumbnail"
                                                                class="img-thumbnail logo-profile">
                                                        @endif
                                                        <div class="image-remove">
                                                            <a href="javascript:void(0)" class="remove"><i
                                                                    class="bx bx-x"></i></a>
                                                        </div>
                                                    </div>
                                                @else
                                                    <div class="selected-media mr-2 mb-2 mt-3 ml-0">
                                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}" data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                             alt="video-thumbnail" class="img-thumbnail logo-profile">
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="form-control-label">{{ __('Video Type') }}</label>
                                    <div class="custom-file">
                                        <select name="video_type" id="video_type"
                                                class="form-control selectric">
                                            <option {{ old('video_type') == 'youtube' ? 'selected' :  '' }} value="youtube">Youtube </option>
                                            <option {{ old('video_type') == 'embedded_video' ? 'selected' :  '' }} value="embedded_video">Embedded Video </option>
                                            <option {{ old('video_type') == 'mp4' ? 'selected' : '' }} value="mp4">MP4 </option>
                                            <option {{ old('video_type') == 'vimeo' ? 'selected' : '' }} value="vimeo">Vimeo </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="video_url">{{ __('Video URL') }}</label>
                                    <input type="text" name="video_url" id="video_url" value="{{ old('video_url') }}" class="form-control">
                                    @if ($errors->has('video_url'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('video_url') }}</p>
                                        </div>
                                    @endif
                                </div>


                                <div class="form-group">
                                    <label for="">{{ __('Video Section Style') }}</label>
                                    <div class="row gutters-sm imagecheck-margin">
                                        <div class="col-6 col-sm-4">
                                            <label class="imagecheck mb-4">
                                                <input name="style" type="checkbox" value="style_1" data-value="1" class="imagecheck-input" {{ old('style') ? (old('style') == 'style_1' ? 'checked': '') : 'checked' }}/>
                                                <div class="imagecheck-figure theme">
                                                    <img src="{{ static_asset('images/default/video_sec_style_1.png') }}" class="imagecheck-image imagecheck-height" />
                                                </div>
                                            </label>
                                        </div>

                                        <div class="col-6 col-sm-4">
                                            <label class="imagecheck mb-4">
                                                <input name="style" type="checkbox" value="style_2" data-value="3" class="imagecheck-input"
                                                       {{ old('style') ? (old('style') == 'style_2' ? 'checked': '') : '' }} />
                                                <div class="imagecheck-figure theme">
                                                    <img src="{{ static_asset('images/default/video_sec_style_2.png') }}" class="imagecheck-image imagecheck-height" />
                                                </div>
                                            </label>
                                        </div>
                                        <div class="col-6 col-sm-4">
                                            <label class="imagecheck mb-4">
                                                <input name="style" type="checkbox" value="style_3" data-value="3" class="imagecheck-input" @if(old('style') == 'style_3') checked @endif />
                                                <div class="imagecheck-figure theme">
                                                    <img src="{{ static_asset('images/default/video_sec_style_3.png') }}" class="imagecheck-image imagecheck-height" />
                                                </div>
                                            </label>
                                        </div>
                                        <div class="col-6 col-sm-4">
                                            <label class="imagecheck mb-4">
                                                <input name="style" type="checkbox" value="style_4" data-value="4" class="imagecheck-input" @if(old('style') == 'style_4') checked @endif />
                                                <div class="imagecheck-figure theme">
                                                    <img src="{{ static_asset('images/default/video_sec_style_4.png') }}" class="imagecheck-image imagecheck-height" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    @if ($errors->has('style'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('style') }}</p>
                                        </div>
                                    @endif
                                </div>

                                <div class="form-group">
                                    <label for="product_id">{{ __('Product') }}</label>
                                    <select class="product-by-ajax form-control select2" name="product_id[]" id ="product_id" multiple="multiple" aria-hidden="true"
                                            ></select>
                                    @if ($errors->has('product_id'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('product_id') }}</p>
                                        </div>
                                    @endif
                                </div>

                                <div class="form-group row mt-2">
                                    <label class="col-md-5 col-from-label">{{ __('Is Live Video') }}</label>
                                    <div class="col-md-7">
                                        <label class="custom-switch">
                                            <input  type="checkbox" value="1" name="is_live"
                                                    {{ old('is_live') == 1 ? 'checked' : '' }}
                                                    class="custom-switch-input">
                                            <span class="custom-switch-indicator"></span>
                                        </label>
                                        @if ($errors->has('is_live'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('is_live') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group row mt-2">
                                    <label class="col-md-5 col-from-label">{{ __('Enable Related Products Section') }}</label>
                                    <div class="col-md-7">
                                        <label class="custom-switch">
                                            <input  type="checkbox" value="1" name="enable_related_product"
                                                    {{ old('enable_related_product') == 1 ? 'checked' : '' }}
                                                    class="custom-switch-input">
                                            <span class="custom-switch-indicator"></span>
                                        </label>
                                        @if ($errors->has('enable_related_product'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('enable_related_product') }}</p>
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
@include('admin.common.product-by-ajax')

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection

@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush
