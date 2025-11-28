let array = prompt("Ingrese los elementos del array separados por comas:").split(",");
let unicos = array.filter(item => array.indexOf(item) === array.lastIndexOf(item));
alert("Elementos únicos: " + unicos.join(", "));
