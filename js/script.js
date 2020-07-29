/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      movieList = document.querySelector('.promo__interactive-list');

const deleteAdd = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

deleteAdd(adv);

const makeChanges = () => {
    document.getElementsByClassName('promo__genre')[0].textContent = "ДРАМА";

    document.querySelector('.promo__bg').style.backgroundImage = "url('../img/bg.jpg')";
};

makeChanges();

const sortArr = (arr) => {
    arr.sort();
};

sortArr(movieDB.movies);

// Задания на урок:

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

const addForm = document.querySelector('form.add'),
      addUnput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');


addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newFilm = addInput.value,
          favorite = checkbox.checked;  
    
    movieDB.movies.push(newFilm);

    sortArr(movieDB.movies);
    
    createMovieList(movieDB.movies, movieList);

    event.target.reset();
});

function createMovieList(films, parent) {
    parent.innerHTML = "";

    movieDB.movies.sort();


    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    createMovieList(movieDB.movies, movieList);
};

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки



// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)



// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"



// 5) Фильмы должны быть отсортированы по алфавиту


