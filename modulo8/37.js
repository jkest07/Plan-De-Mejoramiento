let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /, ^):");
let resultado;

if (isNaN(num1) || isNaN(num2)) {
    alert("Número inválido");
} else {
    switch (operacion) {
        case '+': resultado = num1 + num2; break;
        case '-': resultado = num1 - num2; break;
        case '*': resultado = num1 * num2; break;
        case '/': resultado = num2 !== 0 ? num1 / num2 : "Error: División por cero"; break;
        case '^': resultado = Math.pow(num1, num2); break;
        default: resultado = "Operación inválida"; break;
    }
    alert("Resultado: " + resultado);
}
