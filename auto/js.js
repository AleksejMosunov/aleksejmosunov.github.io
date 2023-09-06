let questions = [
    {question: 'Тип и кол-во контейнеров'},
    {question: 'Выдача порожнего'},
    {question: 'Погрузка'},
    {question: 'Таможенное оформление'},
    {question: 'Сдача груженного'},
    {question: 'Название груза'},
    {question: 'Вес груза'},
    {question: 'Форма оплаты'},
];  

let questionsForRef = [
    {question: 'Тип и кол-во контейнеров'},
    {question: 'Выдача порожнего'},
    {question: 'Погрузка'},
    {question: 'Таможенное оформление'},
    {question: 'Сдача груженного'},
    {question: 'Название груза'},
    {question: 'Температура'},
    {question: 'Генератор'},
    {question: 'Вес груза'},
    {question: 'Форма оплаты'},
];  

let questionsBackLoad = [
    {question: 'Тип и кол-во контейнеров'},
    {question: 'Погрузка'},
    {question: 'Таможенное оформление'},
    {question: 'Сдача груженного'},
    {question: 'Название груза'},
    {question: 'Вес груза'},
    {question: 'Форма оплаты'},
];  

let questionsTent = [
    {question: 'Тип авто'},
		{question: 'Вид загрузки'},
    {question: 'Погрузка'},
    {question: 'Таможенное оформление в Украине'},
    {question: 'Выгрузка'},
		{question: 'Таможенное оформление по выгрузке'},
    {question: 'Название груза'},
    {question: 'Вес груза'},
    {question: 'Форма оплаты'},
];  



function auto(){

    let type = prompt('Прямая, Реф, Обратка или может Тент?');
    if (type?.toLowerCase() == 'прямая'){
        document.write(`<h3 class="text">Просчет прямая подача<br>Экспорт</h3>`)
    for (i = 0; i < questions.length; i++){
        let value = prompt(questions[i].question);
        if (!!value) {
        document.write(`<h3 class="text">${questions[i].question} ${value}</h3>`);
        }       
    }
        }else if (type?.toLowerCase() == 'реф'){
            document.write(`<h3 class="text">Просчет прямая подача РЕФ<br>Экспорт</h3>`)
        for (i = 0; i < questionsForRef.length; i++){
            let value = prompt(questionsForRef[i].question);
            if (!!value) {
            document.write(`<h3 class="text">${questionsForRef[i].question} ${value}</h3>`);
            }
    }
        }else if (type?.toLowerCase() == 'обратка'){
            document.write(`<h3 class="text">Просчет обратка<br>Экспорт</h3>`)
        for (i = 0; i < questionsBackLoad.length; i++){
            let value = prompt(questionsBackLoad[i].question);
            if (!!value) {
            document.write(`<h3 class="text">${questionsBackLoad[i].question} ${value}</h3>`);
            }
        }
        }else if (type?.toLowerCase() == 'тент'){
            document.write(`<h3 class="text">Просчет тент<br>Экспорт</h3>`)
        for (i = 0; i < questionsTent.length; i++){
            let value = prompt(questionsTent[i].question);
            if (!!value) {
            document.write(`<h3 class="text">${questionsTent[i].question} ${value}</h3>`);
            }
        }
        }else if (type == '') {
            alert('Вы ничего не ввели !');
	    auto();
        }else if (!type){
	    document.write(`<h3 class="text">Ты отменил мой код</h3>`)
	}else {
	    alert('Спробуй ще раз, бо твоя відповідь не підходе до мого коду)')
	    auto();
	}
}
auto();
