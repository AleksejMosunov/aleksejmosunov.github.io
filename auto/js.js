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


function auto(){

    let type = prompt('Прямая, Реф или Обратка?');
    if (type !== null && type.toLowerCase() == 'прямая'){
        document.write(`<h3>
        Просчет прямая подача<br>
        Экспорт
        </h3>`)
    for (i = 0; i < questions.length; i++){
        let value = prompt(questions[i].question);
        if (value !== '' && value !== null) {
        document.write(`<h3>${questions[i].question} ${value}</h3>`);
        }       
    }
        }else if (type !== null && type.toLowerCase() == 'реф'){
            document.write(`<h3>
            Просчет прямая подача РЕФ<br>
            Экспорт
            </h3>`)
        for (i = 0; i < questionsForRef.length; i++){
            let value = prompt(questionsForRef[i].question);
            if (value !== '' && value !== null) {
            document.write(`<h3>${questionsForRef[i].question} ${value}</h3>`);
            }
    }
        }else if (type !== null && type.toLowerCase() == 'обратка'){
            document.write(`<h3>
            Просчет обратка<br>
            Экспорт
            </h3>`)
        for (i = 0; i < questionsBackLoad.length; i++){
            let value = prompt(questionsBackLoad[i].question);
            if (value !== '' && value !== null) {
            document.write(`<h3>${questionsBackLoad[i].question} ${value}</h3>`);
            }
        }
        }else if (type == null) {
            alert('Вы отменили !');
        }else {
					alert('Спробуй ще раз, бо твоя відповідь не підходе до мого коду)')
					auto();
				}
}
auto()
