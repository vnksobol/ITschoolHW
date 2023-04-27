// + Сохранить в переменную массив.
const getList = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];
// console.log(favouriteDirectors);

// Разметка как образец:
// <div class="director">
//   <div class="director__wrapp-name">
//     <p class="director__name">Питер Фаррелли</p>
//     <p class="director__career">Продюсер, Режиссёр, Сценарист, Актёр</p>
//   </div>
//   <div class="director__wrapp-movie">
//   <a href="https://www.film.ru/person/zhan-mark-valle" class="director__movie"> ссылка на фильмы </a>
//   </div>
// </div>;

const finalList = document.querySelector('.director');

// В найденные элементы на странице добавить информацию из каждого элемента массива.
// Создаем элементы при помощи функции, размещаем при помощи forEach.

const createElement = (element, i) => {
    const divDirector = document.createElement("div");
    divDirector.className = "director";
    if (i % 2 == 0) {
    divDirector.className = "director director_lined";
    }
    const divWrapperName = document.createElement("div");
    divWrapperName.className = "director__wrapper-text";
    const pName = document.createElement("p");
    pName.className = "director__name";
    pName.textContent = `${element.name}`;
    const pCareer = document.createElement("p");
    pCareer.className = "director__career";
    pCareer.textContent = `${element.career}`;
    
    const divWrapperMovie = document.createElement("div");
    divWrapperMovie.className = "director__wrapper-movie";
    const movie = document.createElement("a");
    // movie.className = "director__movie";
    movie.textContent = "фильмография";
    movie.href = `${element.films}`;
    movie.target = "_blank";
    divWrapperName.append(pName, pCareer);
    divWrapperMovie.append(movie);
    divDirector.append(divWrapperName, divWrapperMovie);

    return divDirector;
};

// // - В функцию обработчик добавить код, который относится к работе с DOM.
getList.forEach((item, index) => {
    const toDom = createElement(item, index);
    finalList.append(toDom);
    // console.log(item.name);
    // console.log(item.career);
    // console.log(item.movies);
});


const topFilmsList = [

];


// // - Создать новый массив `topFilmsList`, в нём должны быть лучшие фильмы режиссёров (хранятся в полях `top_rated_film`).
// movies.top_rated_film;
//  = [];
// topFilmsList.push(movies);
