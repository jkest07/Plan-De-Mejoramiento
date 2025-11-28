let array1 = prompt("Ingrese los elementos del primer array separados por comas:").split(",");
let array2 = prompt("Ingrese los elementos del segundo array separados por comas:").split(",");
let union = Array.from(new Set(array1.concat(array2)));
let interseccion = array1.filter(item => array2.includes(item));
alert("Unión: " + union.join(", ") + "\nIntersección: " + interseccion.join(", "));
