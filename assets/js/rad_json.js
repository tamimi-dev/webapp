(function() {
  window.chartColors = {
    red: "rgb(255, 99, 132)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)"
  };
  $.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/ou32gi9/public/values?alt=json", function(data) {

var config = {
  type: 'radar',
  data: {
    labels: [
      ["Problem", "solving"],
      ["Time", "management"], "Collaboration", ["Decision", "Making"], "Teamwork", "Interpersonal", "Creative"
    ],
    datasets: [{
      label: "Current level",
      backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
      borderColor: chartColors.red,
      pointBackgroundColor: chartColors.red,
      data: [data.feed.entry[0]["gsx$countries"]["$t"]]
    }, {
      label: "Goal level",
      backgroundColor: color(chartColors.blue).alpha(0.2).rgbString(),
      borderColor: chartColors.blue,
      pointBackgroundColor: chartColors.blue,
      data: [data.feed.entry[1]["gsx$totcasepercntry"]["$t"]]
    }, ]
  },
  options: {
    legend: {
      position: 'top',
      labels: {
        fontColor: 'white'
      }
    },
    title: {
      display: true,
      text: 'Curent level Skills vs desired',
      fontColor: 'white'
    },
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
    }
  }
};

// A plugin to draw the background color
Chart.plugins.register({
  beforeDraw: function(chartInstance) {
    var ctx = chartInstance.chart.ctx;
    ctx.fillStyle = '#303032';
    ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
  }
})

window.myRadar = new Chart(document.getElementById("canvas"), config);
});
  });
