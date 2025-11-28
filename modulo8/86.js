function contarPalabras(texto) {
    let palabras = texto.trim().split(/\s+/);
    let caracteres = texto.replace(/\s/g, "").length;
    let lineas = texto.split(/\n/).length;
    return {palabras: palabras.length, caracteres: caracteres, lineas: lineas};
}

let texto = prompt("Ingrese un texto:");
let resultado = contarPalabras(texto);
alert("Palabras: " + resultado.palabras + "\nCaracteres: " + resultado.caracteres + "\nLíneas: " + resultado.lineas);
