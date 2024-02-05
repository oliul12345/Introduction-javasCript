const student = {
    name : 'Oliul Islam',
    Roll : 3,
    Type : 'Regular',
    subject : {
        arts : 'Political Science',
        commerce : 'Accounting',
        science : 'Camistry'
    }
}

// const data = student.subject.arts;
// console.log(data)

// const numberOfKeys = Object.keys(student).length;
// console.log(numberOfKeys);

const data = Object.keys(student.subject);

console.log(data)

for(const key of data){
    console.log(key, ':', student.subject[key] )
}
