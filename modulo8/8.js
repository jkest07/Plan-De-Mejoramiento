let cuenta = parseFloat(prompt("Ingrese el total de la cuenta:"));
let servicio = prompt("Ingrese el nivel de servicio (básico, bueno, excelente):").toLowerCase();
let propina;

if (isNaN(cuenta) || cuenta <= 0) {
    alert("Por favor, ingrese un monto válido.");
} else {
    if (servicio === "básico") {
        propina = cuenta * 0.10;
    } else if (servicio === "bueno") {
        propina = cuenta * 0.15;
    } else if (servicio === "excelente") {
        propina = cuenta * 0.20;
    } else {
        propina = null;
    }

    if (propina !== null) {
        alert("El monto de la propina es: " + propina.toFixed(2));
    } else {
        alert("Nivel de servicio inválido.");
    }
}
