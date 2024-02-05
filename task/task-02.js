// Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function shortNameOfArray(names){
    let shortName =names[0];
    for(let name of names){
        if(name.length < shortName.length){
            shortName = name;
        }
    }
    return shortName;
}
const namess=shortNameOfArray(heights2);
console.log(namess);