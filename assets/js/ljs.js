$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/o7om10o/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var time = data.feed.entry[i]['gsx$time']['$t'];
        var cose = data.feed.entry[i]['gsx$case']['$t'];
        var loc = data.feed.entry[i]['gsx$location']['$t'];
		var desc = data.feed.entry[i]['gsx$description']['$t'];

        document.getElementById('timel').innerHTML += ('<div class="timeline">'+'<article class="timeline__item">'+cose+'<span class="badge badge-pill badge-danger">'+loc+'</span> </h5>'+'<span class="timeline__period">'+time+'</span>'+'<p class="timeline__description">'+desc+'</p>'+'</article>');
      }
    });



