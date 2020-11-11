

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i < 3; i++) {
    
    const film = prompt('Один из последних просмотренных фильмов?' + i, '');
    const star = prompt('На сколько оцените его?' + i, '');
    
    if (film == '' || star == '') {
        i=i-1;
        continue;
    } else if (film == null || star == null) {
        i=i-1;
        continue;
    } else if (film.length > 50 || star.length > 50) {
        i=i-1;
        continue;
    } else {
        console.log('не попал никуда');
    }
   
    personalMovieDb.movies[film] = star;
    
}
if (personalMovieDb.count < 10 ) {
    alert('Просмотрено довольно мало фильмов!', '');    
} else if (personalMovieDb.count > 10 || personalMovieDb.count < 30){
    alert('Вы классический зритель!', ''); 
} else { 
    alert('Вы киноман!', '');
}