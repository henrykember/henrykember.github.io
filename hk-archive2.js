'use strict'


$(document).ready(function() {

	$(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $('#preloader').delay(350).fadeOut('slow');

            $('body').delay(350).css({'overflow':'visible'});
     });

		var five2nine = $("#five-nine");
		var nine2five = $("#nine-five");
		var all = $("#all");
		var business = $(".business");
		var casual = $(".casual");

		nine2five.on('click', function ()  {
			// $('#linkscontainer').addClass("ninetofive");
			// $('#linkscontainer').removeClass("all");
			business.show(200);
			casual.hide(200);
		});
		
		five2nine.on('click', function ()  {	
			// $('#linkscontainer').addClass("fivetonine");
			// $('#linkscontainer').removeClass("all");
			casual.show(200);
			business.hide(200);
		});

		all.on('click', function ()  {
			// $('#linkscontainer').addClass("all");
			// $('#linkscontainer').removeClass("ninetofive");
			// $('#linkscontainer').removeClass("fivetonine");
			business.show(200);
			casual.show(200);
         });

var figure = $(".playvid").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}


});





