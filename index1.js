// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9nUubH2hYHUxJ6B-wOcqNcIw2yTynpLA",
    authDomain: "iot-vscode-42cd0.firebaseapp.com",
    databaseURL: "https://iot-vscode-42cd0-default-rtdb.firebaseio.com",
    projectId: "iot-vscode-42cd0",
    storageBucket: "iot-vscode-42cd0.appspot.com",
    messagingSenderId: "56383751903",
    appId: "1:56383751903:web:b77bcd853de33e2ad0cb6a",
    measurementId: "G-7RJ83SNNYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
const auth = getAuth(app)

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var submit = document.getElementById("submitData");
submit.addEventListener("click", function (event) {
    event.preventDefault()

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            const dt = new Date();
            update(ref(database, 'user' + user.uid),{
                last_login:dt,
            })
            alert("User login in");
            window.location.href ="home.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage);
        });

})

