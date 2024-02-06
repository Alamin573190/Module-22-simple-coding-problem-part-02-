function totalPriceOfFoods(singara ,samucha , jilapi){
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;

    const total =(singara * singaraPrice)+(samucha * samuchaPrice) + (jilapi * jilapiPrice);
     return total;
}
const totalPrice = totalPriceOfFoods(1,2,1);
console.log(totalPrice);