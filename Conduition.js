// const বিসিএস = true;
// const বেতন = 50000;
// const উচ্চতা = 5.6;

// if(বিসিএস ==  true && বেতন > 60000){
//     console.log('tumi bibaho korta parba');
// }
// else{
//     console.log('bare choila jao babajan')
// }


// multi level condition 
const price = 9000;

if(price <= 17000){
    const discount = price * 100/1000;
    const payment = price - discount;
    console.log(payment)
    console.log(discount)
}
else{
    console.log(price)
}