function highWord(sentence){

    const word = sentence.split(' ');
    // console.log(word)

    let longest = word[0];
    for(let i = 1; i < word.length; i++){
        // console.log(word.length)
        const element = word[i]
        // console.log(element)
        if(element.length > longest.length){
            longest = element;
            // console.log(element)
        }
    }
    return longest;
}

const sentence = 'I am learning Programming to become a programmer';
const result = highWord(sentence);
console.log(result);




// function longestWord(sentence) {
//     const words = sentence.split(' ')
//     let longest = words[0]
//     for (let i = 1; i < words.length; i++) {
//         const element = words[i];
//         if (longest.length < element.length) {
//             longest = element
//         }
//     }
//     return longest;
// }

// const s = 'I Love Programming'
// console.log(longestWord(s))




// function findLongestWord(sentence) {
//     // Split the sentence into words
//     const words = sentence.split(/\s+/);

//     // Initialize variables to store the longest word and its length
//     let longestWord = "";
//     let maxLength = 0;

//     // Iterate through each word in the array
//     for (let i = 0; i < words.length; i++) {
//         // Remove any punctuation (optional, depending on your requirements)
//         const word = words[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
//         console.log(word)
//         // Check if the current word is longer than the current longest word
//         if (word.length > maxLength) {
//             longestWord = word;
//             maxLength = word.length;
//         }
//     }

//     return longestWord;
// }

// // Example usage
// const givenString = "I am learning Programming to become a programmer.";
// const results = findLongestWord(givenString);
// console.log("Longest word:", results);
