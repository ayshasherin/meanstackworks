function add(num1,num2){
    return num1+num2;
}



function mul(num1,num2){
    return num1*num2;
}



function factorial(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    return fact;
}
console.log(add(5,2));
console.log(mul(5,2));
console.log(factorial(5));