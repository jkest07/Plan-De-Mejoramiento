function suma(a, b) { return a + b; }
function resta(a, b) { return a - b; }
function multiplicacion(a, b) { return a * b; }
function division(a, b) { return b !== 0 ? a / b : "Error: División por cero"; }

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let operador = prompt("Ingrese el operador (+, -, *, /):");
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let resultado;

if (operador === "+") resultado = suma(num1, num2);
else if (operador === "-") resultado = resta(num1, num2);
else if (operador === "*") resultado = multiplicacion(num1, num2);
else if (operador === "/") resultado = division(num1, num2);
else resultado = "Operador inválido";

alert("Resultado: " + resultado);
