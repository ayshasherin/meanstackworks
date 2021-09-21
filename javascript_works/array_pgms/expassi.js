

var expenses=[10000,13000,7000,14000,15000,11000,25000,17000]
let low_exp=expenses[0];  //10000,12000
for(let amount of expenses){
    if(low_exp>amount){ //10000>10000    10000>12000   10000>7000
        low_exp=amount
    }
}
console.log(low_exp);



let high_exp=expenses[0];  //10000,12000
for(let amount of expenses){
    if(high_exp<amount){ //10000>10000    10000>12000   10000>7000
        high_exp=amount
    }
}
console.log(high_exp);



let count=0
for(let amount of expenses){
    if(amount>15000){
        count++;
    }
}
console.log("exp>15000",count);


var total_exp=0;
for(let amount of expenses){
    total_exp+=amount
}
console.log((total_exp/expenses.length));































// var sum=0;
// var avg=0;
// var flag=0;
// var lowexp=expenses[0];
// var highexp=expenses[0];


// // highest expense
// for(let i=0;i<expenses.length;i++){
//     if(highexp<expenses[i]){
//         highexp=expenses[i];
//     }
// }
// console.log("Highest expense : ",highexp);



// //lowest expense
// for(let i=0;i<expenses.length;i++){
//     if(lowexp>expenses[i]){
//         lowexp=expenses[i];
//     }
// }
// console.log("Lowest expense : ",lowexp);


// //num of month expense that exceeds 15000
// for(let i=0;i<expenses.length;i++){
//     if(expenses[i]>15000){
//         flag++
//     }
// }
// console.log("Num of month : ",flag);



// // average of expenses

// var expenses=[12000,13000,14000,15000,11000,25000,17000]
// var sum=0;
// var avg=0;
// for(let i=0;i<expenses.length;i++){
//     sum=sum+expenses[i];
//     avg=sum/expenses.length;
// }
// console.log("Average of expenses : ",avg);





