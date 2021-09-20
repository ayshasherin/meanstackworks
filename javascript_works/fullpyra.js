
    let row=5;
    let str="";
    for(let i=1;i<=row;i++){
        for(let j=1;j<=row;j++){
            str=str+" ";
        }
        i--;
        for(let k=1;k<=i;k++){
            str=str+"* ";
        }
        str=str+"\n";
    }
    console.log(str);







// function fullPyramid(row){
//     let n=row;
//     let str="";
//     for(let i=1;i<=row;i++){
//         for(let j=1;j<=n;j++){
//             str=str+" ";
//         }
//         n--;
//         for(let k=1;k<=i;k++){
//             str=str+"* ";
//         }
//         str=str+"\n";
//     }
//     console.log(str);
// }
// console.log(fullPyramid(5));