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
	         btn.onclick = function(){
	            var table = document.getElementById("table");
		          var row = table.insertRow(table.rows.length);
		          var c1 = row.insertCell(0);
              c1.innerHTML = "Skolenhetskod";
              var c2=row.insertCell(1);
              c2.innerHTML="Skolenhetsnamn";
              var c3=row.insertCell(2);
              c3.innerHTML="Kommunkod";
              var c4 = row.insertCell(3);
              c4.innerHTML = "PeOrgNr";
		          var row = table.insertRow(table.rows.length);
              var c1 = row.insertCell(0);
		          c1.innerHTML = myJson.Skolenheter[0].Skolenhetskod;
 		          var c2=row.insertCell(1);
 		          c2.innerHTML=myJson.Skolenheter[0].Skolenhetsnamn;
 		          var c3=row.insertCell(2);
 		          c3.innerHTML=myJson.Skolenheter[0].Kommunkod;
		          var c4 = row.insertCell(3);
	            c4.innerHTML = myJson.Skolenheter[0].PeOrgNr;
	         }
        });
    console.log('Data is ready!');
})();
