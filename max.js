const number = [234,546,57,7,878,98,9,8656,56767,345,345,567,67];

function getBIgNum(number){
    let p = number[0];
    // console.log(p);
    for(const num of number){
        // console.log(num)
       if(p < num){
         p = num
       }
    }
    return p
}
const result = getBIgNum(number);
console.log('highest number is',result)