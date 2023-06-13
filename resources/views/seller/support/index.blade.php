@extends('admin.partials.master')

@section('title')
    {{ __('Ticket Lists') }}
@endsection
@section('tickets')
    active
@endsection
@section('tickets_active')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('Tickets')}}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{route('seller.create.support')}}" class="btn btn-icon icon-left btn-outline-primary">
                        <i class="bx bx-plus"></i>{{__('Add New Ticket')}} </a>
                </div>
            </div>
            @php
                $total         = App\Models\Support::where('user_id',$id)->count();
                $close         = App\Models\Support::where('status','close')->where('user_id',$id)->count();
                $answered      = App\Models\Support::where('status','answered')->where('user_id',$id)->count();
                $pending       = App\Models\Support::where('status','pending')->where('user_id',$id)->count();
                $hold          = App\Models\Support::where('status','hold')->where('user_id',$id)->count();
                $open          = App\Models\Support::where('status','open')->where('user_id',$id)->count();

            @endphp
            <div class="row">
                <div class="col-12">
                    <div class="card mb-0">
                        <div class="card-body">
                            <form id="my_form" method="get" action="">
                                <ul class="nav nav-pills">
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === null  ? 'active' : '' }}" href="{{route('seller.support')}}">{{__('All')}} <span class="badge badge-primary">{{$total}}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === 'open' ? 'active' : '' }}" href="{{route('seller.support','open')}}">{{__('Open')}} <span class="badge badge-primary">{{$open}}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === 'answered' ? 'active' : '' }}" href="{{route('seller.support','answered')}}">{{__('Answered')}} <span class="badge badge-primary">{{$answered}}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === 'pending' ? 'active' : '' }}" href="{{route('seller.support','pending')}}">{{__('Pending')}} <span class="badge badge-primary">{{$pending}}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link  {{ $status === 'close' ? 'active' : '' }}" href="{{route('seller.support','close')}}">{{__('Close')}} <span class="badge badge-primary">{{$close}}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === 'hold' ? 'active' : '' }}" href="{{route('seller.support','hold')}}">{{__('On Hold')}} <span class="badge badge-primary">{{$hold}}</span></a>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{__('Ticket Summary ')}}</h4>
                            <div class="card-header-form">
                                <form class="form-inline" id="sorting">
                                    <div class="input-group">
                                        <input type="text" name="q" class="form-control" placeholder="{{__('Search')}}">
                                        <div class="input-group-btn">
                                            <button class="btn btn-outline-primary  btn-sm"><i class="bx bx-search"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{__('Subject')}}</th>
                                        <th>{{__('Department')}}</th>
                                        <th>{{__('Contact')}}</th>
                                        <th>{{__('Status')}}</th>
                                        <th>{{__('Priority')}}</th>
                                        <th>{{__('Last Replay')}}</th>
                                        <th>{{__('Sending Date')}}</th>
                                        <th>{{__('Replay')}}</th>
                                    </tr>

                                    @foreach($supports as $key => $support)
                                    <tr id="row_{{$support->id}}">
                                        @php
                                            $support->supportDepartment
                                        @endphp
                                        <td>{{$key+1}}</td>
                                        <td>{{$support->subject}}</td>

                                        <td>{{ $support->supportDepartment != null ? $support->supportDepartment->getTranslation('title', \App::getLocale()) : ''}}</td>
                                        <td>
                                            {{$support->user->first_name}} {{$support->user->last_name}} ({{$support->user->phone}})
                                        </td>
                                        <td>
                                            @if($support->status == 'pending')
                                            <div class="badge badge-danger">Pending</div>
                                            @elseif($support->status == 'answered')
                                                <div class="badge badge-info">Answered</div>
                                            @elseif($support->status == 'hold')
                                            <div class="badge badge-warning">On Hold</div>
                                            @elseif($support->status == 'close')
                                            <div class="badge badge-success">Close</div>
                                            @elseif($support->status == 'open')
                                                <div class="badge badge-primary">Open</div>
                                            @endif

                                        </td>
                                        <td>{{$support->priority}}</td>
                                        <td>{{ \Carbon\Carbon::parse($support->updated_at)->diffForHumans()}}</td>
                                        <td>{{$support->created_at}}</td>
                                        <td>
                                            <a href="{{ route('seller.ticket.replay', $support->id) }}" class="btn btn-outline-primary btn-circle"
                                                data-toggle="tooltip" title=""
                                                data-original-title="{{ __('Replay') }}"><i class='bx bx-reply'></i>
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
                                {{ $supports->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

