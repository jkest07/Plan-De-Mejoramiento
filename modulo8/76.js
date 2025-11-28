let n = parseInt(prompt("Ingrese el tamaño de la matriz identidad:"));
let identidad = [];
for (let i = 0; i < n; i++) {
    identidad[i] = [];
    for (let j = 0; j < n; j++) {
        identidad[i][j] = (i === j ? 1 : 0);
    }
}
let mensaje = "";
for (let i = 0; i < n; i++) {
    mensaje += identidad[i].join(" ") + "\n";
}
alert("Matriz identidad:\n" + mensaje);
