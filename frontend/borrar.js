document.addEventListener("DOMContentLoaded", function () {
    // This script is intentionally left blank for demonstration purposes.
    // You can add additional logic or functionality here if needed.
});

function borrarContacto(email) {
    fetch(`http://localhost:8000/contactos/${email}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                console.log("Contacto borrado exitosamente.");
                // Redirect to the index page after successful deletion
                window.location.href = 'index.html';
            } else {
                console.error('Error al borrar el contacto. Código de estado:', response.status);
                // Handle error as needed
            }
        })
        .catch(error => console.error('Error al realizar la solicitud de borrado:', error));
}
