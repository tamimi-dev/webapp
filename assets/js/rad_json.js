$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/o512ru7/public/values?alt=json", data => {
  var countries = [];
  var cases = [];
  data.feed.entry.forEach(e => {
    countries.push(e['gsx$countries']['$t']);
    cases.push(Number(e['gsx$totcasepercntry']['$t']));
  });
  new Chart(document.getElementById('canvas'), {
    type: 'radar',
    data: {
      labels: countries,
      datasets: [{
        label: 'Current level',
        data: cases,
        backgroundColor: 'rgba(253, 48, 76, 0.2)',
        borderColor: 'rgb(253, 48, 76)',
        pointBackgroundColor: 'rgb(253, 48, 76)'
      }]
    },
    options: {
      	  maintainAspectRatio: false,
          scale: {
      ticks: {
        beginAtZero: true,
        fontColor: 'white', // labels such as 10, 20, etc
        showLabelBackdrop: false // hide square behind text
      },
      pointLabels: {
        fontColor: 'white' // labels around the edge like 'Running'
      },
      gridLines: {
        color: 'rgba(255, 255, 255, 0.2)'
      },
      angleLines: {
        color: 'white' // lines radiating from the center
      }
    },
      tooltips: {
        callbacks: {
          title: (tooltipItem, data) => data.labels[tooltipItem[0].index]
        }
      }
    }
  });
});
