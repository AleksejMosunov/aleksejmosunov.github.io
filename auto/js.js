let questions = [
    {question: 'Тип и колво контейнеров'},
    {question: 'Выдача порожнего'},
    {question: 'Погрузка'},
    {question: 'Таможенное оформление'},
    {question: 'Сдача груженного'},
    {question: 'Название груза'},
    {question: 'Вес груза'},
    {question: 'Форма оплаты'},
];  

let questionsForRef = [
    {question: 'Тип и колво контейнеров'},
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
    {question: 'Тип и колво контейнеров'},
    {question: 'Погрузка'},
    {question: 'Таможенное оформление'},
    {question: 'Сдача груженного'},
    {question: 'Название груза'},
    {question: 'Вес груза'},
    {question: 'Форма оплаты'},
];  


function auto(){

    let type = prompt('Прямая, Реф или Обратка?');
    if (type == 'прямая'){
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
        }else if (type == 'реф'){
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
        }else if (type == 'обратка'){
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
        }else {
            alert('Спробуй ще раз');
            auto();
        }
}
auto()