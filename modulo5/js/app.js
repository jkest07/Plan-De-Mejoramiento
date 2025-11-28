// Importar la clase
import { Gift } from "./clases.js";

// Importar datos (JSON requiere assert)
import datos from "../Data/Data.json" assert { type: "json" };

// ID global para actualización
let idGiftUpdate = null;

// Cuerpo de tabla
const cuerpoTabla = document.querySelector("#cuerpo-tabla");

// Instancia del modal de Bootstrap
const myModal = new bootstrap.Modal(
    document.getElementById("modal-gift")
);


/* ===========================================
   READ
=========================================== */
const cargarTabla = () => {

    cuerpoTabla.innerHTML = "";

    datos.map((item) => {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${item.gift}</td>
            <td>${item.tipo}</td>
            <td>${item.tiempo}</td>
            <td>$${item.precio}</td>
            <td>
                <div class="d-flex gap-2">

                    <button class="btn btn-outline-warning"
                        onclick="window.MostrarModal(${item.id})">
                        <i class="fas fa-pencil-alt"></i>
                    </button>

                    <button class="btn btn-outline-danger"
                        onclick="window.BorrarGift(${item.id})">
                        <i class="fas fa-times"></i>
                    </button>

                </div>
            </td>
        `;

        cuerpoTabla.appendChild(fila);
    });
};

cargarTabla();


/* ===========================================
   CREATE
=========================================== */
const formAgregar = document.querySelector("#form-gift");

const agregarGift = (e) => {
    e.preventDefault();

    const id = datos.at(-1).id + 1;

    const gift = document.querySelector("#gift").value;
    const tipo = document.querySelector("#tipo").value;
    const tiempo = document.querySelector("#tiempo").value;
    const precio = document.querySelector("#precio").value;
    const imagen = document.querySelector("#imagen").value;

    datos.push(new Gift(id, gift, tipo, tiempo, precio, imagen));

    formAgregar.reset();
    cargarTabla();
};

formAgregar.addEventListener("submit", agregarGift);


/* ===========================================
   DELETE
=========================================== */
window.BorrarGift = (id) => {

    const index = datos.findIndex(item => item.id === id);

    const validar = confirm(
        `¿Está seguro que quiere eliminar la gift Card ${datos[index].gift}?`
    );

    if (validar) {
        datos.splice(index, 1);
        cargarTabla();
    }
};


/* ===========================================
   UPDATE (MOSTRAR MODAL)
=========================================== */
window.MostrarModal = (id) => {

    idGiftUpdate = id;

    const index = datos.findIndex(item => item.id === id);

    document.querySelector("#gift-modal").value = datos[index].gift;
    document.querySelector("#tipo-modal").value = datos[index].tipo;
    document.querySelector("#tiempo-modal").value = datos[index].tiempo;
    document.querySelector("#precio-modal").value = datos[index].precio;
    document.querySelector("#imagen-modal").value = datos[index].imagen;

    myModal.show();
};


/* ===========================================
   UPDATE (GUARDAR CAMBIOS)
=========================================== */
const formModal = document.querySelector("#form-modal");

const giftUpdate = (e) => {
    e.preventDefault();

    const index = datos.findIndex(item => item.id === idGiftUpdate);

    datos[index].gift   = document.querySelector("#gift-modal").value;
    datos[index].tipo   = document.querySelector("#tipo-modal").value;
    datos[index].tiempo = document.querySelector("#tiempo-modal").value;
    datos[index].precio = document.querySelector("#precio-modal").value;
    datos[index].imagen = document.querySelector("#imagen-modal").value;

    cargarTabla();
    myModal.hide();
};

formModal.addEventListener("submit", giftUpdate);
