@push('script')
    <script type="text/javascript">
        function process_payment(route) {
            var url = route;
            Swal.fire({
                title: '{{ __('Are you sure?') }}',
                text: "{{ __('You will not be able to revert this') }}",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '{{ __('Yes Process It!') }}',
                cancelButtonText: '{{ __('Cancel') }}'
            }).then((confirmed) => {
                if (confirmed.isConfirmed) {
                    $.ajax({
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            _method: 'put'
                        },
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
                            ).then((confirmed) => {
                                if (response.url)
                                {
                                    window.location.href = response.url;
                                }
                                else
                                {
                                    location.reload();
                                }
                            });
                        })
                        .fail(function(error) {
                            Swal.fire('{{ __("Ops..!") }}', '{{ __('Something went wrong with ajax!') }}', 'error');
                        })
                }
            });
        }
    </script>
@endpush
