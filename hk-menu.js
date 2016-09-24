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
	
});





