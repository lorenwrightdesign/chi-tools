jQuery( document ).ready( function( $ ) {

    /********************************************
                detect browser
    *********************************************/

    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    if ((is_chrome)&&(is_safari)) {is_safari=false;}
    if ((is_chrome)&&(is_opera)) {is_chrome=false;}


    if (is_chrome) {
        $('body').addClass('chrome');
    }

    if (is_firefox) {
        $('body').addClass('firefox');
    }

    if (is_explorer) {
        $('body').addClass('ie');
    }

});
