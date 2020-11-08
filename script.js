const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let Film1 = prompt('Один из последних просмотренных фильмов?', '');
let star1 = prompt('На сколько оцените его?', '');
let Film2 = prompt('Один из последних просмотренных фильмов?', '');
let star2 = prompt('На сколько оцените его?', '');

personalMovieDb.movies[Film1] = star1;
personalMovieDb.movies[Film2] = star2;

console.log(personalMovieDb);