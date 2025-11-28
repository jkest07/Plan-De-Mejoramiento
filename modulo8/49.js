let numero = prompt("Ingrese un número entero:");
if (!numero || isNaN(numero)) {
    alert("Número inválido");
} else {
    let invertido = numero.split("").reverse().join("");
    alert("Número invertido: " + invertido);
}
