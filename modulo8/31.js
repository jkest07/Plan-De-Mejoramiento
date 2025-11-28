let ingreso = parseFloat(prompt("Ingrese su ingreso anual:"));
let impuesto;

if (isNaN(ingreso) || ingreso < 0) {
    alert("Ingreso inválido");
} else if (ingreso <= 20000) {
    impuesto = ingreso * 0.1;
} else if (ingreso <= 50000) {
    impuesto = ingreso * 0.2;
} else {
    impuesto = ingreso * 0.3;
}

alert("El impuesto a pagar es: $" + impuesto.toFixed(2));
