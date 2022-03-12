// IMPORTANT
// Utilizing map() mapping on an array of strings
var words = ['these', 'words', 'need', 'capitalization']

let caps = words. map(word => word.toUpperCase())

console.log(caps)


// Utilizing map() mapping on an array of number values
var numbers = [1, 2, 3, 4]

let squared = numbers.map(number => number*number)

console.log(squared)


// Utilizing map() mapping with function integration
var numbers2 = [1,2,3,4,5];
var doubled = numbers2.map(function(num){
    return num * 2;
});
console.log(doubled);


// Above function using Arrow Function
var numbers = [1,2,3,4,5];

var doubled = numbers.map(num => num *2);

console.log(doubled)


// Extra example
var items = [0,2,4,6,8];
var add5 = items.map(function(num) {
    return num + 5
});
console.log(add5)


// IMPORTANT
// Utilizing map() mapping with dictionary-based arrays
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(function(city){
    return city.population;
});
console.log(cityPop);



// IMPORTANT
// Utilizing the filter() filter method

// First, a basic iterative procedure for filtration
let numbers = [13, 22, 36, 54, 55]

var evenNumbers = []

numbers.forEach(function(number) {
    if (number % 2 == 0) {
        evenNumbers.push(number)
    }
})

console.log(evenNumbers)

// IMPORTANT
// NOW, iterative filtration using filter()
let numbers = [13, 22, 36, 54, 55]

let evenNumbers = numbers.filter(number => number % 2 == 0)

console.log(evenNumbers)


// Another example
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);


// Challenge - filter for words starting with "s"
let words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

let S = words.filter(function(word) {
    return word[0] === "s";
});

console.log(S)

// IMPORTANT
// Utilizing sort() to sort array values
// A and B represent two elements in the array, 
// the subtraction denotes order based on pos(+) or neg(-) results
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);
// This ^ function sorts values in ascending order

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);
// This ^ function sorts values in descending order

// IMPORTANT
// Utilizing slice() to pick out sections of an array
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
// This ^ selects a section of an array (indexes 0 to 1) based on 
// a starting and ending (-1) index parameter
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
// This ^ selects every array item from index 3 and upwards