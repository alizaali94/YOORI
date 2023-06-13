
@push('script')
    <script type="text/javascript">
        $(document).ready(function () {
            $('.customer-by-ajax').select2({
                placeholder: "{{ __('Select Customer') }}",
                minimumInputLength: 2,
                ajax: {
                    type: "GET",
                    dataType: 'json',
                    url: '{{ route('user.by.ajax') }}',

                    data: function (params) {

                        return {
                            q: params.term // search term
                        };
                    },
                    delay: 250,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    processResults: function (data) {
                        return {
                            results: data
                        };
                    },
                    cache: true
                }
            });
        });
    </script>
@endpush
