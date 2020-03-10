(function () {
    'use strict';

    let url;
    var btn = document.getElementById("button");
    var schools;

    url = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081";
    //url = "data/1081.json";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
	    //var data = document.getElementById('dataBox');
	    //data.innerHTML = JSON.stringify(myJson,null,4);
		//$("#dataBox").text(JSON.stringify(myJson, null, 4));
            console.log(myJson);
	    btn.onclick = function(){
            var data = document.getElementById('dataBox');
	    myJson.Skolenheter = myJson.Skolenheter.filter(function (a){
		      if (a.Skolenhetsnamn == "Komvux"){
	        return a.Skolenhetsnamn ==="Komvux";
	    });
	    var table = document.getElementById("table");
	    //for (var i = 0; i < datas.length; i ++){
		var row = table.insertRow(table.rows.length);
		var C1 = row.insertCell(0);
                C1.innerHTML = "Skolenhetskod";
                var c2=row.insertCell(1);
                c2.innerHTML="Skolenhetsnamn";
                var c3=row.insertCell(2);
                c3.innerHTML="Kommunkod";
                var c4 = row.insertCell(3);
                c4.innerHTML = "PeOrgNr";

		var row = table.insertRow(table.rows.length);
		var C1 = row.insertCell(0);
		C1.innerHTML = myJson[0].Skolenhetskod;
 		var c2=row.insertCell(1);
 		c2.innerHTML=myJson[0].Skolenhetsnamn;
 		var c3=row.insertCell(2);
 		c3.innerHTML=myJson[0].Kommunkod;
		var c4 = row.insertCell(3);
		c4.innerHTML = myJson[0].PeOrgNr;
	    //}

 	}

	    /*schools = myJson;
	    myJson.Skolenheter = myJson.Skolenheter.filter(function(a){
		return a.Skolenhetsnamn ==="Komvux";
	    });
	    datas = myJson.Skolenheter;
	    */

        });
	/*btn.onclick = function(){
            var data = document.getElementById('dataBox');
	    schools.Skolenheter = schools.Skolenheter.filter(function (a){
		//if (a.Skolenhetsnamn == "Komvux"){
	        return a.Skolenhetsnamn ==="Komvux";
	    });
	    var table = document.getElementById("table");
	    //for (var i = 0; i < datas.length; i ++){
		var row = table.insertRow(table.rows.length);
		//var row = table.insertRow(table.rows.length);
		var C1 = row.insertCell(0);
		C1.innerHTML = schools[0].Skolenhetskod;
 		var c2=row.insertCell(1);
 		c2.innerHTML=schools[0].Skolenhetsnamn;
 		var c3=row.insertCell(2);
 		c3.innerHTML=schools[0].Kommunkod;
		var c4 = row.insertCell(3);
		c4.innerHTML = schools[0].PeOrgNr;
	    //}
            data.innerHTML = JSON.stringify(schools.Skolenheter,0,4);
 	}  */

    console.log('Data is ready!');
})();
