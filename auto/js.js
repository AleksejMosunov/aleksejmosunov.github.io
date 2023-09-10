let questions = {
	direct: [
		'Тип и кол-во контейнеров',
		'Выдача порожнего',
		'Погрузка',
		'Таможенное оформление',
		'Сдача груженного',
		'Название груза',
		'Вес груза',
		'Форма оплаты',
	],
	ref: [
		'Тип и кол-во контейнеров',
		'Выдача порожнего',
		'Погрузка',
		'Таможенное оформление',
		'Сдача груженного',
		'Название груза',
		'Температура',
		'Генератор',
		'Вес груза',
		'Форма оплаты',
	],
	backLoading: [
		'Тип и кол-во контейнеров',
		'Погрузка',
		'Таможенное оформление',
		'Сдача груженного',
		'Название груза',
		'Вес груза',
		'Форма оплаты',
	],
	tent: [
		'Тип авто',
		'Вид загрузки',
		'Погрузка',
		'Таможенное оформление в Украине',
		'Выгрузка',
		'Таможенное оформление по выгрузке',
		'Название груза',
		'Вес груза',
		'Форма оплаты',
	],
}

function auto() {
	let type = prompt('Прямая, Реф, Обратка или может Тент?')
	if (type?.trim().toLowerCase() == 'прямая') {
		document.write(`<h3 class="text">Просчет прямая подача<br>Экспорт</h3>`)
		// for (i = 0; i < questions.length; i++)
		questions.direct.map(question => {
			let value = prompt(question)
			if (!!value) {
				document.write(`<h3 class="textAnswers">${question} ${value}</h3>`)
			}
		})
	} else if (type?.trim().toLowerCase() === 'реф') {
		document.write(`<h3 class="text">Просчет прямая подача реф<br>Экспорт</h3>`)
		questions.ref.map(question => {
			let value = prompt(question)
			if (!!value) {
				document.write(`<h3 class="textAnswers">${question} ${value}</h3>`)
			}
		})
	} else if (type?.trim().toLowerCase() === 'обратка') {
		document.write(`<h3 class="text">Просчет обратка<br>Экспорт</h3>`)
		questions.backLoading.map(question => {
			let value = prompt(question)
			if (!!value) {
				document.write(`<h3 class="textAnswers">${question} ${value}</h3>`)
			}
		})
	} else if (type?.trim().toLowerCase() === 'тент') {
		document.write(`<h3 class="text">Просчет тент <br>Экспорт</h3>`)
		questions.tent.map(question => {
			let value = prompt(question)
			if (!!value) {
				document.write(`<h3 class="textAnswers">${question} ${value}</h3>`)
			}
		})
	} else if (type == '') {
		alert('Вы ничего не ввели !')
		auto()
	} else if (!type) {
		console.log('Ты отменил мой код')
		// document.write(`<h3 class="text">Ты отменил мой код</h3>`)
	} else {
		alert('Спробуй ще раз, бо твоя відповідь не підходе до мого коду)')
		auto()
	}
}

auto()
