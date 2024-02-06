// function validity(a,b){
//     if(typeof(a) !== 'number' || typeof b !== 'number'){
//         return 'provide a number'
//     }
//     const add = a + b;
//     return add;

// }
// const result = validity(3,4);
// console.log(result)


// validate of string type data ///////////////////////////
 
function sum(a,b){
    return a + b;
}

function validateString(oli,oli2){
    if(typeof oli !== 'string' || typeof oli2 !== 'string'){
        return 'please provide a string type data'
    }

    const p = sum(oli,oli2);
    return p;

}
const result2 = validateString('oli', 34);
console.log(result2);