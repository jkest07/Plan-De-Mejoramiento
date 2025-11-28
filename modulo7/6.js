// Lista original
const elementos = [
    "Manzana",
    "Pera",
    "Banano",
    "Uva",
    "Mango",
    "Sandía",
    "Melón",
    "Fresa",
    "Naranja",
    "Mandarina"
];

// Referencias al DOM
const inputBuscar = document.getElementById("buscar");
const lista = document.getElementById("lista");

// Función para mostrar elementos
function mostrarLista(arr) {
    lista.innerHTML = arr.map(item => `<li>${item}</li>`).join("");
}

// Mostrar todo al inicio
mostrarLista(elementos);

// Filtrar en tiempo real
inputBuscar.addEventListener("input", () => {
    const texto = inputBuscar.value.toLowerCase();

    const filtrados = elementos.filter(item =>
        item.toLowerCase().includes(texto)
    );

    mostrarLista(filtrados);
});
