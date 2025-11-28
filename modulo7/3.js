// Variable global
let contador = 0;

// Elementos del DOM
const valor = document.getElementById("valor");
const btnAumentar = document.getElementById("btn-aumentar");
const btnDisminuir = document.getElementById("btn-disminuir");
const btnReiniciar = document.getElementById("btn-reiniciar");

// Función pura para actualizar el DOM
function actualizar() {
    valor.textContent = contador;
}

// Listeners
btnAumentar.addEventListener("click", () => {
    contador++;
    actualizar();
});

btnDisminuir.addEventListener("click", () => {
    contador--;
    actualizar();
});

btnReiniciar.addEventListener("click", () => {
    contador = 0;
    actualizar();
});
