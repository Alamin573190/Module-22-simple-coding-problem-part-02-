const products=[
    {name :'shirt',price :500 ,quantity: 2},
    {name :'pant',price :600 ,quantity: 3},
    {name :'chironi',price :100 ,quantity: 1},
    {name :'shampo',price :200 ,quantity: 4},
];
function tottalPrice(products){
    // console.log(products);
  
    let sum = 0;
    for(const product of products){
        const thisProductPrice =product.price * product.quantity;
        sum = sum + thisProductPrice;
    }
    return sum;

}
const sum = tottalPrice(products);
console.log(sum);