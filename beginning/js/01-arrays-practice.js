//STEP 1
// let favMovies = ['Little Miss Sunshine', 'Beauty and the Beast', 'Wall-E', 'The Truman Show', 'Jurassic Park'];
// console.log(favMovies[1]);

//STEP 2
// let favMovies = new Array(5);
// favMovies[0] = 'Little Miss Sunshine';
// favMovies[1] = 'Beauty and the Beast';
// favMovies[2] = 'Wall-E';
// favMovies[3] = 'The Truman Show';
// favMovies[4] = 'Jurassic Park';
// favMovies[5] = '';
// console.log(favMovies[0]);

//STEP 3
// let favMovies = new Array(5);
// favMovies[0] = 'Little Miss Sunshine';
// favMovies[1] = 'Beauty and the Beast';
// favMovies[2] = 'Wall-E';
// favMovies[3] = 'Life of Pi'
// favMovies[4] = 'Jurassic Park';
// favMovies[5] = 'The Truman Show';
// console.log(favMovies[0]);
// console.log(favMovies.length);

//STEP 4
// let movies = ['Little Miss Sunshine', 'Beauty and the Beast', 'Wall-E', 'The Truman Show', 'Jurassic Park'];
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = ['Little Miss Sunshine', 'Beauty and the Beast', 'Wall-E', 'The Truman Show', 'Jurassic Park', 'Life of Pi', 'Wolfwalkers'];
// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i]);
// }

//STEP 6
// let movies = ['Little Miss Sunshine', 'Beauty and the Beast', 'Wall-E', 'The Truman Show', 'Jurassic Park', 'Life of Pi', 'Wolfwalkers'];
// for (let i of movies) {
//     console.log(i);
// }

//STEP 7
// let movies = ['Little Miss Sunshine', 'Beauty and the Beast', 'Wall-E', 'The Truman Show', 'Jurassic Park', 'Life of Pi', 'Wolfwalkers'];
// movies.sort();
// for (let i of movies) {
//     console.log(i);
// }

//STEP 8
// let movies = ['Little Miss Sunshine', 'Beauty and the Beast', 'Wall-E', 'The Truman Show', 'Jurassic Park', 'Life of Pi', 'Wolfwalkers'];
//     console.log('Movies I like:\n \n')
//     for (let i = 0; i < movies.length; i++) {
//         console.log(movies[i]);
//     }
    
// console.log('\n')

// let leastFavMovies = ['The Last Airbender', 'Welcome to Marwen', 'The Emoji Movie'];
//     console.log('Movies I regret watching: \n \n')
//     for (let i = 0; i < leastFavMovies.length; i++) {
//         console.log(leastFavMovies[i]);
// }

//STEP 9
// let movies = ['Little Miss Sunshine', 'Beauty and the Beast', 'Wall-E', 'The Truman Show', 'Jurassic Park', 'Life of Pi', 'Wolfwalkers'];
// let leastFavMovies = ['The Last Airbender', 'Welcome to Marwen', 'The Emoji Movie'];
// movies = movies.concat(leastFavMovies);
// movies.sort();
// console.log(movies.reverse());

//STEP 10
// let movies = ['Little Miss Sunshine', 'Beauty and the Beast', 'Wall-E', 'The Truman Show', 'Jurassic Park', 'Life of Pi', 'Wolfwalkers'];
// let leastFavMovies = ['The Last Airbender', 'Welcome to Marwen', 'The Emoji Movie'];
// movies = movies.concat(leastFavMovies);
// movies.sort();
// movies.reverse();
// movies = movies.pop();
// console.log(movies);

//STEP 11
// let movies = ['Little Miss Sunshine', 'Beauty and the Beast', 'Wall-E', 'The Truman Show', 'Jurassic Park', 'Life of Pi', 'Wolfwalkers'];
// let leastFavMovies = ['The Last Airbender', 'Welcome to Marwen', 'The Emoji Movie'];
// movies = movies.concat(leastFavMovies);
// movies.sort();
// movies.reverse();
// movies = movies.shift();
// console.log(movies);

//STEP 12
// let movies = ['Little Miss Sunshine', 'Beauty and the Beast', 'Wall-E', 'The Truman Show', 'Jurassic Park', 'Life of Pi', 'Wolfwalkers'];
// let leastFavMovies = ['The Last Airbender', 'Welcome to Marwen', 'The Emoji Movie'];
// movies = movies.concat(leastFavMovies);
// movies.splice(7, 8, 'Forrest Gump', 'Sunshine', 'District 9');
// console.log(movies);

//STEP 13
// let rankedMovies = [
//     'Beauty and the Beast', 1,
//     'Little Miss Sunshine', 2,
//     'Wall-E', 3, 
//     'Up', 4, 
//     'The Truman Show', 5
// ];
// let titleOnly = rankedMovies.filter ((item) => {
//     return typeof item === 'string';
// });
// console.log(titleOnly);

//STEP 14
// let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];
// const uppercasedEmployees = employees.map(employee => employee.toUpperCase());

// let showEmployee = function () {
//     console.log('Employees:\n\n');
//     uppercasedEmployees.forEach((employee) => {
//         console.log(employee);
//     });
// }
// showEmployee(employees);

//STEP 15
// let testArray = [58, '', 'abcd', true, null, false, 0];
// console.log(testArray);

// var filteredArray = testArray.filter(Boolean);
// console.log(filteredArray);

//STEP 16
//FUNCTION
// function randomNumber(items)
// {
// return items[Math.floor(Math.random()*items.length)];
// }
// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(randomNumber(items));

// //ARROW FUNCTION
// const randomNumber = items => {
//     return items[Math.floor(Math.random()*items.length)];
//     }
// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(randomNumber(items));

//STEP 17
//METHOD 1 - MATH.MAX
let numberList = [1, 2, 3, 5, 10, 20, 50, 100];
function largestNumber() {
    console.log(Math.max(...numberList));
}
largestNumber(numberList);

