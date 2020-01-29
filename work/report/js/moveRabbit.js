  rabbit = document.getElementById("rabbit");
  function move(){
    rabbit.style.left = rabbit.style.left + 20 +'px';
  }
  rabbit.style.left = '0px';
  rabbit.style.top = '0px';
  rabbit.addEventListener('click',move);
  /*rabbit.onclick = function(){
    rabbit.style.left = rabbit.style.left + 20;
  }*/
    
