<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>

    <link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css">
    <!-- Web Font / @font-face : BEGIN -->

    @php $color = settingHelper('primary_color'); @endphp
    <style>
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            font-family: 'Poppins', sans-serif !important;
            font-size: 14px;
            margin-bottom: 10px;
            line-height: 24px;
            color:#8094ae;
            font-weight: 400;
        }
        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif !important;
        }
        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }
        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        table table table {
            table-layout: auto;
        }
        a {
            text-decoration: none;
            color: {{$color}} !important;
            word-break: break-all;
        }
        img {
            -ms-interpolation-mode:bicubic;
        }
        .email-body {
            width: 96%;
            margin: 0 auto;
            background: #ffffff;
            padding: 10px !important;
        }
        .email-heading {
            font-size: 18px;
            color: {{$color}};
            font-weight: 600;
            margin: 0;
            line-height: 1.4;
        }
        .email-btn {
            background: {{$color}};
            border-radius: 4px;
            color: #ffffff !important;
            display: inline-block;
            font-size: 13px;
            font-weight: 600;
            line-height: 44px;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            padding: 0 30px;
        }
        .email-heading-s2 {
            font-size: 16px;
            color: {{$color}};
            font-weight: 600;
            margin: 0;
            text-transform: uppercase;
            margin-bottom: 10px;
        }
        .link-block {
            display: block;
        }
        p {
            margin-top: 0;
            margin-bottom: 1rem;
        }
        .email-note {
            margin: 0;
            font-size: 13px;
            line-height: 22px;
            color: {{$color}};
        }
    </style>

</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f5f6fa;">
<center style="width: 100%; background-color: #f5f6fa;">
    <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f5f6fa">
        <tr>
            <td style="padding: 40px 0;">
                <table style="width:100%;max-width:620px;margin:0 auto;">
                    <tbody>
                    <tr>
                        @php
                            $logo = settingHelper('dark_logo');
                        @endphp
                        <td style="text-align: center; padding-bottom:25px">
                            <a href="{{ url('/') }}">
                                <img src="{{($logo != [] && @is_file_exists($logo['image_118x45'])) ? static_asset($logo['image_118x45']) : static_asset('images/default/dark-logo.png') }}" alt="Logo">
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table style="width:100%;max-width:620px;margin:0 auto;background-color:#ffffff;">
                    <tbody>
                    <tr>
                        <td style="text-align:center;padding: 50px 30px;">
                            <img style="width:88px; margin-bottom:24px;" src="{{ asset('images/default/kyc-success.png')}}" alt="Verified">
                            <h2 style="font-size: 18px; color: #1ee0ac; font-weight: 400; margin-bottom: 8px;">{{__('Email Verified')}}</h2>
                            <p>{{__('Your email verified successfully.Thanks for staying with us.')}}</p>
                        </td>
                    </tr>
                    @if(!blank(settingHelper('mail_signature') || settingHelper('mail_signature') != ''))
                        <tr>
                            <td style="text-align:left;padding: 20px 30px 40px">
                                {!! settingHelper('mail_signature') !!}
                            </td>
                        </tr>
                    @endif
                    </tbody>
                </table>
                <table style="width:100%;max-width:620px;margin:0 auto;">
                    <tbody>
                    <tr>
                        <td style="text-align: center; padding:25px 20px 0;">
                            <p style="font-size: 13px;">{{ settingHelper('copyright') }}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </table>
</center>
</body>
</html>
