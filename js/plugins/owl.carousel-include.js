jQuery(document).ready(function($) {
	$('.owl-goods').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		responsive:{
			0:{
				items:2,
				margin:6,
			},
			768:{
				items:2.5,
				margin:15,
			},
			992:{
				items:3,
				margin:56,
			},
			1439:{
				items:4
			}
		}
	})





});