$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/o512ru7/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

	      var china = data.feed.entry[i]['gsx$china']['$t'];
	      var nochina = data.feed.entry[i]['gsx$nochina']['$t'];

	      document.getElementById('china').innerHTML += ('<tr>'+'<td>'+china+'</td>'+'</tr>');
	      document.getElementById('nochina').innerHTML += ('<tr>'+'<td>'+nochina+'</td>'+'</tr>');

      }
    });
