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
			var postLink = document.createElement("a");
			postLink.href = allPosts[x].data.url;
			postLink.innerHTML = allPosts[x].data.title;		
			content.appendChild(postLink);
		}
	}

})();