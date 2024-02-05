// let num = 10;


// while(num < 25){
//     num = num + 1;
//     console.log(num)
// }


// let oli = 0;

// while(oli < 20){
// oli = oli + 2;
// console.log(oli)
// }


// let num = 0;
// let sum = 1;
// while(sum < 15){
//     sum = sum + num;
//     num ++
//     console.log(sum)
// }

// find even numbers 

// for(i = 0; i < 10; i= i+1){
//     console.log(i)
// }

// 20 to 30 numbers sum is below *****************************

// let sum = 0;
// for(let i = 0; i <= 30; i++){
//     sum = i + sum;
// };
// console.log(sum);

// reverse system for loop ********************************

for(let i = 100; i >= 90; i--){
    // console.log(i)
}


// Example array ****************************************
// let numbers = [1, 2, 3, 4, 5];

// // Initialize a variable to store the sum
// let sum = 0;

// // Iterate through each element in the array and add it to the sum
// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
// }

// // Display the sum
// console.log("Sum of array elements: ", sum);

// for(let i = 5; i < 20; i ++){
//     if(i%2 !== 0){
//         console.log(i)
//     }
// }

// give me the numbers 1 to 30 which are divisible by 5 or 3  ****************

// for(let i= 1; i < 30; i++ ){
//     if(i%5 == 0 || i%3 == 0){
//         console.log(i)
//     }
// }

/// give me the numbers that are divisible the number 3'*******************

let sum = 0;
for(let i= 1; i < 30; i++ ){
    if( i%3 == 0){
        sum = i + sum;
        console.log(i)
    }
}
console.log(sum)