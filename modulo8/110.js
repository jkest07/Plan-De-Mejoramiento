let temperatura = parseFloat(prompt("Ingrese la temperatura del agua en °C:"));
let estado = (temperatura <= 0) ? "Sólida" :
             (temperatura < 100) ? "Líquida" : "Gaseosa";
alert("El agua está en estado: " + estado);
