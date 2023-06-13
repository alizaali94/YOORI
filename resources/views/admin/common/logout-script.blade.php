@push('script')
    <script type="text/javascript">
         function logout_user_devices(route, id) {
            var url = "{{url('/')}}"+route;

            Swal.fire({
                title: '{{ __('Are you sure?') }}',
                text: '{{ __("You will not be able to revert this") }}',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '{{ __('Yes Logout') }}'
            }).then((confirmed) => {
                if (confirmed.isConfirmed) {
                    $.ajax({
                        type: 'GET',
                        dataType: 'json',
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: url,
                    })
                        .done(function(response) {
                            Swal.fire(
                                response.title,
                                response.message,
                                response.status
                            );

                        })
                        .fail(function(error) {
                            Swal.fire('{{ __('Ops') }}', '{{ __('Something went wrong with ajax!') }}', 'error');
                        })
                }
            });
        };
    </script>
@endpush
