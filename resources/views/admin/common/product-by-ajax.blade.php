@push('script')
    <script type="text/javascript">

        $(".imagecheck").on("click", function () {
            var product_length = $(this).find('.imagecheck-input').attr('data-value');
            product_find(product_length);
            $(".product-by-ajax").val('').change();
        });
        $(document).ready(function () {
            var product_length = 1;``
            $('.imagecheck-input').each(function() {
                var attr= $(this).attr('checked');
                if (typeof attr !== 'undefined' && attr !== false) {
                    var length = $(this).attr('data-value');
                    if (typeof attr !== 'undefined' && attr !== false) {
                        product_length = length;
                        return true;
                    }
                }
            });
            product_find(product_length);
        });

        function product_find(product_length){
            var user_type = $('meta[name="get-me"]').attr('content');

            if (user_type !== 'seller') {
                user_type = 'admin';
            }

            var url = $('#url').val() + '/' + user_type + '/' + 'product/by/ajax';

            $('.product-by-ajax').select2({
                placeholder: "{{ __('Select Product') }}",
                minimumInputLength: 2,
                closeOnSelect: true,
                'multiple': true,
                maximumSelectionLength: product_length,
                ajax: {
                    type: "GET",
                    dataType: 'json',
                    url: url,
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
        }
    </script>
@endpush
