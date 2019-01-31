$(document).ready(function () {
    $(window).scroll(function () {
        var y = $(window).scrollTop();
        $("#top-shadow").css({
            'display': 'block',
            'opacity': y / 20
        });
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(".scroll").on('click', function () {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            console.log(hash);
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });

    $('.navbar-toggler').click(function() {
        var y = $(window).scrollTop();
        if ($(".navbar-collapse").is(":visible")) {
            if (y == 0) {
                $("#top-shadow").css({
                    'display': 'block',
                    'opacity': 0
                });
            }
        } else {
            $("#top-shadow").css({
                'display': 'block',
                'opacity': 1
            });
        }
    });

    $(window).on('beforeunload', function() {
        $('html, body').animate({
            scrollTop: $("#me").offset().top - 70
        }, 800);
    });
});
