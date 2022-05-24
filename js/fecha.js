document.addEventListener("DOMContentLoaded", function(event) {
    
    
});
document.getElementById('search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter'){
        alert(search.value);
      }
  });
  FECHA();
function FECHA() {
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    var hora = date.getHours() + ':' + date.getMinutes();
    document.getElementById('fecha').innerHTML ="Fecha y hora actual: " +  year + "/" + month +"/"+ day + " ; "+ hora;
    setTimeout("mueveReloj()",1000)
}