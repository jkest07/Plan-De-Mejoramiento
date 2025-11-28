let datos = [];
let editId = null;

function cargarTabla() {
    const tabla = document.getElementById("cuerpo");

    let html = "";
    datos.forEach(item => {
        html += `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.categoria}</td>
                <td>${item.precio}</td>
                <td>
                    <button onclick="editar(${item.id})">Editar</button>
                    <button onclick="eliminar(${item.id})">Eliminar</button>
                </td>
            </tr>
        `;
    });

    tabla.innerHTML = html;
}

function agregar(e) {
    e.preventDefault();

    const id = datos.length ? datos.at(-1).id + 1 : 1;

    datos.push({
        id,
        nombre: document.getElementById("nombre").value,
        categoria: document.getElementById("categoria").value,
        precio: document.getElementById("precio").value
    });

    e.target.reset();
    cargarTabla();
}

function eliminar(id) {
    datos = datos.filter(item => item.id !== id);
    cargarTabla();
}

function editar(id) {
    editId = id;
    const item = datos.find(i => i.id === id);

    document.getElementById("nombre-edit").value = item.nombre;
    document.getElementById("categoria-edit").value = item.categoria;
    document.getElementById("precio-edit").value = item.precio;

    document.getElementById("modal").style.display = "block";
}

function actualizar(e) {
    e.preventDefault();

    const index = datos.findIndex(i => i.id === editId);

    datos[index].nombre = document.getElementById("nombre-edit").value;
    datos[index].categoria = document.getElementById("categoria-edit").value;
    datos[index].precio = document.getElementById("precio-edit").value;

    document.getElementById("modal").style.display = "none";

    cargarTabla();
}

document.getElementById("form").addEventListener("submit", agregar);
document.getElementById("form-edit").addEventListener("submit", actualizar);
