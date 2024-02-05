function wood(chairQuantity,bedQuantity,tableQuantity){

    const chair = 5000;
    const table = 8000;
    const bed = 15000;

    const totalChair = chair * chairQuantity;
    const totalBed = bed * bedQuantity;
    const totalTable = table * tableQuantity;

    const totalPrice = totalBed + totalChair + totalTable;
    return totalPrice;
}

const result = wood(2,1,1);
console.log(result);