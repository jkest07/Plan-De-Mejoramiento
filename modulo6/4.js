class Persona {
    constructor(id, nombre, edad, correo) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
    }
}

let personas = [];

function agregarPersona(nombre, edad, correo) {
    const id = personas.length ? personas.at(-1).id + 1 : 1;
    personas.push(new Persona(id, nombre, edad, correo));
    renderPersonas();
}

function eliminarPersona(id) {
    personas = personas.filter(p => p.id !== id);
    renderPersonas();
}

function renderPersonas() {
    let html = "";
    personas.forEach(p => {
        html += `
            <tr>
                <td>${p.nombre}</td>
                <td>${p.edad}</td>
                <td>${p.correo}</td>
                <td>
                    <button onclick="eliminarPersona(${p.id})">Eliminar</button>
                </td>
            </tr>
        `;
    });

    document.getElementById("tabla").innerHTML = html;
}

document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    agregarPersona(
        document.getElementById("nombre").value,
        document.getElementById("edad").value,
        document.getElementById("correo").value
    );
    e.target.reset();
});
