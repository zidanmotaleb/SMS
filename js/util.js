
function cycle($item, $cycler) {
    setTimeout(cycle, 3000, $item.next(), $cycler);
    $item.slideUp(1000, function() {
	$item.appendTo($cycler).show();
    });
}

cycle($('#cycler div:first'), $('#cycler'));

$(window).load(function() {
    $("#flexisel").flexisel({
	visibleItems: 4,
	animationSpeed: 1000,
	autoPlay: true,
	autoPlaySpeed: 3000,
	pauseOnHover: true,
	enableResponsiveBreakpoints: true,
	responsiveBreakpoints: {
	    portrait: {
		changePoint: 480,
		visibleItems: 1
	    },
	    landscape: {
		changePoint: 640,
		visibleItems: 2
	    },
	    tablet: {
		changePoint: 768,
		visibleItems: 3
	    }
	}
    });
});

$(function() {
    window.alert("JQuery call...");
    $("#prizes").accordion();
    $("#dest").accordion();
});
