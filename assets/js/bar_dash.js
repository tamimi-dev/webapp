$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/o512ru7/public/values?alt=json", data => {
  var labels = [];
  var numbers = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$countries']['$t']);
    numbers.push(Number(e['gsx$totcasepercntry']['$t']));
  });
  new Chart(document.getElementById('canvas'), {
    type: 'horizontalBar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Cases worldwide',
        data: numbers,
        backgroundColor: 'rgb(253, 48, 76)',
        borderColor: 'rgb(253, 48, 76)',
        pointBackgroundColor: 'rgb(253, 48, 76)'
      }]
    },
    options: {
      	  maintainAspectRatio: false,
      tooltips: {
        callbacks: {
          title: (tooltipItem, data) => data.labels[tooltipItem[0].index]
        }
      }
    }
  });
});
