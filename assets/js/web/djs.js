$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/odifzh/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var death = data.feed.entry[i]['gsx$death']['$t'];

        document.getElementById('death').innerHTML += ('<tr>'+'<td>'+death+'</td>'+'</tr>');

      }
    });

