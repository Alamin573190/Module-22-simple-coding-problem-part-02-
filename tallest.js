const heights =[12 ,34, 56, 78,99 ,98, 90,];

function getMax(numbers){
    console.log(numbers);
    let max = numbers[0];
    for(let num of numbers){
       if(num > max){
        max = num;
       }
    }
    return max;
}
// const max = getMax(heights);
// console.log(max);

// ......min number....

const heightss =[12 ,34, 56, 78,99 ,98, 90,];

function getMax(numbers){
    console.log(numbers);
    let min = numbers[0];
    for(let num of numbers){
       if(num < min){
        min = num;
       }
    }
    return min;
}
const min = getMax(heightss);
console.log(min );


