let distancia = parseFloat(prompt("Ingrese la distancia en km:"));
let tarifa;

if (isNaN(distancia) || distancia <= 0) {
    alert("Distancia inválida");
} else if (distancia <= 5) {
    tarifa = 5;
} else if (distancia <= 15) {
    tarifa = 10;
} else {
    tarifa = 15;
}

alert("La tarifa del transporte es: $" + tarifa);
