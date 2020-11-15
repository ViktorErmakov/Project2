

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i < 3; i++) {
    
    const film = prompt('Один из последних просмотренных фильмов?' + i, ''),
          star = prompt('На сколько оцените его?' + i, '');
    
    if (film == '' || star == '' || film == null || star == null || film.length > 50) {
        i--;
        console.log('Error');
    } else {
        personalMovieDb.movies[film] = star;
        console.log('done');
    }
    
}
if (personalMovieDb.count < 10 ) {
    alert('Просмотрено довольно мало фильмов!');    
    console.log(personalMovieDb.count);
} else if (personalMovieDb.count > 10 || personalMovieDb.count < 30){
    alert('Вы классический зритель!'); 
} else if (personalMovieDb.count >= 30) {
    alert('Вы киноман!');
} else {
    alert('Error');
}