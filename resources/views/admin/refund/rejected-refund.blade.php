@extends('admin.partials.master')

@section('title')
    {{ __('Rejected Refund') }}
@endsection
@section('refund_active')
    active
@endsection
@section('rejected_refunds')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Rejected Refund List') }}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $refunds->total() . ' ' . __('Rejected Refunds') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-xs-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Rejected Refunds') }}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ __('Order Code') }}</th>
                                        <th>{{ __('Product') }}</th>
                                        <th>{{ __('Shop Name') }}</th>
                                        <th>{{ __('Seller Approval') }}</th>
                                        <th>{{ __('Admin Approval') }}</th>
                                        <th>{{ __('Option') }}</th>
                                    </tr>
                                    @foreach ($refunds as $key => $refund)
                                            <tr>
                                                <td>{{ $key+1 }}</td>
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
                                                    @if($refund->seller_id == 1) {{__('admin')}} @elseif($refund->seller != null) {{$refund->seller->sellerProfile->shop_name}} @endif
                                                </td>
                                                <td class=" {{$refund->seller_approval == 'pending' ? 'text-warning' : ($refund->seller_approval == 'approved' ? 'text-success' : 'text-danger')}}">
                                                    {{ ucfirst($refund->seller_approval)}}
                                                </td>
                                                <td class=" {{$refund->admin_approval == 'pending' ? 'text-info' : ($refund->admin_approval == 'approved' ? 'text-success' : 'text-danger')}}">
                                                    {{ ucfirst($refund->admin_approval)}}
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

