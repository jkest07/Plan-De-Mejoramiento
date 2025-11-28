let array = prompt("Ingrese los elementos del array separados por comas:").split(",");
let k = parseInt(prompt("Ingrese el número de posiciones a rotar:"));
if (isNaN(k)) k = 0;
k = k % array.length;
let rotado = array.slice(-k).concat(array.slice(0, -k));
alert("Array rotado: " + rotado.join(", "));
