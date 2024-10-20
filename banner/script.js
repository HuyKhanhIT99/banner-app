const messages = [
    "Ngày 20/10 là dịp để anh bày tỏ lòng biết ơn và tình yêu của mình dành cho em.",
    "Mong rằng em sẽ luôn được yêu thương và trân trọng!",
    "Em là điều tuyệt vời nhất trong cuộc đời anh",
    "Chúc em luôn tự tin và mạnh mẽ, vì em có khả năng làm mọi điều mình muốn!",
    "Chúc mừng ngày của em!",
    "Cảm ơn em đã thông cảm cho anh những lúc ham chơi và bỏ mặc em.",
    "Xin lỗi vì những lần lỡ lời làm em buồn, nhưng em vẫn thông cảm bỏ qua cho anh ",
    "Em vẫn luôn tươi cười , luôn xinh đẹp và hiền lành như thế.",
    "Em vẫn luôn yêu thương , chăm sóc và giúp đỡ cho anh.",
    "Em vẫn luôn dịu dàng và mạnh mẽ, khiến anh cảm thấy thật may mắn khi có em bên cạnh.",
    "Anh hơi gà trong việc nói lời hay ý đẹp nhưng mà anh muốn",
    "Cảm ơn em đã tha lỗi và bỏ qua cho những sai lầm của anh.",
    "Anh thật sự biết ơn vì em đã kiên nhẫn với một người như anh.",
    "Mong rằng em vẫn tiếp tục bên anh, để anh có thể chăm sóc và đồng hành cùng em trong mọi sự kiện trong tương lai.",
    "Mỗi ngày bên em đều là một món quà quý giá mà anh trân trọng.",
    "Cảm ơn em vì đã luôn đứng bên anh, dù trong những lúc khó khăn nhất.",
    "Anh sẽ nỗ lực hơn để không làm em buồn trong những lần tới.",
    "Em chính là lý do mà anh muốn trở thành một người tốt hơn mỗi ngày.",
    "1 lần nữa ",
    "Cảm ơn em vì luôn bên anh!",
    "Chúc em một ngày thật hạnh phúc!",
    "Anh rất biết ơn vì có em!",
    "Mỗi khoảnh khắc bên em đều quý giá!",
    "HẾT RỒI !!!!! CHẮC HÔNG ĐỌC HẾT ÂU HA , CÓ ĐỌC HẾT CŨNG NÔ COMMENT OKE !!!"
];

let currentMessageIndex = 0;
const messageElement = document.getElementById("thankYouMessage");
const photos = document.querySelectorAll(".photos img");
let currentPhotoIndex = 0;

function changeMessage() {
    messageElement.innerText = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length; // Quay lại đầu danh sách
}

function changePhoto() {
    photos[currentPhotoIndex].classList.remove("active"); // Ẩn ảnh hiện tại
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length; // Chuyển sang ảnh tiếp theo
    photos[currentPhotoIndex].classList.add("active"); // Hiện ảnh mới
}

const heartContainer = document.getElementById('heartContainer');

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw'; // Đặt vị trí trái tim ngẫu nhiên trên chiều rộng
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Đặt thời gian rơi ngẫu nhiên từ 2 đến 5 giây
    heartContainer.appendChild(heart);

    // Xóa trái tim sau khi hoàn thành hoạt ảnh
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Tạo trái tim mới mỗi 500ms
setInterval(createHeart, 500);


// Thay đổi văn bản mỗi 3 giây
setInterval(changeMessage, 5000);
// Thay đổi ảnh mỗi 5 giây
setInterval(changePhoto, 5000);

// Thay đổi ngay lập tức khi trang được tải
changeMessage();
changePhoto();
