var num=123;
res=0;
digit=0;
while(num!=0){
    digit=num%10;
    res=(res*10)+digit
    num=Math.floor(num/10)
}
console.log(res);                           