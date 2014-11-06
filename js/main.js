var $win = $('window');
var $logo = $('.logo');
var $about = $('.about');
var $links = $('.links');
var $portfolio = $('.portfolio')

$about.waypoint(function (direction) {
	if (direction == 'down') {
		$logo.addClass('js-logo-move');
		$links.addClass('js-links-move');
	} else {
		$logo.removeClass('js-logo-move');
		$links.removeClass('js-links-move');
	}
}, {offset: '70%'});