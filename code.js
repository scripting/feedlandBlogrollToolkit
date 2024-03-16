const options = {
	title: "Test Blogroll",
	urlBlogrollOpml: "https://feedland.social/opml?screenname=davewiner&catname=blogroll",
	urlFeedlandViewBlogroll: "https://feedland.social/?username=davewiner&catname=blogroll", 
	idWhereToAppend: "idBlogrollContainer",
	maxItemsInBlogroll: 40,
	blogrollDisplayedCallback: function () {
		$(".divPageBody").css ("display", "block");
		}
	};
function startup () {
	console.log ("startup");
	blogroll (options);
	}
