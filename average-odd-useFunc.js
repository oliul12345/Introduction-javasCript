const Array = [12,34,55,67,78,89,80,4,3,5,67,103];

function oddAverage(Array){
    // console.log(Array)
    let i = [];
    for(const arrElement of Array){
        if(arrElement % 2 !== 0){
            i.push(arrElement)

        }
    }
    // console.log(i);

    let sum = 0;
    for(const number of i){
        sum = sum + number;
    }
    console.group(sum);
    const count = i.length;
    // console.log(count)
    const sumAverage = sum / count;
    const sumAverageFix = sumAverage.toFixed(2);
    return sumAverageFix;
}

const oddArray = oddAverage(Array);
console.log(oddArray)