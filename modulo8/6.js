let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
let altura = parseFloat(prompt("Ingrese su altura en metros:"));

if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
    alert("Por favor, ingrese valores válidos para peso y altura.");
} else {
    let imc = peso / (altura * altura);
    let clasificacion;

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc < 25) {
        clasificacion = "Normal";
    } else if (imc < 30) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    alert("Su IMC es " + imc.toFixed(2) + ". Clasificación: " + clasificacion);
}
