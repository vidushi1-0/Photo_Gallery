let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
    let slides = document.querySelectorAll(".slide");

    if(slides.length <= index) {
        slideIndex = 0;
    }

    if(slides.length < index) {
        slideIndex = slides.length - 1;
    }

    for(let i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}