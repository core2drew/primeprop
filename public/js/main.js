$(jQuery).ready(function($){
    var $TopNavbar = $('#TopNavbar').not('.developer')
    var $NavbarBrand = $TopNavbar.find('#NavbarBrand')

    $(window).scroll(function() {
        if($(this).scrollTop() > 200) { 
            $TopNavbar.addClass('scrolled')
            $NavbarBrand.attr('src', 'public/images/prime_logo_secondary.svg')
        } else {
            $TopNavbar.removeClass('scrolled')
            $NavbarBrand.attr('src', 'public/images/prime_logo.svg')
        }
    })
})