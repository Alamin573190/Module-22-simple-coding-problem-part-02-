const phons=[
    { name:'samsung',price:30000 , camera :'12mp' ,color:'black'},
    { name:'itel',price:10000 , camera :'12mp' ,color:'black'},
    { name:'walton',price:20000 , camera :'12mp' ,color:'black'},
    { name:'iphon',price:40000 , camera :'12mp' ,color:'black'},
    { name:'symphoni',price:34000 , camera :'12mp' ,color:'black'},
]
function minPrice(prices){
    let min = prices[0];
    // console.log(phons);
    for(const pricee of prices){
        if(pricee.price < min.price){
            min = pricee;
        }
    }
    return min;

}
const phonPrice =minPrice(phons);
console.log(phonPrice);