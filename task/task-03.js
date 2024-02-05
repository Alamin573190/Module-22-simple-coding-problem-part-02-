function totalCost(laptopQuantity, tabletQuantity ,mobileQuantity){
    const laptop =35000 ;
    const tablet =15000 ;
    const mobile =20000 ;

    const totalLaptopCost = laptop * laptopQuantity;
    const totaltabletCost = tablet * tabletQuantity;
    const totalMobileCost = mobile * mobileQuantity;

    const totalCostRequer = totalLaptopCost +totaltabletCost + totalMobileCost;
    return totalCostRequer;

}
const tottal=totalCost(2 ,4 ,3);
console.log('total Cost' + tottal + 'TK')