$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/okczqou/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var susp = data.feed.entry[i]['gsx$susp']['$t'];
		var confir = data.feed.entry[i]['gsx$conf']['$t'];
		var death = data.feed.entry[i]['gsx$death']['$t'];
	      var recov = data.feed.entry[i]['gsx$recover']['$t'];
	      var seri = data.feed.entry[i]['gsx$serious']['$t'];

        document.getElementById('susp').innerHTML += ('<tr>'+'<td>'+susp+'</td>'+'</tr>');
		document.getElementById('confir').innerHTML += ('<tr>'+'<td>'+confir+'</td>'+'</tr>');
		document.getElementById('death').innerHTML += ('<tr>'+'<td>'+death+'</td>'+'</tr>');
	      	document.getElementById('recov').innerHTML += ('<tr>'+'<td>'+recov+'</td>'+'</tr>');
	      	document.getElementById('seri').innerHTML += ('<tr>'+'<td>'+seri+'</td>'+'</tr>');

      }
    });





