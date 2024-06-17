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
		// console.log("hi");
  

		five2nine.on('click', function ()  {	
		// console.log("hi");	
			$('#linkscontainer').addClass("ninetofive");
			$('#linkscontainer').removeClass("all");
			casual.show(200);
			business.hide(200);


			// $("a#subsub").css("margin-top", "200px"); 
			// $("a#housework").css("margin-top", "160px");
			// $("a#sicklove").css("margin-top", "600px");
		});

		// five2nine.off('click', function ()  {
		// 	// console.log("hi");	
		// 	$('#linkscontainer').addClass("all");
		// 	$('#linkscontainer').removeClass("ninetofive");
		// 	business.show(200);
		// 	casual.show(200);
		// 	// casual.toggle(200);
		// });
		
		nine2five.on('click', function ()  {
			// console.log("hi");
			$('#linkscontainer').addClass("ninetofive");
			$('#linkscontainer').removeClass("all");
			business.show(200);
			casual.hide(200);
		});
	

		// nine2five.off('click', function ()  {
		// 	// console.log("hi");
		// 	// casual.toggle(200);
		// 	// business.toggle(200);
		// 	$('#linkscontainer').addClass("all");
		// 	$('#linkscontainer').removeClass("ninetofive");
		// 	business.show(200);
		// 	casual.show(200);
		// });

		all.on('click', function ()  {
			// console.log("hi");
			$('#linkscontainer').addClass("all");
			$('#linkscontainer').removeClass("ninetofive");
			$('#linkscontainer').removeClass("fivetonine");
			business.show(200);
			casual.show(200);
			// $("a#subsub").css("margin-top", "930px !important");
			// $("a#housework").css("margin-top", "1170px");
			// $("a#archive").css("margin-top", "1790px");
			// $("a#sicklove").css("margin-top", "1290px");
		});

		// all.off('click', function ()  {
		// 	// console.log("hi");
		// 	// casual.toggle(200);
		// 	// business.toggle(200);
		// 	business.show(200);
		// 	casual.show(200);
		// 	$('#linkscontainer').addClass("all");
		// 	$('#linkscontainer').removeClass("ninetofive");
		// 	$('#linkscontainer').removeClass("fivetonine");
		// });
	
// var figure = $(".playvid").hover( hoverVideo, hideVideo );

// function hoverVideo(e) {  
//     $('video', this).get(0).play(); 
// }

// function hideVideo(e) {
//     $('video', this).get(0).pause(); 
// }

});

// var figure = $(".playvid").hover( hoverVideo, hideVideo );

// function hoverVideo(e) {  
//     $('video', this).get(0).pause(); 
// }

// function hideVideo(e) {
//     $('video', this).get(0).play(); 
// }

// five2nine.on('click', function ()  {
//     $("#linkscontainer").addClass("intro note");

// all.on('click', function ()  {








