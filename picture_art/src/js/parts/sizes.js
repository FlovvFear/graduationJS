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