
/*----- Плагин для плавной прокрутки к якорю ------
jQuery(document).ready(function() {
    setup_slight_scroll_to_anchors();
    
    	function setup_slight_scroll_to_anchors() {
            jQuery('a[href^="#"]').click(function() {
                var link = jQuery(this);
                if (link.attr('href') == '#') return;
                var target = link.attr('href');
                var target_top = jQuery(target).offset().top;
                jQuery('html, body').animate({
                	scrollTop: target_top
                }, 2500);
                return false;
            });
        }
});*/
/*-----    ------*/

/*----- Запуск слайдера галлереи ------
$('.gallery').slick({
    infinite: true,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2410,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '50px',
            slidesToShow: 3
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        }
    ]
    });
*/

/*----- Гамбургер адаптивного меню ------
$('.hamburger').click(function(){
    element = $('.dmk-menu-main');
    display = element.css('display');
    if(display == 'none')
        $('.dmk-menu-main').slideDown(400);
    if(display == 'flex')
        $('.dmk-menu-main').slideUp(400);
});
 
$('.dmk-menu-main li').click(function(){
    var header = $('header');
    var widthHead = header.width();
    if(widthHead < 1170)
        $('.dmk-menu-main').slideUp(400);
});*/
/*-----    ------*/