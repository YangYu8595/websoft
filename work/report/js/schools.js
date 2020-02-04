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
	    myJson.Skolenheter = myJson.Skolenheter.filter(function(a){
		return a.Skolenhetsnamn ==="Komvux";
	    });
	    schools = myJson;

        });
	btn.onclick = function(){  
            var data = document.getElementById('dataBox');
	    schools.Skolenheter = schools.Skolenheter.filter(function (a){
		//if (a.Skolenhetsnamn == "Komvux"){
	        return a.Skolenhetsnamn ==="Komvux";
	    });
            data.innerHTML = JSON.stringify(schools,0,4);
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
