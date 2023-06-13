@extends('admin.partials.master')

@section('title')
    {{ __('Blog Categories') }}
@endsection
@section('blogs_active')
    active
@endsection
@section('blog_category')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body ">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('Blog Categories')}}</h2>
                    <p class="section-lead">
                                                {{ __('You have total') . ' ' . $categories->total() . ' ' . __('Categories') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="{{ hasPermission('blog_category_create') ? 'col-sm-xs-12 col-md-7' : 'col-sm-xs-12 col-md-8 middle'}}">
                    <div class="card">
                        <form action="">
                            <div class="card-header input-title">
                                <h4>{{__('Categories')}}</h4>
                            </div>
                        </form>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>{{__('#')}}</th>
                                        <th>{{__('Title')}}</th>
                                        <th>{{__('Status')}}</th>
                                        @if(hasPermission('blog_category_update') || hasPermission('blog_category_delete'))
                                        <th>{{__('Options')}}</th>
                                        @endif
                                    </tr>
                                    @foreach($categories as $key => $category)
                                    <tr id="row_{{ $category->id }}" class="table-data-row">
                                        <td>{{ $categories->firstItem() + $key }}</td>
                                        <td>
                                            <div class="ml-1">
                                                <a href="{{ isAppMode() ? '#' : route('category.blogs',$category->slug) }}" target="{{ isAppMode() ? '_parent' : '_blank'}}">
                                                    {{ $category->getTranslation('title', \App::getLocale()) }}
                                                </a>
                                            </div>
                                        </td>
                                        <td>
                                            <label class="custom-switch mt-2 {{ hasPermission('blog_category_update') ? '' : 'cursor-not-allowed' }}">
                                                <input type="checkbox" value="blog-category-status-change/{{$category->id}}"
                                                       {{$category->status==1 ? 'checked' : ''}} {{ hasPermission('blog_category_update') ? '' : 'disabled'}} name="custom-switch-checkbox"
                                                       class="{{  hasPermission('blog_category_update') ? 'status-change' : '' }} custom-switch-input">
                                                <span class="custom-switch-indicator"></span>
                                            </label>
                                        </td>
                                        <td>
                                            @if(hasPermission('blog_category_update'))
                                            <a href="{{route('edit.blog.category',$category->id)}}"
                                                class="btn btn-outline-secondary btn-circle"
                                                data-toggle="tooltip" title=""
                                                data-original-title="{{ __('Edit') }}"><i class="bx bx-edit"></i>
                                             </a>
                                            @endif
                                            @if(hasPermission('blog_category_delete'))
                                            <a href="javaScript:void(0)"
                                                onclick="delete_row('delete/blog_categories/',{{$category->id}})"
                                                class="btn btn-outline-danger btn-circle" data-toggle="tooltip"
                                                title=""
                                                data-original-title="{{ __('Delete') }}"><i class="bx bx-trash"></i>
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
                                {{ $categories->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
                @if(hasPermission('blog_category_create'))
                <div class="col-sm-xs-12 col-md-5">
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{__('Add Category')}}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form method="POST" action="{{route('store.blog.categories')}}">
                                @csrf
                                <div class="form-group">
                                    <label for="title">{{__('Title')}}</label>
                                    <input type="text" class="form-control" name="title" id="title"value="{{old('title')}}"
                                           placeholder="{{__('Title')}}" tabindex="1"
                                           required>
                                    @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="slug">{{__('Slug')}}</label>
                                    <input id="slug" type="text" class="form-control" name="slug"
                                           value="{{old('slug')}}"
                                           placeholder="{{__('Slug')}}" tabindex="1">
                                    @if ($errors->has('slug'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('slug') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="meta_title" >{{__('Meta Title')}}</label>
                                    <input class="form-control" name="meta_title" id="meta_title" value="{{old('meta_title')}}" placeholder="{{__('Meta Title')}}">
                                    @if ($errors->has('meta_title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('meta_title') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="meta_description" >{{__('Meta description')}}</label>
                                    <textarea class="form-control" name="meta_description" id="meta_description" value="{{old('meta_description')}}" placeholder="{{__('Meta Description')}}"></textarea>
                                    @if ($errors->has('meta_description'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('meta_description') }}</p>
                                        </div>
                                    @endif
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
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')

