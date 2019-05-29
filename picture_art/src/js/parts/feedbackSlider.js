const feedbackSlider = () => {
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

		slides.forEach((item) => {
			item.style.display = 'none';
			item.classList.add('animated');
		});


		slides[slideIndex - 1].style.display = 'block';

	}

	const plusSlides = (n) => {
		showSlides(slideIndex += n);
	};

	const animRight = () => {
		if (slides[slideIndex-1].classList.contains('fadeInRight')) {
			slides[slideIndex-1].classList.remove('fadeInRight');
		}
		slides[slideIndex-1].classList.add('fadeInLeft');
	};

	prev.addEventListener('click', () => {
		// console.log(slideIndex);
		plusSlides(-1);

		if (slides[slideIndex-1].classList.contains('fadeInLeft')) {
			slides[slideIndex-1].classList.remove('fadeInLeft');
		}
		slides[slideIndex-1].classList.add('fadeInRight');

	});

	next.addEventListener('click', () => {
		console.log(slideIndex);
		plusSlides(1);
		animRight();
	});

	
    showSlides();   
    
	setInterval(() => {
		plusSlides(1);
		animRight();
	}, 6000);
};

module.exports = feedbackSlider;