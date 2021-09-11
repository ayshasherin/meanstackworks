var num1=10,num2=20,num3=30;
if((num1>num2) & (num1>num3)){
    console.log(`${num1} is highest`);//10>20   10>30
}
else if((num2>num1) & (num2>num3)){
    console.log(`${num2} is highest`);//20>10   20>30
}
else if((num3>num1) & (num3>num2)){
    console.log(`${num3} is highest`);//30>10    30>20
}
else{
    console.log("three numbers are equal");
}