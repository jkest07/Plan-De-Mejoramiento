let puntuacion = parseFloat(prompt("Ingrese la puntuación (0-100):"));
let letra;

if (isNaN(puntuacion) || puntuacion < 0 || puntuacion > 100) {
    alert("Puntuación inválida");
} else if (puntuacion >= 90) {
    letra = "A";
} else if (puntuacion >= 80) {
    letra = "B";
} else if (puntuacion >= 70) {
    letra = "C";
} else if (puntuacion >= 60) {
    letra = "D";
} else {
    letra = "F";
}

alert("La calificación es: " + letra);
