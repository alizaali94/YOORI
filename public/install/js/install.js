jQuery(function ($) {
    "use strict";
    $(document).ready(function () {
        var $preInstallationTab = $("#pre-installation-tab"),
            $configurationTab = $("#configuration-tab");

        $(".form-next").on('click', function () {
            if ($preInstallationTab.hasClass("active")) {
                $preInstallationTab.removeClass("active");
                $configurationTab.addClass("active");
                $("#pre-installation").find("i").removeClass("fa-circle-o").addClass("fa-check-circle");
                $("#configuration").addClass("active");
                $("#host").focus();
            }
        });

        $(document).on('submit','#config-form',function (e){
             e.preventDefault();
            $('#error_m').addClass('hide');
            $('#success_m').addClass('hide');
            $("input").removeClass('error_border');
            $("#config-form strong").text('');
             let selector = this;
             let url = $(selector).attr('action');
             let method = $(selector).attr('method');
             $('.button-text').addClass('hide');
             $('.loader').removeClass('hide');
             $('.form_submitter').addClass('disable_btn');
             let formData = new FormData(selector);
             $.ajax({
                 method : method,
                 url : url,
                 data : formData,
                 cache: false,
                 contentType: false,
                 processData: false,
                 success : function (response){
                     if (response.success)
                     {
                         $.ajax({
                             method : 'GET',
                             url : response.route,
                             data : formData,
                             cache: false,
                             contentType: false,
                             processData: false,
                             success : function (response){
                                 $('#success_m').removeClass('hide').text(response.success);
                                 window.location.href = response.route;
                             },
                         });
                     }
                     else{
                         $('.button-text').removeClass('hide');
                         $('.loader').addClass('hide');
                         $('.form_submitter').removeClass('disable_btn');
                         $('#error_m').removeClass('hide').text(response.error);
                     }
                 },
                 error : function (error)
                 {
                     $('.button-text').removeClass('hide');
                     $('.loader').addClass('hide');
                     $('.form_submitter').removeClass('disable_btn');

                     if (error.status == 422)
                     {
                         let errors = error.responseJSON.errors;
                         let error_length = Object.keys(error.responseJSON.errors);

                         for (let i = 0; i < error_length.length; i++) {
                             $('input[name = '+error_length[i]+']').addClass('error_border');
                             $('#'+error_length[i]+'_error').text(errors[error_length[i]][0]);
                         }
                     }
                 }
             })
        });
    });
});
