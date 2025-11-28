// Referencias al DOM
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btnSumar = document.getElementById("btn-sumar");
const resultado = document.getElementById("resultado");

// Evento del botón
btnSumar.addEventListener("click", () => {

    // Convertir a número
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    // Validación
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        resultado.textContent = "Error: Debes ingresar números válidos.";
        return;
    }

    // Suma
    const suma = n1 + n2;

    // Mostrar resultado usando template literals
    resultado.textContent = `La suma es: ${suma}`;
});
