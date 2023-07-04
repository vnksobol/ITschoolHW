// Получить элементы
const city = document.getElementById('city');
const minmax = document.getElementById('minmax');

// Создать массив городов
let cities = ["Рим", "Флоренция", "Венеция"];

// Создать пустой массив для температуры
let temperatures = [];
let ulCities = "";
let ulMinmax = "";

// Создать цикл, который пройдет по массиву городов и попросит пользователя ввести температуру для каждого города
for (k = 0; k < cities.length; k++) {
    const temper = prompt(`Введите температуру в городе ${cities[k]}`);
    temperatures.push(Number(temper));
    // Создать список, в котором будет отображаться информация о каждом городе и его температуре.
    ulCities = ulCities + `                                                 
         <li>В городе ${cities[k]}: ${temperatures[k]}&deg;C</li>      
         `;
    let temperMin = Math.min(...temperatures);
    let temperMax = Math.max(...temperatures);
    // Найти максимальную и минимальную температуру.
    ulMinmax = `<br>
    Самая низкая температура: ${temperMin}&deg;C<br>
    Самая высокая температура: ${temperMax}&deg;C
     `;
}

// Вывести информацию с погодой на экран
city.innerHTML = ulCities;
minmax.innerHTML = ulMinmax;