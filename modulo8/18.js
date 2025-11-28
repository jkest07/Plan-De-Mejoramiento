let distancia = parseFloat(prompt("Ingrese la distancia (en metros):"));
let tiempo = parseFloat(prompt("Ingrese el tiempo (en segundos):"));

if (isNaN(distancia) || distancia <= 0 || isNaN(tiempo) || tiempo <= 0) {
    alert("Por favor, ingrese valores válidos.");
} else {
    let velocidad = distancia / tiempo;
    alert("La velocidad es: " + velocidad.toFixed(2) + " m/s");
}
