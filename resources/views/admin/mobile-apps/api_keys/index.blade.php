@if(hasPermission('api_key_read_all') || hasPermission('api_key_read'))
    <div class="row">
        <div class="col-sm col-md-12">
            <div class="card">
                <form action="">
                    <div class="card-header input-title">
                        <h4>{{__('api_key')}}</h4>
                        @if (hasPermission('api_key_create'))
                            <div class="buttons add-button mb-0">
                                <a href="{{ route('api-keys.create') }}"
                                   class="btn btn-icon icon-left btn-outline-primary">
                                    <i class="bx bx-plus"></i>{{ __('Add Api Key') }}</a>
                            </div>
                        @endif
                    </div>
                </form>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-striped table-md">
                            <tbody>
                            <tr>
                                <th>{{__('#')}}</th>
                                <th>{{__('Title')}}</th>
                                <th>{{ __('api_key') }}</th>
                                @if (hasPermission('api_key_update') || hasPermission('api_key_delete'))
                                    <th>{{__('Options')}}</th>
                                @endif


                            </tr>
                            @foreach($apis as $key => $api)
                                @if(hasPermission('api_key_read_all'))
                                    <tr id="row_{{ $api->id }}" class="table-data-row">
                                        <td>{{ $apis->firstItem() + $key }}</td>
                                        <td>{{ $api->getTranslation('title',app()->getLocale()) }}</td>
                                        <td class="d-flex">
                                            <div class="mt-2 mr-2">
                                                <p class="normal_text_{{ $api->id }} d-none">{{ $api->key }}</p>
                                                <p class="masked_text_{{ $api->id }}">{{ Str::of($api->key)->mask('*', 0, strlen($api->key)) }}</p>
                                            </div>
                                            <div class="d-flex justify-content-space-between">
                                                <a href="javascript:void(0)"
                                                   data-text="{{ __('Copied to Clipboard') }}"
                                                   data-url="{{ $api->key }}"
                                                   class="dropdown-item d-none copy-to-clipboard btn btn-outline-info btn-circle mr-2 clipboard_{{ $api->id }}">
                                                    <i class='bx bx-copy'></i>
                                                </a>
                                                <a href="javascript:void(0)"
                                                   data-id="{{ $api->id }}"
                                                   class="dropdown-item btn btn-outline-info btn-circle hide_key btn_hide_{{ $api->id }}">
                                                    <i class='bx bx-show'></i>
                                                </a>

                                                <a href="javascript:void(0)"
                                                   data-id="{{ $api->id }}"
                                                   class="dropdown-item btn btn-outline-info btn-circle show_key btn_show_{{ $api->id }} d-none">
                                                    <i class='bx bx-low-vision'></i>
                                                </a>

                                            </div>
                                        </td>
                                        @if(hasPermission('api_key_update') || hasPermission('api_key_delete'))
                                            <td>
                                                @if(hasPermission('api_key_update'))
                                                    <a href="{{route('api-keys.edit',$api->id)}}"
                                                       class="btn btn-outline-secondary btn-circle"
                                                       data-toggle="tooltip" title=""
                                                       data-original-title="{{ __('Edit') }}"><i class="bx bx-edit"></i></a>
                                                @endif
                                                @if(hasPermission('api_key_delete'))
                                                    <a href="javascript:void(0)"
                                                       onclick="delete_row('delete/api_keys/',{{ $api->id }})"
                                                       class="btn btn-outline-danger btn-circle" data-toggle="tooltip"
                                                       title=""
                                                       data-original-title="{{ __('Delete') }}"><i
                                                                class="bx bx-trash"></i></a>
                                                @endif
                                            </td>
                                        @endif
                                    </tr>
                                @elseif(hasPermission('api_key_read') && $api->user_id == authId())
                                    <tr id="row_{{ $api->id }}" class="table-data-row">
                                        <td>{{ $apis->firstItem() + $key }}</td>
                                        <td>{{ $api->getTranslation('title',app()->getLocale()) }}</td>
                                        <td class="d-flex">
                                            <div class="mt-2 mr-2">
                                                <p class="normal_text_{{ $api->id }} d-none">{{ $api->key }}</p>
                                                <p class="masked_text_{{ $api->id }}">{{ Str::of($api->key)->mask('*', 0, strlen($api->key)) }}</p>
                                            </div>
                                            <div class="d-flex justify-content-space-between">
                                                <a href="javascript:void(0)"
                                                   data-text="{{ __('Copied to Clipboard') }}"
                                                   data-url="{{ $api->key }}"
                                                   class="dropdown-item d-none copy-to-clipboard btn btn-outline-info btn-circle mr-2 clipboard_{{ $api->id }}">
                                                    <i class='bx bx-copy'></i>
                                                </a>
                                                <a href="javascript:void(0)"
                                                   data-id="{{ $api->id }}"
                                                   class="dropdown-item btn btn-outline-info btn-circle hide_key btn_hide_{{ $api->id }}">
                                                    <i class='bx bx-show'></i>
                                                </a>

                                                <a href="javascript:void(0)"
                                                   data-id="{{ $api->id }}"
                                                   class="dropdown-item btn btn-outline-info btn-circle show_key btn_show_{{ $api->id }} d-none">
                                                    <i class='bx bx-low-vision'></i>
                                                </a>

                                            </div>
                                        </td>
                                        <td>
                                            @if(hasPermission('api_key_update'))
                                                <a href="{{route('api-keys.edit',$api->id)}}"
                                                   class="btn btn-outline-secondary btn-circle"
                                                   data-toggle="tooltip" title=""
                                                   data-original-title="{{ __('Edit') }}"><i class="bx bx-edit"></i></a>
                                            @endif
                                            @if(hasPermission('api_key_delete'))
                                                <a href="javascript:void(0)"
                                                   onclick="delete_row('delete/api_keys/',{{ $api->id }})"
                                                   class="btn btn-outline-danger btn-circle" data-toggle="tooltip"
                                                   title=""
                                                   data-original-title="{{ __('Delete') }}"><i
                                                            class="bx bx-trash"></i></a>
                                            @endif
                                        </td>
                                    </tr>
                                @endif
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer">
                    <nav class="d-inline-block">
                        {{ $apis->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                    </nav>
                </div>
            </div>
        </div>
    </div>
@endif