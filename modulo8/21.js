let num1 = parseFloat(prompt("Ingrese el primer número:"));
let operador = prompt("Ingrese el operador (+, -, *, /):");
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let resultado;

if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese números válidos.");
} else {
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Error: División por cero";
            }
            break;
        default:
            resultado = "Operador inválido";
            break;
    }
    alert("El resultado es: " + resultado);
}
