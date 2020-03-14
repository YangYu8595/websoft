var proxyUrl = "https://cors-anywhere.herokuapp.com/";
(function () {
    'use strict';

    var btn = document.getElementById("button");
    var url = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081";
    fetch(proxyUrl+url)
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
        var url2 = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun";
        fetch(proxyUrl+url2)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
              console.log(myJson);
              for (var municipality of myJson.Kommuner) {
                var opt = document.createElement("option"); // Create the new element
                opt.value = municipality.Kommunkod; // set the value
                opt.text = municipality.Namn; // set the text
                document.getElementById('municipality').appendChild(opt); // add it to the select
            }
        });
})();

function fetch2(evt) {
  var table2 = document.getElementById('table2');
  console.log(evt.target.value);
  //document.getElementById("loader").style.visibility = "visible";


  var url3 = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/" + evt.target.value;
  fetch(proxyUrl + url3)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
      var row2 = table2.insertRow(table2.rows.length);
      var C1 = row2.insertCell(0);
      C1.innerHTML = "Skolenhetskod";
      var C2=row.insertCell(1);
      C2.innerHTML="Skolenhetsnamn";
      for (const skola of myJson.Skolenheter) {
        var row2 = table2.insertRow(table2.rows.length);
        var C1 = row2.insertCell(0);
        C1.innerHTML = myJson.Skolenheter[0].Skolenhetskod;
        var C2=row2.insertCell(1);
        C2.innerHTML=myJson.Skolenheter[0].Skolenhetsnamn;
      }
      // var old_tbody = table.tBodies[0]
      // var new_tbody = document.createElement('tbody');
      // for (const skola of myJson.Skolenheter) {
      //   var newRow = new_tbody.insertRow(0) //table.rows.length);
      //   var schoolNameCell = newRow.insertCell(0);
      //   var schoolCodeCell = newRow.insertCell(1);
      //   schoolNameCell.innerHTML = skola.Skolenhetsnamn;
      //   schoolCodeCell.innerHTML = skola.Skolenhetskod;
      // }
      // old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
  });

}
