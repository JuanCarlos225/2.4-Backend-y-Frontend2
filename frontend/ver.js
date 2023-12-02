document.addEventListener("DOMContentLoaded", function () {
    // Get the contact details from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const nombre = urlParams.get('nombre');
    const telefono = urlParams.get('telefono');

    // Display contact details in the table
    document.getElementById("emailCell").textContent = email;
    document.getElementById("nombreCell").textContent = nombre;
    document.getElementById("telefonoCell").textContent = telefono;
});

function volverAIndex() {
    // Redirect back to the index page
    window.location.href = 'index.html';
}
