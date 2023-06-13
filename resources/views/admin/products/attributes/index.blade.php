@extends('admin.partials.master')
@section('attribute_active')
    active
@endsection
@section('product_active')
    active
@endsection
@section('title')
     {{ __('Attributes') }}
@endsection
@section('main-content')
<section class="section">
    <div class="section-body">
        <div class="d-flex justify-content-between">
            <div class="d-block">
                <h2 class="section-title">{{__('All Attribute')}}</h2>
                <p class="section-lead">
                    {{ __('You have total') . ' ' . $attributes->total(). ' ' . __('Attributes') }}
                </p>
            </div>
        </div>
        <div class="row">
            <div class="{{ hasPermission('attribute_set_create') ? 'col-sm-xs-12 col-md-7' : 'col-sm-xs-12 col-md-8 middle' }}">
                <div class="card">
                    <div class="card-header">
                        <h4>{{__('Attributes')}}</h4>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-md">
                                <tbody>
                                <tr>
                                    <th>{{__("#")}}</th>
                                    <th>{{__('Title')}}</th>
                                    <th>{{__('Values')}}</th>
                                    <th>{{__('Categories')}}</th>
                                    @if (hasPermission('attribute_set_update') || hasPermission('attribute_set_delete'))
                                    <th class="option">{{__('Options')}}</th>
                                    @endif
                                </tr>
                                @foreach ($attributes as $key => $value)
                                <tr id="">
                                    <td>{{ $attributes->firstItem() + $key }}</td>
                                    <td>
                                        {{$title = $value->getTranslation('title', \App::getLocale()) }}
                                    </td>
                                    <td>
                                        <div class="items-list">
                                            @foreach($value->attributeValue as $row)
                                            <div class="ml-1 badge badge-pill badge-info item item">{{ $row->value }}</div>
                                            @endforeach
                                        </div>
                                    </td>
                                    <td>
                                        <div class="items-list">
                                            @foreach($value->categories as $cat)
                                            <div class="ml-1 badge badge-pill badge-info item">{{ $cat->getTranslation('title', app()->getLocale()) }}</div>
                                            @endforeach
                                        </div>
                                    </td>
                                    <td>
                                        @if (hasPermission('attribute_value_update'))
                                            <a href="{{ route('attribute.values',$value->id) }}" class="btn btn-outline-primary btn-circle" data-toggle="tooltip" title=""
                                                data-original-title="{{ __('Attribute Values') }}"><i class='bx bx-cog'></i>
                                            </a>
                                        @endif
                                        @if (hasPermission('attribute_set_update'))
                                            <a href="{{ route('attribute.edit',$value->id) }}" class="btn btn-outline-secondary btn-circle"
                                                data-toggle="tooltip" title=""data-original-title="{{ __('Edit') }}"><i class="bx bx-edit"></i>
                                            </a>
                                        @endif
                                        @if (hasPermission('attribute_set_delete'))
                                            <a href="javascript:void(0)" onclick="delete_row('delete/attributes/',{{ $value->id }})"
                                                class="btn btn-outline-danger btn-circle" data-toggle="tooltip"title=""data-original-title="{{ __('Delete') }}"><i class="bx bx-trash"></i>
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
                            {{ $attributes->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                        </nav>
                    </div>
                </div>
            </div>
            @if (hasPermission('attribute_set_create'))
                <div class="col-sm-xs-12 col-md-5">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{__('Add Attribute')}}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form method="POST" action="{{ route('attribute.store') }}">
                                @csrf
                                <div class="form-group">
                                    <label for="title">{{__('Title')}}</label>
                                    <input type="text" class="form-control" id="title" name="title" placeholder="{{__('Title')}}" tabindex="1"
                                        required autofocus>
                                        @if ($errors->has('title'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('title') }}</p>
                                        </div>
                                        @endif
                                </div>
                                <div class="form-group">
                                    <label for="category">{{ __('Category') }}</label>
                                    <select class="form-control select2" name="category[]" id="category" multiple>
                                        @foreach($categories as $key => $category)
                                            <option
                                                value="{{ $category->id }}" {{old('category') ? (in_array($category->id, old('category')) ? 'selected' : '') : ''}}>{{ $category->getTranslation('title', App::getLocale()) }}</option>
                                        @endforeach
                                    </select>

                                    @if ($errors->has('category'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('category') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                        {{__('Save')}}
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

