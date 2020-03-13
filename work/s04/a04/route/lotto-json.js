"use strict";

var express = require('express');
var router  = express.Router();

var data;
var strings;
var arrs = [];
var reply = new Object;
var arr = [];
var url;




// Add a route for the path /
router.get('/lotto-json', (req, res) => {
   for (var i = 0; i < 7; i++){
      arr[i] = Math.floor(Math.random()*35+1);
   }
   reply.drwanNumbers = arr;
   url= req.url;
   var matchs = 0;
   if(url.indexOf("?") != -1){
      strings = url.split("?")[1];
      data = strings.split("=")[1];
      arrs = data.split(",");
      for(var i = 0; i < arrs.length; i++){
        for(var j = 0; j < arr.length; j++){
          if(arr[j]==arrs[i]){
            matchs++;
          }
        }
      }
      reply.ownNumbers = arrs;
      reply.correctNumbers = matchs;
   }
   res.json(reply);
});

module.exports = router;
