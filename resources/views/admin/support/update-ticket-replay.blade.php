@extends('admin.partials.master')
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}" />
@endsection
@section('title')
    {{ __('Update Reply') }}
@endsection
@section('tickets')
    active
@endsection
@section('support_active')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('Update Reply')}}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{route('ticket.replay',$ticket_replay_update->support_id)}}" class="btn btn-icon icon-left btn-outline-primary"><i class="bx bx-arrow-back"></i>{{__('Back')}}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 middle">
                    <div class="card">
                        <form action="{{route('ticket.replay.update')}}" method="POST">
                            @csrf @method('put')
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="ticket_body">{{__('Ticket Reply')}}</label>
                                    <div class="form-group row mb-12">
                                        <div class="col-sm-12 col-md-12">
                                            <textarea id="replay" name="replay" value="{{$ticket_replay_update->replay}}" class="summernote">{{$ticket_replay_update->replay}}</textarea>
                                            <input type="hidden" name="id" value="{{$ticket_replay_update->id}}" />
                                            <input type="hidden" name="support_id" value="{{$ticket_replay_update->support_id}}" />
                                            <input type="hidden" name="ticket_id" value="{{$ticket_replay_update->ticket_id}}" />
                                            <input type="hidden" name="type" value="{{$ticket_replay_update->type}}" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="logo">{{ __('File') }}</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit" data-for="all" data-selection="multiple" data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="file" value="{{ old('file') !='' ? old('file') :  $ticket_replay_update->file_id}}" class="image-selected" />
                                            <span class="form-control"><span class="counter">
                                                    {{ old('file') != '' ? substr_count(old('file'), ',') + 1  : ($ticket_replay_update->file_id != '' ? substr_count($ticket_replay_update->file_id, ',') + 1 : 0) }}
                                                </span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selected-media mr-2 mb-2 mt-3 ml-0">
                                            <div class="selected-media-box">
                                                <div class="mt-2 gallery gallery-md d-flex">
                                                    @php
                                                        $image_ids = old('file') ? explode(',', old('file')) : explode(',', $ticket_replay_update->file_id);
                                                        $images = \App\Models\Media::find($image_ids);
                                                    @endphp
                                                    @foreach($images as $key =>$media)
                                                        @if(!blank($media) and $media->type == 'image')

                                                        <div class="selected-media mr-2 mb-2 mt-3 ml-0" data-id="{{ $media->id }}">
                                                            @if(@is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                                <img src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}" alt="gallery_{{$key}}" class="img-thumbnail logo-profile" />
                                                            @else
                                                                <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="gallery_{{$key}}" class="img-thumbnail logo-profile" />
                                                            @endif
                                                            <div class="image-remove">
                                                                <a href="javascript:void(0)" class="remove"><i class="bx bx-x"></i></a>
                                                            </div>
                                                        </div>
                                                    @elseif(!blank($media) and $media->type == 'pdf')
                                                        <div class="selected-media mr-2 mb-2 mt-3 ml-0">
                                                            <img src="{{ static_asset('images/default/default-'.$media->type.'-72x72.png') }}" alt="default-{{ $media->type }}" class="img-thumbnail logo-profile" />
                                                            <div class="image-remove">
                                                                <a href="javascript:void(0)" class="remove"><i class="bx bx-x"></i></a>
                                                            </div>
                                                        </div>
                                                    @endif
                                                    @endforeach
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button class="btn btn-outline-primary">{{__('Update')}}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    @include('admin.common.selector-modal') @endsection @push('page-script')
    <script src="{{ static_asset('admin/js/summernote-bs4.js') }}"></script>
@endpush @section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}" />
@endsection @push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush
