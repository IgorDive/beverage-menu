(function () {
	var textarea = document.createElement("textarea");
	var button1 = document.createElement("button");
	var button2 = document.createElement("button");
	var button3 = document.createElement("button");
	var button4 = document.createElement("button");
	var br = document.createElement("br");
	var DrinkStorage = new THashStorage();
	var key = "";
	var arr = [];
	
	textarea.placeholder = "Место для набора ответа";
	textarea.style.cssText = "width: 394px; height: 100px;"

	button1.textContent = "Ввод информации о напитке";
	button1.style.cssText = "width: 100px; height: 60px;"

	button2.textContent = "Получение информации о напитке";
	button2.style.cssText = "width: 100px; height: 60px;"

	button3.textContent = "Удаление информации о напитке";
	button3.style.cssText = "width: 100px; height: 60px;"

	button4.textContent = "Перечень всех напитков";
	button4.style.cssText = "width: 100px; height: 60px;"

	document.body.appendChild(textarea);
	document.body.appendChild(br);
	document.body.appendChild(button1);
	document.body.appendChild(button2);
	document.body.appendChild(button3);
	document.body.appendChild(button4);

	function counter() {
		var count = 0;

		function counts() {
			return count++;
		}
		counts.reset = function () {
			count = 0;
		}
		return counts;
	}

	counter1 = counter();
	counter2 = counter();
	counter3 = counter();
	counter4 = counter();

	button1.addEventListener("click", inputInformAboutDrink, false);
	button2.addEventListener("click", getInformAboutDrink, false);
	button3.addEventListener("click", deleteDrink, false);
	button4.addEventListener("click", listDrink, false);

	function inputInformAboutDrink() {

		switch (counter1()) {
			case 0:
			textarea.placeholder = "Введите название напитка";
			button1.textContent = " Подвердить название напитка";
			break;
			case 1:
			key = textarea.value;
			textarea.value = "";
			textarea.placeholder = "Напиток является алкоголем? (Да/Нет)";
			button1.textContent = " Подвердить принадлежность к алкоголю";
			break;
			case 2:
			arr[0] = textarea.value;
			textarea.value = "";
			textarea.placeholder = "Введите рецепт приготовления";
			button1.textContent = " Подвердить рецепт приготовления";
			break;
			case 3:
			arr[1] = textarea.value;
			DrinkStorage.AddValue(key, arr);
			textarea.value = "";
			counter1.reset();
			textarea.placeholder = "Место для набора ответа";
			button1.textContent = "Ввод информации о напитке";
			arr = [];
			key = "";
		}
	}
	function getInformAboutDrink() {

		switch (counter2()) {
			case 0:
			textarea.placeholder = "Введите название напитка";
			button2.textContent = " Подвердить название напитка";
			break;
			case 1:			
			textarea.value = (DrinkStorage.GetValue(textarea.value))? ("Напиток: " + textarea.value + "\nАлкогольный: " + DrinkStorage.GetValue(textarea.value)[0] + "\nРецепт приготовления: " + DrinkStorage.GetValue(textarea.value)[1]) : ("Напитка нет в базе!");
			button2.textContent = "Продолжить работу с формой";
			break;
			case 2:
			textarea.value = "";
			counter2.reset();
			textarea.placeholder = "Место для набора ответа";
			button2.textContent = "Получение информации о напитке";
		}
	}
	function deleteDrink() {

		switch (counter3()) {
			case 0:
			textarea.placeholder = "Введите название напитка";
			button3.textContent = "Подвердить удаление напитка";
			break;
			case 1:
			textarea.value = (DrinkStorage.DeleteValue(textarea.value))? ("Удаление проведено успешно.") : ("Такого напитка нет в базе");
			button3.textContent = "Продолжить работу с формой";
			break;
			case 2:
			textarea.value = "";
			counter3.reset();
			textarea.placeholder = "Место для набора ответа";
			button3.textContent = "Удаление информации о напитке";
		}
	}
	function listDrink() {

		switch (counter4()) {
			case 0:
			textarea.value = "Перечень напитков: " + DrinkStorage.GetKeys();
			button4.textContent = "Продолжить работу с формой";
			break;
			case 1:
			textarea.value = "";
			counter4.reset();
			textarea.placeholder = "Место для набора ответа";
			button4.textContent = "Перечень всех напитков";
		}
	}
}) ();