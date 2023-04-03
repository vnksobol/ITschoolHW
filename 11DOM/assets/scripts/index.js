// Найти:
// 1. Таблицу с `id="age-table"`

let ageTable = document.querySelector('#age-table');
console.log(ageTable);

let ageTable2 = document.getElementById('age-table');
console.log(ageTable); 


// 2. Все элементы `label` **внутри** этой таблицы

let ageList = ageTable.querySelectorAll('#age-list');
console.log(ageList);


// 3. Форму `form` с именем `name="search-person"`
let searchPerson = document.getElementsByName('search-person'); //получить все такие формы
console.log(searchPerson);

let searchPerson2 = document.querySelector('[name="search-person"]'); 
console.log(searchPerson2);

let searchPerson3 = document.querySelectorAll('[name="search-person"]');  //получить все такие формы
console.log(searchPerson3);
