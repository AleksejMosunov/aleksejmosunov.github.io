const array = ["Лёха Мосунов","Лёша Мосунов","Мосунов Лёха","Мосунов Лёша","Леха Мосунов","Мосунов Леха",
"Мосунов", "Мосунов Алексей", " Алексей Мосунов"]; 

if(confirm("Если пидор нажми ок")) {
    const person = prompt("Назови свое имя")
    const isNameOfLord = array.some((name) => name.toLocaleLowerCase() === person.toLocaleLowerCase())
    
    if (isNameOfLord) {
        alert("Ах ты ж пидор")
    }   

		else {
			alert("Привет сер гей "+person)
		}

}

else {
	alert("Та ты точно пидор")
	}
