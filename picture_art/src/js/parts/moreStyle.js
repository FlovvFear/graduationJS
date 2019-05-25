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