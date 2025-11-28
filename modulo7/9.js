// Referencias
const boton = document.getElementById("btn-modo");

// Cargar modo guardado
const modoGuardado = localStorage.getItem("modo");

if (modoGuardado === "oscuro") {
    document.body.classList.add("modo-oscuro");
    boton.textContent = "Modo Claro";
} else {
    boton.textContent = "Modo Oscuro";
}

// Evento para cambiar modo
boton.addEventListener("click", () => {

    document.body.classList.toggle("modo-oscuro");

    const esOscuro = document.body.classList.contains("modo-oscuro");

    // Guardar preferencia
    localStorage.setItem("modo", esOscuro ? "oscuro" : "claro");

    // Cambiar texto del botón
    boton.textContent = esOscuro ? "Modo Claro" : "Modo Oscuro";
});
