let currentAngle = 0;

function rotateCarousel(degree) {
    const carousel = document.getElementById('carousel');
    currentAngle += degree;
    carousel.style.transform = `rotateY(${currentAngle}deg)`;
}