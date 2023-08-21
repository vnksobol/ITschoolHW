// 2. **Создаём приложение «Планировщик задач»**.
// + В приложении должен быть input для ввода текста задачи и кнопка для её добавления в «Список задач»
// + Ниже должен быть «Список задач» и кнопка «Очистить список»
// + Когда задач нет, должно быть серое уведомление о том, что задачи отсутствуют, а кнопка «Очистить список» должна быть неактивна
// + При добавлении задачи в список, каждая из них должна появляться в списке задач и напротив иметь неактивный чекбокс, а кнопка «Очистить список» должна быть активна
// + Каждый чекбокс напротив задачи должен менять своё состояние при клике (говоря нам, что задача выполнена)
// - При клике на кнопку «Очистить список» все задачи должны удаляться
    
//     **Важно: Для сохранения состояния списка задач между сеансами работы с приложением используйте Local Storage. Это позволит восстановить список задач при повторном открытии приложения.**

// Получить элементы
const taskInput = document.querySelector('#task');           // Поле до введения данных пользователем
let listElement = document.querySelector('#list');           // Для выведения сообщения 
const buttonAdd = document.querySelector('#button-add');     // Кнопку добавления задачи
const buttonClear = document.querySelector('#button-clear'); // Кнопку удаления задач

// Задать пустую строку для выведения в нее сообщения пользователя
let taskStr = '';

// Деактивировать кнопку удаления задач при остуствии задач
buttonClear.setAttribute('disabled', true);

// Вывести поочередно задачи на экран, используя Local Storage
const addTask = () => {
    let taskValue = taskInput.value;
    if (taskValue.trim() !== '') {
        let listItems = localStorage.getItem('item');
        listItems = listItems ? JSON.parse(listItems) : [];
        listItems.push(taskValue);
        window.localStorage.setItem('item', JSON.stringify(listItems));
        // console.log(listItems);    //
		// console.log(localStorage); //
        taskStr += ` 
            <p class="list list__item-notask" id="list"> 
                <label>${taskValue}  &nbsp;  
                <input type="checkbox" name="checkbox" class="checkbox" id="checkbox">  
            </p> 
        `;
        listElement.innerHTML = taskStr;
        // console.log(`Задача "${taskValue}" добавлена в список и сохранена в Local Storage.`);
        // Очистить поле ввода
        taskInput.value = "";
        // Активировать кнопку удаления задач при наличии задач
        buttonClear.removeAttribute('disabled'); 
	} else {
		console.log('Введите задачу');
        // Вывести подсказку. Только = очищает список, += добавляет множетсво подсказок, buttonAdd.setAttribute('disabled', true) блокирует кнопку для новых задач:
        // taskStr += `<p class="list__item-notask">Введите новую задачу</p>`;  
        // listElement.innerHTML = taskStr;
	}
}

buttonAdd.addEventListener('click', addTask);

// Очистить список задач // LocalStorage очищался
const clearList = () => {
	window.localStorage.clear();
    // window.localStorage.removeItem('item');
    console.log('Список очищен');
    taskStr +=  `
        <p class="list__item list__item-notask" id="list__item">
            Задачи отсутствуют 
        </p>
    `;
    listElement.innerHTML = "";
};