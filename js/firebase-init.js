// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDliDU4JEFzWUokhv8BgcJ2Q-BIQXJ0sGU",
    authDomain: "lionelectric-bcdcb.firebaseapp.com",
    databaseURL: "https://lionelectric-bcdcb-default-rtdb.firebaseio.com/",
    projectId: "lionelectric-bcdcb",
    storageBucket: "lionelectric-bcdcb.appspot.com",
    messagingSenderId: "517372488507",
    appId: "1:517372488507:web:8821ddef70776eb5bbe51e"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Hacer que `database` esté disponible globalmente
window.database = database;
