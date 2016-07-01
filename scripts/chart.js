google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'X');
      data.addColumn('number', 'Rank');

      data.addRows(
        [
          [new Date(2015,6,1), 1812257],
          [new Date(2015,6,2), 1676775],
          [new Date(2015,6,3), 2812716],
          [new Date(2015,6,4), 2590109],
          [new Date(2015,6,5), 2063314],
          [new Date(2015,6,6), 2858697],
          [new Date(2015,6,7), 1096912],
          [new Date(2015,6,8), 2423467],
          [new Date(2015,6,9), 1821689],
          [new Date(2015,6,10), 2981372],
          [new Date(2015,6,11), 1018049],
          [new Date(2015,6,12), 1477747],
          [new Date(2015,6,13), 1273748],
          [new Date(2015,6,14), 2044459],
          [new Date(2015,6,15), 1803026],
          [new Date(2015,6,16), 2336051],
          [new Date(2015,6,17), 959685],
          [new Date(2015,6,18), 718834],
          [new Date(2015,6,19), 1807894],
          [new Date(2015,6,20), 1656380],
          [new Date(2015,6,21), 2642782],
          [new Date(2015,6,22), 2754231],
          [new Date(2015,6,23), 2928542],
          [new Date(2015,6,24), 1449577],
          [new Date(2015,6,25), 1273785],
          [new Date(2015,6,26), 1890008],
          [new Date(2015,6,27), 1424061],
          [new Date(2015,6,28), 1755177],
          [new Date(2015,6,29), 1362885],
          [new Date(2015,6,30), 2321943],
          [new Date(2015,6,31), 2458167],
          [new Date(2015,7,1), 2282118],
          [new Date(2015,7,2), 2336939],
        ]);

      var options = {
        hAxis: {
          title: 'Date'
        },
        vAxis: {
          title: 'Rank'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }