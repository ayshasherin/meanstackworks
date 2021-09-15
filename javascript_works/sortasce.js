// var num1=10,num2=20,num3=30;
// if(num1<num2<num3){
//     console.log(`${num1},${num2},${num3}`);
// }
// else if(num2<num3<num2){
//     console.log(`${num2},${num3},${num1}`);
// }
// else if(num3<num1<num2){
//     console.log(`${num3},${num1},${num2}`);
// }
// else{
//     console.log("none of these");
// }


var a=2,b=0,c=-2;
if((a>b) && (a>c)){
        if(b>c){
            console.log(c,`,`,b,`,`,a);
        }
        else
        {
            console.log(b,`,`,c,`,`,a);
        }
}
else if((b>a) && (b>c)){
        if(a>c)
        {
             console.log(c,`,`,a,`,`,b);
        }
        else
        {
             console.log(a,`,`,c,`,`,b);
        }
}
else if((c>a) && (c>b)){
        if(a>b)
        {
            console.log(b,`,`,a,`,`,c);
        }
        else
        {
            console.log(a,`,`,b,`,`,c);
        }
}
