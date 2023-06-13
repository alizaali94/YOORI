@extends('admin.partials.master')

@section('title')
    {{ __('Blogs') }}
@endsection
@section('blogs_active')
    active
@endsection
@section('blog_post')
    active
@endsection
@php
    $c              = null;
    $q              = null;
    if(isset($_GET['c'])){
        $c          = $_GET['c'];
    }
    if(isset($_GET['q'])){
        $q          = $_GET['q'];
    }

@endphp
@section('main-content')

    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('Posts')}}</h2>
                </div>
                @if(hasPermission('blog_create'))
                    <div class="buttons add-button">
                        <a href="{{ route('blog.create') }}" class="btn btn-icon icon-left btn-outline-primary">
                            <i class='bx bx-plus'></i>{{__('Add Post')}}
                        </a>
                    </div>
                @endif
            </div>
            @php
                $total          = App\Models\Blog::count();
                $published      = App\Models\Blog::where('status','published')->count();
                $draft          = App\Models\Blog::where('status','draft')->count();
                $pending        = App\Models\Blog::where('status','pending')->count();
                $trash          = App\Models\Blog::onlyTrashed()->get()->count();
            @endphp
            <div class="row">
                <div class="col-12">
                    <div class="card mb-0">
                        <div class="card-body">
                            <form id="my_form" method="get" action="">
                                <ul class="nav nav-pills">
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === null  ? 'active' : '' }}"
                                           href="{{ route('blogs') }}">{{__('All')}} <span
                                                class="badge badge-primary">{{ $total }}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === 'published' && $status != 'trash' ? 'active' : '' }}"
                                           href="{{ route('blogs','published') }}">{{__('Published')}} <span
                                                class="badge badge-primary">{{ $published }}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === 'draft' && $status != 'trash' ? 'active' : '' }}"
                                           href="{{ route('blogs','draft') }}">{{__('Draft')}} <span
                                                class="badge badge-primary">{{ $draft }}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === 'pending' && $status != 'trash'? 'active' : '' }}"
                                           href="{{ route('blogs','pending') }}">{{__('Pending')}} <span
                                                class="badge badge-primary">{{ $pending }}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link {{ $status === 'trash' ? 'active' : '' }}"
                                           href="{{ route('blogs','trash') }}">{{__('Trash')}} <span
                                                class="badge badge-primary">{{ $trash }}</span></a>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{__('All Posts')}}</h4>
                            <div class="card-header-form">
                                <form class="form-inline" id="sorting">
                                    <div class="form-group">
                                        <select class="form-control selectric sorting" name="c">
                                            <option value="">{{ __('Filter By Category') }}</option>
                                            @foreach($categories as $category)
                                                <option
                                                    {{ $c != null ? ($category->id == $c ? "selected" : "" ) :''}} value="{{ $category->id }}">{{ $category->getTranslation('title', \App::getLocale()) }}</option>
                                            @endforeach
                                        </select>
                                    </div>
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
                        <div class="card-body">
                            <div class="clearfix mb-3"></div>

                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <tr>
                                        <th>{{__('#')}}</th>
                                        <th>{{__('Title')}}</th>
                                        <th>{{__('Category')}}</th>
                                        <th>{{__('Author')}}</th>
                                        <th>{{__('Created At')}}</th>
                                        <th>{{__('Status')}}</th>
                                        @if(hasPermission('blog_update') || hasPermission('blog_delete') || hasPermission('blog_restore'))
                                            <th>{{__('Option')}}</th>
                                        @endif
                                    </tr>
                                    @foreach($posts as $key => $post)
                                        <tr id="row_{{ $post->id }}">
                                            <td>{{ $posts->firstItem() + $key }}</td>
                                            <td>
                                                <a href="{{ isAppMode() ? '#' : route('blog-details',$post->slug) }}" target="{{ isAppMode() ? '_parent' : '_blank'}}">{{ $post->getTranslation('title', \App::getLocale()) }}</a>
                                            </td>
                                            <td>
                                                <a href="{{ isAppMode() ? '#' : route('category.blogs',$post->category->slug) }}" target="{{ isAppMode() ? '_parent' : '_blank'}}">
                                                {{ $post->category->getTranslation('title', \App::getLocale()) }}
                                                </a>
                                            </td>
                                            <td>
                                                <div class="d-flex">
                                                    <figure class="avatar mr-2">
                                                        @if ($post->user->images != [] && @is_file_exists($post->user->images['image_40x40']))
                                                            <img
                                                                src="{{ static_asset($post->user->images['image_40x40']) }}"
                                                                alt="{{ $post->user->first_name }}">
                                                        @else
                                                            <img
                                                                src="{{ static_asset('images/default/user40x40.jpg') }}"
                                                                alt="{{ $post->user->first_name }}">
                                                        @endif
                                                            @if(\Illuminate\Support\Facades\Cache::has('user-is-online-' . $post->user->id))
                                                                <i class="avatar-presence online"></i>
                                                            @else
                                                                <i class="avatar-presence offline"></i>
                                                            @endif
                                                    </figure>
                                                    <div class="ml-1">
                                                        {{ $post->user->first_name . ' ' . $post->user->last_name }}
                                                        <br/>
                                                        {{ isDemoServer() ? emailAddressMask($post->user->email) : $post->user->email }}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{{ \Carbon\Carbon::parse($post->created_at)->toDayDateTimeString() }}</td>
                                            <td>
                                                @if($post->status == 'published')
                                                    <div class="badge badge-primary">{{__('Published')}}</div>
                                                @elseif($post->status == 'pending')
                                                    <div class="badge badge-warning">{{__('Pending')}}</div>
                                                @elseif($post->status == 'trash')
                                                    <div class="badge badge-danger">{{__('Trash')}}</div>
                                                @else
                                                    <div class="badge badge-info">{{__('Draft')}}</div>
                                                @endif
                                            </td>
                                            <td>
                                                @if($post->status != 'trash')
                                                    @if (hasPermission('blog_update'))
                                                        <a href="{{ route('blog.edit', $post->id) }}"
                                                           class="btn btn-outline-secondary btn-circle"
                                                           data-toggle="tooltip" title=""
                                                           data-original-title="{{ __('Edit') }}"><i
                                                                class="bx bx-edit"></i>
                                                        </a>
                                                    @endif
                                                    @if(hasPermission('blog_delete'))
                                                        <a href="javascript:void(0)"
                                                           onclick="delete_row('delete/blogs/', {{ $post->id }})"
                                                           class="btn btn-outline-danger btn-circle"
                                                           data-toggle="tooltip" title=""
                                                           data-original-title="{{ __('Trash') }}">
                                                            <i class='bx bx-trash'></i>
                                                        </a>
                                                    @endif
                                                @else
                                                    @if(hasPermission('blog_restore'))
                                                        <a href="{{ route('blog.restore', $post->id) }}"
                                                           class="btn btn-outline-primary btn-circle"
                                                           data-toggle="tooltip" title=""
                                                           data-original-title="{{ __('Restore') }}"><i
                                                                class="bx bx-reset"></i>
                                                        </a>
                                                        <a href="javascript:void(0)"
                                                           onclick="delete_row('delete/blogs/', {{ $post->id }})"
                                                           class="btn btn-outline-danger btn-circle"
                                                           data-toggle="tooltip" title=""
                                                           data-original-title="{{ __('Permanent Delete') }}">
                                                            <i class='bx bx-trash'></i>
                                                        </a>

                                                    @endif
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $posts->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection
@include('admin.common.delete-ajax')

