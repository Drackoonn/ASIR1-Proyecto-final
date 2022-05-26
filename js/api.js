document.addEventListener("DOMContentLoaded", function (event) {
    load_data();
  })
  
  //----------------------------------------------------------------------------
  function load_data() {
    $.ajax({
      url: './php/controlador_grafico.php',
      dataType: 'post', //specifying here the response type, there's no need to parse the response
      error: function (xhr) {
        alert("An AJAX error occured: " + xhr.status + " " + xhr.statusText);
      }
    }).done(function(resp){
      var data = JSON.parse(resp);
      for(var i=0 ; i < data.lenth; i++){
        alert(data[i][1]);
      }
    });
  
  }
  function load_data() {
    $.ajax({
      url: './php/controlador_grafico.php',
      dataType: 'post', //specifying here the response type, there's no need to parse the response
      error: function (xhr) {
        alert("An AJAX error occured: " + xhr.status + " " + xhr.statusText);
      }
    }).done(function(resp){
        var titulo=[];
        var cantidad = [];
        for(var i = 0; i < data.length; i++) {
            titulo.push(data[i][1]);            
            cantidad.push(data[i][2]);
        }
        var Temp = document.getElementById('graficaTemp');
        var myChart1 = new Chart(Temp, {
            type:'line',
            data: {
                labels: titulo,
                datasets:[{
                    label: 'Media de Temperatura por hora',
                    data: cantidad,
                    backgroundColor: 'rgb(191, 21, 78)', // Color de fondo
                    borderColor: 'rgb(153, 0, 51)', // Color del borde
                    borderWidth: 1,
                }]
            },
            plugins: [plugin],
        });
        var Hum = document.getElementById('graficaHum');
        var myChart2 = new Chart(Hum, {
            type:'line',
            data: {
                labels: titulo,
                datasets:[{
                    label: 'Media de Humedad por hora',
                    data: cantidad,
                    backgroundColor: 'rgb(191, 21, 78)', // Color de fondo
                    borderColor: 'rgb(153, 0, 51)', // Color del borde
                    borderWidth: 1,
                }]
            },
            plugins: [plugin],
        });
    });  
}