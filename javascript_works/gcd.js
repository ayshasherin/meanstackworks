var num1=14,num2=21,gcd=0;
for(let i=1;i<=num1 & i<=num2;i++){
    if(num1%i==0 & num2%i==0){
        gcd=i;
    }
}
console.log(gcd);


// var num1=14;
// var num2=21;
// while(num1!=num2){
//     if(num1>num2){
//         num1 -= num2;
//     }
//     else{
//         num2 -= num1;
//     }
// }
// console.log(num1);