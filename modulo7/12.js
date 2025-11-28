const btn = document.getElementById("btn-ejecutar");
const salida = document.getElementById("resultado");

// Función que simula una operación que puede fallar
function operacionRiesgosa() {
    // 50% de probabilidad de fallo
    const fallo = Math.random() < 0.5;

    if (fallo) {
        throw new Error("La operación falló inesperadamente.");
    }

    return "Operación realizada con éxito ✔";
}

// Función que maneja el proceso completo usando try/catch/finally
function ejecutarConSeguridad() {
    let resultado;
    let fallback = "Resultado alternativo (fallback) aplicado.";

    try {
        resultado = operacionRiesgosa();
    } catch (error) {
        resultado = `${error.message}\n→ Usando fallback: ${fallback}`;
    } finally {
        console.log("Finalizando operación (finally ejecutado).");
    }

    return resultado;
}

// Evento para mostrar el resultado en pantalla
btn.addEventListener("click", () => {
    const resultado = ejecutarConSeguridad();
    salida.textContent = resultado;
});
