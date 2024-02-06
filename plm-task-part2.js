const heights2 = [167, 190, 6120, 165, 137];
// const highNum = Math.max(heights2);
// console.log(highNum);

function getHigh(heights2){
    let i = [];
// console.log(i)
for(const num of heights2){
    // console.log(num);
    let j = num;
    if(i < j){
        i = j
    }
}
return i;
}
const result = getHigh(heights2);
console.log('task -1 result is',result);

///// task 2 //////////////////

const arr = ['rahim', 'robin', 'rafi','oli', 'ron', 'rashed'];

function smallName(arr){

    let small = arr[0] ;
    for(const name of arr){
        // const length = name.length;
        // console.log(length);
        if(name.length < small.length){
            small = name;
        }

    }
    return small

}
const result2 = smallName(arr);
console.log(' result of task -2 is',result2);