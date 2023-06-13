$(function() {
    "use strict";

    $(document).ready(function () {

        var url = $('#url').val();

        categoryByAjax();
        sellerAjax();
        stateAjax();
        timezoneAjax();
        blogAjax();

        $('.all-user-by-ajax').select2({
            placeholder: "Select User",
            minimumInputLength: 2,
            ajax: {
                type: "GET",
                dataType: 'json',
                url: url + '/' + 'admin/all-user-by-ajax',
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

        $('.user-by-ajax').select2({
            placeholder: "Select User",
            minimumInputLength: 2,
            closeOnSelect: true,
            'multiple': true,
            ajax: {
                type: "GET",
                dataType: 'json',
                url: url + '/' + 'admin/user-by-ajax',
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

        // $('.state-by-ajax').select2({
        //     placeholder: "Select State",
        //     minimumInputLength: 2,
        //     closeOnSelect: true,
        //     'multiple': true,
        //     ajax: {
        //         type: "GET",
        //         dataType: 'json',
        //         url: url + '/' + 'admin/state-by-ajax',
        //         data: function (params) {
        //             return {
        //                 q: params.term // search term
        //             };
        //         },
        //         delay: 250,
        //         headers: {
        //             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        //         },
        //         processResults: function (data) {
        //             return {
        //                 results: data
        //             };
        //         },
        //         cache: true
        //     }
        // });
    });

});

function categoryByAjax(section_no) {
    var url = $('#url').val();
    var user_type = $('#get_user_type').val();

    let selector;

    if (section_no)
    {
        selector = $('.filter-categories-by-ajax_'+section_no);
    }
    else{
        selector = $('.filter-categories-by-ajax');
    }

    selector.select2({
            placeholder: "Select Category",
            minimumInputLength: 2,
            ajax: {
                type: "GET",
                dataType: 'json',
                url: url + '/' + user_type + '/categories-by-ajax',
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

function sellerAjax(section_no)
{
    var url = $('#url').val();

    let selector;

    if (section_no)
    {
        selector = $('.seller-by-ajax_'+section_no);
    }
    else{
        selector = $('.seller-by-ajax');
    }

    selector.select2({
        placeholder: "Select Seller",
        minimumInputLength: 2,
        ajax: {
            type: "GET",
            dataType: 'json',
            url: url + '/' + 'admin/seller-by-ajax',
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

function blogAjax(section_no)
{
    var url = $('#url').val();
    var user_type = $('#get_user_type').val();

    let selector;

    if (section_no)
    {
        selector = $('.filter-blogs-by-ajax_'+section_no);
    }
    else{
        selector = $('.filter-blogs-by-ajax');
    }

    selector.select2({
        placeholder: "Select Blog",
        minimumInputLength: 2,
        ajax: {
            type: "GET",
            dataType: 'json',
            url: url + '/' + user_type + '/blogs-by-ajax',
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

function stateAjax(section_no)
{
    var url = $('#url').val();

    let selector;

    if (section_no)
    {
        selector = $('.state-by-ajax_'+section_no);
    }
    else{
        selector = $('.state-by-ajax');
    }

    selector.select2({
        placeholder: "Select State",
        minimumInputLength: 2,
        ajax: {
            type: "GET",
            dataType: 'json',
            url: url + '/' + 'admin/state-by-ajax',
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


function timezoneAjax(section_no)
{
    var url = $('#url').val();

    let selector;

    if (section_no)
    {
        selector = $('.timezone-by-ajax_'+section_no);
    }
    else{
        selector = $('.timezone-by-ajax');
    }

    selector.select2({
        placeholder: "Select Time Zone",
        minimumInputLength: 2,
        ajax: {
            type: "GET",
            dataType: 'json',
            url: url + '/' + 'admin/time-zone-by-ajax',
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