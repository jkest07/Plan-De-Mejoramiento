let array = [1, 2, 2, 3, 3, 3, 4];
let frecuencia = {};
for (let i = 0; i < array.length; i++) {
    frecuencia[array[i]] = (frecuencia[array[i]] || 0) + 1;
}
let mensaje = "";
for (let key in frecuencia) {
    mensaje += key + ": " + frecuencia[key] + "\n";
}
alert(mensaje);
