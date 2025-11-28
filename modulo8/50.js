let palabra = prompt("Ingrese una palabra:");
if (!palabra) {
    alert("Entrada inválida");
} else {
    let invertida = palabra.split("").reverse().join("");
    if (palabra.toLowerCase() === invertida.toLowerCase()) {
        alert("Es un palíndromo");
    } else {
        alert("No es un palíndromo");
    }
}
