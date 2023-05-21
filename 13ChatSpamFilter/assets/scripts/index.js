// 1. Получить/задать элементы //
// Получить элемент с полем до введения данных пользователем: имя, ссылка на аватар, сообщение
const userInputName = document.querySelector('.user-name');
const userInputPhoto = document.querySelector('.user-photo');
const userInputComment = document.querySelector('.user-comment');
const userInputYes = document.querySelector('.user-yes');

// Получить кнопку
const button = document.querySelector('.button');

// Получить доступ к месту выведения сообщения 
const message = document.querySelector('.message');

// Задать пустую строку для выведения в нее сообщения пользователя
let totalString = '';


// 2. Чек-бокс //
// Проверить наличие флажка в чек-боксе
userInputYes.checked = true|false;

// Деактивировать поле введения имени при снятом флажке, активировать - при нажатом
function showYesNo () {
    if (userInputYes.checked === true) {
        document.getElementById('user-name').removeAttribute('disabled');
    } else {
        document.getElementById('user-name').setAttribute('disabled', true);
    }
}


// 3. Получить дату, создать масив//
const date = new Date();
const chatDay = date.getDay();

const arrDays = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Пятница",
    "Суббота",
];

const chatDayName = arrDays [chatDay];
const chatDate = date.getDate();
const chatMonth = date.getMonth();
const chatFullYear = date.getFullYear();
const chatHours = date.getHours();
const chatMinutes = date.getMinutes();
const chatSeconds = date.getSeconds();
const shortDate = `${chatDayName}, ${chatDate}.${chatMonth}.${chatFullYear}, ${chatHours}:${chatMinutes}:${chatSeconds}`;


// 4. Аватар //
// Создать массив предустановленных аватаров //
let arrPictures = [
    "assets/images/01.jpg",
    "assets/images/02.jpg",
    "assets/images/03.jpg",
    "assets/images/04.jpg",
    "assets/images/05.jpg",
    "assets/images/06.jpg",
    "assets/images/07.jpg",
];


// 5. По клику: преобразование и выведение //
// Получить значение ссылки на аватар, имени пользователя, сообщения после нажатия на кнопку и вывести в итоговую строку
button.addEventListener('click', () => {
    const userPhoto = userInputPhoto.value;
    const userName = userInputName.value;

    // Очистить имя от лишних пробелов в начале строки
    let cleanUserName = userName.trim(userName);
    const userComment = userInputComment.value;

    // Задать условие выведения аватара
    let picture = "";
    if (userPhoto) {
        picture = userPhoto;
    } else {
        const indexArr = Math.floor(Math.random() * 7);
        picture = arrPictures[indexArr];
    }

    // Создать массив для преобразования имени
    const arrName = cleanUserName.split(" ");
    const firstName = arrName [0] || "";
    const middleName = arrName [1] || "";
    const familyName = arrName [2] || "";

    // Задать правило выведения имени, приведение к единому регистру
    const noName = "username";
    let fullNameOrUsername = "";
    if (userInputYes.checked === true) {
        // Создать переменные с вызовом функции, соединить в одну строку
        const finalFirstName = checkName(firstName);
        const finalMiddleName = checkName(middleName);
        const finalFamilyName = checkName(familyName);
        // Привести первые буквы имени к верхнему регистру
        function checkName (partOfName) {
            return `${partOfName.slice(0, 1).toUpperCase()}${partOfName
            .slice(1)
            .toLowerCase()}`;
        } 
        fullNameOrUsername = `${finalFirstName} ${finalMiddleName} ${finalFamilyName}`;
    } else {
        fullNameOrUsername = `${noName}`;
    }

    // shortDate();
    
    // Заменить неприемлемую лексику
    const checkSpamMessage = userComment.replace(/viagra/gi, "***")
        .replace(/XXX/gi, "***")
        .replace(/ХХХ/gi, "***");

    // Вывести фото, исправленное имя, отфильтрованное сообщение
    totalString = 
        `<img class="user-picture" src="${picture}"/>
        <p class="chat-name">${fullNameOrUsername}</p>
        <p class="">${checkSpamMessage}</p>
        <p class="chat-date color chat-border">${shortDate}</p>`
        + totalString;
    message.innerHTML = totalString;
});