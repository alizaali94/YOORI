@extends('admin.partials.master')
@section('category_active')
    active
@endsection
@section('product_active')
    active
@endsection
@section('title')
    {{ __('Categories') }}
@endsection
@php
    $q              = isset($_GET['q']) ? $_GET['q'] : null;
@endphp
@section('main-content')
    <section class="section">
        <div class="section-body ">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('All Category')}}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $categories->total() . ' ' . __('Categories') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="{{ hasPermission('category_create') ? 'col-sm-xs-12 col-md-7' : 'col-sm-xs-12 col-md-8 middle'}}">
                    <div class="card">
                        <form action="">
                            <div class="card-header input-title">
                                <h4>{{__('Categories')}}</h4>
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
                                        <th>{{__('#')}}</th>
                                        <th>{{__('Title')}}</th>
                                        <th>{{__('Root Category')}}</th>
                                        <th>{{__('Order')}}</th>
                                        <th>{{__('Thumbnail')}}</th>
                                        <th>{{__('Banner')}}</th>
                                        <th>{{__('Commission')}}</th>
                                        <th>{{__('Status')}}</th>
                                        @if(hasPermission('category_update') || hasPermission('category_delete'))
                                            <th>{{__('Options')}}</th>
                                        @endif
                                    </tr>
                                    @foreach($categories as $key => $category)
                                        <tr id="row_{{ $category->id }}" class="table-data-row">
                                            <td>{{ $categories->firstItem() + $key }}</td>
                                            <td>
                                                <div class="ml-1"><span
                                                            class="{{ $category->icon != null || $category->icon != '' ? $category->icon : 'mdi mdi-view-dashboard-outline'  }}"></span> {{$title = $category->getTranslation('title', \App::getLocale()) }}
                                                </div>
                                            </td>
                                            <td>
                                                <div class="ml-1">
                                                    @php
                                                        $parent_cat = \App\Models\Category::where('id', $category->parent_id)->first();
                                                    @endphp
                                                    {{ $parent_cat != null ? $parent_cat->getTranslation('title', \App::getLocale()) : '––' }}
                                                </div>
                                            </td>
                                            <td>
                                                {{ $category->ordering }}
                                            </td>
                                            <td>
                                                @if (@$category->logo != [] && @is_file_exists(@$category->logo['image_40x40'], $category->logo['storage']))
                                                    <img src="{{ get_media(@$category->logo['image_40x40'], $category->logo['storage']) }}"
                                                         alt="{{ $title }}"
                                                         class="mr-3 rounded">
                                                @else
                                                    <img src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                         alt="{{ $title }}"
                                                         class="mr-3 rounded">
                                                @endif
                                            </td>
                                            <td>
                                                @if ($category->banner != [] && @is_file_exists($category->banner['image_40x40'], $category->banner['storage']))
                                                    <img src="{{ get_media($category->banner['image_40x40'], $category->banner['storage']) }}"
                                                         alt="{{ $title }}"
                                                         class="mr-3 rounded">
                                                @else
                                                    <img src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                                         alt="{{ $title }}"
                                                         class="mr-3 rounded">
                                                @endif
                                            </td>
                                            <td>{{ $category->commission }} %</td>
                                            <td>
                                                <label class="custom-switch mt-2 {{ hasPermission('category_update') ? '' : 'cursor-not-allowed' }}">
                                                    <input type="checkbox"
                                                           value="category-status-change/{{$category->id}}"
                                                           {{$category->status==1 ? 'checked' : ''}} {{ hasPermission('category_update') ? '' : 'disabled'}} name="custom-switch-checkbox"
                                                           class="{{  hasPermission('category_update') ? 'status-change' : '' }} custom-switch-input">
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                            <td>
                                                @if(hasPermission('category_update'))
                                                    <a href="{{route('edit.categories',$category->id)}}"
                                                       class="btn btn-outline-secondary btn-circle"
                                                       data-toggle="tooltip" title=""
                                                       data-original-title="{{ __('Edit') }}"><i class="bx bx-edit"></i></a>
                                                @endif
                                                @if(hasPermission('category_delete'))
                                                    <a href="javascript:void(0)"
                                                       onclick="delete_row('delete/categories/',{{$category->id}})"
                                                       class="btn btn-outline-danger btn-circle" data-toggle="tooltip"
                                                       title=""
                                                       data-original-title="{{ __('Delete') }}"><i
                                                                class="bx bx-trash"></i></a>
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
                @if (hasPermission('category_create'))
                    <div class="col-sm-xs-12 col-md-5">
                        <div class="card">
                            <div class="card-header input-title">
                                <h4>{{__('Add New Category')}}</h4>
                            </div>
                            <div class="card-body card-body-paddding">
                                <form method="POST" action="{{route('store.categories')}}">
                                    @csrf
                                    <div class="form-group">
                                        <label for="title">{{__('Title')}}</label>
                                        <input type="text" class="form-control" name="title" id="title"
                                               value="{{old('title')}}"
                                               placeholder="{{__('Title')}}" tabindex="1"
                                               required>
                                        @if ($errors->has('title'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('title') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="name">{{ __('Root Category') }}</label>

                                        <select class="form-control selectric lang" name="category">
                                            <option value="">{{ __('Select Root Category') }}</option>
                                            @foreach($all_categories as $key => $category)
                                                <option value="{{ $category->id }}" {{ $category->id == old('category') ? 'selected' : '' }}>{{ $category->getTranslation('title', \App::getLocale()) }}</option>
                                                @foreach ($category->childCategories as $childCategory)
                                                    @include('admin.products.categories.child-categories', ['child_category' => $childCategory])
                                                @endforeach
                                            @endforeach
                                        </select>

                                        @if ($errors->has('category'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('category') }}</p>
                                            </div>
                                        @endif
                                    </div>

                                    <div class="form-group">
                                        <label for="ordering">{{__('Order')}}
                                            (<small>{{ __('To show on menu sidebar') }}</small>)</label>
                                        <input id="ordering" type="number" class="form-control" name="ordering"
                                               value="{{old('ordering')}}"
                                               placeholder="{{__('Order')}}" tabindex="1">
                                        @if ($errors->has('ordering'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('ordering') }}</p>
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
                                        <label for="commission">{{__('Commission Rate')}}</label>
                                        <input id="commission" type="number" class="form-control" step="any"
                                               name="commission" value="{{old('commission')}}"
                                               placeholder="{{__('Commission Rate')}} {{__('(%)')}}" tabindex="1">

                                        @if ($errors->has('commission'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('commission') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="barcode">{{ __('Icon') }}</label>
                                        <div class="input-group category-icon-selector">
                                            <div class="input-group-append" id="uip-select-input">
                                                <div class="input-group-text"
                                                     id="uip-icon-container">
                                                    <i class="">?</i>
                                                </div>
                                            </div>
                                            <input type="text" name="icon" id="uip-select-input-value"
                                                   value="{{ old('icon') ? old('icon') : '' }}"
                                                   class="form-control use-material-icon-picker"
                                                   placeholder="{{ __('Enter product icon') }}">
                                        </div>

                                        @if ($errors->has('icon'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('icon') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="logo">{{ __('Thumbnail') }} ({{ __('72*72') }})</label>
                                        <div class="form-group">
                                            <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                                 data-selection="single"
                                                 data-target="#galleryModal" data-dismiss="modal">
                                                <input type="hidden" name="logo"
                                                       value="{{ old('logo') !='' ? old('logo') : ''}}"
                                                       class="image-selected">
                                                <span class="form-control"><span
                                                            class="counter">{{ old('logo') != '' ? substr_count(old('logo'), ',') + 1  : 0 }}</span> {{ __('file chosen') }}</span>
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">
                                                        {{ __('Choose File') }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="selected-media-box">
                                                <div class="mt-4 gallery gallery-md d-flex">
                                                    @if(old('logo') != null)
                                                        <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                             data-id="{{ old('logo') }}">
                                                            @php
                                                                $media = \App\Models\Media::find(old('logo'));
                                                            @endphp
                                                            @if(@is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                                <img
                                                                        src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
                                                                        alt="category-logo"
                                                                        class="img-thumbnail logo-profile">
                                                            @else
                                                                <img
                                                                        src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                        alt="category-logo"
                                                                        class="img-thumbnail logo-profile">
                                                            @endif
                                                            <div class="image-remove">
                                                                <a href="javascript:void(0)" class="remove"><i
                                                                            class="bx bx-x"></i></a>
                                                            </div>
                                                        </div>
                                                    @else
                                                        <div class="selected-media mr-2 mb-2 mt-3 ml-0">
                                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                 data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                 alt="category-logo" class="img-thumbnail logo-profile">
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="logo">{{ __('Banner') }} ({{ __('835*200') }})</label>
                                        <div class="form-group">
                                            <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                                 data-selection="single"
                                                 data-target="#galleryModal" data-dismiss="modal">
                                                <input type="hidden" name="banner"
                                                       value="{{ old('banner') !='' ? old('banner') : ''}}"
                                                       class="image-selected">
                                                <span class="form-control"><span
                                                            class="counter">{{ old('banner') != '' ? substr_count(old('banner'), ',') + 1  : 0 }}</span> {{ __('file chosen') }}</span>
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">
                                                        {{ __('Choose File') }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="selected-media-box">
                                                <div class="mt-4 gallery gallery-md d-flex">
                                                    @if(old('logo') != null)
                                                        <div class="selected-media mr-2 mb-2 mt-3 ml-0"
                                                             data-id="{{ old('banner') }}">
                                                            @php
                                                                $media = \App\Models\Media::find(old('banner'));
                                                            @endphp
                                                            @if(@is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                                <img
                                                                        src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
                                                                        alt="category-banner"
                                                                        class="img-thumbnail logo-profile">
                                                            @else
                                                                <img
                                                                        src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                        alt="category-banner"
                                                                        class="img-thumbnail logo-profile">
                                                            @endif
                                                            <div class="image-remove">
                                                                <a href="javascript:void(0)" class="remove"><i
                                                                            class="bx bx-x"></i></a>
                                                            </div>
                                                        </div>
                                                    @else
                                                        <div class="selected-media mr-2 mb-2 mt-3 ml-0">
                                                            <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                 data-default="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                                 alt="category-banner"
                                                                 class="img-thumbnail logo-profile">
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="meta_title">{{__('Meta Title')}}</label>
                                        <input id="meta_title" type="text" class="form-control" name="meta_title"
                                               placeholder="{{__('Meta title')}}" tabindex="1">
                                        @if ($errors->has('meta_title'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('meta_title') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label for="meta_description">{{__('Meta description')}}</label>
                                        <textarea class="form-control" name="meta_description" id="meta_description"
                                                  value="{{old('meta_description')}}"
                                                  placeholder="{{__('Description')}}"></textarea>
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
    @include('admin.common.selector-modal')
@endsection
@include('admin.common.delete-ajax')

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>

    <script>
        (function () {
            var material_icons = [];

            fetch('{{ static_asset('admin/js/meta.json') }}').then((response) => {
                return response.json();
            }).then(data => {
                material_icons = data;
                $('input[type="text"].use-material-icon-picker').each(function () {
                    // Append the picker and the search box.
                    var $picker = $('<div class="material-icon-picker" tabindex="-1"></div>');
                    var $search = $('<input type="text" class="form-control mb-3" placeholder="Search...">');
                    // Do simple filtering based on the search.
                    $search.on('keyup', function () {
                        var search = $search.val().toLowerCase();
                        let icons = material_icons.filter(
                            (d) =>
                                (d.name && d.name.toLowerCase().includes(search))
                        );
                        iconAppend(icons,201);

                        var $icons = $(this).closest('.material-icon-picker');
                        $icons.find('.mdi-custom-icon').css('display', 'none');
                        $icons.find('.mdi-custom-icon:contains(' + search + ')').css('display', 'inline-block');
                    });
                    $picker.append($search);
                    // Append each icon into the picker.
                    var $icons = $('<div class="icons pb-3"></div>');
                    iconAppend(material_icons,201);

                    // Show the picker when the input field gets focus.
                    $picker.append($icons).hide();
                    $(this).after($picker);

                    function onIconClick() {
                        let val = "mdi mdi-" + $(this).text();
                        $(this).closest('.material-icon-picker').prev().val(val).trigger('change');
                        $('#uip-icon-container i').attr('class','').addClass(val).text('');
                        $picker.fadeOut(201);
                    }

                    function iconAppend(icons, limit) {
                        icons.forEach(function (icon,index) {
                            if (index < limit) {
                                let class_name = "mdi mdi-" + icon.name;
                                var $icon = $('<div class="mdi-custom-icon" title="' + icon.name + '"><i class="' + class_name + '"></i><p>' + icon.name + '</p></div>');
                                $('.class_name').text(icon.name);
                                $icon.on('click', onIconClick);
                                $icons.append($icon);
                            }
                        });

                    }
                });
            });
            // Hide any picker when it or the input field loses focus.
            $(document).on('mouseup', function (e) {
                var $picker = $('.material-icon-picker');
                if ($picker.length && !$picker.is(e.target) && !$(e.target).hasClass('use-material-icon-picker') && $picker.has(e.target).length === 0) {
                    $picker.fadeOut(200);
                }
            });
            $(document).on('click','#uip-icon-container', function (e) {
                var $picker = $('.material-icon-picker');
                $picker.fadeIn(200);
            });
            $(document).on('keyup','#uip-select-input-value', function (e) {
                var val = $(this).val();
                $('#uip-icon-container i').addClass(val).text('');
            });
        }());


    </script>
@endpush
