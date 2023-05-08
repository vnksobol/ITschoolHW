// Получить элемент с полем до введения данных пользователем
const task = document.querySelector('.task');
// Получить элемент для выведения сообщения 
const list = document.querySelector('.list');
// Получить кнопку добавления задачи и кнопку очищения списка
const buttonAdd = document.querySelector('.button-add');
const buttonClean= document.querySelector('.button-clean');

// Задать пустую строку для выведения в нее сообщения пользователя
let taskItem = '';

// Получить значение задачи после нажатия на кнопку, вывести в список
buttonAdd.addEventListener('click', () => {
    const addedTask = task.value;
    console.log(addedTask);
    const divAddedTask = document.createElement("div");
    divAddedTask.className = "list__item";
});
