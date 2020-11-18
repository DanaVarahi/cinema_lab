const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(films){
//    let filmTitles = []
  
//   films.forEach((film) => {
    
//     filmTitles.push(film.title)
//   })
//   return filmTitles

  return films.map(film => film.title)
 }

Cinema.prototype.findFilmByTitle = function(films, title){

  return films.filter(film => film.title === title)
}

Cinema.prototype.filterFilmsByGenre =function(films, genre){

  return films.filter(film => film.genre === genre)
}

Cinema.prototype.filterFilmsByYear =function(films, year){
  console.log(`films is ${films}`)
  return films.some(film => film.year === year)
}

Cinema.prototype.allFilmsOfLength = function(films, length){
  return films.every(film => film.length >= length)
}

Cinema.prototype.totalRunningtime = function(length){
 
  return length.reduce(film => runningTotal + length);
}

// console.log(filmTitles())

module.exports = Cinema;
