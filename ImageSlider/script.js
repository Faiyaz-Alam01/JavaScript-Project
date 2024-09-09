
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slides = document.getElementsByClassName('Slide');


let currentSlide = 0;

slideshow(currentSlide);

function slideshow(index) {
    // pahle hide karo sabhi slide ko
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // current slide ko display karo
    slides[index].style.display = "block";
}

// Next slide 
function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    slideshow(currentSlide);
}

// Previous slide 
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slideshow(currentSlide);
}

// Attach event listeners to buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
