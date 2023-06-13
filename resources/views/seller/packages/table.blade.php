<div class="col-sm-xs-12 col-md-12">
    <div class="card">
        <form action="">
            <div class="card-header input-title">
                <h4>{{__('Packages')}}</h4>
            </div>
        </form>
        <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table table-striped table-md">
                    <tbody>
                    <tr>
                        <th>{{ __('#') }}</th>
                        <th>{{ __('Name') }}</th>
                        <th>{{ __('Price') }}</th>
                        <th>{{ __('duration') }}</th>
                        <th>{{ __("product_upload_limit") }}</th>
                        <th>{{ __('Status') }}</th>
                        @if (true)
                            <th>{{__('Options')}}</th>
                        @endif
                    </tr>

                    @foreach($packages as $key => $package)
                        @php
                            $title = $package->getTranslation('title', app()->getLocale());
                        @endphp
                        <tr id="row_{{ $key+1 }}" class="table-data-row">
                            <td>{{ $packages->firstItem() + $key }}</td>
                            <td>
                                @if ($package->image && @arrayCheck('image_40x40',$package->image) && @is_file_exists($package->image['image_40x40'], @$package->image['storage']))
                                    <img src="{{ get_media($package->image['image_40x40'], $package->image['storage']) }}"
                                         alt="{{ $title }}"
                                         class="mr-3 rounded">
                                @else
                                    <img src="{{ static_asset('images/default/default-image-40x40.png') }}"
                                         alt="{{ $title }}"
                                         class="mr-3 rounded">
                                @endif
                                {{ $title }}</td>
                            <td>{{ get_price($package->price) }}</td>
                            <td>{{ $package->duration }} {{ __('days') }}</td>
                            <td>
                                {{ $package->product_upload_limit }}
                            </td>
                            <td>
                                <label class="custom-switch mt-2 {{ true ? '' : 'cursor-not-allowed' }}">
                                    <input type="checkbox" name="custom-switch-checkbox" value="package-status-change/{{$package->id}}"
                                           {{ $package->status == 1 ? 'checked' : '' }} {{  true ? '' : 'disabled' }} class="{{  true ? 'status-change' : '' }} custom-switch-input">
                                    <span class="custom-switch-indicator"></span>
                                </label>
                            </td>
                            <td>
                                <a href="{{route('seller_packages.edit',$package->id)}}" class="btn btn-outline-secondary btn-circle"
                                   data-toggle="tooltip" title=""
                                   data-original-title="{{ __('Edit') }}"><i class="bx bx-edit"></i></a>

                                <a href="javascript:void(0)" onclick="delete_row('seller-packages/destroy/',{{ $package->id }})"
                                   class="btn btn-outline-danger btn-circle" data-toggle="tooltip"
                                   title=""
                                   data-original-title="{{ __('Delete') }}"><i class="bx bx-trash"></i></a>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
        <div class="card-footer">
            <nav class="d-inline-block">
                {{ $packages->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
            </nav>
        </div>
    </div>
</div>