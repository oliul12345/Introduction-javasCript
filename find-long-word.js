function longestWord(sentence){
    const sSplit = sentence.split(' ');
    // console.log(sSplit);
    let longWord = sSplit[0]
    // console.log(long);
    for(let i = 0; i < sSplit.length; i++){
        let word = sSplit[i];
        // console.log(word)
        if(word.length > longWord.length){
            // console.log('sucess')
            longWord = word;
        }
    }

    return longWord;
}

const sentence = 'I love programming and I want to be an proffetional it';
const result = longestWord(sentence);
console.log(result)