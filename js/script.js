"use strict";

document.addEventListener("DOMContentLoaded", () => {
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
    form: document.querySelector(".add"),
  };

  refs.form.addEventListener("submit", addFilmElem);
  refs.movieList.addEventListener("click", deleteFilm);

  start(refs, movieDB);
  changeFilmsList(refs, movieDB);

  function addFilmElem(event) {
    event.preventDefault();
    let filmName = refs.form.input.value.trim();

    if (filmName) {
      if (filmName.length > 21) {
        movieDB.movies.push(filmName.slice(0, 20) + "...");
      } else {
        movieDB.movies.push(filmName);
      }
      if (refs.form.checkbox.checked) {
        console.log("Добавляем любимый фильм");
      }
    }
    changeFilmsList(refs, movieDB);
    event.target.reset();
  }

  function deleteFilm(event) {
    if (event.target.classList.contains("delete")) {
      // event.target.closest(".promo__interactive-item").remove();
      const deleteValue = event.target
        .closest(".promo__interactive-item")
        .textContent.slice(3);
      movieDB.movies.splice(movieDB.movies.indexOf(deleteValue), 1);
      changeFilmsList(refs, movieDB);
    }
  }

  function start({ promoBlock, general, generalGenre } = {}) {
    promoBlock.innerHTML = "";
    generalGenre.textContent = "драма";
    general.style.background = "url(img/bg.jpg) center center/cover no-repeat";
  }

  function changeFilmsList({ movieList } = {}, obj = {}) {
    const sortArr = sortFilmsByName(obj);
    const markupString = getHtmlMarkup(sortArr);
    createFilmList(markupString, movieList);
  }

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
});
