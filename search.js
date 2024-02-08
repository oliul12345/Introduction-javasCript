const phones = [
    {name:'samsung', color:'red',price:23444},
    {name:'nokia', color:'black',price:235435},
    {name:'iPhone', color:'green',price:1444},
    {name:'redmi', color:'red',price:56546},
    {name:'xoami', color:'yellow',price:345345},
    {name:'vivo', color:'gray',price:35345},
    {name:'symphony', color:'red',price:34534},
]

function findPhone(phones,search){
    let getPhone = [];
    for(const phone of phones){
        const findColorPhone = phone.color
        // console.log(findColorPhone)
        // if(findColorPhone.includes)
        const r = findColorPhone.toLowerCase().includes(search.toLowerCase());
        if(r){
            getPhone.push(phone)
        }
    }
    return getPhone
}

const result = findPhone(phones, 'Red');
console.log(result);