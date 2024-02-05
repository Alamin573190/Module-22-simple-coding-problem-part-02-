function woodQuantity(chair , table ,bed){
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const chairTotalWood = perChair * chair;
    const tableTottalWood = perTable * table;
    const bedTottalWood = perBed * bed ;
     const tottalWood = chairTotalWood + tableTottalWood + bedTottalWood;
      return tottalWood;

}
const wood = woodQuantity(2 ,3 ,1);
console.log(wood);