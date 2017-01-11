(function() {
    var popularSubs = ["AskReddit", "funny", "todayilearned", "science", "pics", "worldnews", "IAmA", "gaming", "videos", "movies"];
    var subs = document.getElementById("subs");


    function showSubs(subArray) {

        for (var i = 0; i < subArray.length; i += 1) {
            var subLinks = document.createElement("a");
            var subDivs = document.createElement("div");
            var linkBox = document.createElement("div");

            subLinks.className = "popSubs";
            subLinks.innerHTML = popularSubs[i];
            subDivs.className = "popDivs";

            subLinks.href = "https://www.reddit.com/r/" + popularSubs[i]

            subs.appendChild(subDivs);
            subDivs.appendChild(subLinks);

            linkBox.className = "boxOfLinks";
            linkBox.id = popularSubs[i];
            subDivs.appendChild(linkBox);

            popRequest(popularSubs[i]);

        }
    }

    function popRequest(sub) {
        var popSubRequest = new XMLHttpRequest();
        popSubRequest.open('GET', 'https://www.reddit.com/r/' + sub + '.json');

        popSubRequest.onload = function() {
            if (popSubRequest.status >= 200 && popSubRequest.status < 400) {
                var popSubData = JSON.parse(popSubRequest.responseText);
                for (var n = 0; n < 5; n += 1) {
                    var linkPost = document.createElement("a");
                    var linkDiv = document.createElement("div");
                    var findIdDiv = document.getElementById(popSubData.data.children[n].data.subreddit);

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
