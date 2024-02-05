// const country = 'Bangladesh';


// console.log(country.indexOf('d'))
// const divive = country.slice(0,6);
// console.log(divive);


/// split use below **************************
const country = ['Bangladesh', 'oli'];

const org = country.join('|')
console.log(org)

// country.split(',')
// console.log(country)

// Sample string with spaces
let inputString = "  apple, orange, banana, grape  ";

// Split the string by comma and remove leading/trailing spaces
let resultList = inputString.split('|').map(word => word.trim());

// Display the result
console.log(resultList);
