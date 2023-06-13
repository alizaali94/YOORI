(function ($) {
  "use strict";

    $(document).ready(function () {
        'use strict';
        productByAjax();
        // multi values-selected
        var old_values = [];
        $('.product-by-ajax').on("select2:select", function(event) {
            var values = [];
            // copy all option values from selected
            $(event.currentTarget).find("option:selected").each(function(i, selected){
                values[i] = $(selected).val();
            });
            var url = $(this).data('url');

            var data = $('#campaign-create').serialize();


            $.ajax({
                url: url,
                type: 'post',
                data: data,
                dataType: 'html'
            })
                .done(function(data) {
                    $('#div-content').html(data); // load response
                    // $('#div-content').append(data['products']); // load response
                    $('.selectric').selectric();

                })
                .fail(function() {
                    $('#div-content').html('<i class="bx bx-info-circle"></i> Please Select Products...');
                });

        });

        $('.product-by-ajax').on('select2:unselect', function unselect(e) {
            var data = e.params.data['id'];
            // console.log(data);
            var values = [];
            var url = $(this).data('url');
            // copy all option values from selected
            $(e.currentTarget).find("option:selected").each(function(i, selected){
                values[i] = $(selected).val();
            });
            var data = $('#campaign-create').serialize()

            $('#div-content'); // leave it blank before ajax call
            $.ajax({
                url: url,
                type: 'post',
                data:data,
                dataType: 'html'
            })
                .done(function(data) {
                    $('#div-content').html(data); // load response
                    // $('#div-content').append(data['products']); // load response
                    $('.selectric').selectric();
                })
                .fail(function() {
                    $('#div-content').html('<i class="bx bx-info-circle"></i> Please Select Products...');
                });
        });

        $(document).on('click', '.add-home-content', function (e) {
            e.preventDefault();
            var type = $(this).attr('data-type');
            var for_content = $(this).attr('data-content');
            var div_area = $(this).attr('data-area');
            var content_number = $("#content_number").val();
            content_number++;

            if(type === 'banner-image'){
                addButton($(this), $(this));
            }

            getContent(type, div_area, content_number, for_content)

        });

        $(document).on('click', '.remove-menu-row', function (e){
           e.preventDefault();
           var type = $(this).attr('data-type');
           if (type === 'banner-image'){
               let number_of_banner_images =  $(this).closest('.menu-item').find('.banner-item').children('.item').length;

               var div = $(this).closest('.menu-item').find('.add-home-content');

               // if (number_of_banner_images === 1 || number_of_banner_images === 2){
               //     $(this).closest('.card-body').find('.banner-sizes-0').removeClass('d-none')
               //     for (let i = 1 ; i <= 3 ; i++){
               //         $(this).closest('.card-body').find('.banner-sizes-'+i).addClass('d-none')
               //     }
               // } else{
               //     $(this).closest('.card-body').find('.banner-sizes-0').addClass('d-none');
               //     $(this).closest('.card-body').find('.banner-sizes-3').addClass('d-none');
               //
               //     if(number_of_banner_images === 4 ){
               //         $(this).closest('.card-body').find('.banner-sizes-2').removeClass('d-none')
               //         $(this).closest('.card-body').find('.banner-sizes-1').addClass('d-none')
               //     } else{
               //         $(this).closest('.card-body').find('.banner-sizes-2').addClass('d-none')
               //         $(this).closest('.card-body').find('.banner-sizes-1').removeClass('d-none')
               //     }
               // }

               $(this).closest('.banner-item').remove();
               if (number_of_banner_images <= 4) {
                   div.removeClass('d-none')
               }

           }
        });

        function addButton(content, button){
            let number_of_banner_images =  content.closest('.menu-item').find('.banner-item').children('.item').length;

            if (number_of_banner_images >= 3) {
                button.addClass('d-none');
            } else{
                button.removeClass('d-none')
            }

            // if (number_of_banner_images === 0){
            //     content.closest('.menu-item').find('.banner-sizes-0').removeClass('d-none')
            //     for (let i = 1 ; i <= 3 ; i++){
            //         content.closest('.menu-item').find('.banner-sizes-'+i).addClass('d-none')
            //     }
            // } else{
            //     for (let i = 0 ; i <= 3 ; i++){
            //         if (i === number_of_banner_images){
            //             content.closest('.menu-item').find('.banner-sizes-'+i).removeClass('d-none')
            //         } else{
            //             content.closest('.menu-item').find('.banner-sizes-'+i).addClass('d-none')
            //         }
            //
            //     }
            //
            // }
        }

        function getContent(type, div_area, content_number, for_content){
            var url = $('#url').val();
            let mobile = $('.mobile_home').val();

            var formData = {
                type: type,
                content_count: content_number,
                for_content: for_content,
            }

            if(mobile)
            {
                formData.mobile = mobile;
            }


            $.ajax({
                type: "GET",
                dataType: 'html',
                data: formData,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url + '/' + 'admin/add-home-content',
                success: function (data) {
                    $("#content_number").val(content_number);

                    $('.'+div_area).append(data);

                    $('.select2').select2();
                    $('.selectric').selectric();
                    productByAjax();
                    categoryByAjax();
                    sellerAjax();
                    blogAjax();

                    if (type === 'banner-image'){
                        content_number = for_content
                    }

                    var newlyAdded = 'content-' + content_number;
                    $('.limit-2-custom-message .select2').select2({
                        multiple: "multiple",
                        maximumSelectionLength: 2,
                        language: {
                            maximumSelected: (args) => 'You can select only ' +args.maximum
                        }
                    });
                    $('.limit-4-custom-message .select2').select2({
                        multiple: "multiple",
                        maximumSelectionLength: 4,
                        language: {
                            maximumSelected: (args) => 'You can select only ' +args.maximum
                        }
                    });
                    $('body, html').animate({scrollTop: $('.' + newlyAdded).offset().top}, 1000);
                },
                error: function (response) {
                    toastr['error'](response.message)
                }
            });
        }

    });
})(window.jQuery);

function productByAjax(section_no) {
    let selector;

    if (section_no)
    {
        selector = $('.product-by-ajax_'+section_no);
    }
    else{
        selector = $('.product-by-ajax');
    }
    let date = new Date();
    let timestamp = date.getMilliseconds();
    selector.select2({
        placeholder: "Select Product",
        minimumInputLength: 2,
        // closeOnSelect: false,
        // 'multiple': true,
        ajax: {
            type: "GET",
            dataType: 'json',
            url: $('#url').val() + '/'+$('meta[name="get-me"]').attr('content')+'/product/by/ajax?time='+timestamp+'&',
            data: function (params) {
                // var selectedValue = $(this).val();
                // console.log(selectedValue);
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
                    results:data,
                };
            },
            cache: true
        },
    });
}
