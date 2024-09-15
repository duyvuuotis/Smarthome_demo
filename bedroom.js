


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
var db = firebase.firestore();

// Đèn

var btn1_on=document.getElementById('btn_on1');
var btn1_off=document.getElementById('btn_off1');



btn1_on.onclick = function(){
    

    database.ref("/Smarthome/Bedroom").update({
        "Đèn" : 'ON'
    })
}

btn1_off.onclick = function(){
    

    database.ref("/Smarthome/Bedroom").update({
        "Đèn" : 'OFF'
    })
}

// Máy lạnh

var btn2_on=document.getElementById('btn_on2');
var btn2_off=document.getElementById('btn_off2');



btn2_on.onclick = function(){
    
    database.ref("/Smarthome/Bedroom").update({
        "Máy lạnh" : 'ON'
    })
}

btn2_off.onclick = function(){

    database.ref("/Smarthome/Bedroom").update({
        "Máy lạnh" : 'OFF'
    })
}

//Rèm cửa 

var btn3_on=document.getElementById('btn_on3');
var btn3_off=document.getElementById('btn_off3');



btn3_on.onclick = function(){
    
    database.ref("/Smarthome/Bedroom").update({
        "Rèm cửa" : 'OPEN'
    })
}

btn3_off.onclick = function(){

    database.ref("/Smarthome/Bedroom").update({
        "Rèm cửa" : 'CLOSE'
    })
}

//Tivi 

var btn4_on=document.getElementById('btn_on4');
var btn4_off=document.getElementById('btn_off4');



btn4_on.onclick = function(){
    
    database.ref("/Smarthome/Bedroom").update({
        "Tivi" : 'ON'
    })
}

btn4_off.onclick = function(){

    database.ref("/Smarthome/Bedroom").update({
        "Tivi" : 'OFF'
    })
}

// Get temparature from FireBase ( autoupdate when Data changes) ---------------
database.ref("/Smarthome/Bedroom/Temp").on("value", function(snapshot){
    var temp = snapshot.val();
    document.getElementById("Temp").innerHTML = temp;
})

//Humunity
database.ref("/Smarthome/Bedroom/Hum").on("value", function(snapshot){
    var hum = snapshot.val();
    document.getElementById("Hum").innerHTML = hum;
})

//Lamp
database.ref("/Smarthome/Bedroom/Đèn").on("value", function(snapshot){
    var lamp = snapshot.val();
    if(lamp == "ON"){
        document.getElementById("lamp-img").src = "assets/lamp_on.png"
    }else{
        document.getElementById("lamp-img").src = "assets/lamp_off.png"
    }
})

// May lanh
database.ref("/Smarthome/Bedroom/Máy lạnh").on("value", function(snapshot){
    var maylanh = snapshot.val();
    if(maylanh == "ON"){
        document.getElementById("fan-img").src = "assets/maylanh_on_.png"
    }else{
        document.getElementById("fan-img").src = "assets/maylanh_off.png"
    }
})

// Rem cua
database.ref("/Smarthome/Bedroom/Rèm cửa").on("value", function(snapshot){
    var rem = snapshot.val();
    if(rem == "OPEN"){
        document.getElementById("remcua-img").src = "assets/remcua_open.png"
    }else{
        document.getElementById("remcua-img").src = "assets/remcua_close.jpg"
    }
})

// Tivi
database.ref("/Smarthome/Bedroom/Tivi").on("value", function(snapshot){
    var tivi = snapshot.val();
    if(tivi == "ON"){
        document.getElementById("tivi-img").src = "assets/television_on.png"
    }else{
        document.getElementById("tivi-img").src = "assets/television_off.png"
    }
})


// Kiểm tra mật khẩu cửa
function checkPassword(){
    var inputPassword = document.getElementById('passwordInput').value;
    
    // Lấy mật khẩu đã lưu từ Firebase 
    db.collection("passwords").doc("doorPassword").get().then((doc) => {
        if (doc.exists) {
            const savedPassword = doc.data().password;

            // So sánh mật khẩu nhập vào với mật khẩu lưu trên Firebase
            if (inputPassword === savedPassword) {
                // statusMessage.innerHTML = "Mật khẩu chính xác! Cửa đã mở.";
                
                // Gọi hàm mở cửa ở đây
                openDoor();
            } else {
                alert("Mật khẩu sai, vui lòng thử lại.");
                
            }
        } else {
            alert("Không tìm thấy mật khẩu lưu trên Firebase");
        }
    }).catch((error) => {
        console.error("Lỗi khi lấy dữ liệu: ", error);
    });
}

// Hàm mở cửa
function openDoor() {
    alert("Mật khẩu chính xác! Cửa đã mở.");
    // Thực hiện hành động mở cửa, như điều khiển thiết bị hoặc hiển thị giao diện
    document.getElementById('openDoor').src="assets/door_open.png";
}