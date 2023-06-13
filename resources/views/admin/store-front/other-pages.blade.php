@extends('admin.partials.master')

@section('store_front_active')
    active
@endsection
@section('other_page')
    active
@endsection
@section('title')
    {{ __('Other Pages') }}
@endsection

@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Other Page Lists') }}</h2>
                    <p class="section-lead">

                    </p>
                </div>
                @if (hasPermission('page_create'))
                    <div class="buttons add-button">
                        <a href="{{ route('page.add') }}" class="btn btn-icon icon-left btn-outline-primary">
                            <i class="bx bx-plus"></i>{{ __('Add New Page') }}</a>
                    </div>
                @endif
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Other Pages') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Title') }}</th>
                                        <th>{{ __('Link') }}</th>
                                        <th>{{ __('Status') }}</th>
                                        @if (hasPermission('page_update') || hasPermission('page_delete'))
                                            <th>{{ __('Options') }}</th>
                                        @endif
                                    </tr>
                                    @foreach($otherPages as $key => $value)
                                        <tr>
                                            <td>
                                                {{ $otherPages->firstItem() + $key }}
                                            </td>
                                            <td>{{ $value->getTranslation('title',App::getLocale()) }}</td>
                                            @if($value->id == 7)
                                                <td><a target="_blank"
                                                       href="{{ url($value->link) }}">{{ url($value->link) }}</a>
                                                </td>
                                            @else
                                                <td><a target="_blank"
                                                       href="{{ url('page/'.$value->link) }}">{{ url('page/'.$value->link) }}</a>
                                                </td>
                                            @endif
                                            <td>
                                                <label
                                                    class="custom-switch mt-2 {{ hasPermission('page_update') ? '' : 'cursor-not-allowed' }}">
                                                    <input type="checkbox" value="page-status-change/{{$value->id}}"
                                                           name="custom-switch-checkbox"
                                                           {{ hasPermission('page_update') ? '': 'disabled' }}
                                                           class=" {{ hasPermission('page_update') ? 'status-change' : '' }} custom-switch-input" {{ $value->status == 1 ? 'checked' : '' }}>
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                            <td>
                                                @if (hasPermission('page_update'))
                                                    <a href="{{ route('page.edit', $value->id) }}"
                                                       class="btn btn-outline-secondary btn-circle"
                                                       data-toggle="tooltip" title=""
                                                       data-original-title="{{ __('Edit') }}"><i class="bx bx-edit"></i>
                                                    </a>
                                                @endif
                                                @if (hasPermission('page_delete'))
                                                    @if ($value->id>7 ? 'visibility: visible' : '')
                                                        <a href="javascript:void(0)"
                                                           @if($value->id>7)
                                                           onclick="delete_row('delete/pages/', {{ $value->id }})"
                                                           @endif
                                                           class="btn btn-outline-danger btn-circle {{ $value->id>7 ? "" : "disabled" }}"
                                                           data-toggle="tooltip" title=""
                                                           data-original-title="{{ $value->id>7 ?__('Delete') : __('Can not delete this') }}">
                                                            <i class='bx bx-trash'></i>
                                                        </a>
                                                    @endif
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
                                {{ $otherPages->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    @include('admin.common.delete-ajax')
@endsection
