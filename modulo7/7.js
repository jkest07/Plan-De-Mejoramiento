// Referencias al DOM
const inputTiempo = document.getElementById("tiempo");
const btnIniciar = document.getElementById("btn-iniciar");
const btnCancelar = document.getElementById("btn-cancelar");
const contador = document.getElementById("contador");

// Estado del temporizador
let intervalo = null;
let tiempoRestante = 0;

// Función para actualizar el DOM
function actualizar() {
    contador.textContent = tiempoRestante;
}

// Iniciar temporizador
btnIniciar.addEventListener("click", () => {

    // Si ya hay un intervalo, no iniciar otro
    if (intervalo !== null) return;

    tiempoRestante = Number(inputTiempo.value);

    if (Number.isNaN(tiempoRestante) || tiempoRestante <= 0) {
        alert("Por favor ingresa un número válido de segundos.");
        return;
    }

    actualizar();

    intervalo = setInterval(() => {
        tiempoRestante--;
        actualizar();

        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            intervalo = null;
            alert("¡El tiempo ha terminado!");
        }

    }, 1000);
});

// Cancelar temporizador
btnCancelar.addEventListener("click", () => {
    if (intervalo !== null) {
        clearInterval(intervalo);
        intervalo = null;
        contador.textContent = "Cancelado";
    }
});
