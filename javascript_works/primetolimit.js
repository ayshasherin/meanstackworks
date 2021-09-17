var low=5,upp=17;
//4,,,,,,,,,,,,,,,25
for(let i=low;i<=upp;i++){   //   i=5   i=6
    let flag=0;
    for(let j=2;j<i;j++){   //   j=2
        if(i%j==0){   //    5%2==0    5%3==0    6%2==0
            flag++;   //   1
            break;
        }
    }
    if(flag==0){   //1==0
        console.log(i);   //   5
    }
    
}