let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function agregarTarea(texto) {
    tareas.push({ id: Date.now(), texto, completa: false });
    guardarTareas();
    renderTareas();
}

function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    guardarTareas();
    renderTareas();
}

function completarTarea(id) {
    const t = tareas.find(t => t.id === id);
    t.completa = !t.completa;
    guardarTareas();
    renderTareas();
}

function renderTareas() {
    const contenedor = document.getElementById("lista");
    let html = "";

    tareas.forEach(t => {
        html += `
            <div>
                <input type="checkbox" ${t.completa ? "checked" : ""} 
                    onclick="completarTarea(${t.id})">
                ${t.texto}
                <button onclick="eliminarTarea(${t.id})">X</button>
            </div>
        `;
    });

    contenedor.innerHTML = html;
}

document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    const texto = document.getElementById("input").value;
    agregarTarea(texto);
    e.target.reset();
});

renderTareas();
