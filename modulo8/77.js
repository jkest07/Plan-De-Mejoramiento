let n = 2;
let matriz = [];
for (let i = 0; i < n; i++) {
    matriz[i] = [];
    for (let j = 0; j < n; j++) {
        matriz[i][j] = parseFloat(prompt("Ingrese valor [" + i + "][" + j + "]:"));
    }
}
let simetrica = true;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (matriz[i][j] !== matriz[j][i]) {
            simetrica = false;
            break;
        }
    }
}
alert("La matriz " + (simetrica ? "es simétrica" : "no es simétrica"));
