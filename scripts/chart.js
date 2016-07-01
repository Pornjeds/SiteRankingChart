google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'X');
      data.addColumn('number', 'Rank');

      data.addRows([
          [new Date(2016,3,17), 1023665],
          [new Date(2016,3,18), 1023665],
          [new Date(2016,3,19), 1084859],
          [new Date(2016,3,20), 1084859],
          [new Date(2016,3,21), 1084859],
          [new Date(2016,3,22), 1067834],
          [new Date(2016,3,23), 1067834],
          [new Date(2016,3,24), 1067834],
          [new Date(2016,3,25), 1067834],
          [new Date(2016,3,26), 1067834],
          [new Date(2016,3,27), 1067834],
          [new Date(2016,3,28), 1067834],
          [new Date(2016,3,29), 966448],
          [new Date(2016,4,1), 954349],
          [new Date(2016,4,2), 992793],
          [new Date(2016,4,3), 992793],
          [new Date(2016,4,4), 960055],
          [new Date(2016,4,5), 942417],
          [new Date(2016,4,6), 942417],
          [new Date(2016,4,7), 942417],
          [new Date(2016,4,8), 942417],
          [new Date(2016,4,9), 942417],
          [new Date(2016,4,10), 954912],
          [new Date(2016,4,11), 954912],
          [new Date(2016,4,12), 969683],
          [new Date(2016,4,13), 960692],
          [new Date(2016,4,14), 960692],
          [new Date(2016,4,15), 960692],
          [new Date(2016,4,16), 942138],
          [new Date(2016,4,17), 942138],
          [new Date(2016,4,18), 942138],
          [new Date(2016,4,19), 942138],
          [new Date(2016,4,20), 931873],
          [new Date(2016,4,21), 919095],
          [new Date(2016,4,22), 919095],
          [new Date(2016,4,23), 919095],
          [new Date(2016,4,24), 864269],
          [new Date(2016,4,25), 862018],
          [new Date(2016,4,26), 856487],
          [new Date(2016,4,27), 846304],
          [new Date(2016,4,28), 846304],
          [new Date(2016,4,29), 846304],
          [new Date(2016,4,30), 816533],
          [new Date(2016,4,31), 816533],
          [new Date(2016,5,1), 737040],
          [new Date(2016,5,2), 730086],
          [new Date(2016,5,3), 729107],
          [new Date(2016,5,4), 729107],
          [new Date(2016,5,5), 729107],
          [new Date(2016,5,6), 711295],
          [new Date(2016,5,7), 710006],
          [new Date(2016,5,8), 709307],
          [new Date(2016,5,9), 709307],
          [new Date(2016,5,10), 700195],
          [new Date(2016,5,11), 699410],
          [new Date(2016,5,12), 699410],
          [new Date(2016,5,13), 698423],
          [new Date(2016,5,14), 722149],
          [new Date(2016,5,15), 729487],
          [new Date(2016,5,16), 742848],
          [new Date(2016,5,17), 741758],
          [new Date(2016,5,18), 741758],
          [new Date(2016,5,19), 741758],
          [new Date(2016,5,20), 744880],
          [new Date(2016,5,21), 744880],
          [new Date(2016,5,22), 744317],
          [new Date(2016,5,23), 755542],
          [new Date(2016,5,24), 759429],
          [new Date(2016,5,25), 759429],
          [new Date(2016,5,26), 759429],
          [new Date(2016,5,27), 759429],
          [new Date(2016,5,28), 744067],
          [new Date(2016,5,29), 743715],
          [new Date(2016,5,30), 743715],
          [new Date(2016,6,1), 743997]
        ]);

      var options = {
        hAxis: {
          title: 'Date'
        },
        vAxis: {
          title: 'Alexa Ranking'
        },
        animation: {
          startup: true,
          duration: 1000,
          easing: 'inAndOut',
        },
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }