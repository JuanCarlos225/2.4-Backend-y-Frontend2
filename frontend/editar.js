document.addEventListener("DOMContentLoaded", function () {
    // Get the contact details from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const nombre = urlParams.get('nombre');
    const telefono = urlParams.get('telefono');

    // Display contact details in the table and input fields
    document.getElementById("emailCell").textContent = email;
    document.getElementById("nombreInput").value = nombre;
    document.getElementById("telefonoInput").value = telefono;
});

function guardarCambios() {
    const email = document.getElementById("emailCell").textContent;
    const nuevoNombre = document.getElementById("nombreInput").value;
    const nuevoTelefono = document.getElementById("telefonoInput").value;

    // Make a PUT request to update the contact
    fetch(`http://localhost:8000/contactos/${email}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            nombre: nuevoNombre,
            telefono: nuevoTelefono,
        }),
    })
    .then(response => {
        if (response.ok) {
            console.log("Contacto actualizado exitosamente.");
            // Redirect back to the index page after updating
            window.location.href = 'index.html';
        } else {
            console.error('Error al actualizar el contacto. Código de estado:', response.status);
            // You can add more error handling logic here
        }
    })
    .catch(error => console.error('Error al realizar la solicitud de actualización:', error));
}

function volverAIndex() {
    // Redirect back to the index page without making changes
    window.location.href = 'index.html';
}
