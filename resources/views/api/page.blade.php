<!doctype html>
<html lang="{{ $lang ? : 'en' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $page->getTranslation('title',$lang) }}</title>

    <link rel="stylesheet" href="{{ mix('frontend/css/app.css') }}">
    @if(settingHelper('text_direction') == 'rtl')
        <link rel="stylesheet" href="{{ static_asset('frontend/css/rtl.css') }}">
    @endif
</head>
<body>
<div class="sg-page-content" >
    <section class="about-section">
        <div class="container">
            <div>{!! $page->getTranslation('content',$lang) !!}</div>
        </div><!-- /.container -->
    </section><!-- /.about-section -->
</div>
</body>
</html>