var amountScrolled = 200;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.add-find').fadeIn('slow');
	} else {
		$('a.add-find').fadeOut('slow');
	}
});

$('a.add-find').click(function() {

});