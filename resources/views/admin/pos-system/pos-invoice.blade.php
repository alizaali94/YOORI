<?php $color = '#333333'; ?>
        <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet" type="text/css">

    <title>INV-</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            font-size: 10px;
            line-height: 12px;
        }

        h1, h2, h3, h4, h5, h6, p {
            margin: 0;
            padding: 0;
        }

        .bd--bottom {
            border-bottom: 1px dotted #ddd;
        }

        .invoice__system {
            margin: 0 auto;
            background-color: #fff;
            font-size: 9px;
            width: 100%;
        }

        .invoice__header {
            padding: 0 0 10px;
            text-align: center;
            margin-bottom: 8px;
        }

        .invoice__header h1 {
            font-size: 16px;
            margin-bottom: 4px;
        }

        .invoice__customize {
            min-height: 44px;
            line-height: 14px;
            padding-bottom: 5px;
            margin-bottom: 5px;
        }

        .invoice__customize h3 {
            font-size: 12px;
        }

        .invoice__customize p span {
            font-weight: 600;
        }

        .invoice__header {
            height: 58px;
            text-align: center;
            margin-bottom: 8px;
        }

        .invoice__header h1 {
            font-size: 16px;
        }

        .invoice__customize {
            min-height: 44px;
            line-height: 14px;
            padding-bottom: 5px;
            margin-bottom: 5px;
        }

        .invoice__customize h3 {
            font-size: 12px;
        }

        .invoice__customize p span {
            font-weight: 600;
        }

        .invoice__details table {
            padding-bottom: 5px;
            margin-bottom: 3px;
            width: 100%;
        }

        .invoice__details table th {
            font-size: 7.5px;
            font-weight: 600;
            text-align: left;
        }

        .invoice__details table > tbody > tr td:first-child {
            max-width: 12px !important;
        }

        /* .invoice__details table > tbody > tr td:nth-child(2) {
             display: -webkit-box;
             -webkit-box-orient: vertical;
             overflow: hidden;
             text-overflow: ellipsis;
             -webkit-line-clamp: 2;
         }*/
        .invoice__details table > tbody > tr td:last-child {
            text-align: right;
        }

        .total__price {
            text-align: right;
        }

        .price__text {
            text-align: center;
        }

        .total__price small {
            margin-right: 6px;
        }

        .price__text span {
            display: block;
        }

        .invoice__footer {
            margin-top: 12px;
        }

        td {
            font-size: 8px;
        }

        /*@page {
            size: 45mm;
        }*/
        /*@media print {*/
        /*    body.A3.landscape { width: 420mm }*/
        /*    body.A3, body.A4.landscape { width: 20mm }*/
        /*    body.A4, body.A5.landscape { width: 20mm }*/
        /*    body.A5                    { width: 148mm }*/
        /*    body.letter, body.legal    { width: 216mm }*/
        /*    body.letter.landscape      { width: 280mm }*/
        /*    body.legal.landscape       { width: 357mm }*/
        /*}*/
    </style>
</head>
<body>
{{--{{dd($orders)}}--}}
@php
    $i = 1;
@endphp
<div class="invoice__system A5 portrait">
    <div class="invoice__header bd--bottom" style="width: 100%">
        <p style="text-align: right;font-size: 7px;">{{\Carbon\Carbon::parse($order->date)}}</p>
        <h1>{{settingHelper('pos_invoice_title',App::getLocale())}}</h1>
        <p>{{settingHelper('pos_invoice_address')}}</p>
        <span>{{settingHelper('pos_invoice_phone')}}</span>
    </div>
    <div class="invoice__details" style="width: 100%">
        <table class="bd--bottom">
            <tr>
                <th>{{__('No.')}}</th>
                <th>{{__('Particulars')}}</th>
                <th>{{__('Qty')}}</th>
                <th style="text-align: right">{{__('MRP')}}</th>
                <th style="text-align: right">{{__('Amount')}}</th>
            </tr>

            @foreach ($order->orderDetails as $index => $orderDetails)
                <tr>
                    <td width="5%">{{$i++}}</td>
                    <td width="35%">
                        <small>{{ substr($orderDetails->product->product_name,0,32) }} </small><small>{{ strlen($orderDetails->product->product_name) > 32 ? '...' : '' }}</small>
                    </td>
                    <td width="15%">
                        <small>{{$orderDetails->quantity}} </small><small> {{$orderDetails->product->getTranslation('unit', \App::getLocale())}}</small>
                    </td>
                    <td width="15%" style="text-align: right">{{get_price($orderDetails->price,user_curr())}}</td>
                    <td width="30%"
                        style="text-align: right">{{get_price($orderDetails->price * $orderDetails->quantity ,user_curr())}}</td>
                </tr>
            @endforeach

        </table>

        <div>
            <table>
                <tr>
                    <td width="40%"></td>
                    <td width="30%">{{__('Sub Total')}}</td>
                    <td>:</td>
                    <td width="29%" style="text-align: right;white-space: nowrap">{{get_price($order->sub_total,user_curr())}}</td>
                </tr>
                <tr>
                    <td width="40%"></td>
                    <td width="30%">{{__('Discount')}}</td>
                    <td>:</td>
                    <td width="29%" style="text-align: right;white-space: nowrap">{{get_price($order->discount,user_curr())}}</td>
                </tr>
                <tr>
                    <td width="40%"></td>
                    <td width="30%">{{__('Coupon Discount')}}</td>
                    <td>:</td>
                    <td width="29%" width="29"
                        style="text-align: right;white-space: nowrap">{{get_price($order->coupon_discount,user_curr())}}</td>
                </tr>
                <tr>
                    <td width="40%"></td>
                    <td width="30%">{{__('Total Tax')}}</td>
                    <td>:</td>
                    <td width="29%" style="text-align: right;white-space: nowrap">{{get_price($order->tax,user_curr())}}</td>
                </tr>
                <tr>
                    <td width="40%"></td>
                    <td width="30%">{{__('Total Amount')}}</td>
                    <td>:</td>
                    <td width="29%"
                        style="text-align: right;white-space: nowrap">{{get_price($order->total_amount,user_curr())}}</td>
                </tr>
                <tr>
                    <td width="40%"></td>
                    <td width="30%">{{__('Shipping Cost')}}</td>
                    <td>:</td>
                    <td width="29%" style="text-align: right;white-space: nowrap">{{get_price($order->shipping_cost,user_curr())}}</td>
                </tr>
                <tr>
                    <td width="40%"></td>
                    <td width="30%">{{__('Net Payable')}}</td>
                    <td width="1%">:</td>
                    <td width="29%"
                        style="text-align: right;white-space: nowrap">{{get_price($order->total_payable,user_curr())}}</td>
                </tr>
            </table>
        </div>

        <footer class="invoice__footer">
            <p>{{settingHelper('pos_invoice_terms_condition')}}</p>
            <p style="text-align: center">{{__('powered by ')}}<a
                        href="#">{{settingHelper('pos_invoice_powered_by')}}</a></p>
        </footer>

    </div>
</div>
<script>
    var is_chrome = function () {
        return Boolean(window.chrome);
    }
    if (is_chrome) {
        window.print();
        setTimeout(function () {
            window.close();
        }, 10000);
        //give them 10 seconds to print, then close
    } else {
        window.print();
    }
</script>
</body>
</html>
