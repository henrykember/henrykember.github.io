"use strict"


$(document).ready(function() {
	// $('#preloader').fadeOut('slow',function(){$(this).remove();});
	// 	startup();
	// function turnoffpreloader(){
		
	// }

	// setTimeout(turnoffpreloader, 2000);

 // var minimumShowLoadingTimeReached = false;
 //    setTimeout(function() {minimumShowLoadingTimeReached = true;}, 5000);

 //    function preloader() {
 //      if (minimumShowLoadingTimeReached) {
 //          showContent();
 //      } else {
 //          setTimeout(function() {
 //            preloader();
 //          }, 500);
 //      }
 //    }

 //    function showContent(){
 //        document.getElementById("loading").style.display = "none";
 //        document.getElementById("content").style.display = "block";
 //    }
 //    window.onload = preloader;

    function hideloader() {
	$('#loading').fadeOut('slow',function(){$(this).remove();});
	}

	setTimeout(hideloader, 3000);
});




var startup = function ()  {
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
};






