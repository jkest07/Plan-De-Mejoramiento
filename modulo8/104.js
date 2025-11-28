let año = parseInt(prompt("Ingrese un año:"));
let esBisiesto = (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0) ? "sí" : "no";
alert("El año " + año + " es bisiesto? " + esBisiesto);
