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
			// $("a#subsub").css("margin-top", "160px"); 
			// $("a#houseworkwrapper").css("top", "calc(160px + 34vw)");
			// e.preventDefault()
		});

		// fivetonine.off('click', function ()  {
		// 	console.log("hi");	
		// 	business.show(200);
		// 	casual.show(200);
		// 	// casual.toggle(200);
		// 	$("a#subsub").css("margin-top", "calc(160px + 139vw)");
		// 	$("a#houseworkwrapper").css("top", "calc(160px + 180vw)");
		// 	e.preventDefault()
		// });
		
		ninetofive.on('click', function ()  {
			// console.log("hi");
			// casual.toggle(200);
			// business.toggle(200);
			business.show(200);
			casual.hide(200);
			// $("a#archive").css("margin-top", "calc(160px + 158vw)").css("margin-left", "5vw");
		
		});

		// ninetofive.off('click', function ()  {
		// 	// console.log("hi");
		// 	// casual.toggle(200);
		// 	// business.toggle(200);
		// 	business.show(200);
		// 	casual.show(200);
		// 	// $("a#archive").css("margin-top", "calc(160px + 208vw)").css("margin-left", "15vw");
	
		// });

		all.on('click', function ()  {
			// console.log("hi");
			// casual.toggle(200);
			// business.toggle(200);
			business.show(200);
			casual.show(200);
			// $("a#subsub").css("margin-top", "calc(160px + 139vw)");
			// $("a#houseworkwrapper").css("top", "calc(160px + 180vw)");
			// $("a#archive").css("margin-top", "calc(160px + 208vw)").css("margin-left", "15vw");

		});

		// all.off('click', function ()  {
		// 	// console.log("hi");
		// 	// casual.toggle(200);
		// 	// business.toggle(200);
		// 	business.show(200);
		// 	casual.show(200);
		// 	$("a#subsub").css("margin-top", "calc(160px + 139vw)");
		// 	$("a#houseworkwrapper").css("top", "calc(160px + 180vw)");
		// 	$("a#archive").css("margin-top", "calc(160px + 208vw)").css("margin-left", "15vw");
	
		// });
	


var figure = $(".playvid").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}

// var figure = $(".playvid").hover( hoverVideo, hideVideo );


// function hideVideo(e) {
//     $('video', this).get(0).play(); 
// }

// function hoverVideo(e) {  
//     $('video', this).get(0).pause(); 
// }
// fivetonine.on('click', function ()  {
// 	$("a#subsub").css("margin-top", "160px"); 
// 	$("a#houseworkwrapper").css("top", "calc(160px + 34vw)");
// });

// ninetofive.on('click', function ()  {
// 	// $("a#telstrawrapper").css("margin-top", "160px");
// 	$("a#archive").css("margin-top", "calc(160px + 158vw)").css("margin-left", "5vw");
// 	$("a#subsub").css("margin-top", "calc(160px + 139vw)");
// 	$("a#houseworkwrapper").css("top", "calc(160px + 180vw)");
// });

// all.on('click', function ()  {
// 	$("a#subsub").css("margin-top", "calc(160px + 139vw)");
// 	$("a#houseworkwrapper").css("top", "calc(160px + 180vw)");
// 	$("a#archive").css("margin-top", "calc(160px + 208vw)").css("margin-left", "15vw");

// });

});



// fivetonine.on('click', function ()  {
// 	$("a#subsub").css("margin-top", "160px");
// 	$("a#houseworkwrapper").css("top", "calc(160px + 34vw)");
// });






