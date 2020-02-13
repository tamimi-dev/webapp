$.getJSON("https://spreadsheets.google.com/feeds/list/1GnakUnNQvFXjuzMSPnBpU9eufb4SooQLGL2oFc3lfAs/od6/public/values?alt=json", data => {
  var labels = [];
  var numbers = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$names']['$t']);
    numbers.push(Number(e['gsx$numbers']['$t']));
  });
  new Chart(document.getElementById('canvas'), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Cases worldwide',
        data: numbers,
        backgroundColor: 'rgba(253, 48, 76, 0.2)',
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
