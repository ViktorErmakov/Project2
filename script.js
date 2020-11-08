
let numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?');
let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let Film1 = prompt('Один из последних просмотренных фильмов?');
let star1 = prompt('На сколько оцените его?');
let Film2 = prompt('Один из последних просмотренных фильмов?');
let star2 = prompt('На сколько оцените его?');

let movies = {
    Film1: star1,
    Film2: star2
};
personalMovieDb.movies = movies;

console.log(personalMovieDb.movies);