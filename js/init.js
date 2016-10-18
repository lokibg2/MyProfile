(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $(document).ready(function () {
            $('.carousel.carousel-slider').carousel({full_width: true});
            $(document).keydown(function (e) {
                if (e.keyCode == 37) {
                    $('.carousel').carousel('prev');

                } else if (e.keyCode == 39) {
                    $('.carousel').carousel('next');

                }
            });

        });

        var $root = $('html, body');
        $('#scroll').click(function () {
            $root.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 2000);
            return false;
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space