function generarReporte(datos) {
    let total = datos.reduce((a, b) => a + b, 0);
    let promedio = total / datos.length;
    let max = Math.max(...datos);
    let min = Math.min(...datos);
    let reporte = "=== Reporte ===\n";
    reporte += "Datos: " + datos.join(", ") + "\n";
    reporte += "Total: " + total + "\n";
    reporte += "Promedio: " + promedio.toFixed(2) + "\n";
    reporte += "Máximo: " + max + "\n";
    reporte += "Mínimo: " + min + "\n";
    reporte += "Gráfico de barras:\n";
    datos.forEach((d, i) => reporte += i+1 + ": " + "*".repeat(d) + "\n");
    return reporte;
}

let entrada = prompt("Ingrese números separados por comas para generar el reporte:").split(",").map(Number);
alert(generarReporte(entrada));
