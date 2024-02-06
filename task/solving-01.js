function totalPriceOfFoods(singara ,samucha , jilapi){

    if(typeof singara !== 'number' || typeof samucha !== 'number' || typeof jilapi !== 'number'){
        return 'you should be input intiger number';
    }
    else if(singara < 0 || samucha < 0 || jilapi < 0){
        return 'you should be input positive number';
    }
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;

    const total =(singara * singaraPrice)+(samucha * samuchaPrice) + (jilapi * jilapiPrice);
     return total;
}
const totalPrice = totalPriceOfFoods(1,2,1);
console.log(totalPrice);