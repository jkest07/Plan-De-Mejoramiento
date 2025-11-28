const btn = document.getElementById("btn-ejecutar");
const salida = document.getElementById("resultado");

// Simula una operación asíncrona que retorna una Promise
function operacionAsincrona() {
    return new Promise((resolve, reject) => {
        salida.textContent = "Estado: pending...\nProcesando...";

        setTimeout(() => {
            const exito = Math.random() > 0.4; // 60% éxito

            if (exito) {
                resolve("Operación completada con éxito ✔");
            } else {
                reject("La operación falló ❌");
            }
        }, 1500);
    });
}

// Función async con await
async function ejecutarAsync() {
    try {
        const resultado = await operacionAsincrona();
        salida.textContent =
            "Estado: fulfilled ✔\n" +
            "Resultado:\n" + resultado;
    } catch (error) {
        salida.textContent =
            "Estado: rejected ❌\n" +
            "Error:\n" + error;
    }
}

btn.addEventListener("click", ejecutarAsync);
