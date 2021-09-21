var arr1=[10,20,21,22];
var arr2=[11,12,20,21];
var op=[];
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            op.push(arr1[i])
        }
    }
}
console.log(op);




