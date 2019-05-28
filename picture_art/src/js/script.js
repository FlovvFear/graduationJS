window.addEventListener('DOMContentLoaded', () => {

	let slider = require('./parts/slider.js'),
		modal = require('./parts/modal.js'),
		moreStyle = require('./parts/moreStyle.js'),
		calc = require('./parts/calc.js'),
		tabs = require('./parts/tabs.js'),
		sizes = require('./parts/sizes.js'),
		scroll = require('./parts/scroll.js'),
		accordion = require('./parts/accordion.js'),
		burger = require('./parts/burger.js'),
		feedbackSlider = require('./parts/feedbackSlider.js'),
		forms = require('./parts/forms.js');

	
	slider();
	modal();
	moreStyle();
	calc();
	tabs();
	sizes();
	scroll();
	accordion();
	burger();
	feedbackSlider();
	forms();
});