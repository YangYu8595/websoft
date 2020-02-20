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
	    var data = schools.data;
	    for (var i = 0; i < data.length; i ++){
		var row = table.insertRow(table.rows.length);
		var C1 = row.insertCell(0);
		C1.innerHTML = data[i].id; 
 		var c2=row.insertCell(1); 
 		c2.innerHTML=data[i].firstName; 
 		var c3=row.insertCell(2); 
 		c3.innerHTML=data[i].lastName;
	    }
            data.innerHTML = JSON.stringify(schools.Skolenheter,0,4);
 	}  

    console.log('Sandbox is ready!');
})();
