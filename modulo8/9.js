let numero = parseFloat(prompt("Ingrese un número:"));

if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
} else if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}
