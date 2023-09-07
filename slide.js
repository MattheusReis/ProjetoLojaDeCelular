let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => (slide.style.display = 'none'));
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2500); // Mude a imagem a cada 2 segundos (2000ms)
}

showSlides();

document.getElementById('prevBtn').addEventListener('click', () => {
    slideIndex--;
    showSlides();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    slideIndex++;
    showSlides();
});
