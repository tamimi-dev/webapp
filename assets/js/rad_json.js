
$(function(){var sheetUrl = 'https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/ou32gi9/public/values?alt=json';$.getJSON(sheetUrl, function(data){
	var i;
      for (i = 0; i < sheetData.length; i++) {

        var cntry = data.feed.entry[i]['gsx$countries']['$t'];
		var cntry_case = data.feed.entry[i]['gsx$totcasepercntry']['$t'];
  }
  
  console.log(cntry);
  console.log(cntry_case);
})
});


var ctx = document.getElementById("canvas").getContext('2d');
var canvas = new Chart(ctx, {
          type: 'line',
          data: {
              labels: cntry,
              datasets: [{
                  label: 'Countries',
                  fill: false,
                  data: reach,
                  borderColor: '#F3A68E',
                  borderWidth: 3,
                  backgroundColor: '#F3A68E',
                  borderDash: [10,5],
              },{
                label: 'Total Cases',
                fill: false,
                data: imp,
                borderColor: '#698C01',
                borderWidth: 3,
                backgroundColor: '#698C01',
                borderDash: [10,5],
              }
            ]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              },
              legend: {
                position: 'bottom',
                labels:{
                  boxWidth: 15,
                  fontSize: 15,
                },
              },
          }
      });
