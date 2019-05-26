const feedbackSlider = () => {
    console.log('sliderFeed');
    let slideIndex = 1,
        slides = document.querySelectorAll('.feedback-slider-item'),
        prev = document.querySelector('.main-prev-btn'),
        next = document.querySelector('.main-next-btn');

	const showSlides = (n) => {

		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = 'none');


		slides[slideIndex - 1].style.display = 'block';

	}

	const plusSlides = (n) => {
		showSlides(slideIndex += n);
	};

	prev.addEventListener('click', () => {
		plusSlides(-1);
	});

	next.addEventListener('click', () => {
		plusSlides(1);
	});

	
    showSlides();   
    
    setInterval(() => plusSlides(1), 3000);
};

module.exports = feedbackSlider;