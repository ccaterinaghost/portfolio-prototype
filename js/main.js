var $win = $('window');
var $logo = $('.logo');



$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$logo.css('background-position', 'center ' + scrollPos / 2 + 'px');
});