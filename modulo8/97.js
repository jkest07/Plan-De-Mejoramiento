function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

let numero = parseInt(prompt("Ingrese un número para calcular el factorial:"));
alert("Factorial de " + numero + " es " + factorial(numero));
