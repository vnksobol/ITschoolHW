// Получить элемент с полем до введения данных пользователем: имя, ссылка на аватар, сообщение
const userInputName = document.querySelector('.user-name');
const userInputPhoto = document.querySelector('.user-photo');
const userInputComment = document.querySelector('.user-comment');

// Получить кнопку
const button = document.querySelector('.button');

// Получить доступ к месту выведению сообщения 
const message = document.querySelector('.message');

// Задать пустую строку для выведения в нее сообщения пользователя
let totalString = '';

// 1. Создать массив предустановленных аватаров
let arrPictures = [
    "assets/images/01.jpg",
    "assets/images/02.jpg",
    "assets/images/03.jpg",
];

// 2. Привести первые буквы имени к верхнему регистру
function checkName (partOfName) {
    return `${partOfName.slice(0, 1).toUpperCase()}${partOfName
        .slice(1)
        .toLowerCase()}`;
} 

// 3. Получить значение ссылки на аватар, имени пользователя, сообщения после нажатия на кнопку и вывести в итоговую строку
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
        const indexArr = Math.floor(Math.random() * 3);
        picture = arrPictures[indexArr];
    }

    // Создать массив для преобразования имени
    const arrName = cleanUserName.split(" ");
    const firstName = arrName [0];
    const middleName = arrName [1];
    const familyName = arrName [2];
    const finalFirstName = checkName(firstName);
    const finalMiddleName = checkName(middleName);
    const finalFamilyName = checkName(familyName);
    const fullName = `${finalFirstName} ${finalMiddleName} ${finalFamilyName}`;

    // Вызвать функцию с именем
    checkName(firstName);
    checkName(middleName);
    checkName(familyName);

    // Заменить неприемлемую лексику
    const checkSpamMessage = userComment.replace(/viagra/gi, "***")
        .replace(/XXX/gi, "***")
        .replace(/ХХХ/gi, "***");

    // Вывести фото, исправленное имя, отфильтрованное сообщение
    totalString = 
        totalString 
        + `<img class="user-picture" src="${picture}"/>
        <p class="chat-name">${fullName}</p>
        <p class="chat-border">${checkSpamMessage}</p>`;
    message.innerHTML = totalString;
});