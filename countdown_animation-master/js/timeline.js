$(function() {
    $('#ch-1,#ch-2,#transition,#ch-3,#ch-4,#ch-5,#ending').hide();

    $(".start-btn").click(function() {
        $('#start').fadeOut(1000);
        $('#sound').get(0).play();

        $('#ch-1').delay(1000).fadeIn(1000).delay(10000).hide(0);
        $('.circle-wrapper.no1,.circle-wrapper.no2,.circle-wrapper.no3,.circle-wrapper.no4,.circle-wrapper.no5,.circle-wrapper.no6,.circle-wrapper.no7,.circle-wrapper.no8').delay(6500).fadeOut(10);

        $('#ch-2').delay(9000).fadeIn(1000).delay(4000).hide(0);

        $('#transition').delay(12000).show(0).delay(2000).hide(0);

        $('#ch-3').delay(13500).show(0).delay(8000).hide(0);

        $('#ch-4').delay(20000).show(0).delay(2000).fadeOut(1000);

        $('#ch-5').delay(22000).fadeIn(1000);

        $('#ending').delay(27500).show(0);

        
    });
})