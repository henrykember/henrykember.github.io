"use strict"


$(document).ready(function() {
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
	startup();

});

var startup = function ()  {
	var fivetonine = $("#fivetonine");
	var ninetofive = $("#ninetofive");
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
};






