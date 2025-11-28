let usuarios = {};

function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        hash = ((hash << 5) - hash) + password.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

function registrarUsuario(nombre, password) {
    usuarios[nombre] = hashPassword(password);
}

function login(nombre, password) {
    return usuarios[nombre] === hashPassword(password);
}

let accion = prompt("¿Desea registrar o login?").toLowerCase();

if (accion === "registrar") {
    let nombre = prompt("Ingrese nombre de usuario:");
    let pass = prompt("Ingrese contraseña:");
    registrarUsuario(nombre, pass);
    alert("Usuario registrado correctamente");
} else if (accion === "login") {
    let nombre = prompt("Ingrese nombre de usuario:");
    let pass = prompt("Ingrese contraseña:");
    alert(login(nombre, pass) ? "Login exitoso" : "Usuario o contraseña incorrectos");
} else {
    alert("Acción no válida");
}
