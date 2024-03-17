# feedlandBlogrollToolkit

A JavaScript toolkit that displays an OPML-based blogroll, with a connection back to FeedLand for realtime updates. 

It's designed to be integrated into any web app that wants a managed blogroll, such as a CMS or blogging systems. 

### How to

Crib from the example code included here. 

It's a complete functional web app that includes a blogroll. You can try it <a href="https://toolkit.blogroll.social/">here.</a>

If you copy what it does, you should have a blogroll of your own in no time. 

### Caveat

You can test using my <a href="https://feedland.social/opml?screenname=davewiner&catname=blogroll">blogroll OPML file</a>, or if you need to test with your own, post a note in the issues section and we'll try to set you up. It's still really early days, so we're still figuring stuff out. 

To use my blogroll, the <i>options</i> object uses it as the default, so you don't have to do anything. ;-)

### Checklist of places to hook in

1. In the <head> section of your HTML page, add includes of code and styles.

2. In your startup code, call the blogroll routine, passing an object with your options. 

### Options

Here's a list of the options you can add to the object you pass into the blogroll routine.

* urlBlogrollOpml: a string, the URL of the blogroll OPML file,

* idWhereToAppend: the ID of a DOM object, the blogroll will be placed subordinate to it.

* title: a string, containing the title we'll display,

* flDisplayTitle: boolean, if true we display a title at the top of the blogroll,

* maxTitleLength: a number, the maximum number of characters in a title,

* maxCharsItemText: a number, when the user expands a blogroll entry, it reveals the most recent posts, this is the maximum number of characters displayed for one of these items,

* sortBy: a string, indicates whether we sort by date or title. two values are "whenUpdated" and "title".

* flReverseSort: a boolean, if true we sort in reverse, which is the usual thing when viewing by date,

* ixcursor: a number, says where the bar cursor should appear when the blogroll is initialized,

* maxDaysInBlogroll: a number, any item that hasn't been updated in this number of days is left out of the display.

* flSortLinks: a boolean, if true we include links above the blogroll that allow the user to switch between sorting by title and date, and by reverse and not reverse order.

* cursorMovedCallback, a function, called when the cursor moves, takes one param, the cursor index, a number. Provide this if you want to do something every time the cursor moves.

* sortOptionsChangedCallback: a function, called when the user changes one of the sort options. two params, a sortBy value and a boolean for flReverseSort.

* blogrollDisplayedCallback: a function, called after the blogroll has finished initializing, useful if you have code you want to run at that time.

### Notes

Copy whatever styles you need in your application from the demo app's styles.css file.

This toolkit is MIT-licensed, and for now at least, the blogroll-specific code is <i>not</i> released as open source. 

I can't accept pull requests because I edit the code in an outliner, that's <a href="https://github.com/scripting/feedlandInstall/blob/main/docs/sourceopml.md">what source.opml is all about</a>. 

So the best thing to do when you spot a mistake is flag it as an <a href="https://github.com/scripting/feedlandBlogrollToolkit/issues">issue</a> in the repo, point to the code in question if that's helpful, and I'll thank you and make the fix myself.

And if you want to add a feature and have it included in this distribution, post an <a href="https://github.com/scripting/feedlandBlogrollToolkit/issues">issue</a> and let's talk about it. ;-)

