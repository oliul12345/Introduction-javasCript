function add(a,b){
    const sum = a + b;
    return sum;
}
function subtract(a,b){
    const subtract = a - b;
    return subtract;
}
function multiply(a,b){
    const multiply = a * b;
    return multiply;
}
function divide(a,b){
    const divide = a / b;
    // const fix = Math.floor(divide)
    return divide;
}


function calculator(num1,num2,operation){
    if(operation === 'add'){
        return add(num1,num2)
    }
    else if(operation === 'subtract'){
        return subtract(num1,num2)
    }
    else if(operation === 'multiply'){
        return multiply(num1,num2)
    }
    else if(operation === 'divide'){
        return divide(num1,num2)
    }

    else{
        return "Invalid operation please try valid operation"
    }


}

const result = calculator(5,4,'divide');
console.log(result);