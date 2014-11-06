var $win = $('window');
var $logo = $('.logo');
var $logosection = $('logosection')

$logosection.waypoint(function () {
	$logo.addClass('js-logo-move');
}, {offset: '10%'});