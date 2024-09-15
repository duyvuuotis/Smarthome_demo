document.getElementById('scheduleForm').addEventListener('submit', function(event) {
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

    if (timeOnDate > currentTime) {
        setTimeout(() => {
            alert(`Thiết bị ${device} ở ${room} đã bật!`);
        }, timeOnDate - currentTime);
    }

    if (timeOffDate > currentTime) {
        setTimeout(() => {
            alert(`Thiết bị ${device} ở ${room} đã tắt!`);
        }, timeOffDate - currentTime);
    }
});
