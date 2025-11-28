let n = 2;
let matriz = [];
for (let i = 0; i < n; i++) {
    matriz[i] = [];
    for (let j = 0; j < n; j++) {
        matriz[i][j] = parseFloat(prompt("Ingrese valor [" + i + "][" + j + "]:"));
    }
}
let rotada = [];
for (let i = 0; i < n; i++) {
    rotada[i] = [];
    for (let j = 0; j < n; j++) {
        rotada[i][j] = matriz[n - j - 1][i];
    }
}
let mensaje = "";
for (let i = 0; i < n; i++) {
    mensaje += rotada[i].join(" ") + "\n";
}
alert("Matriz rotada 90°:\n" + mensaje);
