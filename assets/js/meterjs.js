$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/o3brp63/public/values?alt=json", data => {

  var numbers = [];

  data.feed.entry.forEach(e => {

    numbers.push(Number(e['gsx$value']['$t']));

  }); 

      var g = new JustGage({
        id: "gauge",
        value: numbers,
        min: 10,
        max: 48,
        title: "Lone Ranger",
        label: "miles traveled"
      });
});
