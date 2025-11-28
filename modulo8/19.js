let capital = parseFloat(prompt("Ingrese el capital:"));
let tasa = parseFloat(prompt("Ingrese la tasa de interés (en %):"));
let tiempo = parseFloat(prompt("Ingrese el tiempo en años:"));

if (isNaN(capital) || capital <= 0 || isNaN(tasa) || tasa < 0 || isNaN(tiempo) || tiempo < 0) {
    alert("Por favor, ingrese valores válidos.");
} else {
    let interes = capital * (tasa / 100) * tiempo;
    alert("El interés simple es: " + interes.toFixed(2));
}
