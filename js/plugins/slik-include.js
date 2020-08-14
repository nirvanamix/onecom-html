jQuery(document).ready(function($) {
	 $('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	function height_item() {
		var formula = $('.slider-for').outerHeight() / 3;
		$('.slider-nav').css('height', $('.slider-for').outerHeight()  + 'px');
		$('.slider-nav .item').css('height', (formula) - (10)  + 'px');
	}
	height_item();
	$(window).resize(function(event) {
		height_item()
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		focusOnSelect: true,
		vertical: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					vertical: false
				}
			},
		]
	});
});