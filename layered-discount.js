function discountOfProducts(quantity){
    const first100Price = 100;
    const secound100Price = 90;
    const third100Price = 70;
    if(quantity <= 100){
        const tottal = quantity * first100Price;
        return tottal;
    }
    else if(quantity <= 200){
        const fisrt100Tottal = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingtottal = remainingQuantity * 90;
        const tottal = fisrt100Tottal + remainingtottal;
        return tottal;
    }
    else{
        const first100Tottal = 100 * first100Price;
        const secound100tottal = 100 * secound100Price;
        const remainingQuantity = quantity - 200;
        const remainingtottal = remainingQuantity * third100Price;

        const tottal =first100Tottal + secound100tottal + remainingtottal;
        return tottal;
    }
}
const tottalPrice = discountOfProducts(201);
console.log(tottalPrice);