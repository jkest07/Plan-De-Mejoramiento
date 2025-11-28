let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let descuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

if (isNaN(precio) || precio <= 0 || isNaN(descuento) || descuento < 0 || descuento > 100) {
    alert("Por favor, ingrese valores válidos.");
} else {
    let total = precio - (precio * descuento / 100);
    alert("El precio con descuento es: " + total.toFixed(2));
}
