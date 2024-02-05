function discountOfProducts(quantity){
    if(quantity <= 100){
        const tottal = quantity * 100;
        return tottal;
    }
    else if(quantity <= 200){
        const tottal = quantity * 90;
        return tottal;
    }
    else{
        const tottal = quantity * 70;
        return tottal;
    }
}
const tottalPrice = discountOfProducts(210);
console.log(tottalPrice);