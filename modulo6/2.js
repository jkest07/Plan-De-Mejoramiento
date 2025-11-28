const lista = document.getElementById("lista-usuarios");

function cargarUsuarios() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            let html = "";

            data.forEach(usuario => {
                html += `
                    <li>
                        <h3>${usuario.name}</h3>
                        <p>Email: ${usuario.email}</p>
                        <p>Ciudad: ${usuario.address.city}</p>
                    </li>
                `;
            });

            lista.innerHTML = html;
        })
        .catch(err => console.log("Error:", err));
}

cargarUsuarios();
