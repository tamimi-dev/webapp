$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/otu1nbu/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var cntry = data.feed.entry[i]['gsx$icocntry']['$t'];
        var cntry_case = data.feed.entry[i]['gsx$icontotcasepercntry']['$t'];
        var ico = data.feed.entry[i]['gsx$icon']['$t'];
        var dth = data.feed.entry[i]['gsx$dthcntry']['$t'];

        document.getElementById('ico_cntry').innerHTML += ('<div class="col-lg-4 col-xl-4">'+'<div class="box box__second ">'+'<svg class="avatar avatar--120">'+'<g class="avatar__box">'+'<image xlink:href="https://www.coronatrackers.com/assets/icons/cntry/'+ico+'.svg"'+' height="100%"'+'width="100%"></image></g></svg><div class="text-center"><h4 class="title title--h4 sidebar__user-name">'+cntry+'</h4></div><div class="text-center"><table class="table5" align="center"><tr><th>Cases</th><th>Deaths</th></tr><tr><td>'+cntry_case+'</td><td>'+dth+'</td></tr></table></div></div></div>');
      }
    });
