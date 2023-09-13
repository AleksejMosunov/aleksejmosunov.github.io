let questions = {
	direct: [
		'Экспорт',
		'Порожняк',
		'Погрузка',
		'ТО',
		'Сдача',
		'Груз',
		'Вес',
		'Оплата',
	],
	ref: [
		'Экспорт',
		'Порожняк',
		'Погрузка',
		'ТО',
		'Сдача',
		'Груз',
		'Температура',
		'Генератор',
		'Вес',
		'Оплата',
	],
	backLoading: [
		'Экспорт',
		'Погрузка',
		'ТО',
		'Сдача',
		'Груз',
		'Вес',
		'Оплата',
	],
	tent: [
		'Экспорт',
		'Вид загрузки',
		'Погрузка',
		'ТО в Украине',
		'Выгрузка',
		'ТО по выгрузке',
		'Груз',
		'Вес',
		'Оплата',
	],
}

function auto() {
	let type = prompt('Прямая, Реф, Обратка или может Тент?')
	if (type?.trim().toLowerCase() == 'прямая') {
		document.write(`<h3 class="text">Просчет \nпрямая подача</h3>`)
		// for (i = 0; i < questions.length; i++)
		questions.direct.map(question => {
			let value = prompt(question)
			if (!!value) {
				document.write(`<h3 class="textAnswers">${question} ${value}</h3>`)
			}
		})
	} else if (type?.trim().toLowerCase() === 'реф') {
		document.write(`<h3 class="text">Просчет \nпрямая подача реф</h3>`)
		questions.ref.map(question => {
			let value = prompt(question)
			if (!!value) {
				document.write(`<h3 class="textAnswers">${question} ${value}</h3>`)
			}
		})
	} else if (type?.trim().toLowerCase() === 'обратка') {
		document.write(`<h3 class="text">Просчет \nобратка</h3>`)
		questions.backLoading.map(question => {
			let value = prompt(question)
			if (!!value) {
				document.write(`<h3 class="textAnswers">${question} ${value}</h3>`)
			}
		})
	} else if (type?.trim().toLowerCase() === 'тент') {
		document.write(`<h3 class="text">Просчет \nтент</h3>`)
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
