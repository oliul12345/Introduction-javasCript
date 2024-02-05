const numbers = [2,4,6,7,87,3,23,1,14];

// const sorting = numbers.sort();
// console.log(sorting);

// sorts are genarelly two types 1 is ascending and 2 is descending; 

// ascending 

// const sorting = [...numbers].sort(function(a,b){
//     return(a-b)
// });
// console.log(sorting)

// descending is below here 

const sorting = [...numbers].sort(function(a,b){
    return(b-a)
});
console.log(sorting)