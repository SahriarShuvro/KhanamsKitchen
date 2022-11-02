$(document).ready(function() {
    console.log($('#reportrange').find(":selected").val());
});
$(function() {

    var start = moment().startOf('month');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});

// Payment Date 
{
    let paymentDate = document.querySelectorAll(".paymentDate");

    let dayOfMonthForPaymentPopup = [30, 27, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30]
    let date = new Date(2022, 10, 01);
    let month = dayOfMonthForPaymentPopup[date.getMonth()];
    let day = date.getDate() + 1;


    for (let i = 0; i <= month; i++) {
        day--;
        paymentDate[i].innerHTML = day;
        if (day > month && day > 0) {
            day = 0;
        }
    }
}

// Popup Date RangePeeker 
{

}