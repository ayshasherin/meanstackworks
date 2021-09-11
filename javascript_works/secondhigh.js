var num1=10,num2=20,num3=30;
if((num1>num2)^(num1>num3)){
    console.log(`${num1} is the second highest number`);
}
else if((num2>num1)^(num2>num3)){
    console.log(`${num2} is the second highest number`);
}
else if((num3>num1)^(num3>num2)){
    console.log(`${num3} is the second highest number`);
}
else{
    console.log("none of these");
}