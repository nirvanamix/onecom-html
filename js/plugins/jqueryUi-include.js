jQuery(document).ready(function($) {
	$( function() {
		var availableTags = [
			"ActionScript",
			"AppleScript",
			"Asp",
			"BASIC",
			"C",
			"C++",
			"Clojure",
			"COBOL",
			"ColdFusion",
			"Erlang",
			"Fortran",
			"Groovy",
			"Haskell",
			"Java",
			"JavaScript",
			"Lisp",
			"Perl",
			"PHP",
			"Python",
			"Ruby",
			"Scala",
			"Scheme"
		];
		$( ".autocomplete" ).autocomplete({
			source: availableTags
		});
	});
	//------------  slider 1
	$("#slider-1").slider({
		min: 0,
		max: 100,
		values: [0,100],
		step: 1,
		range: true,
		stop: function(event, ui) {
			var th = $(this);
			th.parents('.slider-wr-ui').find(".minCost").val($(th).slider("values",0));
			th.parents('.slider-wr-ui').find(".maxCost").val($(th).slider("values",1));
		},
		slide: function(event, ui){
			var th = $(this);
			th.parents('.slider-wr-ui').find(".minCost").val($(th).slider("values",0));
			th.parents('.slider-wr-ui').find(".maxCost").val($(th).slider("values",1));
		}
	});
	/*---------------------------------------------------------*/
	// Пеервірка на ввід коректних значень
	$(".slider-wr-ui input").keyup(function(event) {
		var th_val = $(this).val();
		th_val = $.trim(th_val);
		th_val_number = $.isNumeric(th_val);
		if(th_val_number == false){
			$(this).val('');
		}
		else{
			$(this).val(th_val)
		}
	});
	$(".slider-wr-ui input").change(function(event) {
		var th_val = $(this).val();
		if(th_val == ""){
			$(this).val($(this).attr('value'));
		}
	});

	$(".slider-wr-ui input.minCost").change(function(event) {
		var th_val = $(this).val();
		var th_val_min = $(this).attr('data-min');
		if(parseInt(th_val) < parseInt(th_val_min)){
			alert('sdf')
			$(this).val($(this).attr('data-min'));
		}
	});

	$(".slider-wr-ui input.maxCost").change(function(event) {
		var th_val = $(this).val();
		var th_val_max = $(this).attr('data-max');
		if(parseInt(th_val) > parseInt(th_val_max)){
			$(this).val($(this).attr('data-max'));
		}
	});
	// End Пеервірка на ввід коректних значень

	// Ввід значення в input
	$(".slider-wr-ui .minCost").change(function(){
		// Визначення значень в input
		var value1= $(this).parents('.slider-wr-ui').find(".minCost").val();
		var value2= $(this).parents('.slider-wr-ui').find(".maxCost").val();
		// Пеервіка на той випдаок якщо значення мінімального значення більше макесального
		if(parseInt(value1) > parseInt(value2)){
			value1 = value2
			$(this).parents('.slider-wr-ui').find(".minCost").val(value1);
		}
		// безвопсерднє керування салайдером
		$(this).parents('.slider-wr-ui').find(".slider-ui").slider("values",0,value1);
	});
	$(".slider-wr-ui .maxCost").change(function(){
		// Визначення значень в input
		var value1= $(this).parents('.slider-wr-ui').find(".minCost").val();
		var value2= $(this).parents('.slider-wr-ui').find(".maxCost").val();
		// Пеервіка на той випдаок якщо значення максеальне значення менше мінімального
		if(parseInt(value1) > parseInt(value2)){
			value2 = value1
			$(this).parents('.slider-wr-ui').find(".maxCost").val(value1);
		}
		// безвопсерднє керування салайдером
		$(this).parents('.slider-wr-ui').find(".slider-ui").slider("values",1,value2);
	});
	/*------------select menu------------*/

	$( ".select" ).selectmenu({});










});