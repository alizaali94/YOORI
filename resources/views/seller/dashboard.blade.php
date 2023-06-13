@extends('admin.partials.master')

@section('title')
    {{__('Dashboard')}}
@endsection
@section('dashboard')
    active
@endsection

@section('main-content')
    <section class="section">
        <div class="row">
            <div class="col-md-4">
                <div class="mini-stats-wid card">
                    <div class="card-body">
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <p class="text-muted fw-medium">{{ __('Orders')}}</p>
                                <h4 class="mb-0">{{ $total_orders }}</h4>
                            </div>
                            <div class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                <span class="avatar-title">
                                    <i class="bx bx-trending-up font-size-24"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="mini-stats-wid card">
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <p class="text-muted fw-medium">{{__('Sale')}}</p>
                                <h4 class="mb-0">{{ get_price($total_sale,user_curr()) }}</h4>
                            </div>
                            <div class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                <span class="avatar-title">
                                    <i class="bx bx-dollar font-size-24"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="mini-stats-wid card">
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <p class="text-muted fw-medium">{{__('Product')}}</p>
                                <h4 class="mb-0">{{ $total_product }}</h4>
                            </div>
                            <div class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                <span class="avatar-title">
                                    <i class="bx bxl-product-hunt font-size-24"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            @if(addon_is_activated('seller_subscription'))
                @if(authUser()->activePackage)
                    @php
                        $subscription = authUser()->activeSubscription;
                        $package = $subscription->package;
                    @endphp
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card card-statistic-3">
                            <div class="card-stats">
                                <div class="card-stats-title d-flex justify-content-between">
                                    <h4>{{__('Currently Active Package')}}</h4>
                                </div>
                                <div class="purchased-card">
                                    <div class="purchased-content">
                                        <div class="purchased-img">
                                            <img src="{{ static_asset($seller_package->logo) }}"
                                                 alt="{{ $seller_package->name }}">
                                        </div>
                                        <div class="purchased-text">
                                            <h5>{{ $package->getTranslation('title',app()->getLocale()) }}</h5>
                                            <p>{{ __('product_upload_limit') }}:
                                                <span>{{ $package->product_upload_limit }}</span></p>
                                            <p>{{ __('package_expire_at') }}:
                                                <time datetime="{{ \Carbon\Carbon::parse($package->created_at)->format('Y-m-d') }}">{{ \Carbon\Carbon::parse($package->created_at)->format('Y-m-d') }}</time>
                                            </p>
                                            <a href="{{ route('seller.packages') }}"
                                               class="btn btn-outline-info btn-circle mt-2">{{ __('upgrade_package') }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
            @endif
            <div class="{{ addon_is_activated('seller_subscription') && authUser()->activePackage ? 'col-lg-4 col-md-4 col-sm-12' : 'col-lg-8 col-md-8 col-sm-12' }}">
                <div class="card card-statistic-2">
                    <div class="card-stats">
                        <div class="card-stats-title d-flex justify-content-between">
                            <h4>{{__('Order Statistics')}}</h4>
                            <div class="dropdown d-inline">
                                <a class="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#"
                                   id="orders-month">{{__('Today')}}</a>
                                <ul class="dropdown-menu dropdown-menu-sm" data-url="/seller/order-statistics/"
                                    data-id="order-statistics">
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics active"
                                           id="today" data-report-type="today">{{ __('Today')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics"
                                           data-report-type="yesterday">{{ __('Yesterday')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics"
                                           data-report-type="this_week">{{ __('This Week')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics"
                                           data-report-type="last_week">{{ __('Last Week')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics"
                                           data-report-type="this_month">{{ __('This Month')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics"
                                           data-report-type="last_month">{{ __('Last Month')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics"
                                           data-report-type="last_3_month">{{ __('Last 3 Month')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics"
                                           data-report-type="last_6_month">{{ __('Last 6 Month')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics"
                                           data-report-type="this_year">{{ __('This Year')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics"
                                           data-report-type="last_year">{{ __('Last Year')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics"
                                           data-report-type="lifetime">{{ __('Lifetime')}}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-stats-items">
                            <div class="card-stats-item">
                                <div class="card-stats-item-count">{{ $order_statistics['pending_order'] }}</div>
                                <div class="card-stats-amount-count">{{ get_price($order_statistics['pending_order_price'],user_curr()) }}</div>
                                <div class="card-stats-item-label">{{__('Pending')}}</div>
                            </div>
                            <div class="card-stats-item">
                                <div class="card-stats-item-count">{{ $order_statistics['processing_order'] }}</div>
                                <div class="card-stats-amount-count">{{ get_price($order_statistics['processing_order_price'],user_curr()) }}</div>
                                <div class="card-stats-item-label">{{__('Processing')}}</div>
                            </div>
                            <div class="card-stats-item">
                                <div class="card-stats-item-count">{{ $order_statistics['completed_order'] }}</div>
                                <div class="card-stats-amount-count">{{get_price($order_statistics['completed_order_price'],user_curr()) }}</div>
                                <div class="card-stats-item-label">{{__('Delivered')}}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="card card-statistic-3">
                    <div class="card-stats">
                        <div class="card-stats-title d-flex justify-content-between">
                            <h4>{{__('Order State')}}</h4>
                            <div class="dropdown d-inline">
                                <a class="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#"
                                   id="orders-state-month">{{__('This Year')}}</a>
                                <ul class="dropdown-menu dropdown-menu-sm" data-url="/seller/order-state/"
                                    data-id="order-state">
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-state"
                                           data-report-type="this_year">{{ __('This Year')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-state"
                                           data-report-type="last_year">{{ __('Last Year')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-state"
                                           data-report-type="lifetime">{{ __('Lifetime')}}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body" id="order-state">
                            <canvas id="order_state" height="72px"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="card card-statistic-4">
                    <div class="card-stats">
                        <div class="card-stats-title d-flex justify-content-between">
                            <h4>{{__('Category Product Sales Statistics')}}</h4>
                            <div class="dropdown d-inline">
                                <a class="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#"
                                   id="orders-category-month">{{__('Today')}}</a>
                                <ul class="dropdown-menu dropdown-menu-sm" data-url="/seller/sales-by-category/"
                                    data-id="order-category">
                                    <li><a href="javaScript:void(0)"
                                           class="dropdown-item order-statistics-category active" id="today"
                                           data-report-type="today">{{ __('Today')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-category"
                                           data-report-type="yesterday">{{ __('Yesterday')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-category"
                                           data-report-type="this_week">{{ __('This Week')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-category"
                                           data-report-type="last_week">{{ __('Last Week')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-category"
                                           data-report-type="this_month">{{ __('This Month')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-category"
                                           data-report-type="last_month">{{ __('Last Month')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-category"
                                           data-report-type="last_3_month">{{ __('Last 3 Month')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-category"
                                           data-report-type="last_6_month">{{ __('Last 6 Month')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-category"
                                           data-report-type="this_year">{{ __('This Year')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-category"
                                           data-report-type="last_year">{{ __('Last Year')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-category"
                                           data-report-type="lifetime">{{ __('Lifetime')}}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body">
                            <canvas id="sates_by_category" height="100px"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="card card-statistic-5">
                    <div class="card-stats">
                        <div class="card-stats-title d-flex justify-content-between">
                            <h4>{{__('Sales State')}}</h4>
                            <div class="dropdown d-inline">
                                <a class="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#"
                                   id="orders-sales-month">{{__('This Year')}}</a>
                                <ul class="dropdown-menu dropdown-menu-sm" data-url="/seller/total-sales-state/"
                                    data-id="order-statistics">
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-sales"
                                           data-report-type="this_year">{{ __('This Year')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-sales"
                                           data-report-type="last_year">{{ __('Last Year')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item order-statistics-sales"
                                           data-report-type="lifetime">{{ __('Lifetime')}}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body">
                            <canvas id="sale_state" height="100px"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h4>Invoices</h4>
                        <div class="card-header-action">
                            <a href="{{ Sentinel::getUser()->user_type != 'seller' ? route('orders') :route('seller.orders') }}"
                               class="btn btn-outline-primary">{{ __('View More') }}<i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive table-invoice">
                            <table class="table table-striped">
                                <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>{{ __('Order Code') }}</th>
                                    <th>{{ __('Customer') }}</th>
                                    <th>{{ __('Total Product') }}</th>
                                    <th>{{ __('Total Amount') }}</th>
                                    <th>{{ __('Delivery Status') }}</th>
                                    <th>{{ __('Payment Status') }}</th>
                                    <th>{{ __('Options') }}</th>
                                </tr>
                                @foreach ($orders as $key => $value)
                                    <tr id="row_{{ $value->id }}" class="table-data-row">
                                        <td> {{ 1 + $key  }} </td>
                                        <td> {{ $value->code }} </td>
                                        <td>
                                            <div class="ml-1">
                                                {{ @$value->user->first_name }} {{ @$value->user->last_name }}<br/>
                                                {{ @$value->user->phone }}
                                            </div>
                                        </td>
                                        <td> {{ $value->order_details_count }} </td>
                                        <td> {{ get_price($value->total_amount,user_curr()) }} </td>
                                        <td>
                                            @if ($value->delivery_status == 'confirm')
                                                <div class="badge badge-confirm">{{__('Confirm')}}</div>
                                            @elseif ($value->delivery_status == 'pending')
                                                <div class="badge badge-warning">{{__('Pending')}}</div>
                                            @elseif($value->delivery_status == 'canceled')
                                                <div class="badge badge-danger">{{__('Canceled')}}</div>
                                            @elseif($value->delivery_status == 'delivered')
                                                <div class="badge badge-success">{{__('Delivered')}}</div>
                                            @elseif($value->delivery_status == 'picked_up')
                                                <div class="badge badge-info">{{__('Picked Up')}}</div>
                                            @elseif($value->delivery_status == 'on_the_way')
                                                <div class="badge badge-secondary">{{__('On The Way')}}</div>
                                            @endif
                                        </td>
                                        <td>
                                            @if ($value->payment_status == 'unpaid' && ($value->offline_method_id != '' || $value->offline_method_id != null))
                                                <div class="badge badge-warning">{{__('Offline Unpaid')}}</div>
                                            @elseif ($value->payment_status == 'paid' && ($value->offline_method_id != '' || $value->offline_method_id != null))
                                                <div class="badge badge-success">{{__('Offline paid')}}</div>
                                            @elseif ($value->payment_status == 'unpaid')
                                                <div class="badge badge-warning">{{__('Unpaid')}}</div>
                                            @elseif($value->payment_status == 'paid')
                                                <div class="badge badge-success">{{__('Paid')}}</div>
                                            @elseif($value->payment_status == 'refunded_to_wallet')
                                                <div class="badge badge-info">{{__('Refunded to wallet')}}</div>
                                            @endif
                                            @if($value->offline_method_file != null)
                                                <a target="_blank"
                                                   href="{{ get_media($value->offline_method_file['image'],$value->offline_method_file['storage']) }}"
                                                   data-toggle="tooltip" title=""
                                                   data-original-title="{{ __('Attachment') }}">
                                                    <i class="bx bx-link-alt"></i>
                                                </a>
                                            @endif
                                        </td>
                                        <td>
                                            <a href="{{ route('seller.order.view',$value->id) }}"
                                               class="btn btn-outline-info btn-circle" data-url=""
                                               data-toggle="tooltip" title="" data-original-title="{{ __('View') }}">
                                                <i class="bx bx-show"></i>
                                            </a>
                                            <a href="{{ route('seller.order.invoice.download',$value->id) }}"
                                               class="btn btn-outline-primary btn-circle" data-url=""
                                               data-toggle="tooltip" title=""
                                               data-original-title="{{ __('Invoice Download') }}">
                                                <i class="bx bx-download"></i>
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card gradient-bottom">
                    <div class="card-stats">
                        <div class="card-stats-title d-flex justify-content-between">
                            <h4>{{__('Top Products')}}</h4>
                            <div class="dropdown d-inline dropdown-position badge badge-primary">
                                <a class="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#"
                                   id="top-products-month">{{__('This Week')}}</a>
                                <ul class="dropdown-menu dropdown-menu-sm" data-url="/seller/top-products/"
                                    data-id="top-products">
                                    <li><a href="javaScript:void(0)" class="dropdown-item top-products-state active"
                                           data-report-type="this_week">{{ __('This Week')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item top-products-state"
                                           data-report-type="last_week">{{ __('Last Week')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item top-products-state"
                                           data-report-type="this_month">{{ __('This Month')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item top-products-state"
                                           data-report-type="last_month">{{ __('Last Month')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item top-products-state"
                                           data-report-type="last_3_month">{{ __('Last 3 Month')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item top-products-state"
                                           data-report-type="last_6_month">{{ __('Last 6 Month')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item top-products-state"
                                           data-report-type="this_year">{{ __('This Year')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item top-products-state"
                                           data-report-type="last_year">{{ __('Last Year')}}</a></li>
                                    <li><a href="javaScript:void(0)" class="dropdown-item top-products-state"
                                           data-report-type="lifetime">{{ __('Lifetime')}}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body" id="top-5-scroll" tabindex="2"
                             style="height: 366px; overflow: hidden; outline: none;">
                            <ul class="list-unstyled list-unstyled-border" id="top-products">
                                @foreach($top_products as $product)
                                    <li class="media">
                                        <img class="mr-3 rounded" width="55" src="{{ $product['image'] }}"
                                             alt="{{ $product['product_name'] }}">
                                        <div class="media-body">
                                            <a href="/product/{{ $product['slug'] }}">
                                                <div class="float-right">
                                                    <div class="font-weight-600 text-muted text-small">{{ $product['total_sale'].' '.__('Sales') }} </div>
                                                </div>
                                                <div class="media-title">{{ $product['product_name'] }}</div>
                                            </a>
                                        </div>
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@push('page-specific')
    <script src="{{ static_asset('admin/js/jquery.blockUI.js') }}"></script>
@endpush
@push('script')
    <script src="{{ static_asset('admin/js/chart.js') }}"></script>
    <script>
        jQuery(function ($) {
            'use strict';

            var ctx = document.getElementById('sates_by_category');
            window.sales_by_category = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: {!! $sales_by_category['categories'] !!},
                    datasets: [{
                        label: '{{ __('Products') }}',
                        data: {!! $sales_by_category['sales'] !!},
                        backgroundColor: ['rgb(85 110 230 / 10%)'],
                        borderHoverWidth: 1,
                        pointBackgroundColor: '#556ee6',
                        pointHoverBackgroundColor: '#1EC0D4',
                        pointBorderWidth: 5,
                        pointHoverBorderWidth: 5,
                        pointBorderColor: '#ffffff',
                        pointHoverBorderColor: '#ffffff',
                        pointRadius: 8,
                        pointHoverRadius: 8,
                    }
                    ]
                },
                defaults: {
                    global: {
                        defaultFontFamily: "'Inter'"
                    }
                },
                options: {
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: true
                            },
                            ticks: {
                                beginAtZero: true,
                                callback: function (value) {
                                    if (Number.isInteger(value)) {
                                        return value;
                                    }
                                },
                            }
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            labelColor: function (tooltipItem, chart) {
                                return {
                                    borderColor: '#7651FA',
                                    backgroundColor: '#7651FA'
                                };
                            },
                            labelTextColor: function (tooltipItem, chart) {
                                return '#7651FA';
                            }
                        }
                    }
                }
            });
            var ctx = document.getElementById('sale_state');
            window.sales_state = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                    datasets: [{
                        label: 'Sales {{ get_symbol() }}',
                        data: {{ $sales_state }},
                        fillColor: "rgba(151,187,205,0.5)",
                        strokeColor: "rgba(151,187,205,0.8)",
                        highlightFill: "rgba(151,187,205,0.75)",
                        highlightStroke: "rgba(151,187,205,1)",
                    }]
                },
                defaults: {
                    global: {
                        defaultFontFamily: "'Inter'"
                    }
                },
                options: {
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: true
                            },
                            ticks: {
                                beginAtZero: true,
                                callback: function (value) {
                                    if (Number.isInteger(value)) {
                                        return value;
                                    }
                                },
                            }
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            labelColor: function (tooltipItem, chart) {
                                return {
                                    borderColor: '#7651FA',
                                    backgroundColor: '#7651FA'
                                };
                            },
                            labelTextColor: function (tooltipItem, chart) {
                                return '#7651FA';
                            }
                        }
                    }
                }
            });
            var order_state = document.getElementById('order_state');
            window.order_sate_chart = new Chart(order_state, {
                type: 'bar',
                data: {
                    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                    datasets: [{
                        label: '{{ __('New Orders') }}',
                        data: {{ $order_state }},
                        fillColor: "rgba(151,187,205,0.5)",
                        strokeColor: "rgba(151,187,205,0.8)",
                        highlightFill: "rgba(151,187,205,0.75)",
                        highlightStroke: "rgba(151,187,205,1)",
                    }]
                },
                defaults: {
                    global: {
                        defaultFontFamily: "'Inter'"
                    }
                },
                options: {
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: true
                            },
                            ticks: {
                                beginAtZero: true,
                                callback: function (value) {
                                    if (Number.isInteger(value)) {
                                        return value;
                                    }
                                },
                            }
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            labelColor: function (tooltipItem, chart) {
                                return {
                                    borderColor: '#7651FA',
                                    backgroundColor: '#7651FA'
                                };
                            },
                            labelTextColor: function (tooltipItem, chart) {
                                return '#7651FA';
                            }
                        }
                    }
                }
            });
        });

        // function to update our chart
        $(document).ready(function () {
            $('.order-statistics-state').on('click', function (e) {
                var area = $(this);
                var report_type = area.attr('data-report-type');
                var url = $('#url').val();
                var data_id = area.closest('.dropdown-menu').attr('data-id')
                var report_ln = area.text();
                var path = area.closest('.dropdown-menu').attr('data-url');

                $('.card-statistic-3').block({
                    message: '{{ __('Processing...') }}',
                    css: {
                        border: 'none',
                        padding: '15px',
                        color: '#fff'
                    }
                });

                $.ajax({
                    type: "GET",
                    dataType: 'JSON',
                    async: false,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: url + path + report_type,
                    success: function (data) {
                        $('.card-statistic-3').unblock()
                        $('.order-statistics-state').removeClass('active');
                        area.addClass('active');
                        $('#orders-state-month').html(report_ln)

                        window.order_sate_chart.data.labels = data.labels;
                        window.order_sate_chart.data.datasets[0].data = data.orders; // or you can iterate for multiple datasets
                        window.order_sate_chart.update(); // finally update our chart
                    },
                    error: function (data) {
                        $('.card-statistic-3').unblock()
                        $('#' + data_id).html('{{ __('Something went wrong with ajax') }}')
                    }


                });
            })
        });

        // function to update our chart
        $(document).ready(function () {
            $('.order-statistics-category').on('click', function (e) {
                var area = $(this);
                var report_type = area.attr('data-report-type');
                var url = $('#url').val();
                var data_id = area.closest('.dropdown-menu').attr('data-id')
                var report_ln = area.text();
                var path = area.closest('.dropdown-menu').attr('data-url');

                $('.card-statistic-4').block({
                    message: '{{ __('Processing...') }}',
                    css: {
                        border: 'none',
                        padding: '15px',
                        color: '#fff'
                    }
                });

                $.ajax({
                    type: "GET",
                    dataType: 'JSON',
                    async: false,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: url + path + report_type,
                    success: function (data) {
                        $('.card-statistic-4').unblock()
                        $('.order-statistics-category').removeClass('active');
                        area.addClass('active');
                        $('#orders-category-month').html(report_ln)

                        window.sales_by_category.data.labels = data.categories;
                        window.sales_by_category.data.datasets[0].data = data.sales; // or you can iterate for multiple datasets
                        window.sales_by_category.update(); // finally update our chart
                    },
                    error: function (data) {
                        $('.card-statistic-4').unblock()
                        $('#' + data_id).html('{{ __('Something went wrong with ajax') }}')
                    }


                });
            })
        });

        // function to update our chart
        $(document).ready(function () {
            $('.order-statistics-sales').on('click', function (e) {
                var area = $(this);
                var report_type = area.attr('data-report-type');
                var url = $('#url').val();
                var data_id = area.closest('.dropdown-menu').attr('data-id')
                var report_ln = area.text();
                var path = area.closest('.dropdown-menu').attr('data-url');

                $('.card-statistic-5').block({
                    message: '{{ __('Processing...') }}',
                    css: {
                        border: 'none',
                        padding: '15px',
                        color: '#fff'
                    }
                });

                $.ajax({
                    type: "GET",
                    dataType: 'JSON',
                    async: false,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: url + path + report_type,
                    success: function (data) {
                        $('.card-statistic-5').unblock()
                        $('.order-statistics-sales').removeClass('active');
                        area.addClass('active');
                        $('#orders-sales-month').html(report_ln)

                        window.sales_state.data.labels = data.labels;
                        window.sales_state.data.datasets[0].data = data.sales; // or you can iterate for multiple datasets
                        window.sales_state.update(); // finally update our chart
                    },
                    error: function (data) {
                        $('.card-statistic-5').unblock()
                        $('#' + data_id).html('{{ __('Something went wrong with ajax') }}')
                    }


                });
            })
        });
    </script>
@endpush
