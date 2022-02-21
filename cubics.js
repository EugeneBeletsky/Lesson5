// игра в кубики
let numbers =[1,2,3,4,5,6];
console.log("numbers on cubics:", numbers);
let player1 ={
    name: "Ivan"
}
let player2={
    name:"Dima"
}
console.log("players:", player1.name, "and", player2.name);

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() *(max - min)+min);
//   }
  
//   console.log(getRandomInt(1,7));

//   let ivan11=getRandomInt(1,7);
//   console.log(ivan11);

let ivan1= Math.random() * (6-1)+1;
let ivan11=Math.round(ivan1);
console.log("Ivan1 ",ivan11);

let dima1= Math.random() * (6-1)+1;
let dima11=Math.round(dima1);
console.log("Dima1 ",dima11);

let ivan2= Math.random() * (6-1)+1;
let ivan22=Math.round(ivan2);
console.log("Ivan2 ",ivan22);

let dima2= Math.random() * (6-1)+1;
let dima22=Math.round(dima2);
console.log("Dima2 ",dima22);

let ivan3= Math.random() * (6-1)+1;
let ivan33=Math.round(ivan3);
console.log("Ivan3 ",ivan33);

let dima3= Math.random() * (6-1)+1;
let dima33=Math.round(dima3);
console.log("Dima3 ",dima33);

let ivan4=ivan11+ivan22+ivan33;
console.log("сумма Ивана =", ivan4);
let dima4=dima11+dima22+dima33;
console.log("сумма Димы =", dima4);

if (ivan4 > dima4){
    console.log("победил Иван");
}
else if(ivan4 == dima4){
    console.log("Ничья");
}
else{
    console.log("Победил Дима");
} 