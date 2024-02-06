function picnicCost(public){
    const costFirst100 = 5000;
    const costSecound100 = 4000;
    const costThird100 = 3000;
if(typeof public !== 'number' || public < 0){
    return 'you should be input intiger number and positive number';

}
    if(public <= 100){
        const costFirst100total = costFirst100 * public;
        return costFirst100total;
    }
    else if(public <= 200){
        const costFirst100total = costFirst100 * 100;
        const remainingPublic = public - 100;
        const remainingPublicCost = remainingPublic * costSecound100;
        const totalsecound100Cost = costFirst100total + remainingPublicCost;
    
        return totalsecound100Cost;
    }
    else{
        const costFirst100total = costFirst100 * 100;
        const costSecound100Tottal = costSecound100 * 100;
        const remaningTottal = (public - 200) * costThird100;
        const  costTottalthird100 = costFirst100total + costSecound100Tottal + remaningTottal;
        return costTottalthird100;
    }


}
const tottal =picnicCost(202);
console.log(tottal);