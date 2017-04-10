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