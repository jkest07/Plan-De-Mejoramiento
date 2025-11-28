const btn = document.getElementById("btn-ejecutar");
const salida = document.getElementById("resultado");

// Simula una operación asíncrona que puede fallar
function operacionAsincrona() {
    return new Promise((resolve, reject) => {

        salida.textContent = "Estado: pending...\nProcesando...";

        setTimeout(() => {
            const exito = Math.random() > 0.4; // 60% éxito, 40% falla

            if (exito) {
                resolve("Operación completada ✔");
            } else {
                reject("Error: la operación falló ❌");
            }
        }, 1500);

    });
}

btn.addEventListener("click", () => {
    operacionAsincrona()
        .then(resultado => {
            salida.textContent = 
                "Estado: fulfilled ✔\n" +
                "Resultado:\n" + resultado;
        })
        .catch(error => {
            salida.textContent = 
                "Estado: rejected ❌\n" +
                "Razón:\n" + error;
        });
});
