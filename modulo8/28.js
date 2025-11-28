let horas = parseFloat(prompt("Ingrese las horas trabajadas:"));
let tarifa = parseFloat(prompt("Ingrese la tarifa por hora:"));
let horasExtra = horas > 40 ? horas - 40 : 0;
let pago;

if (isNaN(horas) || horas < 0 || isNaN(tarifa) || tarifa < 0) {
    alert("Valores inválidos");
} else {
    pago = (horas - horasExtra) * tarifa + horasExtra * tarifa * 1.5;
    alert("El pago total es: $" + pago.toFixed(2));
}
