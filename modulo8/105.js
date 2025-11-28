let edad = parseInt(prompt("Ingrese su edad:"));
let categoria = (edad < 18) ? "menor" : (edad < 65) ? "adulto" : "senior";
alert("Categoría: " + categoria);
