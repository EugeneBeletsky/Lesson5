//Количество пятниц 13 с 2000 года
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
console.log("Количество пятниц:", result)



// let counter = 0;
// for(let year=2000; year< new Date().getFullYear(); year++){
//     for(let month=0; month<12; month++){
//         for(let date=1; date<31;date++){
//         let dateCount = new Date(year,month,date);
//         if(dateCount.getDay()===5 && dateCount.getDate()===13 ){
//             counter++;
//         }
//     }
// }
// }
// console.log("Количество пятниц: ",counter)