let filas = 2, columnas = 2;
let matriz = [];
for (let i = 0; i < filas; i++) {
    matriz[i] = [];
    for (let j = 0; j < columnas; j++) {
        matriz[i][j] = prompt("Ingrese valor [" + i + "][" + j + "]:");
    }
}
let mensaje = "Recorrido fila por fila:\n";
for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        mensaje += matriz[i][j] + " ";
    }
    mensaje += "\n";
}
alert(mensaje);
