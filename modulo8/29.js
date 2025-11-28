let temp = parseFloat(prompt("Ingrese la temperatura:"));
let unidad = prompt("Ingrese la unidad de conversión (C o F):").toUpperCase();
let resultado;

if (isNaN(temp)) {
    alert("Temperatura inválida");
} else if (unidad === "C") {
    resultado = (temp - 32) * 5/9;
    alert(temp + "°F = " + resultado.toFixed(2) + "°C");
} else if (unidad === "F") {
    resultado = (temp * 9/5) + 32;
    alert(temp + "°C = " + resultado.toFixed(2) + "°F");
} else {
    alert("Unidad inválida");
}
