$(document).ready(function(){
	$('form').submit(function(){
		var errors = false;

		$(".errors").html(''); //clear errors

		var firstname = $('input[name=firstname]').val();
		var lastname = $('input[name=lastname').val();
		var username = $('input[name=username').val();
		var email = $('input[name=email').val();
		var password = $('input[name=password').val();

		if (!isEmail(email)) {
			errors = true;
			$('.errors').append("<p class='error'>Please enter a valid email.</p>")
			$('.error').css('color', 'red');
		}

		function isEmail(email){
		  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		  return re.test(email);
		}

		if(username.length > 20){
			errors = true;
			$('.errors').append("<p class='error'>The username you have entered is too long!</p>");
			$('.error').css('color', 'red');
		};

		if(username.length < 4){
			errors = true;
			$('.errors').append("<p class='error'>The username you have entered is too short!</p>");
			$('.error').css('color', 'red');
		};


		if(errors = true){
			return false;
		};
	});
});