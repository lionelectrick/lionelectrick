// Importamos las funciones necesarias de Firebase Database para poder leer y escribir datos.
import { ref, set, push } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Inicializamos EmailJS con tu clave pública. Esta clave es la que vincula tu aplicación con tu cuenta de EmailJS.
emailjs.init('mGSN5RENgrBuWKFs6');  // Reemplaza con tu clave pública real de EmailJS.

// Esperamos a que el documento HTML se haya cargado completamente para que podamos acceder al formulario y sus elementos.
document.addEventListener("DOMContentLoaded", function() {
    
    // Añadimos un evento al formulario para que cuando el usuario lo envíe, ejecute la función que se pasa como argumento.
    // Esto se hace para controlar el envío del formulario manualmente.
    document.querySelector("form").addEventListener("submit", function(e) {
        
        // Esto previene que el formulario se envíe de manera tradicional, evitando que la página se recargue.
        e.preventDefault(); // Prevenir el envío por defecto del formulario.

        // Recogemos los valores de los campos del formulario utilizando los selectores `name` de los inputs y textarea.
        // El `.value` obtiene el valor que el usuario ha introducido en cada campo del formulario.
        const nombre = document.querySelector('input[name="name"]').value;
        const telefono = document.querySelector('input[name="phone"]').value;
        const direccion = document.querySelector('input[name="addres"]').value;
        const correo = document.querySelector('input[name="email"]').value;
        const texto = document.querySelector('textarea[name="text"]').value;

        // Accedemos a la base de datos de Firebase, específicamente a la referencia "usuarios".
        // Firebase crea una referencia global que podemos usar para leer o escribir datos.
        const userRef = ref(window.database, 'usuarios/'); // `window.database` contiene la instancia de la base de datos de Firebase.
        
        // Usamos `push` para crear una nueva entrada en Firebase bajo "usuarios". `push` genera un identificador único automáticamente.
        const newUserRef = push(userRef); // Creamos una nueva referencia de usuario.

        // Usamos `set` para guardar los datos dentro de la nueva referencia `newUserRef`.
        // Los datos se guardan en Firebase bajo un nuevo nodo creado para el usuario.
        set(newUserRef, {
            nombre: nombre,    // El valor del campo "nombre" del formulario.
            telefono: telefono,  // El valor del campo "telefono".
            direccion: direccion, // El valor del campo "direccion".
            correo: correo,    // El valor del campo "correo".
            texto: texto       // El valor del campo "texto".
        }).then(() => {
            // Si los datos se guardan correctamente en Firebase, se ejecuta este bloque.
            console.log("Datos guardados en Firebase");  // Mostramos un mensaje en consola para indicar éxito.

            // Ahora, enviamos esos mismos datos por correo usando EmailJS.
            // `emailjs.send` envía un correo utilizando el servicio de EmailJS, utilizando el ID de servicio y plantilla que configuraste.
            emailjs.send('service_kpyab8h', 'template_hygd74s', {
                nombre: nombre,
                telefono: telefono,
                direccion: direccion,
                correo: correo,
                texto: texto
            }).then(function(response) {
                // Si el correo se envió correctamente, mostramos este mensaje en consola.
                console.log('Correo enviado exitosamente:', response);
                
                // Mostramos un mensaje de alerta para informar al usuario que su mensaje fue enviado correctamente.
                alert("Datos enviados exitosamente. Hemos recibido tu mensaje.");
            }, function(error) {
                // Si hay un error al enviar el correo, se ejecuta este bloque.
                console.error('Error al enviar el correo:', error);
                
                // Mostramos un mensaje de alerta indicando que hubo un problema al enviar el correo.
                alert('Hubo un problema al enviar el correo. Inténtalo de nuevo.');
            });

            // Limpiamos todos los campos del formulario una vez que todo se haya procesado correctamente.
            // Esto se hace para que el formulario quede vacío y listo para recibir nuevos datos.
            document.querySelector("form").reset();
        }).catch((error) => {
            // Si ocurre un error al guardar los datos en Firebase, se ejecuta este bloque.
            console.error("Error al guardar los datos en Firebase: ", error);
            
            // Mostramos un mensaje de alerta para notificar al usuario sobre el error.
            alert("Hubo un error al guardar los datos en Firebase.");
        });
    });
});
