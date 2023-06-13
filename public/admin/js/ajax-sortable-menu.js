$(function() {
    "use strict";
    $(document).ready(function() {
        $(document).on("click",'#add-menu-item',function() {
            var selector = $('#clone_menu .menu-item');
            var id = $('#drag-brop-menu .menu-item').last().data("id");
            var $copy  = selector.clone().appendTo('#drag-brop-menu');
            if (isNaN(id))
                id =0;

            $('#drag-brop-menu .menu-item').last().attr("data-id", ++id);

        });

        $('#dragger-brop-menu').sortable({
            group: 'list',
            animation: 200,
            ghostClass: 'ghost',
        });
        $('#drag-brop-menu').sortable({
            group: 'list',
            animation: 200,
            ghostClass: 'ghost',
            maxDepth: 2,
            onSort: save_order,
        });
        function save_order() {
            var sort = $('#drag-brop-menu').sortable('toArray');
            console.log(sort);
            var form_values = $('#url-short').serialize();
            var url = $('#url-short').attr('data-url');
            $.ajax({
                type: "post",
                url: url,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    'From-Ajax': true
                },
                data: form_values, // serializes the form's elements.
                dataType: 'json',
                success: function(data)
                {
                    toastr["success"](data.message);
                    return false;
                },
                error: function (data) {
                    toastr["error"](data.message);
                    return false;
                }
            });
        }
    });
});
