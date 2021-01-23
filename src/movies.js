// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const directorsArray = movies.map((movie) => movie.director);
    return directorsArray
  }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
//   Causes spec #4 to fail: 
//     "Should return a new array with the same length as the original one" 
//     because array has less directors than total movies.


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arrayOfMovies) {
    const spielbergDramas = arrayOfMovies.filter(
        (movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return spielbergDramas.length;
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrayOfMovies) {
    const ratingsTotal = arrayOfMovies.reduce((a,b) => {
        return a + (b.rate || 0)
    }, 0);
    const avg = ratingsTotal/arrayOfMovies.length;
    const roundedAvg = avg.toFixed(2);
    return Number(roundedAvg) || 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrayOfMovies) {
    const dramaMovies = arrayOfMovies.filter((movie) => movie.genre.includes("Drama"));

    dramaRatings = ratesAverage(dramaMovies);
    return dramaRatings
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrayOfMovies) {
    const orderYear = arrayOfMovies.sort((a, b) => {
      if (a.title === b.title) {
        return a.year - b.year;
      } else {
        return -1;
      }
    });
    return orderYear.map((movie) => movie);
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrayOfMovies) {
    let movieTitles = arrayOfMovies.map((movie) => movie.title);

    movieTitles.sort();
    if (movieTitles.length > 20) {
      return movieTitles.slice(0, 20);
    } else {
      return movieTitles;
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
