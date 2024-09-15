// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

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





document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();

    const room = document.getElementById('room').value;
    const device = document.getElementById('device').value;
    const timeOn = document.getElementById('timeOn').value;
    const timeOff = document.getElementById('timeOff').value;

    // Hiển thị kết quả hẹn giờ
    const resultDiv = document.getElementById('scheduleResult');
    resultDiv.innerHTML = `
        <p><strong>Phòng:</strong> ${room}</p>
        <p></p>
        <p><strong>Thiết Bị:</strong> ${device}</p>
        <p></p>
        <p><strong>Thời Gian Bật:</strong> ${timeOn}</p>
        <p></p>
        <p><strong>Thời Gian Tắt:</strong> ${timeOff}</p>
    `;

    // Đặt hẹn giờ bật và tắt (giả lập)
    const currentTime = new Date();
    const timeOnDate = new Date(currentTime.toDateString() + ' ' + timeOn);
    const timeOffDate = new Date(currentTime.toDateString() + ' ' + timeOff);
    var Living_room =document.getElementById('Living_room');
    var Bedroom =document.getElementById('Bedroom');
    var Dinning_room =document.getElementById('Dinning_room');
    var Lamp = document.getElementById('Lamp');
    var Fan = document.getElementById('Fan');
    var Tivi = document.getElementById('Tivi');


    if (timeOnDate > currentTime) {
        setTimeout(() => {
            alert(`Thiết bị ${device} ở ${room} đã bật!`);
        }, timeOnDate - currentTime);

        if(room == Living_room){
            if(device == Lamp){
                database.ref("/Smarthome/Livingroom").update({
                    "Lamp" : "ON"
                })
            }else if(device == Fan){
                database.ref("/Smarthome/Livingroom").update({
                    "Fan" : "ON"
                })
            }else{
                database.ref("/Smarthome/Livingroom").update({
                    "Tivi" : "ON"
                })
            }
        }

        if(room == Bedroom){
            if(device === Lamp){
                database.ref("/Smarthome/Bedroom").update({
                    "Đèn" : "ON"
                })
            }else if(device == Fan){
                database.ref("/Smarthome/Bedroom").update({
                    "Máy lạnh" : "ON"
                })
            }else{
                database.ref("/Smarthome/Bedroom").update({
                    "Tivi" : "ON"
                })
            }
        }

        if(room == Dinning_room){
            if(device === Lamp){
                database.ref("/Smarthome/Dinningroom").update({
                    "Lamp" : "ON"
                })
            }else if(device == Fan){
                database.ref("/Smarthome/Dinningroom").update({
                    "Fan" : "ON"
                })
            }else{
                database.ref("/Smarthome/Dinningroom").update({
                    "Tivi" : "ON"
                })
            }
        }
    }

    if (timeOffDate > currentTime) {
        setTimeout(() => {
            alert(`Thiết bị ${device} ở ${room} đã tắt!`);
        }, timeOffDate - currentTime);

        if(room == "Livingroom"){
            if(device === "Lamp"){
                database.ref("/Smarthome/Livingroom").update({
                    "Lamp" : "OFF"
                })
            }else if(device == "Fan"){
                database.ref("/Smarthome/Livingroom").update({
                    "Fan" : "OFF"
                })
            }else{
                database.ref("/Smarthome/Livingroom").update({
                    "Tivi" : "OFF"
                })
            }
        }

        if(room == "Bedroom"){
            if(device === "Lamp"){
                database.ref("/Smarthome/Bedroom").update({
                    "Đèn" : "OFF"
                })
            }else if(device == "Fan"){
                database.ref("/Smarthome/Bedroom").update({
                    "Máy lạnh" : "OFF"
                })
            }else{
                database.ref("/Smarthome/Bedroom").update({
                    "Tivi" : "OFF"
                })
            }
        }

        if(room == "Dinningroom"){
            if(device === "Lamp"){
                database.ref("/Smarthome/Dinningroom").update({
                    "Lamp" : "OFF"
                })
            }else if(device == "Fan"){
                database.ref("/Smarthome/Dinningroom").update({
                    "Fan" : "OFF"
                })
            }else{
                database.ref("/Smarthome/Dinningroom").update({
                    "Tivi" : "OFF"
                })
            }
        }
    }
});
