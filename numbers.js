//разбивка числа 15 на 3 составляющие по сумме, целые числа
let number=15;
let a = number;
let parts=3;
let partsArray=[];
let randSum=0;
for(let i=1; i<parts; i++){
    let randomNumber = Number((Math.random()* a).toFixed(0));
    partsArray.push(randomNumber);
    randSum+=randomNumber;
    a=a-randomNumber;
}
partsArray.push(Number((number-randSum).toFixed(0)));

console.log(partsArray);



// //разбивка числа 15 на 3 составляющие, с сотыми
// let number=15;
// let a = number;
// let parts=3;
// let partsArray=[];
// let randSum=0;
// for(let i=1; i<parts; i++){
//     let randomNumber = Number((Math.random()* a).toFixed(2));
//     partsArray.push(randomNumber);
//     randSum+=randomNumber;
//     a=a-randomNumber;
// }
// partsArray.push(Number((number-randSum).toFixed(2)));

// console.log(partsArray);