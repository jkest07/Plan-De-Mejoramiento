let capital = parseFloat(prompt("Ingrese el capital inicial:"));
let tasa = parseFloat(prompt("Ingrese la tasa anual (%)"));
let años = parseInt(prompt("Ingrese el número de años:"));
let veces = parseInt(prompt("Ingrese el número de veces que se capitaliza por año:"));
let monto;

if (isNaN(capital) || capital <= 0 || isNaN(tasa) || tasa < 0 || isNaN(años) || años < 0 || isNaN(veces) || veces <= 0) {
    alert("Valores inválidos");
} else {
    monto = capital * Math.pow(1 + (tasa/100)/veces, veces*años);
    alert("El monto acumulado es: $" + monto.toFixed(2));
}
