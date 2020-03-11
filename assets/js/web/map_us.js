
 fetchData("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/on897vi/public/values?alt=json");
async function fetchData(url) {
  const jsonData = await fetch("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/on897vi/public/values?alt=json").then(r => r.json());
  const data = jsonData.feed.entry.map(e => ({
  	id: e.gsx$map.$t,
    value: Number(e.gsx$ustotal.$t),
     value2: Number(e.gsx$usdth.$t),
      value3: Number(e.gsx$uscrit.$t),
       value4: Number(e.gsx$usser.$t),
        value5: Number(e.gsx$usrecov.$t),
   
  }));
  
  handleData(data);
}

function handleData(data) {
    polygonSeries.data = data;
}







// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

 // Create map instance
var chart = am4core.create("chartdiv_m", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_usaLow;

// Set projection
chart.projection = new am4maps.projections.AlbersUsa();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  min: chart.colors.getIndex(4).brighten(1),
  max: chart.colors.getIndex(4).brighten(-0.3)
});

// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;

// Set heatmap values for each state




// Set up heat legend
let heatLegend = chart.createChild(am4maps.HeatLegend);
heatLegend.series = polygonSeries;
heatLegend.align = "center";
heatLegend.valign = "bottom";
heatLegend.width = am4core.percent(60);
heatLegend.marginRight = am4core.percent(4);
heatLegend.minValue = 0;
heatLegend.maxValue = 40000000;

// Set up custom heat map legend labels using axis ranges
var minRange = heatLegend.valueAxis.axisRanges.create();
minRange.value = heatLegend.minValue;
minRange.label.text = "Less Total Cases";
var maxRange = heatLegend.valueAxis.axisRanges.create();
maxRange.value = heatLegend.maxValue;
maxRange.label.text = "More Total Cases";

// Blank out internal heat legend value axis labels
heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
  return "";
});

// Configure series tooltip
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "[bold]{name}:[\]\n Total {value}\n Deaths {value2}\n Critical {value3}\n Serious {value4}\n Recovered {value5}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#dc3c3c");
