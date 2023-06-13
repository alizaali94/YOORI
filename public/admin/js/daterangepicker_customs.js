$(function() {

    $('.reportrange').daterangepicker({
        autoUpdateInput: false,
        timePicker: true,
        locale: {
            cancelLabel: "Clear",
            format: 'M-DD-YYYY hh:mm A'
        },
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    });

    $('.reportrange').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM-DD-YYYY hh:mm A') + ' - ' + picker.endDate.format('MM-DD-YYYY hh:mm A'));
    });
    $('.reportrange').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });

});
