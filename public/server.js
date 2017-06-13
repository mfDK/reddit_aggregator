(function() {
    'use strict';

    var express = require('express');
    var path = require('path');
    var app = express();

    app.use(express.static('public'));

    app.get('/', function(res, req) {
        res.sendFile(path.join(__dirname, 'index.html'));
    })

    app.listen(3000, function() {
        console.log('You are on server 3000');
    });
    
})();
