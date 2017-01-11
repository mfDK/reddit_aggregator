// Wrapped in IIFE to make more modular and not to pollute global namespace
(function() {
var popularSubs = ["AskReddit", "funny", "todayilearned", "science", "pics", "worldnews", "IAmA", "gaming", "videos", "movies"];
		subs = document.getElementById("subs");


function showSubs(subArray) {

	for (var i = 0; i < subArray.length; i += 1) {
		var subLinks = document.createElement("a");
				subDivs = document.createElement("div");
				linkBox = document.createElement("div");

		subLinks.className = "popSubs";
		subLinks.innerHTML = popularSubs[i];
		subDivs.className = "popDivs";

		subLinks.href = "https://www.reddit.com/r/" + popularSubs[i]

		subs.appendChild(subDivs);
		subDivs.appendChild(subLinks);

		// Everything below this must be refactored
		// this function is already way too bloated
		linkBox.className = "boxOfLinks";
		linkBox.id = popularSubs[i];
		subDivs.appendChild(linkBox);

		popRequest(popularSubs[i]);
		// this popRequest function brings back the top 5 links on each popularSubs iteration pertaining
		// to that subreddit. Can this be changed with recursion?

	}
}

// create a function that will send an ajax request to the .json subreddit
// that will bring back the links and place them in their correct div
function popRequest(sub) {
	var popSubRequest = new XMLHttpRequest();
	popSubRequest.open('GET', 'https://www.reddit.com/r/' + sub + '.json');

	popSubRequest.onload = function() {
		if (popSubRequest.status >= 200 && popSubRequest.status < 400) {
			var popSubData = JSON.parse(popSubRequest.responseText);
					for (var n = 0; n < 5; n += 1 ) {
						/*
						 These were used to see what type of can be fetched from the returned object
						 console.log(popSubData.data.children[n].data.subreddit);
						 console.log(popSubData.data.children[n].data.title);
						 console.log(popSubData.data.children[n].data);
						*/
						var linkPost = document.createElement("a");
								linkDiv = document.createElement("div");
								findIdDiv = document.getElementById(popSubData.data.children[n].data.subreddit);


						linkPost.innerHTML = popSubData.data.children[n].data.title;
						linkPost.href = popSubData.data.children[n].data.url;
						linkDiv.appendChild(linkPost);
						findIdDiv.appendChild(linkDiv);
					}
		} else {
			console.log("Request was messed up");
		}
	}

	console.log(popSubRequest.readyState);

	popSubRequest.send();
}


showSubs(popularSubs);

})();
