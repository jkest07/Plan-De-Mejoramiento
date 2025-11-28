let a = parseFloat(prompt("Ingrese lado a:"));
let b = parseFloat(prompt("Ingrese lado b:"));
let c = parseFloat(prompt("Ingrese lado c:"));
let tipoTriangulo = (a === b && b === c) ? "Equilátero" :
                    (a === b || a === c || b === c) ? "Isósceles" : "Escaleno";
alert("El triángulo es: " + tipoTriangulo);
