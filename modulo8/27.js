let plato = prompt("Ingrese el nombre del plato:");
let precio = parseFloat(prompt("Ingrese el precio del plato:"));
let cantidad = parseInt(prompt("Ingrese la cantidad:"));

if (!plato || isNaN(precio) || precio < 0 || isNaN(cantidad) || cantidad < 1) {
    alert("Datos inválidos");
} else {
    let total = precio * cantidad;
    alert("Pedido: " + cantidad + " x " + plato + "\nTotal: $" + total.toFixed(2));
}
