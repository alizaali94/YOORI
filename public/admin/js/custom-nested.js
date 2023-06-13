$(function () {
    "use strict";
    $(document).ready(function () {
        $('#add-menu-item').on('click', function () {
            var selector = $('#clone_menu .dd-item');
            selector.clone().appendTo($('.dd-list').first());
        });

        $('#nestable3').nestable();

        $('li.dd-item').each(function (list) {
            if ($(this).parents('ol').length == 1) {
                $(this).find('#mega-menu-area').show(500);
            } else {
                $(this).find('#mega-menu-area').hide(500);
            }
        });

        $('#nestable3').nestable().on('change', function (e) {

            $('li.dd-item').each(function (list) {
                if ($(this).parents('ol').length == 1) {
                    $(this).find('#mega-menu-area').show();
                } else {
                    $(this).find('#mega-menu-area').hide();
                }

                if ($(this).parents('ol').length == 1) {

                    $(this).find('#menu_lenght').val(1);

                } else if ($(this).parents('ol').length == 2) {

                    $(this).find('#menu_lenght').val(2);

                }
            });
        });
    });
});
