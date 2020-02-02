(function () { 
 'use strict'; 
   var area = document.body, 
 areaHeight = window.innerHeight, 
 areaWidth = window.innerWidth, 
 points = document.getElementById('points'), 
 rabbit = document.createElement('img'), 
 score = 0, 
 timer = 1000; 
     /** 
 * Keep track on score. 
 */ 
 function addAndPrintScore() { 
 score = score +1; 
 points.innerHTML = score; 
 } 
       /** 
 * Set the attributes for the duck 
 **/ 
 rabbit.src='img/rabbit.jpg'; 
 rabbit.style.position ='absolute'; 
 rabbit.style.left = '0px'; 
 rabbit.style.top = '0px'; 
 rabbit.style.zIndex = 10000; 
 rabbit.addEventListener('click', addAndPrintScore); 
       /** 
 * A function for displaying the rabbit in random positions 
 **/ 
 function newRabbit() { 
 var newX = Math.floor(Math.random() * (areaWidth-rabbit.width)), 
 newY = Math.floor(Math.random() * (areaHeight-rabbit.height)); 
   rabbit.style.left = newX+'px'; 
 rabbit.style.top = newY+'px'; 
 area.appendChild(rabbit); 
 } 
       /** 
 * The function that triggers the game, uses an time interval in milliseconds 
 **/ 
 function startGame() { 
 window.setInterval(newRabbit, timer); 
 } 
       /** 
 * Start the game 
 **/ 
 startGame(); 
   console.log('Game is ready!'); 
 })(); 
