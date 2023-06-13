
@if(settingHelper('is_pusher_notification_active') == 1)
<script src="{{ static_asset('admin/js/pusher.min.js') }}"></script>
<script>
    //Remember to replace key and cluster with your credentials.
    var pusher = new Pusher('{{ settingHelper('pusher_app_key') }}', {
        cluster: '{{ settingHelper('pusher_app_cluster') }}',
        encrypted: true
    });
    //Also remember to change channel and event name if your's are different.
    var channel = pusher.subscribe('notification-send-{{ Sentinel::getUser()->id }}');
    channel.bind('App\\Events\\PusherNotification', function(data) {
        toastr[data.message_type](data.message)
        // alert(data.message);
    });
</script>
@endif

<!-- General JS Scripts -->
<script type="text/javascript" src="{{ static_asset('admin/js/jquery-3.3.1.min.js') }}"></script>
<script type="text/javascript" src="{{ static_asset('admin/js/popper.min.js') }}"></script>
<script type="text/javascript" src="{{ static_asset('admin/js/bootstrap.min.js') }}"></script>

<script type="text/javascript" src="{{ static_asset('admin/js/jquery.nicescroll.min.js') }}"></script>
<script type="text/javascript" src="{{ static_asset('admin/js/moment.min.js') }}"></script>
<script type="text/javascript" src="{{ static_asset('admin/js/stisla.js') }}"></script>
<script type="text/javascript" src="{{ static_asset('admin/js/bootstrap-fileselect.js') }}"></script>
<script type="text/javascript" src="{{ static_asset('admin/js/bootstrap-colorpicker.min.js') }}"></script>
<script type="text/javascript" src="{{ static_asset('admin/js/bootstrap-tagsinput.min.js') }}"></script>
<script src="{{ static_asset('admin/js/sweetalert211.min.js') }}"></script>
<!-- Template JS File -->
<script src="{{ static_asset('admin/js/scripts.js') }}"></script>
@stack('page-specific')
<script type="text/javascript" src="{{ static_asset('admin/js/toastr.min.js') }}"></script>
{!! Toastr::message() !!}
<script src="{{ static_asset('admin/js/page/jquery.selectric.min.js') }}"></script>
<script src="{{ static_asset('admin/js/select2.min.js') }}"></script>
@stack('page-script')
<script src="{{ static_asset('admin/js/custom.js') }}"></script>
<script src="{{ static_asset('admin/js/media.js') }}"></script>
@stack('script')

