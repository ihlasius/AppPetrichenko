"use strict";
//
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while(numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

//start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классный зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}
//detectPersonalLevel();


function rememberMyFilms() {
  for ( let i = 0; i < 1; i++)  {
    let a = prompt('Один из последних просмотренних фильмов?', '');
    let b = prompt('Оцените фильм по 5 бальной шкале', '');
    if (a != '' && b != '' && b != null && a != null && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('Done');
    } else {
      console.log('Error');
      i--;
    }
  
    personalMovieDB.movies[a] = b;
  }
}

//rememberMyFilms();

console.log(personalMovieDB);
// Первое задание
function showMyDB(hidden) {
  if(!hidden) {
    console.log(personalMovieDB)
  }
}
showMyDB(personalMovieDB);
// второе задание

function writeYourGenders() {
  for(let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenders();