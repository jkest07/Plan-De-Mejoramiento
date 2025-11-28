let nota = parseFloat(prompt("Ingrese la calificación numérica (0-100):"));
let letra = (nota >= 90) ? "A" :
            (nota >= 80) ? "B" :
            (nota >= 70) ? "C" :
            (nota >= 60) ? "D" : "F";
alert("La calificación es: " + letra);
