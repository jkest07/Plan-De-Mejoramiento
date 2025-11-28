let array = prompt("Ingrese los elementos del array separados por comas:").split(",");
let invertido = array.slice().reverse();
alert("Array invertido: " + invertido.join(", "));
