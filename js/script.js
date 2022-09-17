/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Одержимость",
    "Логан",
    "Лига справедливости",
    "Скотт Пилигрим против...",
    "Ла-ла лэнд",
  ],
};

const refs = {
  promoBlock: document.querySelector(".promo__adv"),
  general: document.querySelector(".promo__bg"),
  generalGenre: document.querySelector(".promo__genre"),
  movieList: document.querySelector(".promo__interactive-list"),
};

function start(
  { promoBlock, general, generalGenre, movieList } = {},
  obj = {}
) {
  promoBlock.innerHTML = "";
  generalGenre.textContent = "драма";
  general.style.background = "url(img/bg.jpg) center center/cover no-repeat";
  const sortArr = sortFilmsByName(obj);
  const markupString = getHtmlMarkup(sortArr);
  createFilmList(markupString, movieList);
}

start(refs, movieDB);

function sortFilmsByName({ movies } = {}) {
  return [...movies].sort((a, b) => a.localeCompare(b));
}

function getHtmlMarkup(arr = []) {
  return arr
    .map((film, index) => {
      return `<li class='promo__interactive-item'>${
        index + 1
      }) ${film}<div class='delete'><div><li>`;
    })
    .join("");
}

function createFilmList(string = "", obj = {}) {
  obj.innerHTML = string;
}
