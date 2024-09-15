

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

// Tu lanh

var btn1_on=document.getElementById('btn1_open');
var btn1_off=document.getElementById('btn1_close');



btn1_on.onclick = function(){
    

    database.ref("/Smarthome/Dinningroom").update({
        "Tu lanh" : 'OPEN'
    })
}

btn1_off.onclick = function(){
    

    database.ref("/Smarthome/Dinningroom").update({
        "Tu lanh" : 'CLOSE'
    })
}

// Bep 

var btn2_on=document.getElementById('btn2_open');
var btn2_off=document.getElementById('btn2_close');



btn2_on.onclick = function(){
    

    database.ref("/Smarthome/Dinningroom").update({
        "Bep tu" : 'ON'
    })
}

btn2_off.onclick = function(){
    

    database.ref("/Smarthome/Dinningroom").update({
        "Bep tu" : 'OFF'
    })
}

// Voi nuoc

var btn3_on=document.getElementById('btn3_open');
var btn3_off=document.getElementById('btn3_close');



btn3_on.onclick = function(){
    

    database.ref("/Smarthome/Dinningroom").update({
        "Voi nuoc" : 'OPEN'
    })
}

btn3_off.onclick = function(){
    

    database.ref("/Smarthome/Dinningroom").update({
        "Voi nuoc" : 'CLOSE'
    })
}


// Get temparature from FireBase ( autoupdate when Data changes) ---------------
database.ref("/Smarthome/Dinningroom/Temp").on("value", function(snapshot){
    var temp = snapshot.val();
    document.getElementById("Temp1").innerHTML = temp;
})


// Humunity
database.ref("/Smarthome/Dinningroom/Humunity").on("value", function(snapshot){
    var hum = snapshot.val();
    document.getElementById("Hum").innerHTML = hum;
})

// Tu lanh
database.ref("/Smarthome/Dinningroom/Tu lanh").on("value", function(snapshot){
    var tl = snapshot.val();
    if(tl == "OPEN"){
        document.getElementById("tl-img").src="assets/tulanh_open.jpg";
    }else{
        document.getElementById("tl-img").src="assets/tulanh_close.png";
    }
})

database.ref("/Smarthome/Dinningroom/Trạng thái tủ lạnh").on("value", function(snapshot){
    var tttl = snapshot.val();
    document.getElementById("trangthai").innerHTML = tttl ;
})


// Bep
database.ref("/Smarthome/Dinningroom/Bep tu").on("value", function(snapshot){
    var bep = snapshot.val();
    if(bep == "ON"){
        document.getElementById("bep-img").src="assets/bep_on.png";
    }else{
        document.getElementById("bep-img").src="assets/bep_of.png";
    }
})

// Voi nuoc
database.ref("/Smarthome/Dinningroom/Voi nuoc").on("value", function(snapshot){
    var voi = snapshot.val();
    if(voi == "OPEN"){
        document.getElementById("voi-img").src="assets/voi_open.png";
    }else{
        document.getElementById("voi-img").src="assets/voi_close.png";
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
