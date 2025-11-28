function cifradoCesar(texto, desplazamiento) {
    return texto.split("").map(c => {
        let codigo = c.charCodeAt(0);
        if (codigo >= 65 && codigo <= 90) return String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
        if (codigo >= 97 && codigo <= 122) return String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
        return c;
    }).join("");
}

let texto = prompt("Ingrese el texto a cifrar:");
let desplazamiento = parseInt(prompt("Ingrese el desplazamiento:"));
alert("Texto cifrado: " + cifradoCesar(texto, desplazamiento));
