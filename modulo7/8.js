// Referencias al DOM
const inputTexto = document.getElementById("texto");
const btnCopiar = document.getElementById("btn-copiar");
const mensaje = document.getElementById("mensaje");

// Función asíncrona para copiar texto
async function copiarTexto() {
    const texto = inputTexto.value.trim();

    if (texto === "") {
        mensaje.textContent = "Por favor escribe algo antes de copiar.";
        return;
    }

    try {
        await navigator.clipboard.writeText(texto);

        // Feedback visual
        mensaje.textContent = "¡Texto copiado!";
        btnCopiar.textContent = "Copiado ✔";

        // Restaurar estado del botón
        setTimeout(() => {
            mensaje.textContent = "";
            btnCopiar.textContent = "Copiar";
        }, 1500);

    } catch (error) {
        mensaje.textContent = "No se pudo copiar el texto.";
        console.error("Error al copiar:", error);
    }
}

// Evento del botón
btnCopiar.addEventListener("click", copiarTexto);
