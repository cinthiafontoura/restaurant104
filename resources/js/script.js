$(document).ready(function () {
	// Sticky nav
	var waypoint = new Waypoint({
		element: $('.js--section-content'),
		handler: function (direction) {
			if (direction == 'down') {
				$('nav').addClass('sticky');
			} else {
				$('nav').removeClass('sticky');
			}
		},
		offset: '400px;',
	});

	// Mobile nav
	$('.js--nav-icon').click(() => {
		const nav = $('.js--main-nav');
		nav.slideToggle(200);

		const icon = $('.js--nav-icon ion-icon');

		console.log(icon[0].name);

		if (icon[0].name === 'menu') {
			icon[0].name = 'close';
		} else {
			icon[0].name = 'menu';
		}
	});
});
