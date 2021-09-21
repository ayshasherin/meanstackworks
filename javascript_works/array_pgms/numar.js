var arr=[2,4,6,3]    // o/p   [13,11,9,12]
// at first we are going to take the total sum of the array that is  
var total=0
for(let num of arr){
    total+=num
}
var op=[]  //ini array le oro elemnt ne iterate cheyyanam
// ie; total=15   15-2=13   15-4=11   15-6=9   15-3=12
for(let num of arr){
    let res=total-num
    op.push(res)
}
console.log(op);
