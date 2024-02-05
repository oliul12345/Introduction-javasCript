// let sentence = 'Hi Iam Md Oliul Islam';

// let rev = '';

// for(let i = 0; i < sentence.length; i++){
//     // console.log(i);
//     const result = rev + sentence[i];
//     // result.split('').join('')
//     console.log(result)
// }


/// alternative-2

// let myString = "Hi Iam Md Oliul Islam";
// let reversedString = myString.split('').reverse().join('');

// console.log(reversedString);


const number = [2,3,4,5,6,7,8];

const store = [];

for(const num of number){

    if(num % 2 == 0){
        store.unshift(num)
    }
}
console.log(store);

// // Example array of strings
// var wordArray = ["Hello", "", "World", "!"];

// // Concatenate the words into a single string
// var result = wordArray.join('');

// // Log the result
// console.log(result);