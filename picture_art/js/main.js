window.addEventListener('DOMContentLoaded', () => {
	const done = () => console.log('done');
	const log = (msg) => console.log(msg);
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
		styleBtn.style.display = 'none';
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

	// Табы 

	let tabBlock = document.querySelector('.portfolio-menu'),
		tabs = document.querySelectorAll('.portfolio-menu > li'),
		tabContent = document.querySelectorAll('.portfolio-block'),
		noContent = document.querySelector('.portfolio-no');



	tabBlock.addEventListener('click', event => {
		tabs.forEach((item) => {
			item.classList.remove('active');
		});
		let target = event.target,
			targetClass = target.getAttribute('class'),
			empty = true;
		target.classList.add('active');
		if (target && target.tagName == 'LI') {
			for (let i = 0; i < tabContent.length; i++) {
				if (tabContent[i].classList.contains(targetClass)) {
					tabContent[i].style.display  = 'block';
					empty = false;
				} else tabContent[i].style.display = 'none';

			}
			if (empty) noContent.style.display = 'block';
		}
	});

	// Размеры

	let sizesWrap = document.querySelector('.sizes-wrapper');

	const bindPicture = (target, picDisplay) => {
		let targetParent = target.parentElement.querySelectorAll('p');
		targetParent.forEach((item) => {
			item.style.display = picDisplay;
		});
	};
					
	sizesWrap.addEventListener('mouseover', (e) => {
		let target = e.target;
		if (target && target.tagName == 'IMG') {
			bindPicture(target, 'none');
			let targetClass = target.getAttribute('class');
			target.setAttribute('src', `img/${targetClass}-1.png`);
		}
	});

	sizesWrap.addEventListener('mouseout', (e) => {
		let target = e.target;
		if (target && target.tagName == 'IMG') {
			bindPicture(target, 'block');
			let targetClass = target.getAttribute('class');
			target.setAttribute('src', `img/${targetClass}.png`);
		}
	});
});