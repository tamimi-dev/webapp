      function loadData() {
          var url = "https://docs.google.com/spreadsheets/d/1KjJmpfL2gZh2bCReTLXhkY5JV7b0FxoW6zDPsNqCzw8/edit#gid=0&range=A1&output=csv";
          xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState == 4) {
                  document.getElementById("display").innerHTML = xmlhttp.responseText;
                  //alert(xmlhttp.responseText);
              }
          };
          xmlhttp.open("GET", url, true);
          xmlhttp.send(null);
      }
