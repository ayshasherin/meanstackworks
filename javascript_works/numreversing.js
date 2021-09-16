// var num=123;
// var res="";

// while(num!=0){
//     let digit=num%10;
//     console.log(digit);
//     res+=digit;
//     num=Math.floor(num/10);
// }    
// console.log(res);                      



var num=123;
var res=0;

while(num!=0){
    let digit=num%10;
    res=(res*10)+digit
    console.log(digit);
    num=Math.floor(num/10);
}    
console.log(res);                      