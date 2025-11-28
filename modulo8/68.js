let texto = prompt("Ingrese un texto:");
let buscar = prompt("Ingrese el valor a buscar:");
let reemplazar = prompt("Ingrese el valor para reemplazar:");
if (!texto || !buscar) {
    alert("Entrada inválida");
} else {
    let resultado = texto.split(buscar).join(reemplazar);
    alert("Texto resultante: " + resultado);
}
