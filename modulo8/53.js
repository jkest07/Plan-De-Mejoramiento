let array = [5, 12, 8, 130, 44];
let buscar = parseFloat(prompt("Ingrese el número a buscar:"));
if (isNaN(buscar)) {
    alert("Número inválido");
} else {
    let index = array.indexOf(buscar);
    if (index !== -1) {
        alert("Elemento encontrado en la posición: " + index);
    } else {
        alert("Elemento no encontrado");
    }
}
