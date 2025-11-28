let num1 = parseFloat(prompt("Ingrese el primer número:"));
let operador = prompt("Ingrese el operador (+, -, *, /):");
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

let resultado;

if (operador === '+') {
    resultado = num1 + num2;
} else if (operador === '-') {
    resultado = num1 - num2;
} else if (operador === '*') {
    resultado = num1 * num2;
} else if (operador === '/') {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        resultado = "Error: División por cero";
    }
} else {
    resultado = "Operador inválido";
}

alert("El resultado es: " + resultado);
