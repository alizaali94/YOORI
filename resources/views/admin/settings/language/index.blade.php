@extends('admin.partials.master')

@section('title')
    {{ __('Languages') }}
@endsection
@section('setup')
    active
@endsection
@section('languages')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Languages') }}</h2>
                    <p class="section-lead">{{ __('You have total') . ' ' . $languages->count() . ' ' . __('Languages') }}</p>
                </div>
            </div>
            <div class="row">
                <div class="{{ hasPermission('language_create') ? 'col-sm-xs-12 col-md-7':'col-sm-xs-12 col-md-8 middle' }}">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{__('Languages')}}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Name') }}</th>
                                        <th>{{ __('Locale') }}</th>
                                        <th>{{ __('RTL') }}</th>
                                        <th>{{ __('Status') }}</th>
                                        <th>{{ __('Actions') }}</th>
                                    </tr>
                                    @foreach ($languages as $key => $language)
                                        <tr id="row_{{ $language->id }}" class="table-data-row">
                                            <input type="hidden" value="{{$language->id}}" id="id">
                                            <td>{{ $languages->firstItem() + $key }}</td>
                                            <td>{{ $language->name }}</td>
                                            <td>{{ $language->locale }}</td>
                                            <td>
                                                <label class="custom-switch mt-2 {{ hasPermission('language_update') ? '' : 'cursor-not-allowed' }}">
                                                    {{ hasPermission('language_update') ? '' : 'disabled'}}
                                                    <input type="checkbox" name="custom-switch-checkbox" value="language-direction-change/{{$language->id}}"  {{ $language->text_direction == 'rtl' ? 'checked' : '' }} {{ hasPermission('language_update') ? '' : 'disabled' }} class="{{ hasPermission('language_update') ? 'status-change' : '' }} custom-switch-input">
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label class="custom-switch mt-2 {{ hasPermission('language_update') ? '' : 'cursor-not-allowed' }}">
                                                    {{ hasPermission('language_update') ? '' : 'cursor-not-allowed' }}
                                                    <input type="checkbox" name="custom-switch-checkbox" value="language-status-change/{{$language->id}}"  {{ $language->status == 1 ? 'checked' : '' }} {{ hasPermission('language_update') ? '' : 'disabled' }} class="{{ hasPermission('language_update') ? 'status-change' : '' }} custom-switch-input">
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                            <td>
                                                @if (hasPermission('translation_message_update'))
                                                <a href="{{ route('admin.languages.translations.index', $language->locale) }}"class="btn btn-outline-info btn-circle"
                                                    data-toggle="tooltip"
                                                    title=""
                                                    data-original-title="{{ __('Translation') }}">
                                                     <i class="bx bx-text"></i>
                                                 </a>
                                                @endif
                                                @if (hasPermission('language_update'))
                                                    @if ($language->name =='English')
                                                        <a href="{{  route('admin.edit.language',$language->id) }}"
                                                           class="btn disabled  btn-outline-secondary btn-circle"
                                                           data-toggle="tooltip"
                                                           title=""
                                                           data-original-title="{{ __('Edit') }}">
                                                            <i class="bx bx-edit"></i>
                                                        </a>
                                                    @else
                                                        <a href="{{  route('admin.edit.language',$language->id) }}"
                                                           class="btn btn-outline-secondary btn-circle"
                                                           data-toggle="tooltip"
                                                           title=""
                                                           data-original-title="{{ __('Edit') }}">
                                                            <i class="bx bx-edit"></i>
                                                        </a>
                                                    @endif
                                                @endif
                                                @if (hasPermission('language_delete'))
                                                    @if ($language->name =='English')
                                                        <a href="javascript:void(0)" onclick="delete_row('language-delete/', {{ $language->id }})"
                                                           class="btn disabled  btn-outline-warning btn-circle" data-toggle="tooltip" title="" data-original-title="{{ __('Delete') }}">
                                                            <i class='bx bx-trash'></i>
                                                        </a>
                                                    @else
                                                        <a href="javascript:void(0)" onclick="delete_row('language-delete/', {{ $language->id }})"
                                                           class="btn btn-outline-warning btn-circle" data-toggle="tooltip" title="" data-original-title="{{ __('Delete') }}">
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
                                {{ $languages->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
                @if(hasPermission('language_create'))
                    <div class="col-sm-xs-12 col-md-5">
                        <div class="card">
                            <form action="{{ route('admin.languages.store') }}" class="needs-validation" novalidate="" method="POST">
                                @csrf
                                <div class="card-header">
                                    <h4>{{ __('Add New Language') }}</h4>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label> {{ __('Language Name') }}</label>
                                        <input type="text" name="name" class="form-control" placeholder="{{ __('Enter language name') }}" required>
                                        @if ($errors->has('name'))
                                            <div class="invalid-feedback">
                                                {{ $errors->first('name') }}
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label>{{ __('Locale') }}</label>
                                        <select name="locale" class="form-control select2">
                                            <option value="">{{ __('Select Locale') }}</option>
                                            @foreach (get_yrsetting('locale') as $locale)
                                                <option value="{{ $locale }}">{{ $locale }}</option>
                                            @endforeach
                                        </select>
                                        @if ($errors->has('locale'))
                                            <div class="invalid-feedback">
                                                {{ $errors->first('locale') }}
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group">
                                        <label>{{ __('Flag') }}</label>
                                        <select name="flag" class="flags form-control">
                                            @foreach ($flags as $flag)
                                                <option data-image="{{ static_asset($flag->image) }}"
                                                        value='{{ ' ' . $flag->image }}'>{{ ' ' . $flag->title }}</option>
                                            @endforeach
                                        </select>
                                        @if ($errors->has('flag'))
                                            <div class="invalid-feedback">
                                                {{ $errors->first('flag') }}
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="card-footer text-right">
                                    <button class="btn btn-outline-primary">{{ __('Save') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')

