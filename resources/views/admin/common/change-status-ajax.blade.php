@push('script')
    <script type="text/javascript">
        $(document).ready(function () {
            $(".status-change").on('click', function () {
                var token = "{{ csrf_token() }}";

                var value = $(this).val().split('/');

                var url = "{{url('')}}" + '/admin/' + value[0];
                if ($(this).is(':checked')) {
                    var status = 1;
                } else {
                    var status = 0;
                }

                var formData = {
                    id: value[1],
                    status: status
                }
                alert('sdf');

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        data: formData,
                        _token: token
                    },
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: url,
                    success: function (response) {
                        toastr['success'](response)
                        // Swal.fire(
                        //     'Success!',
                        //     response,
                        //     'success'
                        // );
                    },
                    error: function (response) {
                        toastr['error'](response)
                        // Swal.fire('Ops..!', response, 'error');
                    }

                });

            });
        });


        function approve_payment(url, order_id)
        {
            var table_row = '#row_' + order_id;
            Swal.fire({
                title: '{{ __('Are you sure?') }}',
                text: "{{ __('You will not be able to revert this') }}",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '{{ __('Yes approve it!') }}',
                cancelButtonText: '{{ __('Cancel') }}'
            }).then((confirmed) => {
                if (confirmed.isConfirmed) {
                    $.ajax({
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            id: order_id,
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
                            // if (response.status != 'error'){
                            //     $(table_row).fadeOut(2000);
                            // }
                        })
                        .fail(function(error) {
                            Swal.fire('{{ __("Ops..!") }}', '{{ __('Something went wrong with ajax!') }}', 'error');
                        })
                }
            });
        }

    </script>
@endpush
