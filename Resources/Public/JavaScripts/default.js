$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        trigger: "hover",
        delay: {"show": 500, "hide": 100},
        html: true
    });
    $(".main-page-owl").owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        center: false,
        autoplay:true,
        dots:true,

        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
                center: true,
            },
            576: {
                items: 2
            },
            1200: {
                items: 3
            },


        }
    });
    $(".detail-news-owl").owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        center: false,
        autoplay:true,
        dots:true,
        autoHeight:true,
        margin:10,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            1200: {
                items: 1
            },


        }
    });

    $(function () {

        $('[data-toggle="tooltip"]').tooltip()
        $('#full').click( function() {
            $('th').show().addClass("rotate");
            $('td.full').show();
            $('.med').show();
            $('#kurz').removeClass('active')
            $('#med').removeClass('active');
            $('#full').addClass('active');
        });
        $('#med').click( function() {
            $('th').show().removeClass("rotate");
            $('.med').show();
            $('.full').hide();
            $('#kurz').removeClass('active');
            $('#full').removeClass('active');
            $('#med').addClass('active');
        });
        $('#kurz').click( function() {
            $('th').show().removeClass("rotate");
            $('.full').hide();
            $('.med').hide();
            $('#med').removeClass('active');
            $('#full').removeClass('active');
            $('#kurz').addClass('active');
        });

    })
    $("#backLink").click(function(event) {
        event.preventDefault();
        history.back(1);
    });
});