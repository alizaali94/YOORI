@extends('admin.partials.master')
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}" />
@endsection
@section('title')
    {{ __('Ticket Reply') }}
@endsection
@section('tickets')
    active
@endsection
@section('support_active')
    active
@endsection
@section('main-content')
    @php
    $admin_user = App\Models\User::where('user_type','admin')->first();
    @endphp
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('Reply Customer')}}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{route('seller.support')}}" class="btn btn-icon icon-left btn-outline-primary"><i class="bx bx-arrow-back"></i>{{__('Back')}}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 middle">
                    <div class="card">
                        <div class="card-header">
                            <p>{{__('Customer : ')}} {{$support->user->first_name}} {{$support->user->last_name}}</p>
                            <div class="ml-2">
                            <p class="badge badge-inline badge-secondary">{{$support->status}}</p>
                            </div>
                        </div>
                        <form action="{{route('seller.ticket.replay.store')}}" method="POST">
                            @csrf
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="ticket_body">{{__('Ticket Reply')}}</label>
                                    <div class="form-group row mb-12">
                                        <div class="col-sm-12 col-md-12">
                                            <textarea id="replay" name="replay" class="summernote"></textarea>
                                            <input type="hidden" name="support_id" value="{{$support->id}}">
                                            <input type="hidden" name="ticket_id" value="{{$support->ticket_id}}">
                                            <input type="hidden" name="type" value="{{$seller_user->user_type}}">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                        <label for="">{{__('Save as')}}</label>
                                        <select name="status" class="form-control selectric">
                                            <option value="">{{__('Select Status ')}}</option>
                                            <option value="pending" {{$support->status == 'pending' ? 'selected' : ''}}>Pending </option>
                                            <option value="answered" {{$support->status == 'answered' ? 'selected' : ''}}>Answered </option>
                                            <option value="hold" {{$support->status == 'hold' ? 'selected' : ''}}>On Hold</option>
                                            <option value="open" {{$support->status == 'open' ? 'selected' : ''}}>Open</option>
                                            <option value="close" {{$support->status == 'close' ? 'selected' : ''}}>Close</option>
                                        </select>
                                        @if ($errors->has('status'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('status') }}</p>
                                            </div>
                                        @endif
                                </div>
                                <div class="form-group">
                                    <label for="logo">{{ __('File') }}</label>
                                    <div class="form-group">
                                        <div class="input-group gallery-modal" id="btnSubmit"  data-for="all" data-selection="multiple"
                                             data-target="#galleryModal" data-dismiss="modal">
                                            <input type="hidden" name="file" value=""  class="image-selected">
                                            <span class="form-control"><span class="counter">0</span> {{ __('file chosen') }}</span>
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    {{ __('Choose File') }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="selected-media-box">
                                            <div class="mt-4 gallery gallery-md d-flex">
                                                <img src="{{ static_asset('images/default/default-image-72x72.png') }}" data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                     alt="brand-logo" class="img-thumbnail logo-profile">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button class="btn btn-outline-primary">{{__('Reply')}}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-8 middle">
                    @if($support->ticket_body || $support->file)
                        <div class="card customer-chat-clr" >
                            <div class="card-header">
                                <h4>{{ __('Ticket Details') }}</h4>
                            </div>
                            <div class="card-body">
                                <div class="hero px-4 py-2">
                                    <div class="hero-inner">
                                        <h2>{{$support->user->first_name}} {{$support->user->last_name}} ,</h2>
                                        <p class="p-tag">{!! $support->ticket_body !!}</p>
                                        <div class="mt-4">
                                            @foreach($support->file as $file)
                                                <div class="media-title"><a href="#">{{ $file['file_type'] == "image" ? $file_name = str_replace('images/','',$file['original_image']) : $file_name = str_replace('files/','',$file['original_file']) }}</a></div>
                                                <div class="text-small text-muted">
                                                    <a target="_blank" href="{{ $file['file_type'] == "image" ? get_media($file['original_image'], $file['storage']) : get_media($file['original_file'], $file['storage']) }}"
                                                       download="{{ $file_name }}"><i class='bx bx-download'></i> {{ __('Download') }}</a> <div class="bullet"></div></div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif
                    @foreach($replays as $replay)
                            @if(!blank($replay->replay) or !blank($replay->file))
                            @if(!blank($replay) && $replay->type == 'admin')
                            <div class="card admin-chat-clr">
                                <div class="card-header justify-content-between">
                                    <h4>{{__('Admin')}}</h4>
                                    @if(hasPermission('support_update') || hasPermission('support_delete'))
                                    <a href="javascript:void(0)" data-toggle="dropdown" class="" title="" data-original-title="{{ __('Options') }}">
                                        <i class='bx bx-dots-vertical-rounded'></i>
                                    </a>
                                    @endif
                                    <div class="dropdown-menu">
                                        @if(hasPermission('support_update'))
                                            <a href="{{route('ticket.replay.edit',$replay->id,$support->support_id)}}" class="dropdown-item has-icon"><i class="bx bx-edit"></i> {{ __('Edit') }}</a>
                                        @endif
                                        @if(hasPermission('support_delete'))
                                        <a href="javascript:void(0)" onclick="delete_row('delete/ticket_replays/',{{$replay->id}})" class="dropdown-item has-icon"><i class="bx bx-trash"></i> {{ __('Delete') }}</a>
                                        @endif

                                    </div>
                                </div>

                                <div class="card-body chat-content">
                                    <div class="hero pb-2">
                                        <div class="">
                                                <div class="chat-item chat-left chat-item-margin">

                                                    <img class="chat-imag rounded-circle" src="{{static_asset($admin_user->images !=null ? $admin_user->images['image_40x40'] : 'images/default/user45x45.jpg')}}" />
                                                    <div class="chat-details">
                                                        @if(!blank($replay->replay))
                                                            <div class="chat-text">
                                                                <p class="chat-text-ptag">{!! !blank($replay->replay) ? $replay->replay : '' !!}</p>
                                                            </div>
                                                        @endif
                                                        @if(!blank($replay->file))
                                                            <div class="summary-item">
                                                                <ul class="list-unstyled list-unstyled-border">
                                                                    <li class="media">
                                                                        <div class="media-body">
                                                                            @foreach($replay->file as $file)
                                                                                <div class="media-title"><a href="#">{{ $file['file_type'] == "image" ? $file_name = str_replace('images/','',$file['original_image']) : $file_name = str_replace('files/','',$file['original_file']) }}</a></div>
                                                                                <div class="text-small text-muted">
                                                                                    <a target="_blank" href="{{ $file['file_type'] == "image" ? get_media($file['original_image'], $file['storage']) : get_media($file['original_file'], $file['storage']) }}"
                                                                                       download="{{ $file_name }}"><i class='bx bx-download'></i> {{ __('Download') }}</a> <div class="bullet"></div></div>
                                                                            @endforeach
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        @endif
                                                        <div class="chat-time chat-time-fx">{{ !blank($replay->created_at) ? \Carbon\Carbon::parse($replay->created_at)->isoFormat('MMM Do YY, h:mm a') : ''}}</div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                @else
                                <div class="card customer-chat-clr" >
                                    <div class="card-header ticket-reply-header" >
                                        <h4 >{{$support->user->first_name}} {{$support->user->last_name}}</h4>
                                        <p class="ticket-reply-header-p">{{$support->user->user_type}}</p>
                                    </div>
                                    <div class="card-body chat-content">
                                        <div class="hero pb-2">
                                            <div class="">
                                                <div class="chat-item chat-left chat-item-margin">
                                                    <img class="chat-imag rounded-circle" src="{{static_asset($support->user->images !=null ? $support->user->images['image_40x40'] : 'images/default/user45x45.jpg')}}" />
                                                    <div class="chat-details">
                                                        @if(!blank($replay->replay))
                                                            <div class="chat-text">{!! !blank($replay->replay) ? $replay->replay : '' !!}</div>
                                                        @endif
                                                        @if(!blank($replay->file))
                                                            <div class="summary-item">
                                                                <ul class="list-unstyled list-unstyled-border">
                                                                    <li class="media">
                                                                        <div class="media-body">
                                                                            @foreach($replay->file as $file)
                                                                                <div class="media-title"><a href="#">{{ $file['file_type'] == "image" ? $file_name = str_replace('images/','',$file['original_image']) : $file_name = str_replace('files/','',$file['original_file']) }}</a></div>
                                                                                <div class="text-small text-muted">
                                                                                    <a target="_blank" href="{{ $file['file_type'] == "image" ? get_media($file['original_image'], $file['storage']) : get_media($file['original_file'], $file['storage']) }}"
                                                                                       download="{{ $file_name }}"><i class='bx bx-download'></i> {{ __('Download') }}</a> <div class="bullet"></div></div>
                                                                            @endforeach
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        @endif
                                                        <div class="chat-time chat-time-fx">{{ !blank($replay->created_at) ? \Carbon\Carbon::parse($replay->created_at)->isoFormat('MMM Do YY, h:mm a') : ''}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                         @endif
                         @endif
                    @endforeach
                </div>
            </div>
        </div>
    </section>
@include('admin.common.delete-ajax')
 @include('admin.common.selector-modal')
@endsection
@push('page-script')
    <script src="{{ static_asset('admin/js/summernote-bs4.js') }}"></script>
@endpush

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush
