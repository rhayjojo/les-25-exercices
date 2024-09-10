// EXERCICE 1
//bien
/* let euler = 2.71828
console.log(euler.toFixed(4)) 
 */



//EXERCICE 2
//bien
/* const findMax = (arg) => {
     return Math.max(...arg)
 }
console.log(findMax([1,2,3,6,5,4,9,8,7])); */ 



//EXERCICE 3
//je ne t'avais pas demander de changer ceci, utilise les backticks comme tu avais fais
/* function display(command) {
    return "You purchased " + command.quantity + " units of " + command.product + " for " + command.price;
}

let newCommand = {quantity: 3, product: 'biscuit', price: 500}
console.log(display(newCommand))
 */



//EXERCICE 4
//bien
/* function combinedArr(array1,array2) {
        return [...array1,...array2].sort((a,b)=>a-b) 
    }
console.log(combinedArr([984,54,684,6841,35,84],[651,98,65,684,5.1,91,3541,651,99])) */
 


// EXERCICE 5
//bien
/* const car = {
    make : 'Cameroun',
    model : 'toyota',
    year : 'unknown'
}
const {make : val1, model : val2} = car;
console.log(val1,val2)  */



// EXERCICE 6 
//bien
const calculateArea = (radius) => {
     return radius !== undefined ? radius * radius * Math.PI : "radius is missing"
}
console.log(calculateArea(4))  



// EXERCICE 7
//tu peux aussi faire comme ca 
/*
     
function average(...args) {
    let sum = args.reduce((acc, current) => acc + current, 0);
    return parseFloat((sum / args.length).toFixed(2));
}

*/
/* function average(...arg) {
    let amount = arg.reduce((accumulator, currentValue) => accumulator += currentValue ,0)
    return Math.round(amount/arg.length*100)/100;
}
console.log(average(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,99,-150)); 
  */


//EXERCICE 8
//voici comment tu pouvais faire pour le clean code :
//const getReverseStrings = (arr) => arr.map((str) => str.split('').reverse().join(''));

/* function newArray(array) { 
    return array.map(str => str.split('').reverse().join('')) 
}

let example = ["koki", "couscous", "banane malaxée", "eren yagers", ""];
console.log(newArray(example))   */



// EXERCICE 9
/*clean code :
const booksWithMoreThan300Pages = (obj) => obj.filter(book => book.pages > 300)
*/
/* let example = [{title:'val', pages:51},
    {title:'val1' , pages:500},
    {title:'val2' , pages:200},
    {title:'val3' , pages:651},
    {title:'val4' , pages:0},
    {title:'val5' , pages:651},
    {title:'val6' , pages:499}]

console.log(example.filter(a => a.pages > 300))   */



//EXERCICE 10
//bien
/*  function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched successfully!')
        },Math.floor(Math.random()*6000)+2000)
    })
} 
fetchData()
    .then((item) => {
        console.log(item)
    }) 
 */
