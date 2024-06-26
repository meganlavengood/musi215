$(function () {
	// create an object with the date of one week ago
	var yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	// var yesterday = new Date('January 25, 2023 00:00:00 GMT-5:00'); (for fudging date for testing)
	let yesterdayEpoch = Date.parse(yesterday);
	console.log(yesterday);
	console.log(yesterdayEpoch);

	// loop through all list items with a date
	$("div[date]").each(function () {
		// create a postDate in a date object
		var postDate = Date.parse($(this).attr("date"));
		console.log($(this).attr("date"));
		console.log(postDate);

		// compare dates and hide old posts
		if (postDate < yesterdayEpoch) $(this).hide();
	});

	// open links to outside sites in new tab
	$(document.links)
		.filter(function () {
			return this.hostname != window.location.hostname;
		})
		.attr("target", "_blank");

});


// table row highlighting; this does not work but what if it did

$("td").hover(
	function () {
		$el = $(this);

		$el.parent().addClass("hover");

		if ($el.parent().has("td[rowspan]").length == 0) $el.parent().prevAll("tr:has(td[rowspan]):first").find("td[rowspan]").addClass("hover");
	},
	function () {
		$el.parent().removeClass("hover").prevAll("tr:has(td[rowspan]):first").find("td[rowspan]").removeClass("hover");
	}
);