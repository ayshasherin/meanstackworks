var arr=[10,11,12,13,14,11];
var element=12;
var flag=0;
for(let num of arr){
    if(num==element){
        flag+=1;
    }  
    
}

if(flag==0){
    console.log("element not found");
}
else{
    console.log("element found");
}



