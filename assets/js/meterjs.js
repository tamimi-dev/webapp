$.getJSON("https://spreadsheets.google.com/feeds/list/1GnakUnNQvFXjuzMSPnBpU9eufb4SooQLGL2oFc3lfAs/olnmcfa/public/values?alt=json", data => {

  var numbers = [];

  data.feed.entry.forEach(e => {

    numbers.push(Number(e['gsx$guavalue']['$t']));

  }); 

      var g = new JustGage({
        id: "gauge",
        value: numbers,
        min: 10,
        max: 45,
        title: "Lone Ranger",
        label: "miles traveled"
      });
