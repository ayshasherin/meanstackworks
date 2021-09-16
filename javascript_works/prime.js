// var num=4;
// var flag=0;
// for(let i=2;i<num;i++){
//     if(num%i==0){
//         flag+=1;
//         break;
//     }
// }
// if(flag==0){
//     console.log("prime");
// }
// else{
//     console.log("not prime");
// }



var num=7;
var flag=0;
for(let i=2;i<num;i++){
    if(num%i==0){
        flag+=1;
        break;
    }
}
console.log(flag==0?"prime":"not prime");

// num=2
// 2+22=24  print only 24
// num=3
// 3+33+333=369
// num=4
