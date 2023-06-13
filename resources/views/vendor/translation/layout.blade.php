<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{ static_asset('/vendor/translation/css/main.css') }}">
</head>
<body>

    <div id="app">

        @include('translation::nav')
        @include('translation::notifications')

        @yield('body')

    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="{{ static_asset('/vendor/translation/js/app.js') }}"></script>

    <script type="text/javascript">
        function delete_row(route, row_id) {

            var table_row = '#row_' + row_id;
            var url = "{{url('')}}" + 'admin/' + route + row_id;

            $.ajax({
                type: 'POST',
                dataType: 'json',
                data: {
                    id: row_id,
                },
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url,
            })
                .done(function (response) {

                });
        }

    </script>
</body>
</html>
