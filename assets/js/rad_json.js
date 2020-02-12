(function() {
  window.chartColors = {
    red: "rgb(255, 99, 132)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)"
  };
  $.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/ou32gi9/public/values?alt=json", function(data) {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: "pie",
      data: {
        datasets: [{
          data: [2574, 1663, 1670],
          backgroundColor: [window.chartColors.red, window.chartColors.green, window.chartColors.blue],
          label: "Dataset 1"
        }],
        labels: [
          data.feed.entry[0]["gsx$countries"]["$t"],
          data.feed.entry[1]["gsx$totcasepercntry"]["$t"]
        ]
      },
      options: {
        responsive: true
      }
    });
  });
}());
