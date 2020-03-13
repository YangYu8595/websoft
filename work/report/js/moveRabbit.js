"use strict";
( function (){
  var r = document.getElementById("rabbit");
  var b = document.getElementById("body");
  r.addEventListener("click",function(){
    if(get_xPosition(r)+r.offsetWidth+40 < b.offsetWidth){
      r.style.left = r.offsetLeft + 40 + "px";
      console.log(r.style.left);
    }

  });
  var timer = 5000;
  function disappear(){
    if(r.style.visibility==="visible"){
      r.style.visibility="hidden";
    }
    else{
      r.style.visibility="visible";
    }
  }
  window.setInterval(disappear,timer);
})();
