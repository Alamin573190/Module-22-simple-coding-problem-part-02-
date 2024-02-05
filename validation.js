function multiply (num1 ,num2){
    if(typeof num1 !== 'number'|| typeof num2 !== 'number'){
        return 'please provide a number'
    }
    const mul = num1 * num2;
    return mul;
};
const result =multiply('4' ,7);
// console.log(result);