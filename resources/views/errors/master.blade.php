<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
  <title>@yield('title')</title>

  <!-- General CSS Files -->
    <link rel="stylesheet" href="{{ static_asset('admin/css/bootstrap.min.css') }}">

    <!-- Template CSS -->
    <link rel="stylesheet" href="{{ static_asset('admin/css/style.css') }}">
    <link rel="stylesheet" href="{{ static_asset('admin/css/components.css') }}">

    <!-- Icon -->
    <link rel="stylesheet" href="{{ static_asset('admin/boxicons/css/boxicons.css') }}">
</head>

<body>
  <div id="app">
    @yield('content')
  </div>


  <!-- General JS Scripts -->
	<script type="text/javascript" src="{{ static_asset('admin/js/jquery-3.3.1.min.js') }}"></script>
	<script type="text/javascript" src="{{ static_asset('admin/js/popper.min.js') }}"></script>
	<script type="text/javascript" src="{{ static_asset('admin/js/bootstrap.min.js') }}"></script>
	<script type="text/javascript" src="{{ static_asset('admin/js/jquery.nicescroll.min.js') }}"></script>
	<script type="text/javascript" src="{{ static_asset('admin/js/moment.min.js') }}"></script>
	<script type="text/javascript" src="{{ static_asset('admin/js/stisla.js') }}"></script>
	<!-- Template JS File -->
	<script src="{{ static_asset('admin/js/scripts.js') }}"></script>
	<script src="{{ static_asset('admin/js/custom.js') }}"></script>
	<script src="{{ static_asset('admin/js/select2.min.js') }}"></script>

  <!-- Page Specific JS File -->
</body>
</html>
