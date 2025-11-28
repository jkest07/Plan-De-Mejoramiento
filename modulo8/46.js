let filas = parseInt(prompt("Ingrese el número de filas para el patrón de asteriscos:"));

if (isNaN(filas) || filas <= 0) {
    alert("Número inválido");
} else {
    let mensaje = "";
    for (let i = 1; i <= filas; i++) {
        for (let j = 1; j <= i; j++) {
            mensaje += "*";
        }
        mensaje += "\n";
    }
    alert(mensaje);
}
