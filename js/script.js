// Function to create AJAX request to reddit.com/r/mma
// Success
(function() {
	var button = document.getElementById("btn");

	button.addEventListener("click", function() {
		var theRequest = new XMLHttpRequest();
		theRequest.open('GET', 'https://www.reddit.com/r/MMA.json');

		theRequest.onload = function() {
		// after the onload event occurs, 'responseText' contains complete server response
			if (theRequest.status >= 200 && theRequest.status < 400) {
				console.log("Request was a success");
				var ourData = JSON.parse(theRequest.responseText);
				console.log(ourData.data.children);
				var allChildren = ourData.data.children;
				displayPostTitles(allChildren);
				// this above will get the title of the first post
				// on the reddit/r/mma subreddit
			} else {
				console.log("Something went wrong");
			}
		}
		console.log(theRequest)
		theRequest.send();
	});	

	function displayPostTitles(allPosts) {
		var content = document.getElementById("content");
			posts = allPosts;
			postNumber = allPosts.length;
		for (var x = 0; x < 5; x += 1) {
			var divPost = document.createElement("div");
				postLink = document.createElement("a");
			content.appendChild(divPost);
			postLink.href = allPosts[x].data.url;
			postLink.innerHTML = allPosts[x].data.title;		
			divPost.appendChild(postLink);
		}
	}

})();


// Function to create most popular
(function() {
var popularSubs = ["askreddit", "funny", "todayilearned", "science", "pics", "worldnews", "iama", "gaming", "videos", "movies"];
	subs = document.getElementById("subs");
	

function showSubs(subArray) {

	for (var i = 0; i < subArray.length; i += 1) {
		// subs.innerHTML += this[i] + ". "
		var subLinks = document.createElement("a");
			subDivs = document.createElement("div");
			linkBox = document.createElement("div");

		subLinks.className = "popSubs";
		subLinks.innerHTML = this[i];
		subDivs.className = "popDivs";

		subLinks.href = "https://www.reddit.com/r/" + this[i]

		subs.appendChild(subDivs);
		subDivs.appendChild(subLinks);

		// Everything below this must be refactored
		// this function is already way too bloated
		linkBox.className = "boxOfLinks";
		subDivs.appendChild(linkBox);

		popRequest(this[i]);

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
			console.log(popSubData.data.children[0]);
		} else {
			console.log("Request was messed up");
		}
	}

	popSubRequest.send();
}

// function populateFive(subName) {
// 	var 
// }

// This bind method attaches the showSubs function to the 
// popularSubs array.
var subArray = showSubs.bind(popularSubs);

// This function is called and the popularSubs is passed in 
// an argument that points to an array of strings
subArray(popularSubs);




})();



function requestSubReddit(sub) {
		var redditRequest = new XMLHttpRequest();
		redditRequest.open('GET', 'https://www.reddit.com/r/' + sub + '.json');

		// redditRequest.onload = function() {
		// 	var requestData = JSON.parse(redditRequest.responseText); 
		// 	console.log(redditRequest.status)
		// }

		console.log(redditRequest);
		redditRequest.send();
	}