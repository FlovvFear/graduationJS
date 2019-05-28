const forms = () => {

    document.body.addEventListener('input', (event) => {
		let target = event.target;
		if (target.getAttribute('type') === 'tel') target.value = target.value.replace(/[^0-9+]/, '');
	});

	let message = {
		loading: "Загрузка...",
		success: "Спасибо! Скоро мы с вами свяжемся!",
		failure: "Что-то пошло не так"
	};

	let statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	let formSend = (formName) => {
		formName.appendChild(statusMessage);
		let input = formName.querySelectorAll('input');
		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

		let formData = new FormData(formName);
		
		let obj = {};
		formData.forEach((value, key) => {
			obj[key] = value;
		});
		let json = JSON.stringify(obj);

		request.send(json);

		request.addEventListener('readystatechange', () => {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if(request.readyState === 4 && request.status == 200) {
                if (formName.classList.contains('modal-form')) {
                    formName.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.success;

                }
			} else {
                if (formName.classList.contains('modal-form')) {
                    formName.innerHTML = message.failure;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
			}
		});

		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	};

	document.body.addEventListener('submit', (event) => {
		event.preventDefault();
		formSend(event.target);
    });
    let someForms = document.querySelectorAll('.form');
	console.log(someForms);
};

module.exports = forms;