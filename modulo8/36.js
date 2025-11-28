let numero = parseInt(prompt("Ingrese un número entero:"));

if (isNaN(numero)) {
    alert("Número inválido");
} else {
    alert("Binario: " + numero.toString(2) + "\nOctal: " + numero.toString(8) + "\nHexadecimal: " + numero.toString(16));
}
