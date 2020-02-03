"use strict";

var express = require('express');
var router  = express.Router();

var arr = [];
for (var i = 0; i < 7; i++){
   arr[i] = Math.floor(Math.random()*35+1);
}

// Add a route for the path /
router.get('/lotto', (req, res) => {
   res.send(arr);
    //res.send(Math.floor(Math.random()*35+1));

});

module.exports = router; 
