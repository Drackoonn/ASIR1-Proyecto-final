document.addEventListener("DOMContentLoaded", function(event) {
    GraficoTemp();
    GraficoHum();
 //   load_data();
});

//----------------------------------------------------------------------------
function GraficoTemp(){
const ctz = document.getElementById('graficaTemp');
const etiquetas = ["01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"]
const datosTempHoy={
    label: "Hoy",
    data: [10,7,5,8,7,9,8,9,10,10,14,18,17,18,19,20,19,17,16,16,13,11,10,8], //La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgb(191, 21, 78)', // Color de fondo
    borderColor: 'rgb(153, 0, 51)', // Color del borde
    borderWidth: 1, // Ancho del borde
}
const datosTempAyer={
    label: "Ayer",
    data: [8,7.5,6,7,8,8.5,9,9.5,9.5,11,13,16,16,17,19.5,21,22,20.5,19,16,14,10,7,8.5], //La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgb(116, 218, 255)', // Color de fondo
    borderColor: 'rgb(66, 145, 173)', // Color del borde
    borderWidth: 1, // Ancho del borde
}
const datosTempAnteayer={
    label: "Anteayer",
    data: [9,8,7,9,5.5,7,6,11,13,15,16,19,15,19,20,22,21,19,17,18,15,10,7.5,6], //La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgb(80, 252, 126)', // Color de fondo
    borderColor: 'rgb(43, 177, 79)', //  Color del borde
    borderWidth: 1, // Ancho del borde
}
const data =  {
    labels:etiquetas ,
    datasets: [
        datosTempHoy,
        datosTempAyer,
        datosTempAnteayer,
        // Aquí más datos...
    ]
}
const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };
const myChart = new Chart(ctz, {
    type: 'line',// Tipo de gráfica
    data: data,
    plugins: [plugin],
}
);
};
//----------------------------------------------------------------------------

function GraficoHum(){
    const ctx = document.getElementById('graficaHum');
    const etiquetas2 = ["01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"]
    const datosHum1={
        label: "Hoy",
        data: [64,68,55,58,47,59,58,59,61,51,54,48,47,52,49,54,59,67,66,56,53,51,60,64], //La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgb(191, 21, 78)', // Color de fondo
        borderColor: 'rgb(153, 0, 51)', // Color del borde
        borderWidth: 1, // Ancho del borde
    }
    const datosHum2={
        label: "Ayer",
        data: [46,46,59,58,67,69,68,69,51,49,44,58,57,62,69,64,49,47,68,46,38,61,68,54], //La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgb(116, 218, 255)', // Color de fondo
        borderColor: 'rgb(66, 145, 173)', // Color del borde
        borderWidth: 1, // Ancho del borde
    }
    const datosHum3={
        label: "Anteayer",
        data: [54,58,65,68,57,69,68,69,51,61,64,58,57,62,59,64,69,57,56,66,63,61,50,54], //La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgb(80, 252, 126)', // Color de fondo
        borderColor: 'rgb(43, 177, 79)', // Color del borde
        borderWidth: 1, // Ancho del borde
    }
    const data =  {
        labels: etiquetas2,
        datasets: [
            datosHum1,
            datosHum2,
            datosHum3
            // Aquí más datos...
        ]
    }
    const plugin = {
        id: 'custom_canvas_background_color',
        beforeDraw: (chart) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        }
      };
    const myChart = new Chart(ctx, {
        type: 'line',// Tipo de gráfica
        data: data,
        plugins: [plugin],
    }
    );
};
//----------------------------------------------------------------------------
