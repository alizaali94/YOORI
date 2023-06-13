jQuery(function ($) {

    'use strict';
    $('.gallery-modal').on('click',function (){
        $('#galleryModal').modal({
            backdrop: 'static',
            keyboard: false,
            focus: true,
        });
        var checked_images = document.querySelectorAll('.article input[type=checkbox]:checked');
        $('.modal-footer').find('.counter').html(checked_images.length);
        var url = $('#url').val();
        var get_data_for    = $(this).attr('data-for');
        var selection       = $(this).attr('data-selection');
        var selected        =  $(this).find('.image-selected').val();
        var q               = $('.media-on-search').val();

        load_modal_content(url, get_data_for, selection,q);

        window.selected_images = []
        window.length = 0;
        window.selected = [];

        window.get_data_for = get_data_for;
        window.selection    = selection;
        window.selected     = Array.from(new Set(selected.split(','))).filter((a) => a);
        window.this         = $(this);
    });

    $(document).on('click', '.gallery-modal', function (e) {
        $('#galleryModal').modal({
            backdrop: 'static',
            keyboard: false,
            focus: true,
        });
        var checked_images = document.querySelectorAll('.article input[type=checkbox]:checked');
        $('.modal-footer').find('.counter').html(checked_images.length);
        var url = $('#url').val();
        var get_data_for    = $(this).attr('data-for');
        var selection       = $(this).attr('data-selection');
        var selected        =  $(this).find('.image-selected').val();

        load_modal_content(url, get_data_for, selection);

        window.selected_images = []
        window.length = 0;
        window.selected = [];

        window.get_data_for = get_data_for;
        window.selection    = selection;
        window.selected     = Array.from(new Set(selected.split(','))).filter((a) => a);
        window.this         = $(this);
    });

    function load_modal_content(url, get_data_for, selection,q = '') {
        $('#modal-loader').show(); // load ajax loader
        var formData = {
            get_data_for: get_data_for,
            selection: selection,
            q: q,
        }
        $.ajax({
            type: "GET",
            dataType: 'json',
            data: formData,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: url + '/' + 'get-media',
            success: function (data) {
                $('.modal').find('.nav-link').removeClass('active');
                $('.modal').find('.nav-link').first().addClass('active');
                $('.modal-body.media-modal').html(data['contents']);
                $('.header-counter .count-showing').html(data['showing']);
                $('.header-counter .total-files').html(data['total']);
                if (data['total'] > data['showing']){
                    $('.load-button').removeClass('d-none');
                }
                $(".article").each(function() {
                    if ((jQuery.inArray($(this).find('.imagecheck-input').val(), window.selected)) != -1) {
                        $(this).addClass('active'); // note 'this' here
                        $(this).find('.imagecheck-input').prop('checked', true); // Checks it
                    }
                });

                $('.modal-footer').find('.counter').html(getLength());

                Dropzone.discover();
                Dropzone.options.mediaUpload = {
                    acceptedFiles: ".jpg,.jpeg,.png,.gif,.mp4,.mpg,.mpeg,.webp,.webm,.ogg,.avi,.mov,.flv,.swf,.mkv,.wmv,wma,.aac,.wav,.mp3,.zip,.rar,.7z,.doc,.txt,.docx,.pdf,.csv,.xml,.ods,.xlr,.xls,.xlsx,.svg",
                    timeout: 180000,
                    error: function (file, response) {
                        toastr['warning'](response)
                    }
                }
            },
            error: function (data) {
            }
        });
    }

    $('#uploader-tab').on('click', function () {
        Dropzone.forElement("form#media-upload").removeAllFiles(true);
    });
    $(document).on('click','.load-new-content',function (){
        var url             = $('#url').val();
        var get_data_for    = window.get_data_for;
        var selection       = $(this).attr('data-selection');

        var formData = {
            get_data_for: get_data_for,
            selection: selection,
        }
        $.ajax({
            type: "GET",
            dataType: 'json',
            data: formData,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: url + '/' + 'load-new-uploaded-media',
            success: function (data) {
                $('.sg-media-gallery').html(data['contents']);
                $('.header-counter .count-showing').html(data['showing']);
                $('.header-counter .total-files').html(data['total']);
                if (data['total'] > data['showing']){
                    $('.load-button').removeClass('d-none');
                } else{
                    $('.load-button').addClass('d-none');
                }
                $(".article").each(function() {
                    if ((jQuery.inArray($(this).find('.imagecheck-input').val(), window.selected)) != -1) {
                        $(this).addClass('active'); // note 'this' here
                        $(this).find('.imagecheck-input').prop('checked', true); // Checks it
                    }
                })
                $('.modal-footer').find('.counter').html(getLength());
            },
            error: function (data) {
            }
        });
    });

    $(document).on('click', '.article.media-modal', function (e) {
        e.preventDefault();
        if ($(this).find('.imagecheck-input').is(':checked')) {
            //if previously checked and again clicked uncheck this
            $(this).find('.imagecheck-input').prop('checked', false); // Check out others
            $(this).removeClass('active'); // Check out others
            //update footer checked counter

            $('.modal-footer').find('.counter').html(getLength());
        } else {
            if (window.selection == 'single'){
                window.selected = [$(this).find('.imagecheck-input').val()]
                window.image_src = $(this).find('img').attr('src');
                $('.media-modal').find('.imagecheck-input').prop('checked', false); // Check out others
                $('.article').removeClass('active'); // Check out others
                // $('.article').removeClass('active');
                $('.modal-footer').find('.counter').html(getLength());
                $(this).addClass('active'); // Checks it
                $(this).find('.imagecheck-input').prop('checked', true); // Checks it

            } else{
                $(this).addClass('active'); // Checks it
                $(this).find('.imagecheck-input').prop('checked', true); // Checks it

                window.selected.push($(this).find('.imagecheck-input').val());
                window.selected.filter((a) => a);
                $('.modal-footer').find('.counter').html(getLength());
            }
        }
    })
    $('.add-selected').on('click', function () {

        var images = Array.from(new Set(window.selected)).filter((a) => a).join(',');
        $(window.this).find('.image-selected').val(images);
        $(window.this).find('.counter').html(getLength());
        $('.modal-footer').find('.counter').html(getLength());
        getImages();
    });

    //************need to work for multiple images**************//
    $(document).on('click', '.image-remove',function () {
        var selected_form  = $(this).closest('.form-group');
        var selected_medias  = selected_form.find('.image-selected').val();

        let selected     = Array.from(new Set(selected_medias.split(','))).filter((a) => a);

        var parent      = $(this).closest('.selected-media');
        var media_id    = parent.attr('data-id');

        selected = selected.filter(item => item !== media_id)

        var images = Array.from(new Set(selected)).filter((a) => a).join(',');
        selected_form.find('.image-selected').val(images);

        selected_form.find('.counter').html(getLength(selected));
        var select_for = selected_form.find('.gallery-modal').attr('data-for');
        var selection = selected_form.find('.gallery-modal').attr('data-selection');
        var variant = selected_form.find('.gallery-modal').attr('data-variant');
        parent.remove();
        var url = $('#assets').val();
        var url = url.replace('assets', '');
        if (selection == 'single' && variant != true){
            var default_image = '<div class="mt-4 gallery gallery-md d-flex"> <img src="'+url+'/public/images/default/default-'+select_for+'-72x72.png" data-default="'+url+'/public/images/default/default-'+select_for+'-72x72.png" alt="category-logo" class="img-thumbnail logo-profile"></div>'
            selected_form.closest('.form-group').find('.selected-media-box').html(default_image);
        }
    });
    ////******************

    $(document).on('click', '.load-more-media', function (e) {
        var showing = $('.header-counter .count-showing').html();

        var url             = $('#url').val();
        var get_data_for    = $('.load-new-content').attr('data-for');
        var selection       = $('.load-new-content').attr('data-selection');

        var formData = {
            get_data_for: get_data_for,
            selection: selection,
            showing: showing,
        }
        $.ajax({
            type: "GET",
            dataType: 'json',
            data: formData,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: url + '/' + 'load-more-uploaded-media',
            success: function (data) {
                $('.sg-media-gallery').append(data['contents']);
                $('.header-counter .count-showing').html(data['showing']);
                $('.header-counter .total-files').html(data['total']);
                if (data['total'] > data['showing']){
                    $('.load-button').removeClass('d-none');
                    $('.load-button .load-more-media').blur();
                } else{
                    $('.load-button').addClass('d-none');
                }
                $(".article").each(function() {
                    if ((jQuery.inArray($(this).find('.imagecheck-input').val(), window.selected)) != -1) {
                        $(this).addClass('active'); // note 'this' here
                        $(this).find('.imagecheck-input').prop('checked', true); // Checks it
                    }
                });
                $('.modal-footer').find('.counter').html(getLength());
            },
            error: function (data) {
            }
        });
    });

    function getLength(data_array = window.selected){
        if (data_array[0] == [""] || data_array[0] == []) {
            return 0;
        } else {
            return data_array.length;
        }
    }

    function getImages(){
        var url             = $('#url').val();
        var formData = {
            selected_medias : window.selected,
            selection       : window.selection,
            data_for        : window.get_data_for,
        }
        $.ajax({
            type: "GET",
            dataType: 'html',
            data: formData,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: url + '/' + 'get-selected-media',
            success: function (data) {
                window.this.closest('.form-group').find('.selected-media-box').html(data);
            },
            error: function (data) {
            }
        });
    }
    $(document).on('change keyup keydown paste', '.media-on-search', function (e) {
        var showing = $('.header-counter .count-showing').html();

        var url             = $('#url').val();
        var get_data_for    = $('.load-new-content').attr('data-for');
        var selection       = $('.load-new-content').attr('data-selection');
        var q               = $('.media-on-search').val();

        load_modal_content(url, get_data_for, selection,q);
    });
});
