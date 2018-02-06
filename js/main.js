$(document).ready(function(){

	$('.selectcreditcard').hover(function () {
	    $(".creditcard-extracontent").show();
	    $(".creditcard-extracontent").css({"display": "flex", "justify-content": "center", "font-weight": "normal"});
	    },function () {
	    $(".creditcard-extracontent").hide();
	});

	$('.selectaccountfinder').hover(function () {
	    $(".accountfinder-extracontent").show();
	    $(".accountfinder-extracontent").css({"display": "flex", "justify-content": "center", "font-weight": "normal"});
	    },function () {
	    $(".accountfinder-extracontent").hide();
	});

	$('.selectborrower').hover(function () {
	    $(".borrower-extracontent").show();
	    $(".borrower-extracontent").css({"display": "flex", "justify-content": "center", "font-weight": "normal"});
	    },function () {
	    $(".borrower-extracontent").hide();
	});

	$('.selectsaver').hover(function () {
	    $(".saver-extracontent").show();
	    $(".saver-extracontent").css({"display": "flex", "justify-content": "center", "font-weight": "normal"});
	    },function () {
	    $(".saver-extracontent").hide();
	});

	$('.selectgiver').hover(function () {
	    $(".giver-extracontent").show();
	    $(".giver-extracontent").css({"display": "flex", "justify-content": "center", "font-weight": "normal"});
	    },function () {
	    $(".giver-extracontent").hide();
	});

});