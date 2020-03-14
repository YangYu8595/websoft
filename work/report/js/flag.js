(function () {
    'use strict';

    //var myContent = document.getElementById('content');
    var flagTarget = document.getElementById('flag');
    var flagLink1 = document.getElementById('draw-elfenbenskusten');
    var flagLink2 = document.getElementById('draw-france');
    var flagLink3 = document.getElementById('draw-italy');
    var btn = document.getElementById("button");
    var flag = document.getElementById("flag");

    btn.onclick = function(){
      flag.style.visibility = hidden;
      flag.style.width = 500px;
    }

    function drawFlagElfenbenskusten()  {
        var flagElfenbenskusten = '<div class="flag elfenbenskusten"><div class="part1"></div>' +
        '<div class="part2"></div></div>';

        console.log("Drawing flag");
        flagTarget.innerHTML = flagElfenbenskusten;
    }
    function drawFlagFrance()  {
        var flagFrance = '<div class="flag france"><div class="part1"></div>' +
        '<div class="part2"></div></div>';

        console.log("Drawing flag");
        flagTarget.innerHTML = flagFrance;
    }
    function drawFlagItaly()  {
        var flagItaly = '<div class="flag italy"><div class="part1"></div>' +
        '<div class="part2"></div></div>';

        console.log("Drawing flag");
        flagTarget.innerHTML = flagItaly;
    }
    flagLink1.addEventListener("click", function () {
        console.log("Event for clicking link elfenbenskusten.");
        drawFlagElfenbenskusten();
    });
    flagLink2.addEventListener("click", function () {
        console.log("Event for clicking link france.");
        drawFlagFrance();
    });
    flagLink3.addEventListener("click", function () {
        console.log("Event for clicking link itlay.");
        drawFlagItaly();
    });

    console.log('Flag Page is ready!');
})();
