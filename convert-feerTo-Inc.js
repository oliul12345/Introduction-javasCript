function converter(Inc){
    const feet = Inc / 12 ;
    const onlyfeet = parseInt(feet);
   const inces = Inc % 12 ;
   const result = onlyfeet + ' feet ' + inces + ' inces';
   return result
}
 
const results = converter(70)
console.log(results);