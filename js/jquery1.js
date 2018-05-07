$(":header").addClass("headline");
$("li:lt(3)").hide().fadeIn(1500);
$("li").on("click", function() {
	$(this).remove();
});

$("li em").addClass("seasonal");
$("li.hot").addClass("favorite");

// get the html of the first list
//$ulNode = $("ul");
//$listHTML = $("ul").html();
//$("ul").append($listHTML);

// get the text of the list:
$listText = $("ul").text();
$("ul").append("<p>" + $listText + "</p>");

// get the text in each li:
//$listItemHTML = $("li").html();
//$("li").append("<i>"+ $listItemHTML + "</i>");

$listItemText = $("li").text();
$("li").append("<i>" + $listItemText + "</i>");

// adding elements using append; prepend; appendTo; prependTo:
$(function()
{
	$("ul").before("<p class='notice'>Just updated</p>");
	$("li.hot").prepend("+ ");
	var $newListItem= $("<li><em>gluten-free</em>soy sauce</li>");
	$("li:last").after($newListItem);
});

// setting and remove attributes:
$(function()
{
	$("li#three").removeClass("hot");
	$("li.hot").addClass("favorite");
	$("ul").attr("id", "group");
});


// changing css properties:
$(function()
{
	var backgroundColor = $("li").css("background-color");
	$("ul").append("<p>Color was: " + backgroundColor + "</p>");
	$("li").css({
		"background-color": "#c5a996",
		"border": "1px solid #fff",
		"color": "#000",
		"font-family": "Georgia",
		"padding-left": "+=75"
	});
});

// using each() on each element returned by a query:
$(function()
{
	$("li").each(function() {
		var ids = this.id;
		$(this).append(" <span class='order'>" + ids + "</span>");
	});
});
