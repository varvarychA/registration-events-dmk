
/*----- Плагин для плавной прокрутки к якорю ------*/
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
                }, 1000);
                return false;
            });
        }
});
/*-----    ------*/

/*----- Запуск слайдера галлереи ------*/
$('.gallery').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
/*-----    ------*/