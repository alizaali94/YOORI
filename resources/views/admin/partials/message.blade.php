@if(Session::has('info'))
    <script type="text/javascript">
        "use strict";
        $(document).ready(function () {
            toast.info({
                title: "{{__('Info')}}",
                message: '{{Session::get('info')}}',
                position: 'bottomRight'
            });
            toastr.clear();
            return false;
        });
    </script>
@elseif(Session::has('success'))
    <script type="text/javascript">
        "use strict";
        $(document).ready(function () {
            toast.success({
                title: "{{__('Success')}}",
                message: '{{Session::get('success')}}',
                position: 'bottomRight'
            });
            toastr.clear();
            return false;
        });
    </script>
@elseif(Session::has('warning'))
    <script type="text/javascript">
        "use strict";
        $(document).ready(function () {
            toast.warning({
                title: "{{__('Warning')}}",
                message: '{{Session::get('warning')}}',
                position: 'bottomRight'
            });
            toastr.clear();
            return false;
        });
    </script>
@elseif(Session::has('error'))
    <script type="text/javascript">
        "use strict";
        $(document).ready(function () {
            toast.error({
                title: "{{__('Error')}}",
                message: '{{Session::get('error')}}',
                position: 'bottomRight'
            });
            toastr.clear();
            return false;
        });
    </script>
@endif
