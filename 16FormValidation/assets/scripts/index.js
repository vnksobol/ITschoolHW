// Получить элементы ввода
const inputName = document.getElementById('firstName');
const inputEmail = document.getElementById('email');
const inputAge = document.getElementById('age');
const inputGender = document.getElementById('gender');
const inputOccupation = document.getElementById('occupation');
const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirmPassword');
const inputAgreement = document.getElementById('agreement');

const button = document.getElementById('button');

// Привести поля к необходимым значениям
inputOccupation.selectedIndex = -1;
 
// Создать сообщение об ошибке
// const errorTextRequired = 'This field is required. ';

// Получить форму и вывести сообщение об ошибке
const form = document.forms.form;
form.addEventListener('submit', function (event) {
	event.preventDefault();
    if (inputName.value === '') {
		errorInfo.textContent = 'Заполните поле "Имя"';
        // errorName.textContent = `${errorTextRequired}`;
        firstName.setAttribute('class', 'error');
    } else if (inputEmail.value === '') {
        errorInfo.textContent = 'Заполните поле "Email"';
        email.setAttribute('class', 'error');
    } else if (inputAge.value === '') {
        errorInfo.textContent = 'Выберите возраст';
        age.setAttribute('class', 'error');
    } else if (inputOccupation.value === '') {
        errorInfo.textContent = 'Выберите професию';
        occupation.setAttribute('class', 'error');
    } else if (inputPassword.value === '') {
        errorInfo.textContent = 'Введите пароль';
        password.setAttribute('class', 'error');
    } else if (inputConfirmPassword.value === '') {
        errorInfo.textContent = 'Повторите пароль';
        confirmPassword.setAttribute('class', 'error');
    }
    else if (inputAgreement.value === '') {

        // if (!isChecked) {
        //     errorAgreement.setAttribute('class', 'error');
        //     errorInfo.textContent = `Подтвердите согласие`;
        //     } else {
        //     errorInfo.textContent = '';
        // };

    } else {
        form.submit();
    }
});