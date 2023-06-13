@extends('admin.partials.master')
@section('title')
    {{ __('All Refunds') }}
@endsection
@section('refund_active')
    active
@endsection
@section('refunds')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Refund Request List') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $refunds->total() . ' ' . __('Refunds') }}
                    </p>
                </div>
            </div>
            @php
                $s                  = isset($_GET['s']) ? $_GET['s'] : null;
                $q                  = isset($_GET['q']) ? $_GET['q'] : null;
                $slr                = isset($_GET['slr']) ? $_GET['slr'] : null;
            @endphp
            <div class="row">
                <div class="col-sm-xs-12 col-md-12">
                    <div class="card">
                        <div class="card-header justify-content-between">
                            <h4>{{ __('All Refunds Request') }}</h4>
                            <div class="card-header-form">
                                <form class="form-inline" id="sorting">
                                    <div class="form-group">
                                        <label for="slr">{{ __('Seller') }}</label>
                                        <select class="seller-by-ajax form-control select2 sorting" name="slr" id="slr">
                                            <option value="">{{ __('Filter By Seller') }}</option>
                                            @if(isset($slr))
                                                <option selected value="{{ @$slr }}">
                                                    {{ @$selected_seller->shop_name }}
                                                </option>
                                            @endif
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <select class="form-control selectric sorting" name="s">
                                            <option value="" selected>{{ __('Filter By Status') }}</option>
                                            <option value="pending" {{ $s == 'pending' ? 'selected' : '' }} >{{ __('Pending Request') }}</option>
                                            <option value="approved" {{ $s == 'approved' ? 'selected' : '' }} >{{ __('Approved Request') }}</option>
                                            <option value="processed" {{ $s == 'processed' ? 'selected' : '' }} >{{ __('Processed Request') }}</option>
                                            <option value="rejected" {{ $s == 'rejected' ? 'selected' : '' }} >{{ __('Rejected Request') }}</option>
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
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Order Code') }}</th>
                                        <th>{{ __('Product') }}</th>
                                        <th>{{ __('Shop') }}</th>
                                        <th>{{ __('Admin Approval') }}</th>
                                        <th>{{ __('Seller Approval') }}</th>
                                        <th>{{ __('Refund Status') }}</th>
                                        @if (hasPermission('refund_approve') || hasPermission('refund_reject') || hasPermission('refund_process'))
                                            <th>{{ __('Options') }}</th>
                                        @endif
                                    </tr>

                                    @foreach ($refunds as $key => $refund)
                                        <tr id="row_{{$refund->id}}">
                                            <td>{{ $refunds->firstItem() + $key }}</td>
                                            @if ($refund->order != null)
                                                <td>{{ $refund->order->code }}</td>
                                            @endif
                                            @if ($refund->orderDetail->product)
                                                <td>
                                                    {{ $refund->orderDetail->product->getTranslation('name', \App::getLocale()) }}
                                                    @if($refund->orderDetail->variation)
                                                        <br>
                                                        <span>{{__('Variant').': '. $refund->orderDetail->variation }}</span>
                                                    @endif
                                                </td>
                                            @endif
                                            <td>
                                                @if($refund->seller_id == 1) <span class="badge badge-warning">{{__('Admin Product')}}</span> @elseif($refund->seller != null) {{$refund->seller->sellerProfile->shop_name}} @endif
                                            </td>
                                            <td class=" {{$refund->admin_approval == 'pending' ? 'text-warning' : ($refund->admin_approval == 'approved' ? 'text-success' : 'text-danger')}}">
                                                {{ ucfirst($refund->admin_approval)}}
                                            </td>
                                            <td class=" {{$refund->seller_approval == 'pending' ? 'text-warning' : ($refund->seller_approval == 'approved' ? 'text-success' : 'text-danger')}}">
                                                @if($refund->seller_id != 1) {{ ucfirst($refund->seller_approval)}} @else <span class="badge badge-warning">{{__('Admin Product')}}</span> @endif
                                            </td>
                                            <td class=" {{$refund->status == 'pending' ? 'text-warning' : ($refund->status == 'processed' ? 'text-success' : 'text-danger')}}">
                                                {{ ucfirst($refund->status)}}
                                            </td>
                                            <td>
                                                <a href="javascript:void(0)"
                                                   class="btn btn-outline-info btn-circle currency-add-btn modal-menu"
                                                   data-toggle="modal" title=""
                                                   data-title="{{ __('Refund Request') }}"
                                                   data-url="{{ route('edit-info', ['page_name' => 'refund-view', 'param1' => $refund->id]) }}"
                                                   data-target="#common-modal">
                                                    <i class="bx bx-show"></i>
                                                </a>
                                                @if($refund->admin_approval == 'pending')
                                                    @if(hasPermission('refund_approve'))
                                                        <a href="javascript:void(0)"
                                                           onclick="process_payment('{{ route('approved.refund',$refund->id) }}')"
                                                           class="btn btn-outline-primary btn-circle"
                                                           data-toggle="tooltip" title=""
                                                           data-original-title="{{ __('Approve') }}">
                                                            <i class="bx bx-check"></i>
                                                        </a>
                                                    @endif
                                                    @if(hasPermission('refund_reject'))
                                                        <a href="javascript:void(0)"
                                                            class="btn btn-outline-danger btn-circle currency-add-btn modal-menu"
                                                            data-toggle="modal" title=""
                                                            data-title="{{ __('Reject') }}"
                                                            data-url="{{ route('edit-info', ['page_name' => 'reject-refund-reason', 'param1' => $refund->id]) }}"
                                                            data-target="#common-modal">
                                                            <i class="bx bx-x"></i>
                                                        </a>
                                                    @endif
                                                @endif
                                                @if($refund->admin_approval == 'approved' && $refund->seller_approval == 'approved' && $refund->status == 'approved')
                                                    <a href="javascript:void(0)"
                                                       class="btn btn-outline-info btn-circle"
                                                       onclick="process_payment('{{ route('pay.refund',$refund->id) }}')"
                                                       data-toggle="tooltip" title=""
                                                       data-original-title="{{ __('Process Now') }}"><i
                                                            class='bx bx-money'></i>
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
                                {{ $refunds->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.common-modal')
@include('admin.common.process-refund-ajax')

@push('script')
    <script type="text/javascript" src="{{ static_asset('admin/js/ajax-live-search.js') }}"></script>
@endpush
