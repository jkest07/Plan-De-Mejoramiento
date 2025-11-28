// Productos
const productos = [
    { id: 1, nombre: "Camiseta", precio: 25000 },
    { id: 2, nombre: "Pantalón", precio: 60000 },
    { id: 3, nombre: "Zapatos", precio: 120000 }
];

// Carrito
let carrito = [];

// Agregar producto al carrito
function agregarCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const item = carrito.find(p => p.id === id);

    if (item) {
        item.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
}

// Eliminar producto
function eliminarCarrito(id) {
    carrito = carrito.filter(p => p.id !== id);
    actualizarCarrito();
}

// Vaciar carrito
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Actualizar y mostrar carrito
function actualizarCarrito() {
    let html = "";
    let total = 0;

    carrito.forEach(item => {
        html += `
            <div>
                ${item.nombre} x${item.cantidad} — $${item.precio * item.cantidad}
                <button onclick="eliminarCarrito(${item.id})">X</button>
            </div>
        `;
        total += item.precio * item.cantidad;
    });

    document.getElementById("carrito").innerHTML = html;
    document.getElementById("total").textContent = total;
}

// Mostrar productos
function mostrarProductos() {
    let html = "";

    productos.forEach(p => {
        html += `
            <div>
                ${p.nombre} - $${p.precio}
                <button onclick="agregarCarrito(${p.id})">Agregar</button>
            </div>
        `;
    });

    document.getElementById("productos").innerHTML = html;
}

mostrarProductos();
