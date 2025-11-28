let inicio = parseInt(prompt("Ingrese el primer número de la serie:"));
let razon = parseInt(prompt("Ingrese la diferencia de la serie (razón):"));
let nTerminos = parseInt(prompt("Ingrese la cantidad de términos:"));

if (isNaN(inicio) || isNaN(razon) || isNaN(nTerminos) || nTerminos <= 0) {
    alert("Valores inválidos");
} else {
    let mensaje = "Serie aritmética:\n";
    for (let i = 0; i < nTerminos; i++) {
        mensaje += inicio + i * razon + "\n";
    }
    alert(mensaje);
}
