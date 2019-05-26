/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./picture_art/src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./picture_art/src/js/parts/accordion.js":
/*!***********************************************!*\
  !*** ./picture_art/src/js/parts/accordion.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const accordion = () => {
    const log = msg => console.log(msg);
    let accordionTabs = document.querySelectorAll('.accordion-heading'),
        accordion = document.querySelector('.often-questions'),
        accordionContents = document.querySelectorAll('.accordion-block'),
        accordionSpan = accordion.querySelectorAll('span');



    const hideContent = (a) => {
        for (let i = a; i < accordionContents.length; i++) {
            accordionContents[i].style.display = 'none';
            accordionTabs[i].classList.remove('ui-accordion-header-active');            
		}
    };
    hideContent(0);

    const showContent = (b) => {
		if (accordionContents[b].style.display == 'none') {
            accordionContents[b].style.display = 'block';
            accordionTabs[b].classList.add('ui-accordion-header-active');            
		}
    };
    


    accordion.addEventListener('click', event => {
        let target = event.target;
        log(target);
        if (target && target.classList.contains('accordion-heading') || target.tagName == 'SPAN') {
            for (let i = 0; i < accordionTabs.length; i++) {
                if (accordionContents[i].style.display == 'block' && (target == accordionTabs[i] || target == accordionSpan[i])) {
                    hideContent(0);
                    break;
                } 
                if (target == accordionTabs[i] || target == accordionSpan[i]) {
                    hideContent(0);
                    showContent(i);
                    break;
                }
            }
        }
    });

    

    
};

module.exports = accordion;

/***/ }),

/***/ "./picture_art/src/js/parts/burger.js":
/*!********************************************!*\
  !*** ./picture_art/src/js/parts/burger.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const burger = () => {
    const log = (msg) => console.log(msg);

    let burger = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.burger-menu'),
        windowSize = document.documentElement.clientWidth,
        burgerActive = false;

    const showMenu = () => {
        if (burgerActive == true) {
            burgerMenu.style.display = 'none';
            burgerActive = false;

        } else {
            burgerMenu.style.display = 'block';
            burgerActive = true;
        }
    };

    burger.addEventListener('click', () => {
        if (windowSize < 768) {
            showMenu();
        }


    window.addEventListener('resize', () => {
        windowSize = document.documentElement.clientWidth;
        if (burgerActive == true && windowSize > 768) {
            showMenu();
        }
        log(windowSize);
        });
        
    });
};

module.exports = burger;

/***/ }),

/***/ "./picture_art/src/js/parts/calc.js":
/*!******************************************!*\
  !*** ./picture_art/src/js/parts/calc.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const calc = () => {
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
};

module.exports = calc;

/***/ }),

/***/ "./picture_art/src/js/parts/modal.js":
/*!*******************************************!*\
  !*** ./picture_art/src/js/parts/modal.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const modal = () => {
    let consultation = document.querySelector('.popup-consultation'),
        design = document.querySelector('.popup-design'),
        gift = document.querySelector('.popup-gift'),
        giftBtn = document.querySelector('.fixed-gift'),
        activeModal = false;

    const bindModal = (modalTarget,modalDisplay, overflowStatus, activeStatus) => {
        modalTarget.style.display = modalDisplay;
        document.body.style.overflow = overflowStatus;
        activeModal = activeStatus;
    };

    document.body.addEventListener('click', event => {
        let target = event.target;

        if(target.classList.contains('button-consultation')) bindModal(consultation,'flex', 'hidden', true);
        if(target.classList.contains('popup-close') || target.classList.contains('popup-consultation')) bindModal(consultation, 'none', '', false);

        if(target.classList.contains('button-design')) bindModal(design,'flex', 'hidden', true);
        if(target.classList.contains('popup-close') || target.classList.contains('popup-design')) bindModal(design, 'none', '', false);

        if(target.classList.contains('fixed-gift')) {
            bindModal(gift,'flex', 'hidden', true);
            giftBtn.style.display = 'none';
        }
        if(target.classList.contains('popup-close') || target.classList.contains('popup-gift')) {
            bindModal(gift, 'none', '', false);
            giftBtn.style.display = 'inline';
        }
    });

    setTimeout(() =>{
        if (activeModal == false) {
            bindModal(gift,'flex', 'hidden', true);
            giftBtn.style.display = 'none';
        } else {
            console.log('не судьба');
        }
    }, 60000);

    // Открытие модалки при прокрутки до конца страницы
    let activeBtn = false;

    document.addEventListener('click', (e) =>{
        if (e.target.tagName == 'BUTTON') activeBtn = true;
    });

    window.addEventListener('scroll',() =>{
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop,
            windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        if (windowScroll == windowHeight && activeBtn == false) {
            bindModal(gift,'flex', 'hidden', true);
            giftBtn.style.display = 'none';
        }
    });


};

module.exports = modal;

/***/ }),

/***/ "./picture_art/src/js/parts/moreStyle.js":
/*!***********************************************!*\
  !*** ./picture_art/src/js/parts/moreStyle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const moreStyle = () => {
	let styles = document.querySelectorAll('.styles-2'),
		styleBtn = document.querySelector('.button-styles');
		

	styleBtn.addEventListener('click', () => {
		styleBtn.style.display = 'none';
		styles.forEach((e) => {
			e.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			e.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
		});
	});
};

module.exports = moreStyle;

/***/ }),

/***/ "./picture_art/src/js/parts/scroll.js":
/*!********************************************!*\
  !*** ./picture_art/src/js/parts/scroll.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const scroll = () => {
    let menu = document.querySelector('.header-menu');
  
  
      menu.addEventListener('click', (event) => { 
          event.preventDefault();
          if (event.target && event.target.tagName == 'A') {
              document.querySelector(event.target.getAttribute('href')).scrollIntoView({block: "start", behavior: "smooth"});
          }
      });
  };
  
  module.exports = scroll;

/***/ }),

/***/ "./picture_art/src/js/parts/sizes.js":
/*!*******************************************!*\
  !*** ./picture_art/src/js/parts/sizes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const sizes = () => {
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
};

module.exports = sizes;

/***/ }),

/***/ "./picture_art/src/js/parts/slider.js":
/*!********************************************!*\
  !*** ./picture_art/src/js/parts/slider.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./picture_art/src/js/parts/tabs.js":
/*!******************************************!*\
  !*** ./picture_art/src/js/parts/tabs.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const tabs = () => {
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
            if (!empty) noContent.style.display = 'none';

            if (empty) noContent.style.display = 'block';
        }
    });
};

module.exports = tabs;

/***/ }),

/***/ "./picture_art/src/js/script.js":
/*!**************************************!*\
  !*** ./picture_art/src/js/script.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {

	let slider = __webpack_require__(/*! ./parts/slider.js */ "./picture_art/src/js/parts/slider.js"),
		modal = __webpack_require__(/*! ./parts/modal.js */ "./picture_art/src/js/parts/modal.js"),
		moreStyle = __webpack_require__(/*! ./parts/moreStyle.js */ "./picture_art/src/js/parts/moreStyle.js"),
		calc = __webpack_require__(/*! ./parts/calc.js */ "./picture_art/src/js/parts/calc.js"),
		tabs = __webpack_require__(/*! ./parts/tabs.js */ "./picture_art/src/js/parts/tabs.js"),
		sizes = __webpack_require__(/*! ./parts/sizes.js */ "./picture_art/src/js/parts/sizes.js"),
		scroll = __webpack_require__(/*! ./parts/scroll.js */ "./picture_art/src/js/parts/scroll.js"),
		accordion = __webpack_require__(/*! ./parts/accordion.js */ "./picture_art/src/js/parts/accordion.js"),
		burger = __webpack_require__(/*! ./parts/burger.js */ "./picture_art/src/js/parts/burger.js");

	
	slider();
	modal();
	moreStyle();
	calc();
	tabs();
	sizes();
	scroll();
	accordion();
	burger();
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map