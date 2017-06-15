(function() {
    'use strict';

    var popularSubs = ["AskReddit", "funny", "todayilearned", "science", "pics", "worldnews", "IAmA", "gaming", "videos", "movies"];
    var btnDiv = document.getElementById("popular-buttons");
    var links = document.getElementById("link-container");
    var btnNodes = document.getElementsByClassName("subreddit-btn");

    function createButton(subreddit) {
        var btn = document.createElement('button');
        btn.innerHTML = subreddit;
        btn.className = "subreddit-btn"
        btn.onclick = btnEvents;
        return btn;
    }

    function createLinks(posts) {
        for (var i = 0; i < 5; i++) {
            var link = document.createElement('a');
            link.href = posts[i].data.url;
            link.className = "links";
            link.innerHTML = posts[i].data.title;
            links.append(link);
        }
    }

    function createButtonList(list) {
        list.forEach(function(sub) {
            btnDiv.append(createButton(sub));
        });
    }

    function request(sub) {
        var req = new XMLHttpRequest();
        req.open('GET', 'https://www.reddit.com/r/' + sub + '.json');
        req.onload = function() {
            if (req.status >= 200 && req.status < 400) {
                var data = JSON.parse(req.responseText);
                links.innerHTML = "";
                createLinks(data.data.children);
            }
        }
        req.send();
    }

    function btnEvents() {
        removeClass(btnNodes);
        active(this);
        request(this.innerHTML);
    }

    function active(element) {
        element.classList.add("active");
    }

    function removeClass(nodeList) {
        var nodeArray = Array.prototype.slice.call(nodeList);
        nodeArray.forEach(function(node) {
            node.classList.remove("active");
        })
    }

    createButtonList(popularSubs);

})();
