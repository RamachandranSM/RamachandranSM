document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


//cards 
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let offset = 0;
const cardWidth = 300; // Adjust based on card width
const gap = 20; // Adjust based on gap

prevButton.addEventListener('click', () => {
    offset = Math.min(offset + (cardWidth + gap), 0);
    carousel.style.transform = `translateX(${offset}px)`;
});

nextButton.addEventListener('click', () => {
    const maxOffset = -(carousel.scrollWidth - carousel.offsetWidth);
    offset = Math.max(offset - (cardWidth + gap), maxOffset);
    carousel.style.transform = `translateX(${offset}px)`;
});
