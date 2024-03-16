const appConsts = {
	title: "Chuck's Blogroll",
	idWhereToAppend: "idBlogrollContainer",
	urlFeedlandServer: "https://feedland.social/",
	urlSocketServer: "wss://feedland.social/",
	urlBlogrollOpml: "https://feedland.com/opml?screenname=cagrimmett&catname=blogroll",
	urlFeedlandViewBlogroll: "https://feedland.com/?username=cagrimmett&catname=blogroll", 
	maxItemsInBlogroll: 40,
	flShowSocketMessages: true,
	flBlogrollUpdates: true,
	blogrollDisplayedCallback: function () {
		$(".divPageBody").css ("display", "block");
		}
	};
function startup () {
	console.log ("startup");
	blogroll (appConsts);
	hitCounter ();
	}
