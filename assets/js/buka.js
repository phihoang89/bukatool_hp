/*click scroll*/
$("#top-scroll").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},200);
});