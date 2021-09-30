var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",5000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

// sort the users wrt balance
accounts.sort((acc1,acc2)=>acc2[3]-acc1[3])
console.log(accounts);


//print details of acno=1004
var acc=accounts.filter(ac=>ac[0]==1004)
console.log(acc);

// is there any person with balance < 2000
var person_balance=accounts.some(acc=>acc[3]<2000)
console.log(person_balance);


// print name of users with in_active account
var ac=accounts.some(acc=>acc[2]=="in_active")
console.log(ac);


// print details of user with max balance
var account=accounts.reduce((acc1,acc2)=>acc1[3]>acc2[3]?acc1:acc2)
console.log(account);


// print details of users with acc_type as savings and balance > 25000
var accou=accounts.filter(acc=>acc[2]=="savings" & acc[3]>25000)     
console.log(accou);        
