// Referencias al DOM
const inputCantidad = document.getElementById("cantidad");
const selectMoneda = document.getElementById("moneda");
const btnFormatear = document.getElementById("btn-formatear");
const resultado = document.getElementById("resultado");

// Evento del botón
btnFormatear.addEventListener("click", () => {
    
    const valor = Number(inputCantidad.value);

    // Validación
    if (Number.isNaN(valor)) {
        resultado.textContent = "Por favor ingrese un número válido.";
        return;
    }

    // Obtener configuración de moneda
    const [locale, currency] = selectMoneda.value.split("|");

    // Formateador de moneda
    const formato = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency
    });

    // Mostrar resultado
    resultado.textContent = formato.format(valor);
});
