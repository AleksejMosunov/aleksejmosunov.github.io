let username = prompt('Кто там', '');

if (username === "Админ") {

	let pass = prompt('Пароль?', '');

	if (pass == 'Я Главный') {
	alert('Здравствуйте');
	} else if (pass === '' || pass === null ){
		alert('Отменено');
	} else {
		alert('Неверный пароль');
	}

} else if (username === '' || username === null ){
	alert('Отменено');
} else {
	alert('Я вас не знаю');
}
