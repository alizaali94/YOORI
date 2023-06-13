<?php $color        =   '#333333';?>
    <!DOCTYPE html>
<html>
<head>
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet" type="text/css">
    <title>{{ $title }}</title>
    <style>
        body {
            font-family: 'Poppins', 'sans-serif' !important;
            font-size: 10pt;
            line-height: 13pt;
            color: #000;
        }
        p {
            margin: 4pt 0 0 0;
        }
        td {
            vertical-align: top;
        }
        .items td {
            border: 0.2mm solid #dadee1;
            background-color: #ffffff;
        }
        .items tr.border-less td {
            border: 0;
            background-color: #ffffff;
        }
        table thead td {
            vertical-align: bottom;
            text-transform: uppercase;
            font-size: 8pt;
            font-weight: bold;
            background-color: #dadee1;
            color: #333;
        }
        table thead td {
            border-bottom: 0.2mm solid #dadee1;
        }
        table .last td {
            border-bottom: 0.2mm solid #dadee1;
        }
        table .first td {
            border-top: 0.2mm solid #dadee1;
        }
        .watermark {
            text-transform: uppercase;
            font-weight: bold;
            position: absolute;
            left: 100px;
            top: 400px;
        }
        .left{
            text-align: left;
        }
        .right{
            text-align: right;
        }
        .center{
            text-align: center;
        }
        .margin-top-20{
            margin-top: 20px;
        }
    </style>
</head>
<body>
<table width="100%">
    <tr>
        <td width="32%" class="d-inline-block">
            @php
                $logo = settingHelper('invoice_logo');
            @endphp
            <img src="{{($logo != [] && @is_file_exists($logo['image_118x45'])) ? public_path($logo['image_118x45']) : public_path('images/default/dark-logo.png') }}"  height="50px">
        </td>
    </tr>
</table>
<table class="items margin-top-20" width="100%" style="border-spacing:3px; font-size: 9pt; border-collapse: collapse;" cellpadding="10">
    <thead >
    <tr>
        <td width="5%">#</td>
        <td width="35%">{{__($title)}}</td>
        <td class="center" width="15%">{{__('ID')}}</td>
    </tr>
    </thead>
    <tbody>
    @foreach ($items as $key => $item)
        <tr style="border-bottom: 1px solid #ccc;">
            <td>{{ $key+1 }}</td>
            <td>{{ $item->getTranslation('title',app()->getLocale()) }}</td>
            <td class="center">{{ $item->id }}</td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
