let lado1 = parseFloat(prompt("Ingrese el lado 1:"));
let lado2 = parseFloat(prompt("Ingrese el lado 2:"));
let lado3 = parseFloat(prompt("Ingrese el lado 3:"));
let tipo;

if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    alert("Valores inválidos");
} else if (lado1 === lado2 && lado2 === lado3) {
    tipo = "Equilátero";
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    tipo = "Isósceles";
} else {
    tipo = "Escaleno";
}

alert("El triángulo es: " + tipo);
