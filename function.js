const num1 = 23;
const num2 = 12;

function sum(num111,num222){
    const total = num111 + num222;
    console.log(total)
}
// sum(num1,num2);


function oli(multiply){
    const ans = multiply * multiply;
    console.log(ans);
}

// oli(4);
// oli(7)
// oli(8)
// oli(10)


function returnUsingFunction(number){
    const devive = 1500 / number;

    return devive;
}

const result = returnUsingFunction(10);
// console.log(result)


// ***********  Conditional Return an Function ************************// 

function isEven(number){
    if(number % 2 === 0){
        return true
    }
    return false;
}

// const output = isEven(30);
// console.log(output);


///// *************  diffrent types of parametere we use in function ************

const arr = ['oli', 'Mango','Tomato','Lemon','Potato'];
 function tryArr(oliul, isOli){
    if(!isOli){
        console.group(oliul);
        return oliul
    }
    else{

    }
 }

//  const oliul = tryArr(arr, false);


 //******  some of all numbers an array using function   ***** *//

 const givenArr = [2,3,5,6,7,7,4];
 function sumArr(givenArr){

    let sum = 0;
    for(const sumOfArray of givenArr){

         sum = sum + sumOfArray;
         console.log(sum);
    }
    return sum;
 }
//  sumArr(givenArr);

 //******  some of all even numbers return an array using function   ***** *//

 const allNum = [45,49,785,45,72,42,88,15];

 function getEvenNum(allNum){
    let evenNumbersSum = 0;
    for(const evenNumber of allNum){
        if(evenNumber % 2 == 0){
            evenNumbersSum = evenNumbersSum + evenNumber;
            console.log('Alhamdulillah we get the sum',evenNumbersSum)
        }
    }
  return evenNumbersSum;
 }

 const callFunc = getEvenNum(allNum);