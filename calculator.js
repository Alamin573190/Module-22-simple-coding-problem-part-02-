 function add(num1 ,num2){
    const sum = num1 + num2;
    return sum;
 };

 function subtruct (num1 ,num2){
    return num1 - num2;
 };
 function multiply (num1 ,num2){
    return num1 * num2;

 };
 function divide (num1 ,num2){
    return num1 / num2;

 };

 function calculator( a ,b ,operation){
    if(operation === 'add'){
        const result =add(a,b);
        return result;
    }
    else if(operation === 'subtruct'){
        const result =subtruct(a ,b);
        return result;
    }
    else if(operation === 'multiply'){
        const result =multiply(a ,b);
        return result;
    }
    else if(operation === 'divide'){
        const result =divide(a ,b);
        return result;
    }
    else{
        "its found for 'add','subtruct','multyply','divide'"
    }
 };
const result= calculator(5, 3, 'divide');
console.log(result);