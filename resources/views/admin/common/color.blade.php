@push('script')
    <script>
        $('#Add').show();
        $('#Update').hide();
        $('#addbtn').show();
        $('#updatebtn').hide();
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        })

        function editdata(id) {
            $('#Add').hide();
            $('#Update').show();
            $('#addbtn').hide();
            $('#updatebtn').show();
            $.ajax({
                url: "/color_edit/" + id,
                type: "GET",
                dataType: "json",
                success: function(data) {
                    $("#id").val(data.id)
                    $("#name").val(data.name)
                    $("#code").val(data.code)
                }
            })
        }


        function updateValue() {

            var id = $('#id').val();
            var name = $('#name').val();
            var code = $('#code').val();

            $.ajax({
                type: "POST",
                dataType: "json",
                data: {
                    "_token": "{{ csrf_token() }}",
                    name: name,
                    code: code,
                },
                url: "/color-update/" + id,
                success: function(response) {
                    Swal.fire(
                        response[2],
                        response[0],
                        response[1]
                    ).then((confirmed) => {
                        location.reload();
                    });
                },
                error: function(error) {
                }
            })
        }
    </script>
@endpush
