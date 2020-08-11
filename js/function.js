jQuery(document).ready(function($) {
/******* info for widnow *******/
var info_windows = {
	fun: function(){
		$('body').append('<div class="info_block"><div class="w"></div><div class="h"></div><div class="s"></div></div>');
		let function_info = () =>{
			$('.info_block .w').text(`w: ${$(window).outerWidth()}`);
			$('.info_block .h').text(`h: ${$(window).outerHeight()}`);
				let m = $(window).outerWidth()
					n = $(window).outerHeight()
					M = m, N = n;
				for (let i = 2; i <= m; i++) {
					if (m % i === 0 &&  n % i === 0)
						M = m / i, N = n / i;
				}
			$('.info_block .s').text(`s: ${M}:${N}`);
		}
		function_info();
		$(window).resize(()=>{
			function_info();
		})
		// style
		$('.info_block').css({
			position: 'fixed',
			top: '100px',
			right: 0,
			color: '#fff',
			textShadow: '0px 0px 1px #000',
			background: 'rgba(101,101,101, 0.8)',
			zIndex: '999999',
			padding: '2px 2px 2px 2px',
			fontSize: '10px',
			lineHeight: '12px',
			textAlign: 'right',
			userSelect: 'none',
			fontFamily: 'Arial',
			fontWeight: '400'
		});
	}
}
info_windows.fun();
/******* info for widnow *******/




	const main_menu = {
		fun: () => {
			$('ul.main-nav li').each(function(index, el) {
				if($(this).find('ul').length > 0){
					$(this).addClass('has-ul');
					$(this).find(' > a').append('<i class="drob-ul"></i>')
				}
			});

			$('ul.main-nav .drob-ul').click(function(event) {
				event.preventDefault();
				$(this).parents('li').addClass('mobile-active');
			});


			$('.fasten').click(function(event) {
				$('.navigation').toggleClass('fixed-block');
			});

			$('.open-catalog').click(function(event) {
				event.preventDefault();
				$('.navigation:not(.fixed-block)').slideToggle(100)
			});

			$('ul.main-nav ul[data-back]').each(function(index, el) {
				$(this).append(`<div class="back-nav-mobile">${$(this).attr('data-back')}</div>`)
			});

			$('.back-nav-mobile').click(function(event) {
				$(this).parent('ul').parent('li').removeClass('mobile-active')
			});

			$('.mobile-menu').click(function(event) {
				$('.navigation').addClass('active-mobile')
			});


			$('.navigation .colse').click(function(event) {
				$('.navigation').removeClass('active-mobile')
			});

			jQuery(document).click( function(event){
				if(jQuery(event.target).closest(".open-catalog, .navigation").length ) 
				return;
					$('.navigation:not(.fixed-block)').slideUp(0)
				event.stopPropagation();
			});
		}
	}
	main_menu.fun();

	const location = {
		fun: () => {
			$('.location .top').click(function(event) {
				$(this).toggleClass('active');
				$('.location .bottom').slideToggle(200);
			});
			jQuery(document).click( function(event){
				if(jQuery(event.target).closest(".location").length ) 
				return;
				$('.location .top').removeClass('active');
					$('.location .bottom').slideUp(200);
				event.stopPropagation();
			});
		}
	}
	location.fun();

	const mobile_form = {
		fun: () =>{
			$('.mobile-search').click(function(event) {
				$('.form-autocomplete').addClass('active-mobile');
				$('.form-autocomplete input[type="text"]').focus();
			});
			jQuery(document).click( function(event){
				if(jQuery(event.target).closest(".mobile-search, .form-autocomplete, .ui-menu").length ) 
				return;
					$('.form-autocomplete').removeClass('active-mobile');
				event.stopPropagation();
			});
		}
	}
	mobile_form.fun();
















});