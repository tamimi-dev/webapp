$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/ou32gi9/public/values?alt=json", data => {
  var labels = [];
  var numbers = [];
  var numbers2 = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$timecase']['$t']);
    numbers.push(Number(e['gsx$totcaseall']['$t']));
	numbers2.push(Number(e['gsx$dincreaseall']['$t']));
  });
  new Chart(document.getElementById('canvas'), {
    type: 'horizontalBar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Daily Increase',
        data: numbers,
        backgroundColor: 'rgb(42,105,163)',
        borderColor: 'rgb(42,105,163)',
        pointBackgroundColor: 'rgb(240,236,211)'
      },
	  {
      labels: labels,
      datasets: [{
        label: 'Acc. Daily Total',
        data: numbers2,
        backgroundColor: 'rgb(253, 48, 76)',
        borderColor: 'rgb(253, 48, 76)',
        pointBackgroundColor: 'rgb(240,236,211)'
      }
	  ]
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
