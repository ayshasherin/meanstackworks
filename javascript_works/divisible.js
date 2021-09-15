// var num=15;
// if(num%15==0){
//     console.log("FIZBUZ");
// }
// else if(num%5==0){
//     console.log("BUZ");
// }
// else if(num%3==0){
//     console.log("FIZ");
// }
// else{
//     console.log(num,"not divisible by 3 or 5");
// }

var num=15;
var res="";//res=""
if(num%3==0){ //15%3==0
    res+="fiz" //res=""+"fiz"
}
if(num%5==0){  //15%5==0
      //res=fiz+"buz"
    res+="buz"
}
console.log(res);  //fizbuz