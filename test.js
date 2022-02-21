// console.log(null>=0);

// let a=123;
// let b="str"
// console.log(a-b);




// console.log(123!=="45");

// console.log(50%20);     // 50% ot chisla 20;

// let a=2;
// console.log(++a);
// console.log(a+5);

// console.log(5>3 && 3!==2);

// console.log(2>3 || 5==5);

// console.log("cat" || "dog");        // chto za hernja

// let a="alpha";
// let a1 ="bet";
// console.log(a);


// let person = {
//     firstName: "Eugene",
//     lastName: "Beletsky",
//     age: 28
// }

// let adult = "adult";
// let young = "young";
// if (person.age < 18 ){
// console.log(young);
// }
// else {
//     console.log(adult);
// }

// if ("firstName" in person) {
//     console.log("firstName in person");
// }


// myobj = new Number();
// myobj.a=2;
// console.log(myobj.a);
// console.log(myobj);
// delete myobj.h;
// delete myobj;


// let a=1;
// let b=10;
// do {
//     a++;
// }
// while (a<b);
// console.log(a,b);


                                // количество пятниц 13 с 2000 года
let day = 1;
let result =0;
let finishDate = new Date();
let startDate = new Date(2000,0,day);
while(startDate<finishDate){
    if(startDate.getDate()===13 && startDate.getDay()===5){
        result++;
    }
    day++;
    startDate=new Date(2000,0,day);

}
console.log(result)

