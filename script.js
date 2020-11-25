

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
// writeYourGenres(3);

// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     maketest: function() {
//         console.log('test');
//     }
// };
// options.maketest();

// const {border, bg} = options.colors;
// console.log(border);
// console.log(bg);

// console.log(Object.keys(options).length);

// let counter = 0;
// for (const key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (const i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);        
//         }
//     } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
//     counter ++;
// }
// console.log(counter);

// const arr =[2,13,6,8,10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a,b) {
//     return a-b;
// }

// arr.forEach(function(index, i, arr) {
//     console.log(`${i}: ${index} внутри массива ${arr}`);   
// });

// const str = prompt('','');
// const product = str.split(', ');
// console.log(product);
// product.sort();
// console.log(product.join('; '));
let str = "some";
let strObject = new String(str);
console.log(typeof(str));
console.log(typeof(strObject));
