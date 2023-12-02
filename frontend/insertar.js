const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const url = "http://localhost:8000/contactos";

    // Obtener los valores del formulario
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;

    // Verificar que se hayan ingresado valores en los campos
    if (email === "" || nombre === "" || telefono === "") {
        mostrarMensaje("Por favor, complete todos los campos");
        return;
    }

    // Datos del nuevo contacto a insertar
    const nuevo_contacto = {
        email: email,
        nombre: nombre,
        telefono: telefono
    };

    // Configuración de la solicitud POST
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevo_contacto)
    };

    // Realizar la solicitud POST para crear el contacto
    fetch(url, requestOptions)
        .then(response => {
            if (response.ok) {
                mostrarMensaje("¡Registro exitoso!");
                formulario.reset();
            } else {
                throw new Error("Error al crear el contacto");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            mostrarMensaje("Error al registrar el contacto");
        });
});

function mostrarMensaje(mensaje) {
    const mensajeElemento = document.createElement("p");
    mensajeElemento.textContent = mensaje;
    document.body.appendChild(mensajeElemento);
}