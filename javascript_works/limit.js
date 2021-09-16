var num=3,low=8,upp=27;
for(let i=1;i<=upp;i++){  //i=1   i=2   i=3
    let res=i**num;   //res=27
    if(res>upp){
        break;
    }
    if((res>=low) & (res<=upp)){   //8    27
        console.log(i);   //2,3
    }
}


