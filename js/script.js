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

var popularSubs = ["askreddit", "funny", "todayilearned", "science", "pics", "worldnews", "iama", "gaming", "videos", "movies"];
var subs = document.getElementById("subs");

function showSubs(subArray) {
	for (var i = 0; i < subArray.length; i += 1) {
		subs.innerHTML += this[i] + ". "
	}
}

var flowsik = showSubs.bind(popularSubs);
flowsik(popularSubs);

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