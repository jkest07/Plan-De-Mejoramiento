let opciones = ["piedra", "papel", "tijera"];
let jugador = prompt("Elija: piedra, papel o tijera").toLowerCase();
let computadora = opciones[Math.floor(Math.random() * 3)];
let resultado;

if (!opciones.includes(jugador)) {
    alert("Opción inválida");
} else if (jugador === computadora) {
    resultado = "Empate";
} else if (
    (jugador === "piedra" && computadora === "tijera") ||
    (jugador === "papel" && computadora === "piedra") ||
    (jugador === "tijera" && computadora === "papel")
) {
    resultado = "¡Ganaste!";
} else {
    resultado = "Perdiste";
}

alert("Computadora eligió: " + computadora + "\nResultado: " + resultado);
