"use strict";
//

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while(personalMovieDB.count == '' || personalMovieDB.count == null || personalMovieDB.count == isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
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
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классный зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function(hidden) {
    if(!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if(personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenders: function() {
    for(let i = 1; i <= 2; i++) {
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      // if (genre == '' || genre == null) {
      //   console.log('Вы ввели некорректные данные или не ввели ничего');
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genre;
      // }
      let genre = prompt(`Введите вашил юбимые жанры через запятую`).toLowerCase();
      if (genre == '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели ничего');
        i--;
      } else {
        personalMovieDB.genres = genre.split(', ');
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Ваш любимый жанр ${i + 1} - это  ${item}`);
    });
  }
};