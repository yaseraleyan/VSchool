$(function() {
    $('#getting-started').countdown('2016/01/01', function(event) {
        $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
    });
});