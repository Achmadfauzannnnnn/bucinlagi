function showLoveMessage() {
    const messages = [
        "Aku mencintaimu lebih dari apa yang kamu inginkan, lebih besar dari yang kau bayangkan.",
        "Setiap hari bersamamu adalah hadiah yang tak ternilai.",
        "Kamu adalah aku, dan aku adalah kamu.",
        "Aku beruntung memilikimu dalam hidupku.",
        "Cinta kita adalah cerita yang paling indah."
    ];

    const images = [
        "anjay.jpg", // Ganti dengan path gambar yang sesuai
        "anjay2.jpg",
        "anjay3.jpg",
        "anjay4.jpg",
        "anjay5.jpg"
    ];

    const messageElement = document.getElementById('love-message');
    const imageElement = document.getElementById('love-image');
    const randomIndex = Math.floor(Math.random() * messages.length);

    messageElement.textContent = messages[randomIndex];
    imageElement.src = images[randomIndex];
    imageElement.style.display = 'block';
    imageElement.style.opacity = '0';

    setTimeout(() => {
        imageElement.style.opacity = '1';
    }, 100); // Delay for animation
}
