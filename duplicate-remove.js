const arr = ['abul','babul','dabul','sabul','dabul','oli','babul'];
const numArr = [2,3,4,54,2,4,54,7,8,8,67]

function removeDuplicate(arr){
    
    let emptyArr = [];
    for(const element of arr){
        // console.log(element)
        if(emptyArr.includes(element) === false){
            emptyArr.push(element)
            
        }
    }
    // console.log(emptyArr)
    return emptyArr;
}

// const result = removeDuplicate(arr);
const result = removeDuplicate(numArr);
console.log(result)