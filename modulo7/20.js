const btn = document.getElementById("btn-fetch");
const salida = document.getElementById("resultado");

// URL de prueba (API pública)
const URL = "https://jsonplaceholder.typicode.com/users";

async function cargarDatos() {
    salida.textContent = "Cargando...";

    try {
        const respuesta = await fetch(URL);

        // Verificar errores HTTP
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const datos = await respuesta.json();

        salida.textContent = JSON.stringify(datos, null, 2);

    } catch (error) {
        salida.textContent = "Ocurrió un error:\n" + error.message;
    }
}

btn.addEventListener("click", cargarDatos);
