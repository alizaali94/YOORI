let wholesale_product_id =1;
jQuery(function ($) {
    "use strict";
    let status = $('#is_currency_api_enabled').val();
    if (status == 1)
    {
        currencyConverter();
    }

    $("#mask-option").on("click", function (e) {
        e.preventDefault();
        $("#spa_green_mask_option").removeClass("d-none");
    });

    function readURL(input, image_for) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#img_' + image_for).attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".image_pick").on("change", function () {
        var image_for = $(this).attr('data-image-for');
        readURL(this, image_for);
    });

    $(document).on('click', '.common-key', function () {

        var value = $(this).val();
        var value = value.split(" ");
        if (value[1] == 'Read') {
            if (!$(this).is(':checked')) {
                $(this).closest('tr').find('.common-key').prop('checked', false);
            }
        } else {
            if ($(this).is(':checked')) {
                $(this).closest('tr').find('.common-key').first().prop('checked', true);
            }

        }
    });

    $(document).ready(function () {

        $('.change-role').on('change', function (e) {
            e.preventDefault();
            var url = $('#url').val();
            var role_id = $(this).val();

            var formData = {
                role_id: role_id
            }
            $.ajax({
                type: "GET",
                dataType: 'html',
                data: formData,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url + '/' + 'admin/change-role',
                success: function (data) {
                    $('#role-permissions').html(data);
                },
                error: function (data) {
                }
            });
        });

    });

    $(document).ready(function () {

        $('.edit-modal').on('click', function (e) {
            e.preventDefault();

            var id = $(this).closest("tr.table-data-row").find("input").val();
            var url = $(this).attr('data-url');


            var formData = {
                id: id,
            }
            $.ajax({
                type: "GET",
                dataType: 'html',
                data: formData,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url,
                success: function (data) {
                    $('.modal-inner-content').html(data);
                },
                error: function (data) {
                }
            });
        });

    });


    $(document).ready(function () {

        $('.item-details').on('click', function (e) {
            e.preventDefault();
            $('.item-details-modal').modal({
                backdrop: 'static',
                keyboard: false,
                focus: true,
            });

            var url = $(this).attr('data-url');
            $('#modal-loader').show(); // load ajax loader

            $.ajax({
                type: "GET",
                dataType: 'html',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url,
                success: function (data) {
                    $('#modal-loader').hide(); // hide ajax loader
                    $('#dynamic-content').html(data);
                },
                error: function (data) {
                    $('#dynamic-content').html('<i class="glyphicon glyphicon-info-sign"></i> Something went wrong, Please try again...');
                    $('#modal-loader').hide();
                }
            });
        });

    });
    $('.item-detail-modal-close').on('click', function () {
        $('#modal-loader').hide();
        $('#dynamic-content').html('');
    })

    $(document).ready(function () {
        $(".product-status-change").on('click', function (e) {
            // e.preventDefault();
            var token = $('meta[name="csrf-token"]').attr('content');
            var url = $('#url').val();


            var value = $(this).val().split('/');

            var user_type = $('meta[name="get-me"]').attr('content');

            if (user_type !== 'seller') {
                user_type = 'admin';
            }

            var url = url + '/' + user_type + '/' + value[0];

            if ($(this).is(':checked')) {
                var status = 1;
            } else {
                var status = 0;
            }

            var formData = {
                id: value[1],
                status: status,
                change_for: value[2],
            }

            $.ajax({
                type: 'POST',
                dataType: 'json',
                data: {
                    data: formData,
                    _token: token,
                    _method: 'put'
                },
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url,
                success: function (response) {
                    toastr[response.status](response.message)
                    location.reload();
                },
                error: function (response) {
                    toastr['error'](response.message)
                }
            })

        });
        $(document).on('change',".status-change", function (e) {
            // e.preventDefault();
            var token = $('meta[name="csrf-token"]').attr('content');
            let selector = this;
            var url = $('#url').val();
            var user_type = $('meta[name="get-me"]').attr('content');

            if (user_type !== 'seller') {
                user_type = 'admin';
            }

            var value = $(this).val().split('/');


            var url = url + '/' + user_type + '/' + value[0];


            if ($(this).is(':checked')) {
                var status = 1;
            } else {
                var status = 0;
            }

            var formData = {
                id: value[1],
                status: status
            }

            $.ajax({
                type: 'POST',
                dataType: 'json',
                data: {
                    data: formData,
                    _token: token,
                    _method: 'put'
                },
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url,
                success: function (response) {
                    toastr[response.status](response.message);
                    if (response.status == 'error')
                    {
                        $(selector).prop('checked',false);
                    }
                    else{
                        if ($(selector).hasClass('seller_commission'))
                        {
                            if (status == 1)
                            {
                                $('.seller_commission_rate').removeClass('d-none');
                            }
                            else{
                                $('.seller_commission_rate').addClass('d-none');
                            }
                        }
                        if (value[1] == 'live_api_currency')
                        {
                            currencyConverter();
                        }
                    }
                },
                error: function (response) {
                    $(selector).prop('checked',false);
                    toastr['error'](response.message);
                }
            })

        });
    });

    $(document).on('click', '#banner_delete', function () {
        let selector = $(this);
        var url = $('#assets').val();
        url = url.replace('assets', '');
        $('#img_payment_method_banner').attr('src', '' + url + 'public/images/default/default-image-72x72.png');
        selector.hide();
        $('.delete-image').remove();
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: 'payment-methode-banner',
            data: {
                title: "payment_method_banner"
            },
            method: "post",
            success: function () {

            }
        })
    })

    $('.file-select').fileselect();


    $(".flags").select2({
        templateResult: formatState,
        templateSelection: formatState,
    });

    function formatState(opt) {
        if (!opt.id) {
            return opt.text.toUpperCase();
        }

        var optimage = $(opt.element).attr("data-image");

        if (!optimage) {
            return opt.text.toUpperCase();
        } else {
            var $opt = $(
                '<span><img class="mb-1" src="' +
                optimage +
                '" /> ' +
                opt.text.toUpperCase() +
                "</span>"
            );
            return $opt;
        }
    }
    $(function () {
        $(".copy-to-clipboard").on('click', function () {
            var text = $(this).attr("data-text");
            var url = $(this).attr("data-url");
            var $input = $("<input>");
            $("body").append($input);
            $input.val(url).select();
            document.execCommand("copy");
            toastr["success"](text);
            $input.remove();
        });
    });

    $(document).on('click','.copy-url', function (){
        var text = $(this).attr("data-text");
        var url = $(this).attr("data-url");
        copyToClipboard(url,text)
    })
    function copyToClipboard(url,text) {
        var $input = $("<input>");
        $("#dynamic-content").append($input);
        $input.val(url).select();
        document.execCommand("copy");
        toastr["success"](text);
        $input.remove();
    }

    $(".sorting").on("change", function () {
        $("#sorting").submit();
    });
    $(".onChangeFormSubmit").on("change", function () {
        $("#onChangeFormSubmit").submit();
    });
    $(".lang").on("change", function () {
        $("#lang").submit();
    });
    $(".input-group-append.barcode").on("click", function () {
        getKey(16, $(this).parent('.input-group').find('input'));
    });

    function getKey(length = 16, input) {
        var api_key = "";
        var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for (var i = 0; i < length; i++)
            api_key += string.charAt(Math.floor(Math.random() * string.length));

        input.val(api_key);
    }

    $(document).on('change', '.variant', function (e) {
        var form = $('#variant');
        var url = form.attr('data-form');

        getVariant(form, url);
    });

    function getVariant(form, url) {
        $.ajax({
            type: "post",
            url: url,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: form.serialize(), // serializes the form's elements.
            dataType: 'html',
            success: function (data) {
                $('.variant-table').html(data);
            },
            error: function (data) {
            }
        });
    }

    $(document).on('change', '.attribute-sets', function (e) {
        var form = $('#variant');
        var url = $(this).attr('data-url');

        $.ajax({
            type: "post",
            url: url,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: form.serialize(), // serializes the form's elements.
            dataType: 'html',
            success: function (response) {
                $('.attribute-values').html(response);
                $('.select2').select2();

                getVariant($('#variant'), form.attr('data-form'));
            },
            error: function (data) {
            }
        });
    });

    $(document).ready(function () {
        $('#mail_driver').on('change', function () {

            if ($(this).val() === "smtp") {
                $("#sendMailDiv").addClass('d-none');
                $("#mailgunDiv").addClass('d-none');
                $("#sendgridDiv").addClass('d-none');
                $("#smtpDiv").removeClass('d-none');
            } else if ($(this).val() === "sendgrid") {
                $("#sendMailDiv").addClass('d-none');
                $("#mailgunDiv").addClass('d-none');
                $("#smtpDiv").addClass('d-none');
                $("#sendgridDiv").removeClass('d-none');
            } else if ($(this).val() === "sendmail") {
                $("#smtpDiv").addClass('d-none');
                $("#mailgunDiv").addClass('d-none');
                $("#sendgridDiv").addClass('d-none');
                $("#sendMailDiv").removeClass('d-none');
            } else if ($(this).val() === "mailgun") {
                $("#smtpDiv").addClass('d-none');
                $("#sendMailDiv").addClass('d-none');
                $("#sendgridDiv").addClass('d-none');
                $("#mailgunDiv").removeClass('d-none');
            }
        });
    });

    $(document).ready(function () {
        $("#couponType").on("change", function () {
            if ($(this).val() === "product_base") {
                $("#div_product_base").removeClass("d-none");
                $("#div_invoice_base").addClass("d-none");
            } else if ($(this).val() === "invoice_base") {
                $("#div_product_base").addClass("d-none");
                $("#div_invoice_base").removeClass("d-none");
            }
        });
    });

    $(document).ready(function () {
        $("#default_storage").on("change", function () {
            if ($(this).val() === "aws_s3") {
                $("#wasabiDiv").addClass("d-none");
                $("#awsDiv").removeClass("d-none");
            } else if ($(this).val() === "wasabi") {
                $("#awsDiv").addClass("d-none");
                $("#wasabiDiv").removeClass("d-none");
            } else if ($(this).val() === "local") {
                $("#awsDiv").addClass("d-none");
                $("#wasabiDiv").addClass("d-none");
            }
        });
    });

    $(document).ready(function () {
        $("#delivery_hero_payment_type").on("change", function () {
            if ($(this).val() === "delivery_hero_salary") {
                $("#commissionDiv").addClass("d-none");
                $("#salary_plus_commissionDiv").addClass("d-none");
                $("#salaryDiv").removeClass("d-none");
            } else if ($(this).val() === "delivery_hero_commission") {
                $("#salaryDiv").addClass("d-none");
                $("#salary_plus_commissionDiv").addClass("d-none");
                $("#commissionDiv").removeClass("d-none");
            } else if ($(this).val() === "salary_and_commission") {
                $("#commissionDiv").removeClass("d-none");
                $("#salaryDiv").removeClass("d-none");
            } else if ($(this).val() === "") {
                $("#salaryDiv").addClass("d-none");
                $("#commissionDiv").addClass("d-none");
                $("#salary_plus_commissionDiv").addClass("d-none");
            }
        });
    });


    $(document).ready(function () {
        $("#default_cache").on("change", function () {
            if ($(this).val() === "redis") {

                $("#memcached").addClass("d-none");
                $("#redis-cache").removeClass("d-none");

            } else if ($(this).val() === "memcached") {
                $("#memcached").removeClass("d-none");
                $("#redis-cache").addClass("d-none");
            } else {
                $("#redis-cache").addClass("d-none");
                $("#memcached").addClass("d-none");
            }
        })
    });

    $(document).ready(function () {
        $("#cache_status").on("change", function () {
            if ($(this).val() === "enable") {
                $("#driver").removeClass("d-none");
            } else {
                $("#driver").addClass("d-none");
            }
        })

        $('.site-lang').on("change", function () {
            var url = $(this).attr('data-url');

            var lang = $(this).val();
            var title = $(this).attr('data-title');

            var formData = {
                lang: lang,
                url: url,
                title: title,

            }
            $.ajax({
                type: "GET",
                dataType: 'html',
                data: formData,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url,
                success: function (data) {
                    $('#' + title).val(data);
                    $('.note-editable.card-block').html(data);
                },
                error: function (data) {
                }
            });
        });

        $('.pos_invoice_lang').on("change", function () {
            var url = $(this).attr('data-url');

            var lang = $(this).val();
            var title = $(this).attr('data-title');
            var address = $(this).attr('data-address');
            var condition = $(this).attr('data-condition');
            var phone = $(this).attr('data-phone');
            var powered_by = $(this).attr('data-powered_by');

            var formData = {
                lang: lang,
                url: url,
                title: title,
                address: address,
                condition: condition,
                phone: phone,
                powered_by: powered_by,

            }
            $.ajax({
                type: "GET",
                dataType: 'html',
                data: formData,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url,
                success: function (data) {
                    var data = JSON.parse(data);
                    $('#' + title).val(data.title);
                    $('#' + address).val(data.address);
                    $('#' + condition).val(data.condition);
                    $('#' + phone).val(data.phone);
                    $('#' + powered_by).val(data.powered_by);
                },
                error: function (data) {
                }
            });
        });

        $('.digital-product').on('click', function () {
            if ($(this).is(':checked')) {
                $('.shipping-days').addClass('d-none');
                $('.digital-product-div').removeClass('d-none');
            } else {
                $('.shipping-days').removeClass('d-none');
                $('.digital-product-div').addClass('d-none');
            }
        })
        $('.bank-payment').on('click', function () {
            if ($(this).is(':checked')) {
                $('.bank-payment-details').removeClass('d-none');
            } else {
                $('.bank-payment-details').addClass('d-none');
            }
        })

        $('.catalog-product').on('click', function () {
            if ($(this).is(':checked')) {
                $('.external-link').removeClass('d-none');
            } else {
                $('.external-link').addClass('d-none');
            }
        })

        $('.variant-product').on('click', function () {
            if ($(this).is(':checked')) {
                $('.without-variant').addClass('d-none');
                $('.with-variant').removeClass('d-none');
            } else {
                $('.without-variant').removeClass('d-none');
                $('.with-variant').addClass('d-none');
            }
        })
    })

    $(document).on("change input click", ".cross-origin", function (event) {
        var value = $(this).val();
        var input = $(this).parent('.form-group').find('.cross-origin-input');
        $(input).val(btoa(value));
    });

    $(document).ready(function () {
        $("#shipping_fee_type").on("change", function () {
            let val = $(this).val();
            if (val === "flat_rate") {
                $(".flat_rate_box").removeClass("d-none");
                $(".own_product").addClass("d-none");

            } else if (val === "seller_base") {
                $(".flat_rate_box").addClass("d-none");
                $(".own_product").removeClass("d-none");
            } else {
                $(".flat_rate_box").addClass("d-none");
                $(".own_product").addClass("d-none");
            }
            if (val === 'invoice_base')
            {
                $('.shipping_fee_invoice_based').removeClass("d-none");
            }
            else{
                $('.shipping_fee_invoice_based').addClass("d-none");
            }
        })
    });

    $(document).ready(function () {
        $(".shipping-type").on("change", function () {
            if ($(this).val() === "flat_rate") {
                $(".shipping-cost").removeClass("d-none");

            } else {
                $(".shipping-cost").addClass("d-none");
            }
        })
    });

    $(".inputtags").tagsinput('items');

    $('.imagecheck-figure.theme').on('click', function (e) {
        e.preventDefault();
        $('.imagecheck-input').prop('checked', false);
        $(this).parent('.imagecheck').find('.imagecheck-input').prop('checked', true);

    });

    $(document).ready(function () {
        $(".account-active-status-change").on('click', function (e) {
            // e.preventDefault();
            var token = $('meta[name="csrf-token"]').attr('content');
            var url = $('#url').val();
            var user_type = $('meta[name="get-me"]').attr('content');

            if (user_type !== 'seller') {
                user_type = 'admin';
            }

            var value = $(this).val().split('/');


            var url = url + '/' + user_type + '/' + value[0];

            if ($(this).is(':checked')) {
                var status = 1;
            } else {
                var status = 0;
            }

            var formData = {
                id: value[1],
                status: status,
                is_active: value[2]
            }

            $.ajax({
                type: 'POST',
                dataType: 'json',
                data: {
                    data: formData,
                    _token: token,
                    _method: 'put'
                },
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url,
                success: function (response) {
                    // alert('b')
                    toastr[response.status](response.message)
                    if (response.status == 'success') {
                        location.reload();
                    }
                },
                error: function (response) {
                    // alert('a');
                    toastr['error'](response.message)
                }
            })
        });
        $(document).on("click",'#add-item', function () {
            var content_area = $(this).attr('data-area');
            if (content_area === 'content-area') {
                selector = $('.modal').find('.item');
                selector.clone().appendTo('#' + content_area);
            } else {
                wholesale_product_id++;

                var selector = $('.modal').find('.menu-item');
                selector.attr('data-id',wholesale_product_id);

                selector.find('.wholesale_min_qty').attr('data-id',wholesale_product_id);
                selector.find('.wholesale_max_qty').attr('data-id',wholesale_product_id);

                selector.clone().appendTo('#drag-brop-menu');
                priceFixForWholesale();
            }
        });

        $(document).on('keyup','.wholesale_max_qty',function (){
            priceFixForWholesale();
        });
    });

    $(document).ready(function () {
        $(".payment-type").on("change", function () {
            if ($(this).val() === "bank_payment") {
                $(".bank_payment").removeClass("d-none");

            } else {
                $(".bank_payment").addClass("d-none");
            }
        })
    });
    $(document).on('keypress input paste focusin focusout', '#short_description', function (e) {
        var limitCharacters = 200;
        var characters = $(this).val();
        var totalCharacters = characters.length;

        //Update value
        $("#total-caracteres").text(limitCharacters - totalCharacters);

        //Check and Limit Charaters
        if (totalCharacters >= limitCharacters) {
            return false;
        }
    });
    $(document).ready(function () {
        if($('#short_description').length){
            var limitCharacters = 200;
            var characters = $('#short_description').val();
            var totalCharacters = characters.length;

            //Update value
            $("#total-caracteres").text(limitCharacters - totalCharacters);

            //Check and Limit Charaters
            if (totalCharacters >= limitCharacters) {
                return false;
            }
        }
    });
    $(document).ready(function () {
        $('#payment_status').on("change", function () {
            var opval = $(this).val();
            if (opval == "paid") {
                $('#payment_modal').modal("show"); //Open Modal
            } else if (opval == "refunded_to_wallet") {
                return true;
            } else {
                $("#onChangeFormSubmit2").submit();
            }
        });
    });
    $('.limit-2-custom-message .select2').select2({
        multiple: "multiple",
        maximumSelectionLength: 2,
        language: {
            maximumSelected: (args) => 'You can select only ' + args.maximum
        }
    });
    $('.limit-3-custom-message .select2').select2({
        multiple: "multiple",
        maximumSelectionLength: 3,
        language: {
            maximumSelected: (args) => 'You can select only ' + args.maximum
        }
    })
    $('.limit-4-custom-message .select2').select2({
        multiple: "multiple",
        maximumSelectionLength: 4,
        language: {
            maximumSelected: (args) => 'You can select only ' + args.maximum
        }
    });

    $(document).on('click', '.add-store-content', function (e) {
        e.preventDefault();
        var type = $(this).attr('data-type');
        var for_content = $(this).attr('data-content');
        var div_area = $(this).attr('data-area');
        var content_number = $("#content_number").val();
        content_number++;

        if (type === 'banner-image') {
            addButton($(this), $(this));
        }
        getStoreContent(type, div_area, content_number, for_content)
    });

    $(document).on('click', '.remove-menu-row', function (e) {
        e.preventDefault();
        var type = $(this).attr('data-type');
        if (type === 'banner-image') {
            let number_of_banner_images = $(this).closest('.menu-item').find('.banner-item').length;

            var div = $(this).closest('.menu-item').find('.add-store-content');

            $(this).closest('.banner-item').remove();
            if (number_of_banner_images <= 4) {
                div.removeClass('d-none')
            }

        }
    });
    $(document).ready(function () {
        $('.order-statistics').on('click', function (e) {
            e.preventDefault();
            var area = $(this);
            var report_type = area.attr('data-report-type');
            var url = $('#url').val();
            var data_id = area.closest('.dropdown-menu').attr('data-id')
            var report_ln = area.text();
            var path = area.closest('.dropdown-menu').attr('data-url');

            $('.card-statistic-2').block({
                message: 'Processing...',
                css: {
                    border: 'none',
                    padding: '15px',
                    color: '#fff'
                }
            });

            $.ajax({
                type: "GET",
                dataType: 'html',
                async: false,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url + path + report_type,
                success: function (data) {
                    $('#' + data_id).html(data);
                    $('.card-statistic-2').unblock()
                    $('.order-statistics').removeClass('active');
                    area.addClass('active');
                    $('#orders-month').html(report_ln)
                },
                error: function (data) {
                    $('.card-statistic-2').unblock()
                    $('#' + data_id).html('Something went wrong with ajax')
                }
            });
        });
    });
    $(document).ready(function () {
        $('.top-products-state').on('click', function (e) {
            e.preventDefault();
            var area = $(this);
            var report_type = area.attr('data-report-type');
            var url = $('#url').val();
            var data_id = area.closest('.dropdown-menu').attr('data-id')
            var report_ln = area.text();
            var path = area.closest('.dropdown-menu').attr('data-url');

            $('.card-statistic-6').block({
                message: 'Processing...',
                css: {
                    border: 'none',
                    padding: '15px',
                    color: '#fff'
                }
            });

            $.ajax({
                type: "GET",
                dataType: 'html',
                async: false,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url + path + report_type,
                success: function (data) {
                    $('#' + data_id).html(data);
                    $('.card-statistic-6').unblock()
                    $('.top-products-state').removeClass('active');
                    area.addClass('active');
                    $('#top-products-month').html(report_ln)
                },
                error: function (data) {
                    $('.card-statistic-6').unblock()
                    $('#' + data_id).html('Something went wrong with ajax')
                }
            });
        });
        $(document).on('submit','form',function (){
            $.each($(".summernote"),function(){
                if($(this).summernote("codeview.isActivated"))
                {
                    $(this).summernote("codeview.deactivate");
                }
            })
        });
        $(document).on('click','.remove_row',function (){
            $(this).closest('tr').remove();
        });
        $(document).on('click','.add_row',function (){
            let selector = $('.invoice_based_fee table tr');
            selector.clone().appendTo('.invoice_based_tbody');
        });
    });

    $(document).ready(function () {
        if($('.nav-link.bar.error').length){
            $('.nav-link.bar').each(function (){
                $(this).removeClass('active');
                var div = $(this).attr('href');
                $(div).removeClass('show active');
            });
            $('.nav-link.bar.error').eq(0).addClass('active');
            var show_div = $('.nav-link.bar.error').eq(0).attr('href');
            $(show_div).addClass('show active');
        }

        $(document).on('change','#action_type', function () {
            var value = $(this).val();

            if (value == "product") {
                // productByAjax();
                $(".categoryDiv").hide();
                $(".brandDiv").hide();
                $(".sellerDiv").hide();
                $(".blogDiv").hide();
                $(".urlDiv").hide();
                $(".productDiv").show();
                $(".otherDiv").show();
            } else if (value == "category") {
                // categoryByAjax();
                $(".productDiv").hide();
                $(".brandDiv").hide();
                $(".urlDiv").hide();
                $(".blogDiv").hide();
                $(".sellerDiv").hide();
                $(".categoryDiv").show();
                $(".otherDiv").show();
            }else if (value == "brand") {
                $(".productDiv").hide();
                $(".sellerDiv").hide();
                $(".urlDiv").hide();
                $(".brandDiv").show();
                $(".blogDiv").hide();
                $(".otherDiv").show();
                $(".categoryDiv").hide();
            }else if (value == "seller") {
                // sellerAjax();
                $(".productDiv").hide();
                $(".urlDiv").hide();
                $(".sellerDiv").show();
                $(".otherDiv").show();
                $(".brandDiv").hide();
                $(".blogDiv").hide();
                $(".categoryDiv").hide();
            }else if (value == "url") {
                $(".productDiv").hide();
                $(".urlDiv").show();
                $(".otherDiv").hide();
                $(".sellerDiv").hide();
                $(".brandDiv").hide();
                $(".blogDiv").hide();
                $(".categoryDiv").hide();
            }
            else if (value == "blog") {
                // blogAjax();
                $(".productDiv").hide();
                $(".urlDiv").hide();
                $(".otherDiv").show();
                $(".sellerDiv").hide();
                $(".brandDiv").hide();
                $(".categoryDiv").hide();
                $(".blogDiv").show();
            }
        });

        $('#download_update').on('click', function () {
            var url = $(this).attr('data-url');
            $('#app').block({
                message: 'Processing...',
                css: {
                    border: 'none',
                    padding: '15px',
                    color: '#fff'
                }
            });
            $('#download_update').attr('disabled',true);
            setTimeout(function () {
                $.ajax({
                    type: "post",
                    dataType: 'json',
                    async: false,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: url,
                    success: function (data) {
                        if(data.status == 'success') {
                            $('#download_update').closest('.alert').addClass('d-none');
                            $('#download_update').attr('disabled',false);
                        }
                        else{
                            toastr[data.status](data.message)
                        }
                        $('#app').unblock()
                        location.reload();
                    },
                    error: function (data) {
                        $('#app').unblock()
                        toastr['error']('Something went wrong with ajax')
                    }
                });
            }, 500);
        })

        $('#payment_type').on("change", function () {
            var opval = $(this).val();
            if (opval == "cash") {
                $('#modal_payment_type').removeClass("d-none"); //Open Modal
            } else if (opval == "wallet") {
                $('#modal_payment_type').addClass("d-none"); //Open Modal
                $('#paid-to-delivery-man').prop('checked', false);
            }
        });

        $(document).on('change','.action_type',function (){

            let selector = this;
            let selected_val = $(selector).val();
            let section_no = $(selector).data('count');
            let parent_selector = $(this).closest('.row');

            let options = $(selector).find('option');

            options.each(function (){
                let val= $(this).val();
                if (selected_val != val)
                {
                    parent_selector.find("#"+val+'_'+section_no).hide();
                }
                else if (selected_val == val){
                    parent_selector.find("#"+val+'_'+section_no).show();
                }
            })


        });

        $(document).on('change','#vat_and_tax_type',function (){
           let val = $(this).val();
           if (val == 'order_base')
           {
               $('.order_amount').removeClass('d-none');
           }
           else{
               $('.order_amount').addClass('d-none');
           }
        });
    });

    const menuIcon = document.querySelector(".bx.bx-menu");
    const sBar = document.querySelector(".nicescroll-rails.nicescroll-rails-vr");
    menuIcon.onclick = function() {
        sBar.style.left = "242px";
    }
});

function getStoreContent(type, div_area, content_number, for_content) {
    var url = $('#url').val();
    var formData = {
        type: type,
        content_count: content_number,
        for_content: for_content,
    }
    $.ajax({
        type: "GET",
        dataType: 'html',
        data: formData,
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: url + '/' + 'seller/add-shop-content',
        success: function (data) {
            $("#content_number").val(content_number);

            $('.' + div_area).append(data);

            $('.select2').select2();

            if (type === 'banner-image') {
                content_number = for_content
            }

            var newlyAdded = 'content-' + content_number;
            $('.limit-2-custom-message .select2').select2({
                multiple: "multiple",
                maximumSelectionLength: 2,
                language: {
                    maximumSelected: (args) => 'You can select only ' + args.maximum
                }
            });
            $('.limit-4-custom-message .select2').select2({
                multiple: "multiple",
                maximumSelectionLength: 4,
                language: {
                    maximumSelected: (args) => 'You can select only ' + args.maximum
                }
            });
            $('body, html').animate({scrollTop: $('.' + newlyAdded).offset().top}, 1000);
        },
        error: function (response) {
            toastr['error'](response.message)
        }
    });
}
function addButton(content, button) {
    let number_of_banner_images = content.closest('.menu-item').find('.banner-item').children('.item').length;

    if (number_of_banner_images >= 3) {
        button.addClass('d-none');
    } else {
        button.removeClass('d-none')
    }
}

function priceFixForWholesale()
{
    let val = 0;

    let min_selectors = $('.wholesale_min_qty');
    let max_selectors = $('.wholesale_max_qty');
    $.each(max_selectors,function (){
        let data_id = $(this).data('id');
        if (data_id == wholesale_product_id - 1)
        {
            if ($(this).val())
            {
                val = $(this).val();
            }
        }
    });
    $.each(min_selectors,function (){
        let data_id = $(this).data('id');
        if (data_id == wholesale_product_id)
        {
            $(this).val(parseInt(val)+parseInt(1));
        }
    });
}

function currencyConverter() {

    let currency = $('#active_currency').val();
    if (!currency || currency == 'USD') {
        return true;
    }
    else{
        let url = $('#url').val()+'/change-exchange-rate/'+currency;
        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            success: function (response) {
            }
        })
    }
}