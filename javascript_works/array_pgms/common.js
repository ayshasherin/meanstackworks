// var arr1=[10,20,21,22];
// var arr2=[11,12,20,21];
// var count=0;
// var op=[];
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             op.push(arr1[i])
//         }
//         count++
//     }
// }
// console.log(op);
// console.log(count);


// var arr1=[10,20,21,22];
// var arr2=[11,12,20,21];
// var count=0;
// for(let num1 of arr1){
//     //num1=10
//     for(let num2 of arr2){
//         //num2=20
//         if(num1=num2){
//             console.log("common element : ",num1);
//         }
//         count++;
//     }
// }
// console.log(count);

//special algorithm to decrease iteration and reduce time
var arr1 = [10, 11, 12, 20, 21]
var arr2 = [20, 21, 22, 23, 24]
var pos1 = 0, pos2 = 0;
var count=0;
arr1.sort((num1, num2) => num1 - num2);
arr2.sort((num1, num2) => num1 - num2);
//here two array size is equal so instead of two for loops use one while loop to iterate from 0-4
while (pos1 < arr1.length & pos2 < arr2.length) {   //0<5
    if (arr1[pos1] == arr2[pos2]) {
        console.log(arr1[pos1]);
        pos1++;
        pos2++;
    }
    else if (arr1[pos1] < arr2[pos2]) {
        pos1++;
    }
    else if (arr1[pos1] > arr2[pos2]) {
        pos2++;
    }
    count++;
}
console.log("iteration",count);

