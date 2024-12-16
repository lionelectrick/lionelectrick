// Importamos las funciones necesarias desde el SDK de Firebase para usar la base de datos.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";  // Importa la función para inicializar la aplicación de Firebase.
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";  // Importa la función para acceder a la base de datos de Firebase.

// Aquí configuramos los datos necesarios para conectar nuestra aplicación con Firebase.
// Estos datos se encuentran en el proyecto de Firebase que has creado en la consola de Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyCt1RSiGiLQbE6pkd91gA11QQUOBQLvD5w",
    authDomain: "lionelectrik-570da.firebaseapp.com",
    databaseURL:"https://lionelectrik-570da-default-rtdb.firebaseio.com/",
    projectId: "lionelectrik-570da",
    storageBucket: "lionelectrik-570da.firebasestorage.app",
    messagingSenderId: "741659456715",
    appId: "1:741659456715:web:48aa134196b60ab270574e"
};

// Usamos la configuración de Firebase para inicializar la aplicación de Firebase.
const app = initializeApp(firebaseConfig);  // Inicializa la aplicación Firebase usando los datos de configuración.

// Accedemos a la base de datos en tiempo real de Firebase para poder usarla más adelante.
const database = getDatabase(app);  // Obtiene una instancia de la base de datos de Firebase asociada a esta aplicación.

// Aquí hacemos que la instancia de `database` sea accesible globalmente para que otros scripts puedan acceder a ella.
// Al agregar `window.database = database;`, la base de datos estará disponible en el objeto `window` de la página web, 
// lo que significa que puede ser utilizada en cualquier otro archivo JavaScript en tu página.
window.database = database;  // Asignamos la instancia de la base de datos a `window.database` para acceso global.
