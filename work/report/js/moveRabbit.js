"use strict";
( function (){
  var r = document.getElementById("rabbit");
  r.addEventListener("click",function(){
    r.style.left = r.offsetLeft + 40 + "px";
    console.log(r.style.left);
  });
})();
