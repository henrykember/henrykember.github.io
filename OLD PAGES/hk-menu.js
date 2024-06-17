'use strict'


$(document).ready(function() {

	$(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $('#preloader').delay(350).fadeOut('slow');

            $('body').delay(350).css({'overflow':'visible'});
     });


//     function hideloader() {
// 	$('#loading').fadeOut('slow',function(){$(this).remove();});
// 	}

// 	setTimeout(hideloader, 1500);
// });

	var fivetonine = $("#fivetonine");
		var ninetofive = $("#ninetofive");
		var all = $("#all");
		var business = $(".business");
		var casual = $(".casual");
		// console.log("hi");
  


		fivetonine.on('click', function ()  {	
		console.log("hi");	
			business.hide(200);
			casual.show(200);
			// casual.toggle(200);
		});

		fivetonine.off('click', function ()  {
			console.log("hi");	
			business.show(200);
			casual.show(200);
			// casual.toggle(200);
		});
		
		ninetofive.on('click', function ()  {
			// console.log("hi");
			// casual.toggle(200);
			// business.toggle(200);
			business.show(200);
			casual.hide(200);
		});

		ninetofive.off('click', function ()  {
			// console.log("hi");
			// casual.toggle(200);
			// business.toggle(200);
			business.show(200);
			casual.show(200);
		});

		all.on('click', function ()  {
			// console.log("hi");
			// casual.toggle(200);
			// business.toggle(200);
			business.show(200);
			casual.show(200);
		});

		all.off('click', function ()  {
			// console.log("hi");
			// casual.toggle(200);
			// business.toggle(200);
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

// var figure = $(".playvid").hover( hoverVideo, hideVideo );

// function hoverVideo(e) {  
//     $('video', this).get(0).pause(); 
// }

// function hideVideo(e) {
//     $('video', this).get(0).play(); 
// }

fivetonine.on('click', function ()  {
	$("a#subsub").css("margin-top", "200px"); 
	$("a#houseworkwrapper").css("top", "200px");
	$("a#houseworkwrapper").css("top", "200px");
});

ninetofive.on('click', function ()  {
	// $("a#telstrawrapper").css("margin-top", "160px");
	$("a#archive").css("margin-top", "500px");
	$("a#subsub").css("margin-top", "930px");
	$("a#houseworkwrapper").css("margin-top", "1170px");
});

all.on('click', function ()  {
	$("a#subsub").css("margin-top", "930px");
	$("a#houseworkwrapper").css("margin-top", "1170px");
	$("a#archive").css("margin-top", "1790px");

});

});





