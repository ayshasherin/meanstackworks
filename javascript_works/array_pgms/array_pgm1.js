//   DATA STRUCTURES
// to organise data
// data structures two types :- ARRAY,OBJECT
// 1)ARRAY

//          0     1     2     3     4     5
var expenses=[10000,12000,20000,22000,12000,13000]


//january expense
//console.log(expenses[0]);


//iterating through array
// for(let i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
// }

// for(let amount of expenses){
//     console.log(amount);
// }

//find total exp
// var total=0;
// for(let amount of expenses){
//     //console.log(amount);//10000,12000,20000.....
//     total=total+amount;//0+10000+,12000+20000+.....=total
// }
// console.log(total);



//print all exp < 150000

// for(let amount of expenses){
//     if(amount<15000){
//         console.log(amount);
//     }
// }

//add rs 3000 more with feb exp

// expenses[1]+=3000;
// console.log(expenses);

//inserting new element to array
expenses.push(22000);
console.log(expenses);