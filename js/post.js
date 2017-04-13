 $(function() {
     $("img.lazy").lazyload();
  });



$('img.lazy').load(function() {
    masonry_update();
});

function masonry_update() {     
    var $feed = $('#feed');
    $works_list.imagesLoaded(function(){
        $works_list.masonry({
            itemSelector: '.feedItems',　
            isFitWidth: true,　
            columnWidth: 366
        });
    });
 }


 // var amountScrolled = 500;

 //    $(window).scroll(function() {
 //        if ( $(window).scrollTop() > amountScrolled ) {
 //            $('a.back-to-top').fadeIn('slow');
 //        } else {
 //            $('a.back-to-top').fadeOut('slow');
 //        }
 //    });

 //    $('a.back-to-top, a.back-to-top-link').click(function() {
 //        $('html, body').animate({
 //            scrollTop: 0
 //        }, 700);
 //        return false;
 //    });