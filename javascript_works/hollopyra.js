for(let row=0;row<=3;row++){
    let str="";
    for(let col=0;col<=6;col++){
        if(row==3|col+row==3|col-row==3){
            str+="*";
        }
        else{
            str+=" ";
        }
    }
    console.log(str);
}