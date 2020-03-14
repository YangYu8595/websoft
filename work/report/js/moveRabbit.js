"use strict";
( function (){
  var r = document.getElementById("rabbit");
  var b = document.getElementById("body");
  r.addEventListener("click",function(){
    if(r.offsetLeft+ 40 + r.offsetWidth< b.offsetWidth){
      r.style.left = r.offsetLeft + 40 + "px";
      console.log(r.style.left);
      console.log(r.offsetLeft);
      console.log(r.style.left+r.offsetWidth);
      console.log(b.offsetLeft + b.offsetWidth);
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
