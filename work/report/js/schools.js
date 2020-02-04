(function () {
    'use strict';

    let url;
    var btn = document.getElementById("button");
    var schools;
    //url = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081";
    url = "data/1081.json";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
	    //var data = document.getElementById('dataBox');
	    //data.innerHTML = JSON.stringify(myJson,null,4);
		//$("#dataBox").text(JSON.stringify(myJson, null, 4));
            console.log(myJson);
	    schools = JOSN.stringify(myJson,null,4);
        });
	btn.onclick = function(){  
        var data = document.getElementById('dataBox');
        data.innerHTML = schools;
 	}  
   /* url = "https://rem.dbwebb.se/api/users";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });*/

    console.log('Sandbox is ready!');
})();
