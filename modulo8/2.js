let numero = parseInt(prompt("Ingrese un número para verificar si es par o impar:"));

if (isNaN(numero)) {
    alert("Por favor, ingrese un número entero válido.");
} else {
    if (numero % 2 === 0) {
        alert("El número " + numero + " es par.");
    } else {
        alert("El número " + numero + " es impar.");
    }
}
