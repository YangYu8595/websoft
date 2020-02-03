"use strict";
( function (){
  var r = document.getElementById("rabbit");
  r.addEventListener("click",function(){
    r.style.left = r.offsetLeft + 40 + "px";
    console.log(r.style.left);
  });
  var timer = 5000;
  function disappear(){
    r.style.visibility="hidden";
  }
  window.setInterval(disappear,timer);
})();
