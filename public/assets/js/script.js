(function() {
    'use strict';

    var popularSubs = ["AskReddit", "funny", "todayilearned", "science", "pics", "worldnews", "IAmA", "gaming", "videos", "movies"];
    var btnDiv = document.getElementById("popular-buttons");
    var links = document.getElementById("links");
    var element = document.createElement('button');

    function createButton(subreddit) {
        var btn = document.createElement('button');
        btn.innerHTML = subreddit;
        btn.className = "subreddit-btn"
        return btn;
    }

    function createLinks(posts) {
        for (var i = 0; i < 5; i++) {
            var link = document.createElement('a');
            link.href = posts[i].data.url;
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

    function addBtnEvents() {
        var btnNodes = document.getElementsByClassName("subreddit-btn");
        var btnNodesArray = Array.prototype.filter.call(btnNodes, function(node) {
            node.addEventListener('click', function(e) {
                request(e.target.innerHTML);
            })
        });

    }

    createButtonList(popularSubs);
    addBtnEvents();

})();
