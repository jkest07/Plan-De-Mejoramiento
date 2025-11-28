let limite = parseInt(prompt("Ingrese un número hasta el cual sumar:"));

if (isNaN(limite) || limite <= 0) {
    alert("Número inválido");
} else {
    let suma = 0;
    for (let i = 1; i <= limite; i++) {
        suma += i;
    }
    alert("La suma de los números del 1 al " + limite + " es: " + suma);
}
