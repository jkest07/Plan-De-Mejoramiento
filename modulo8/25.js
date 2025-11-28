let tipo = prompt("Ingrese el tipo de conversión (metros, kilogramos, litros):").toLowerCase();
let valor = parseFloat(prompt("Ingrese el valor a convertir:"));
let resultado;

if (isNaN(valor) || valor < 0) {
    alert("Valor inválido");
} else {
    switch (tipo) {
        case "metros":
            resultado = valor * 3.28084;
            alert(valor + " metros = " + resultado.toFixed(2) + " pies");
            break;
        case "kilogramos":
            resultado = valor * 2.20462;
            alert(valor + " kg = " + resultado.toFixed(2) + " libras");
            break;
        case "litros":
            resultado = valor * 0.264172;
            alert(valor + " litros = " + resultado.toFixed(2) + " galones");
            break;
        default:
            alert("Tipo de conversión inválido");
            break;
    }
}
