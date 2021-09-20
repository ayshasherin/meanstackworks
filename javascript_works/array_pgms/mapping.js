// var arr=[2,3,4,6,7,8]   //   o/p  [1,2,3,7,8,9]
// for(let num of arr){ //2
//     if(num<5){
//         console.log(num-1);
//     }
//     else{
//         console.log(num+1);
//     }
// }

// to print output as an array
// var arr=[2,3,4,6,7,8]   //   o/p  [1,2,3,7,8,9]
// var op=[]
// for(let num of arr){ //2
//     if(num<5){
//        op.push((num-1))
//     }
//     else{
//         op.push(num+1)
//     }
// }
// console.log(op);



// var arr=[2,3,4,6,5,7,8]
// var op=[]   //   o/p  [1,2,3,5,7,8,9]
// for(let num of arr){ //2
//     if(num<5){
//         op.push((num-1))
//     }
//     else if(num>5){
//         op.push((num+1))
//     }
//     else{
//         op.push((num))
//     }
// }
// console.log(op);


var arr=[2,3,4,6,5,7,8]
var op=[]   //   o/p  [1,2,3,5,7,8,9]
for(let num of arr){ //2
    num<5?op.push(num-1):num>5?op.push(num+1):op.push(num)
}
console.log(op);