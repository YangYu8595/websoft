"use strict";

var express = require('express');
var router  = express.Router();

var flag = true;
var data;
var strings;
var arrs = [];
var url = window.document.location.href.toString();
if(url.indexOf("?") != -1){
   strings = url.split("?")[1];
   data = strings.split("=")[1];
   arr = data.split(",");
}
else{
  flag = false;
}

var arr = [];
var json = [];
for (var i = 0; i < 7; i++){
   arr[i] = Math.floor(Math.random()*35+1);
   var row = {};
   row.id = i;
   row.number = arr[i];
   json.push(row);
}

// Add a route for the path /
router.get('/lotto-json', (req, res) => {
   res.send(json);
   res.send(flag);
    //res.send(Math.floor(Math.random()*35+1));

});

module.exports = router;
