// 2+22=
// 3+33+333=
// 4+44+444+4444=




var num=2;
var res=0,sum=0;

for(let i=1;i<=num;i++){   //i=1   1<=2   2  2<=2
    res=res*10+num;   //res==0*10+2=2   res=2*10+2=22
    sum=sum+res;
}
console.log(sum);


//  eval()   to evaluate an expression
//  typeof() variable type ariyaan

// var expr="10+20-2*3/2"
// console.log(eval(expr));