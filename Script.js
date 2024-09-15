

// Realtime DataBase
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
firebase.initializeApp(firebaseConfig);
firebase.analytics(); 
var database = firebase.database();


// auto update 



// Phòng khách 


// Nhiet do----------------------------------------------
database.ref("/Smarthome/Livingroom/Temp").on("value", function(snapshot){
    var temp = snapshot.val();
    document.getElementById("Temp").innerHTML = temp;
})

// Do am ------------------------------------------------
database.ref("/Smarthome/Livingroom/Hum").on("value", function(snapshot){
    var hum = snapshot.val();
    document.getElementById("Hum").innerHTML = hum;
})

// fan
database.ref("/Smarthome/Livingroom/Fan").on("value", function(snapshot){
    var fan = snapshot.val();
    document.getElementById("fan").innerHTML = fan;
})

// Canh bao
database.ref("/Smarthome/Livingroom/Warn").on("value", function(snapshot){
    var warn = snapshot.val();
    document.getElementById("Warn").innerHTML = warn;
})

// Phòng ăn 


// Nhiet do----------------------------------------------
database.ref("/Smarthome/Dinningroom/Temp").on("value", function(snapshot){
    var temp1 = snapshot.val();
    document.getElementById("Temp1").innerHTML = temp1;
})

// Khi gas
database.ref("/Smarthome/Dinningroom/Khí gas").on("value", function(snapshot){
    var gas = snapshot.val();
    document.getElementById("gas").innerHTML = gas;
})

// Bep tu
database.ref("/Smarthome/Dinningroom/Bep tu").on("value", function(snapshot){
    var bep = snapshot.val();
    document.getElementById("bep").innerHTML = bep;
})

// Canh bao
database.ref("/Smarthome/Dinningroom/Warn").on("value", function(snapshot){
    var Warn1 = snapshot.val();
    document.getElementById("Warn1").innerHTML = Warn1;
})