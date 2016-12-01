(function() {
	var button = document.getElementById("btn");

	button.addEventListener("click", function() {
		var theRequest = new XMLHttpRequest();
		theRequest.open('GET', 'https://www.reddit.com/r/MMA.json');

		theRequest.onload = function() {
			if (theRequest.status >= 200 && theRequest.status < 400) {
				console.log("Request was a success");
			} else {
				console.log("Something went wrong");
			}
		}

		theRequest.send();
	});	

	// function renderHTML(data) {
	// 	var htmlString = "";

	// }

})();