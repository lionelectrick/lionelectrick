// script.js
import { ref, set, push } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Esperar a que el documento esté listo
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault(); // Prevenir el envío por defecto

        // Recoger los valores de los campos
        const nombre = document.querySelector('input[placeholder="nombre"]').value;
        const telefono = document.querySelector('input[placeholder="telefono"]').value;
        const direccion = document.querySelector('input[placeholder="direccion"]').value;
        const correo = document.querySelector('input[placeholder="correo"]').value;
        const texto = document.querySelector('textarea[placeholder="texto"]').value;

        // Crear una referencia a 'usuarios/' en la base de datos
        const userRef = ref(window.database, 'usuarios/'); // Acceder a database globalmente
        const newUserRef = push(userRef); // Crear una referencia para el nuevo usuario

        // Usar set para guardar los datos
        set(newUserRef, {
            nombre: nombre,
            telefono: telefono,
            direccion: direccion,
            correo: correo,
            texto: texto
        }).then(() => {
            alert("Datos enviados exitosamente");
            // Limpiar los campos
            document.querySelector("form").reset();
        }).catch((error) => {
            console.error("Error al enviar los datos: ", error);
        });
    });
});
