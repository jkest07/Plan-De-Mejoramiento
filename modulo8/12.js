let numero = parseInt(prompt("Ingrese un número entero:"));

if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
} else {
    let suma = 0;
    let temp = Math.abs(numero);
    while (temp > 0) {
        suma += temp % 10;
        temp = Math.floor(temp / 10);
    }
    alert("La suma de los dígitos es: " + suma);
}
