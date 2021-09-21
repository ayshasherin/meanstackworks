// 0 1 2 3
for(let row=0;row<4;row++){
    // row=1  1<4
    let str=""; //str=""
    for(let space=0;space<(4-row-1);space++){
        str+=" "
    }
    for(let col=0;col<(row+1);col++){
        str+="* "
    }
    console.log(str);
}







