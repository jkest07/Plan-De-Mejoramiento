let texto = prompt("Ingrese una palabra o frase:");
if (!texto) {
    alert("Entrada inválida");
} else {
    let contador = 0;
    let vocales = "aeiouAEIOU";
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    alert("Cantidad de vocales: " + contador);
}
