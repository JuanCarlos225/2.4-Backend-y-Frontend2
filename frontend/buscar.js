document.addEventListener("DOMContentLoaded", function () {
    var btnBuscar = document.getElementById("btn_buscar");

    btnBuscar.addEventListener("click", function () {
        buscarContacto();
    });

    function buscarContacto() {
        var email = document.getElementById("input_email").value;

        // Realizar la solicitud a tu API
        fetch(`http://localhost:8000/contactos/${email}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Mostrar los datos del contacto
                if (data) {
                    mostrarDatosContacto(data);
                } else {
                    alert("No se encontró ningún contacto con ese email.");
                }
            })
            .catch(error => console.error('Error al buscar contacto:', error));
    }

    function mostrarDatosContacto(contacto) {
        var resultadoDiv = document.getElementById("resultado_busqueda");
        resultadoDiv.innerHTML = "";

        // Crear una tabla para mostrar los detalles del contacto
        var table = document.createElement("table");
        table.style.marginTop = "20px";

        // Añadir encabezado de la tabla
        var thead = document.createElement("thead");
        var trHead = document.createElement("tr");
        ["Email", "Nombre", "Telefono"].forEach(headerText => {
            var th = document.createElement("th");
            th.appendChild(document.createTextNode(headerText));
            trHead.appendChild(th);
        });
        thead.appendChild(trHead);
        table.appendChild(thead);

        // Añadir cuerpo de la tabla con los detalles del contacto
        var tbody = document.createElement("tbody");
        var trBody = document.createElement("tr");
        ["email", "nombre", "telefono"].forEach(key => {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(contacto[key]));
            trBody.appendChild(td);
        });
        tbody.appendChild(trBody);
        table.appendChild(tbody);

        resultadoDiv.appendChild(table);
    }
});
