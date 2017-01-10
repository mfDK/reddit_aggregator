// Function to create AJAX request to reddit.com/r/mma
// Success
// (function() {
// 	var button = document.getElementById("btn");
//
// 	button.addEventListener("click", function() {
// 		var theRequest = new XMLHttpRequest();
// 		theRequest.open('GET', 'https://www.reddit.com/r/MMA.json');
//
// 		theRequest.onload = function() {
// 		// after the onload event occurs, 'responseText' contains complete server response
// 			if (theRequest.status >= 200 && theRequest.status < 400) {
// 				console.log("Request was a success");
// 				var ourData = JSON.parse(theRequest.responseText);
// 				console.log(ourData.data.children);
// 				var allChildren = ourData.data.children;
// 				displayPostTitles(allChildren);
// 				// this above will get the title of the first post
// 				// on the reddit/r/mma subreddit
// 			} else {
// 				console.log("Something went wrong");
// 			}
// 		}
// 		console.log(theRequest)
// 		theRequest.send();
// 	});
//
// 	function displayPostTitles(allPosts) {
// 		var content = document.getElementById("content");
// 			posts = allPosts;
// 			postNumber = allPosts.length;
// 		for (var x = 0; x < 5; x += 1) {
// 			var divPost = document.createElement("div");
// 				postLink = document.createElement("a");
// 			content.appendChild(divPost);
// 			postLink.href = allPosts[x].data.url;
// 			postLink.innerHTML = allPosts[x].data.title;
// 			divPost.appendChild(postLink);
// 		}
// 	}
//
// })();


// Function to create most popular
(function() {
var popularSubs = ["AskReddit", "funny", "todayilearned", "science", "pics", "worldnews", "IAmA", "gaming", "videos", "movies"];
		subs = document.getElementById("subs");


function showSubs(subArray) {

	for (var i = 0; i < subArray.length; i += 1) {
		// subs.innerHTML += this[i] + ". "
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
		// this popRequest function brings back the top 5 links in the iterations subreddit
		// can this be changed with recursion?

	}
}

// create a function that will send an ajax request to the .json subreddit
// that will bring back the links and place them in their correct div
// in the true conditional, it is only bringing back the first child [0] of the request
// run a for loop inside conditional?
function popRequest(sub) {
	var popSubRequest = new XMLHttpRequest();
	popSubRequest.open('GET', 'https://www.reddit.com/r/' + sub + '.json');

	popSubRequest.onload = function() {
		if (popSubRequest.status >= 200 && popSubRequest.status < 400) {
			var popSubData = JSON.parse(popSubRequest.responseText);
			// console.log(popSubData);
					for (var n = 0; n < 5; n += 1 ) {
						// console.log(popSubData.data.children[n].data.subreddit);
						// console.log(popSubData.data.children[n].data.title);
						var linkPost = document.createElement("a");
								linkDiv = document.createElement("div");
								findIdDiv = document.getElementById(popSubData.data.children[n].data.subreddit);


						linkPost.innerHTML = popSubData.data.children[n].data.title;
						linkPost.href = popSubData.data.children[n].data.url;
						linkDiv.appendChild(linkPost);
						// console.log(findIdDiv);
						console.log(popSubData.data.children[n].data);
						findIdDiv.appendChild(linkDiv);
					}
		} else {
			console.log("Request was messed up");
		}
	}

	popSubRequest.send();
}


showSubs(popularSubs);

})();
