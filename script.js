const messages = [
    "Cảm ơn em vì luôn bên anh!",
    "Em là ánh sáng trong cuộc đời anh!",
    "Chúc em một ngày thật hạnh phúc!",
    "Anh rất biết ơn vì có em!",
    "Em là điều tuyệt vời nhất trong cuộc đời anh!",
    "Mỗi khoảnh khắc bên em đều quý giá!"
];

let currentIndex = 0;
const messageElement = document.getElementById("thankYouMessage");

function changeMessage() {
    messageElement.innerText = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length; // Quay lại đầu danh sách
}

// Thay đổi văn bản mỗi 3 giây
setInterval(changeMessage, 3000);

// Thay đổi ngay lập tức khi trang được tải
changeMessage();
