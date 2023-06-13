<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>

    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet" type="text/css">

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
            color: #8094ae;
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
            color: {{$color}}   !important;
            word-break: break-all;
        }

        img {
            -ms-interpolation-mode: bicubic;
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
                                <img src="{{($logo != [] && @is_file_exists($logo['image_118x45'])) ? static_asset($logo['image_118x45']) : static_asset('images/default/dark-logo.png') }}"
                                     alt="Logo">
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table style="width:100%;max-width:620px;margin:0 auto;background-color:#ffffff;">
                    <tbody>
                    <tr>
                        <td style="text-align:center;padding: 30px 30px 15px 30px;">
                            <h2 style="font-size: 18px; color: {{$color}}; font-weight: 600; margin: 0;">{{__('Reset Your Password')}}</h2>
                        </td>
                    </tr>
                    @if($otp)
                        <tr>
                            <td style="text-align:center;padding: 0 30px 20px">
                                <p style="margin-bottom: 10px;">
                                    Hi {{$content->first_name .' '.$content->last_name}},</p>
                                <p style="margin-bottom: 25px;">{{__('use_your_otp')}}</p>

                                <h2 style="font-size: 18px; color: {{$color}}; font-weight: 600; margin: 0;">{{ $otp }}</h2>
                                <p style="margin-bottom: 25px;margin-top: 25px;">{{ __('or')}}</p>
                            </td>
                        </tr>
                    @endif
                    <tr>
                        <td style="text-align:center;padding: 0 30px 20px">
                            @if($otp)
                                <p style="margin-bottom: 10px;">
                                    Hi {{$content->first_name .' '.$content->last_name}},</p>
                            @endif
                            <p style="margin-bottom: 25px;">{{__('Click on the link below to reset your password.')}}</p>
                            <a href="{{ $url }}" class="email-btn">{{__('reset_password')}}</a>
                        </td>
                    </tr>

                    <tr>
                        <td style="text-align:center;padding: 20px 30px 40px">
                            <p>{{ __('If button does not work, Just copy bellow URL then paste to your browser address bar.') }}</p>
                            <a href="{{ $url }}" class="link-block">{{ $url }}</a>
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
