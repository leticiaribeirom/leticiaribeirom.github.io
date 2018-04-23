$(document).ready(function () {
	// Header Scroll
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
	nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();
		sections.each(function () {
			var top = $(this).offset().top - 76
			bottom = top + $(this).outerHeight();
			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
			}
		});
	});
	nav.find('a').on('click', function () {
		var $el = $(this)
		id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
		return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function () {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function () {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});

	var owl2 = $("#logos .owl-carousel"),
		clientsItems = $("#logos .item").length,
		clientsCurrentItem = 1;

	// get counter items
	var current = $('.clients__counter__item1'),
		allCount = $('.clients__counter__item2');

	allCount.text(clientsItems);
	current.text(clientsCurrentItem);

	owl2.owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		rewind: true,
		dots: false,
		items: 3,
		autoplay: 1000,
		animateOut: 'fadeOut',
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			},
			1400: {
				items: 4
			}
		}
	});

	// Go to the next item
	$('.clients__arrow_next').click(function (event) {
		if (clientsCurrentItem == clientsItems) {
			clientsCurrentItem = 1;
			current.text(clientsCurrentItem);
			owl2.trigger('next.owl.carousel');
		} else {
			clientsCurrentItem++;
			current.text(clientsCurrentItem);
			owl2.trigger('next.owl.carousel');
		}
	});

	// Go to the previous item
	$('.clients__arrow_back').click(function (event) {
		if (clientsCurrentItem == 1) {
			clientsCurrentItem = clientsItems;
			current.text(clientsCurrentItem);
			owl2.trigger('prev.owl.carousel', [300]);
		} else {
			clientsCurrentItem--;
			current.text(clientsCurrentItem);
			// With optional speed parameter
			// Parameters has to be in square bracket '[]'
			owl2.trigger('prev.owl.carousel', [300]);
		}
	});

});