jQuery(document).ready(function($) {
    $('.pw-timeline .topsubnav a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800, 'linear');
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 500) {
            $('.topsubnav').addClass('act');
        } else {
            $('.topsubnav').removeClass('act');
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 2500) {
            $('.topsubnav').fadeOut(200);
        } else {
            $('.topsubnav').fadeIn(200);
        }
    });
    $(".intractiveline .aos-init").hover(function() {
        $(".intractiveline .aos-init").removeClass('active');
        $(this).addClass('active');
    });
    AOS.init({
        duration: 1200,
    });
});