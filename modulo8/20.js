let limite = parseInt(prompt("Ingrese un número para sumar desde 1 hasta él:"));

if (isNaN(limite) || limite <= 0) {
    alert("Por favor, ingrese un número entero positivo.");
} else {
    let suma = 0;
    for (let i = 1; i <= limite; i++) {
        suma += i;
    }
    alert("La suma de los números del 1 al " + limite + " es: " + suma);
}
