

let numberOfFilms;

function start () {
    
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (
        numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }

}

// start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function ramamberMyFilms() {
    
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
}
// ramamberMyFilms();

function detectPersonalLevel() {
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
}
// detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDb.privat) {
        console.dir(personalMovieDb);
    }
}
// showMyDB();

function writeYourGenres(count) {
    for (let index = 0; index < count; index++) {
        personalMovieDb.genres[index] = prompt(`Ваш любимый жанр под номером ${index +1}`, '');        
    }
}
writeYourGenres(3);

console.dir(personalMovieDb);
