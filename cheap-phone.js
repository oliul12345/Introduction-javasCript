const phones = [
    {
        name: 'samsung', price: 125000, color: 'black',quantity:2
    },
    {
        name: 'Nokia', price: 50000, color: 'black',quantity:7
    },
    {
        name: 'Redmi', price: 35000, color: 'black',quantity:4
    },
    {
        name: 'Vivo', price: 75000, color: 'black',quantity:3
    },
    {
        name: 'Iphone', price: 175000, color: 'black',quantity:1
    },
];

/// ***********************  get the cheapest price of this array    ************************

function cheapPrice(phones){
    // console.log(phones)
    let phone = phones[0];

    // console.log(p)
    for(const num of phones){
        // console.log(num)
        if(phone.price > num.price){
            phone = num;
        }
    }
    // return phone;
}

const result = cheapPrice(phones);
// console.log('cheap price is', result);


////// ****************   calculate the total price of buying phone ***************/////

function buyPhone(phones){
    let total = 0;
    for(const phone of phones){
        // console.log(phone)
        const phonePrice = phone.price;
        const totalPhonePrice = phonePrice * phone.quantity;
        // console.log(phonePrice)
        total = total + totalPhonePrice;
    }
    return total

}
const results = buyPhone(phones);
console.log(results)