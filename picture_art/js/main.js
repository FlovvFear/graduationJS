window.addEventListener('DOMContentLoaded', () => {
	const done = () => console.log('done');
	// Слайдер
	let slideIndex = 1,
		slides = document.querySelectorAll('.main-slider-item');

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = 'none');

		slides[slideIndex - 1].style.display = 'block';
	}

	showSlides();

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	setInterval(plusSlides(1), 1000);

	// Модальные окна
	let consultation = document.querySelector('.popup-consultation'),
		design = document.querySelector('.popup-design'),
		gift = document.querySelector('.popup-gift'),
		giftBtn = document.querySelector('.fixed-gift');
	
	const bindModal = (modalTarget,modalDisplay, overflowStatus) => {
		modalTarget.style.display = modalDisplay;
		document.body.style.overflow = overflowStatus;
	};

	document.body.addEventListener('click', event => {
		let target = event.target;

		if(target.classList.contains('button-consultation')) bindModal(consultation,'flex', 'hidden');
		if(target.classList.contains('popup-close') || target.classList.contains('popup-consultation')) bindModal(consultation, 'none', '');

		if(target.classList.contains('button-design')) bindModal(design,'flex', 'hidden');
		if(target.classList.contains('popup-close') || target.classList.contains('popup-design')) bindModal(design, 'none', '');

		if(target.classList.contains('fixed-gift')) {
			bindModal(gift,'flex', 'hidden');
			giftBtn.style.display = 'none';
		}
		if(target.classList.contains('popup-close') || target.classList.contains('popup-gift')) {
			bindModal(gift, 'none', '');
			giftBtn.style.display = 'inline';
		}
	});

	// Больше стилей
	let styles = document.querySelectorAll('.styles-2'),
		styleBtn = document.querySelector('.button-styles');

	styleBtn.addEventListener('click', () => {
		styleBtn.display = 'none';
		styles.forEach((e) => {
			e.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			e.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
		});
	});

	// Калькулятор
	let calc = document.querySelector('.calc'),
		size = document.querySelector('#size'),
		material = document.querySelector('#material'),
		options = document.querySelector('#options'),
		promocode = document.querySelector('.promocode'),
		price = document.querySelector('.calc-price');


	const priceCalc = function () {
		if (size.options.selectedIndex > 0 && material.options.selectedIndex > 0) {
			let total = +size.options[size.selectedIndex].value * +material.options[material.selectedIndex].value;
			if (options.options.selectedIndex > 0) {
				total += +options[options.selectedIndex].value;
			}
			if (promocode.value == 'IWANTPOPART') {
				total *= 0.7;
			}
			price.innerHTML = total + 'р';
		} else {
			price.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
		}
	};

	calc.addEventListener('change', (e) => {
		let target = e.target;

		if (target.tagName == 'SELECT' || target.tagName == 'INPUT') priceCalc();
	});

	// size.addEventListener('change', function() {
	// 	priceCalc();
	// });

	// material.addEventListener('change', function() {
	// 	priceCalc();
	// });

	// options.addEventListener('change', function() {
	// 	priceCalc();
	// });

	// promocode.addEventListener('change', function() {
	// 	priceCalc();
	// });

	// size.addEventListener('change', function() {
	// 	this.options[0].disabled = true;
	// 	sizeSum = +this.value;
	// 	if (options.options.selectedIndex > 0 && materialSum != 0) {
	// 		total = sizeSum * materialSum + optionsSum;
	// 		price.innerHTML = total;
	// 	} else if (materialSum != 0) {
	// 		total = sizeSum * materialSum;
	// 		price.innerHTML = total;
	// 	}
	// });

	// material.addEventListener('change', function() {
	// 	this.options[0].disabled = true;
	// 	materialSum = +this.value;
	// 	if (options.options.selectedIndex > 0 && size != 0) {
	// 		total = sizeSum * materialSum + optionsSum;
	// 		price.innerHTML = total;
	// 	} else if (sizeSum != 0) {
	// 		total = sizeSum * materialSum;
	// 		price.innerHTML = total;
	// 	}
	// });

	// options.addEventListener('change', function() {
	// 	optionsSum = +this.value;
	// 	if(options.options.selectedIndex > 0 && sizeSum != 0 && materialSum != 0) {
	// 		total = sizeSum * materialSum + optionsSum;
	// 		price.innerHTML = total;
	// 	} else {
	// 		price.innerHTML = total;
	// 	}
	// });


	
	
});