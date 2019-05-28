const slider = () => {
    const log = (msg) => console.log(msg);




    let slideIndex = 1,
	    slides = document.querySelectorAll('.main-slider-item');

    const showSlides = (n) => {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => {
            item.style.display = 'none';
            item.classList.add('animated','fadeInDown');
        });
        slides[slideIndex - 1].style.display = 'block';
    };

    showSlides(0);

   
    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    };

    setInterval(() => { plusSlides(1);}, 3000);


};

module.exports = slider;