const slider = () => {
    let slideIndex = 1,
	    slides = document.querySelectorAll('.main-slider-item');

    const showSlides = (n) => {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
    };

    showSlides();

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    };

    setInterval(plusSlides(1), 1000);

};

module.exports = slider;