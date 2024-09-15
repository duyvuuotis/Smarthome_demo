//database



//Realtime Database
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


// --------------------------------------------------

// tivi
var btn1_on=document.getElementById('btn_on1');
var btn1_off=document.getElementById('btn_off1');



btn1_on.onclick = function(){
    

    database.ref("/Smarthome/Livingroom").update({
        "Tivi" : 'ON'
    })
}

btn1_off.onclick = function(){
    

    database.ref("/Smarthome/Livingroom").update({
        "Tivi" : 'OFF'
    })
}

//fan
var btn2_on=document.getElementById('btn_on2');
var btn2_off=document.getElementById('btn_off2');



btn2_on.onclick = function(){

    database.ref("/Smarthome/Livingroom").update({
        "Fan" : "ON"
    })
}

btn2_off.onclick = function(){
    

    database.ref("/Smarthome/Livingroom").update({
        "Fan" : "OFF"
    })
}

//light
var btn3_on=document.getElementById('btn_on3');
var btn3_off=document.getElementById('btn_off3');



btn3_on.onclick = function(){

    database.ref("/Smarthome/Livingroom").update({
        "Lamp" : "ON"
    })
}

btn3_off.onclick = function(){

    database.ref("/Smarthome/Livingroom").update({
        "Lamp" : "OFF"
    })
}



//window
var btn4_on=document.getElementById('btn_on4');
var btn4_off=document.getElementById('btn_off4');



btn4_on.onclick = function(){

    database.ref("/Smarthome/Livingroom").update({
        "window" : "OPEN"
    })
}

btn4_off.onclick = function(){

    database.ref("/Smarthome/Livingroom").update({
        "window" : "CLOSE"
    })
}


// Get temparature from FireBase ( autoupdate when Data changes) ---------------
database.ref("/Smarthome/Livingroom/Temp").on("value", function(snapshot){
    var temp = snapshot.val();
    document.getElementById("Temp").innerHTML = temp;
})

//Humunity
database.ref("/Smarthome/Livingroom/Hum").on("value", function(snapshot){
    var hum = snapshot.val();
    document.getElementById("Hum").innerHTML = hum;
})

// auto update img

//tivi
database.ref("/Smarthome/Livingroom/Tivi").on("value", function(snapshot){
    var tivi = snapshot.val();
    if(tivi == "ON"){
        document.getElementById('tivi-img').src="assets/television_on.png"
    }
        
    else{
        document.getElementById('tivi-img').src="assets/television_off.png"
    }
    
})


//Fan
database.ref("/Smarthome/Livingroom/Fan").on("value", function(snapshot){
    var fan = snapshot.val();
    if(fan == "ON"){
        document.getElementById('fan-img').src="assets/fan_on.png"
    }
        
    else{
        document.getElementById('fan-img').src="assets/fan_off.png"
    }
    
})

//Lamp
database.ref("/Smarthome/Livingroom/Lamp").on("value", function(snapshot){
    var lamp = snapshot.val();
    if(lamp == "ON"){
        document.getElementById('lamp-img').src="assets/lamp_on.png"
    }
        
    else{
        document.getElementById('lamp-img').src="assets/lamp_off.png"
    }
    
})

//window
database.ref("/Smarthome/Livingroom/window").on("value", function(snapshot){
    var window = snapshot.val();
    if(window == "OPEN"){
        document.getElementById('window-img').src="assets/window_open.png"
    }
        
    else{
        document.getElementById('window-img').src="assets/window_close.png"
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
