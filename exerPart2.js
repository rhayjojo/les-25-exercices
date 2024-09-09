// EXERCICE 1
//replace numberUser by inputNumber
/* function verify(numberUser){
    return Math.round(Math.random()*9)+1 === numberUser ? 'Good Work' : 'Not matched'
}

console.log(verify(5)) */



// EXERCICE 2

//replace numberDayChrismas by daysLeftUntilNextChrisams

/* function numberDayChrismas(){
    let christmas = new Date((new Date).getFullYear(),11,25)
    if(christmas < (new Date)){
        christmas = new Date(current.getFullYear()+1,11,25)
    }  
    return Math.floor((christmas - (new Date)) / (1000*60*60*24))  
}

console.log(numberDayChrismas()) 
   */



// EXERCICE 3
//replace productMultiplication by productAndMultiplicationOfTwoNumber
//trop long tu peux faire plus court

/* function productMultiplication(value1,value2){
    if(typeof value1 !== 'number' || typeof value2 !== 'number'){
        return 'les valeurs entrées ne sont pas numériques'
    }else if(value1 == 0 && value2 == 0){
        return 'la division de la première valeur par la deuxième est indéterminée et le produit des deux valeurs est : ' + value1*value2
    }else{ 
        return 'le produit des deux valeurs est : '+ value1*value2 +' et la division de la première valeur par la deuxième est : '+ value1/value2
    }  
}

console.log(productMultiplication(2,3)) */



// EXERCICE 4
/*
replace longerString by getLongestString

function getLongestString(array) {
    let longerString = array.reduce((longer, current) => {
        return longer.length >= current.length ? longer : current
    }, 0)
    return longerString;
}
*/
/* function longestString(array){
    let arrayString = array.reduce((accumulator,currentValue) => typeof currentValue !== 'string' ? accumulator.concat(JSON.stringify(currentValue)) : accumulator.concat(currentValue),[])
    return arrayString.reduce((accumulator,currentValue) => currentValue.length > accumulator.length ? accumulator = currentValue : accumulator = accumulator ,'')
}
let exampleArray = ["koki", "couscous", "banane malaxée", "eren yagers", "", 5, 984];
console.log('la chaine la plus longue du tableau est : ', longestString(exampleArray))  */ 



// EXERCICE 5

/* trop log voici comment j'ai fais : 

function getMaxEvenNumber(array) {
    const longestInteger = array.filter(currentNber => currentNber % 2 === 0).reduce((a, b) => {
        return a >= b ? a : b
    })
    return longestInteger;
}



function highNumber(array){
    const newArray = array.filter(a => a % 2 === 0)
    return newArray.reduce((accumulator,currentValue) => currentValue > accumulator ? accumulator = currentValue : accumulator = accumulator ,newArray[0])
}

const integerExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 983, 2, -1000, -9, 0];
console.log(highNumber(integerExample)) */  




// EXERCICE 
// ceci est correct sauf le nom de la fonction que tu dois remplacer et tu peux aussi utiliser une methode de js comme suit : 

// function DeleteDuplicatedCaracter(str) {
//     let arrStr = str.split('');
//     const uniqueStr = [...new Set(arrStr)]

//     return uniqueStr.join('');
// }


/* function characterDeleteRepetitive(str){
    let finalArray = str.split('').filter((valeur, index) => {
        return str.split('').indexOf(valeur) === str.split('').lastIndexOf(valeur);
      });
    return finalArray.join('')
}

let exampleString = "j'essaie d'écrire une chaîne choisie au hasard juste pour&é(§è!çà) essayer"
console.log(characterDeleteRepetitive(exampleString))  */



// EXERCICE 7

//ici utilise une fonction recurcive
/* function sumCubedNumbers(number){
    if(number >= 1){
        let i = 1;
        let sum = 0;
        while(i <= number){
            sum = sum + Math.pow(i,3);
            i++ ;
        }
        return sum;
    } else {
        return "enter a positive number greater than 1 !!!";
    } 
}

console.log(sumCubedNumbers(1)) */





// EXERCICE 8
//bien fait 
/* function similarityCheck(obj1,obj2){
    return Object.keys(obj2).every(a => obj1.hasOwnProperty(a) && obj1[a] === obj2[a]) ? "the first one contains equivalent property values to the second one" : "the first one doesn't contains equivalent property values to the second one"
}

const example1 = { prop1 : 'val1', prop2 : 'val2', prop3 : 'val3', prop4 : 'val4', prop5 : 'val5', prop6 : 'val6', prop7 : 'val7', prop8 : 'val8', prop9 : 'val9', prop10 : 'val10'}
const example2 = { prop5 : 'val5', prop6 : 'val6', prop7 : 'val7', prop8 : 'val8', prop9 : 'val9', prop10 : 'val10'}
console.log(similarityCheck(example1,example2)) */



// EXERCICE 9
/*
tu peux faire plus simplement comme ceci 

function filterArray(arr, valuesToRemove) {
    //valuesToRemove
    return arr.filter(element => !valuesToRemove.includes(element));
}

*/
/* function eliminateSpecifiedValues(array,condition){
    let specifieArray = array.filter(condition)
    specifieArray.reduce((accumulator,currently) => array.splice(array.indexOf(currently),1),array)
    return array; 
}

let example = eliminateSpecifiedValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 981, 2, -1000, -9, 0], a => a % 2 === 0)
console.log(example)  */



//EXERCICE 10
// bien
/* function extraction(array,...indexArray){
    return indexArray.reduce((accumulator,currently) => accumulator.concat(array[currently]),[])
}
console.log(extraction([1,2,3,4,5,6],1,2,5))  */



// EXERCICE 11
//return also object before
//replace deleteProperty by deletePropertyOfArray

/* function deleteProperty(object,property) {
    delete object[property];
    return object;
}
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
console.log(student);
deleteProperty(student,"rollno");
console.log(student)  */



// EXERCICE 12
//ok
/* class Cylinder {
    constructor(height, radius){
        this.height = height,
        this.radius = radius
    }
    volume() {
        let result = this.height*Math.PI*Math.pow(this.radius,2)
        return result.toFixed(4)
    }
}
let cylinderExample = new Cylinder(5.989819231,94.13516)
console.log(cylinderExample.volume())   */



// EXERCICE 13
//l'heure doit etre generer en fonction du temps actuel
/* function clock(second){
    if(second < 48){
        console.log("14 : 37 : ",second);
        setTimeout(() => {clock(second+1)},1000);
    }
}
clock(42)   */



// EXERCICE 14
//replace verifyCharacter by checkIfStringIsLowerCaseOrUpperCase
/* function verifyCharacter(string){
    return string === string.toLowerCase() ? "la chaine est écrite en minuscule" : "la chaine n'est pas écrite en minuscule"
}

console.log(verifyCharacter("andkajNdza")) */





// EXERCICE 15
// ce n'est pas ce qu'on te demande de faire ici
/* function add(...arg){
    return new Promise((resolve,reject) => {
        if(arg.length === 2){
            resolve('you have completed correctly')
        }else{
            reject('Must provide two parameters')
        }
    })
}
add(1,5)
    .then((result) => {
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })  */

        
