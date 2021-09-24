var name="arun"
// function isStartWithA(name){
//     if(name[0]=="a"){  //instead of this code we can use arrow function as following
//         return true
//     }
//     else{
//         return false
//     }
// }using ternary operator:    name[0]=="a"?true:false
var isStartWithA=(name)=>name[0]=="a"?true:false
console.log(isStartWithA(name));



// function isEven(num){  //this can be written in arrow function as following
//     if(num%2==0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(isEven(2));
var isEven=(num)=>num%2==0?true:false
console.log(isEven(2));

var isOdd=(num)=>num%2==0?false:true
console.log(isEven(2));


//program to always subtract lowest value from highest
// function sub(num1,num2){
//     if(num1>num2){
//         return num1-num2       //normally using function we write this program like this but by usin arrow 
                                      //function we can write as follows
//     }
//     else{
//         return num2-num1
//     }
// }
// console.log(sub(1,2));
var sub=(num1,num2)=>num1>num2?num1-num2:num2-num1
console.log(sub(50,100));


//print largest among two numbers
var largestAmongTwo=(num1,num2)=>num1>num2?num1:num2
console.log(largestAmongTwo(1,2));

