"use strict"

var startup = function ()  {
	var fivetonine = $("#fivetonine");
	var ninetofive = $("#ninetofive");
	var business = $(".business");
	var casual = $(".casual");

	fivetonine.on('click', function ()  {		
		business.toggle(200);
	});

	ninetofive.on('click', function ()  {
		casual.toggle(200);
	});
};


$(document).ready(startup);

