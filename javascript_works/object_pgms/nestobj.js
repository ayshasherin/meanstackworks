// var accounts={
//     1001:{acno:1001,password:"userone",balance:5000},
//     1002:{acno:1002,password:"usertwo",balance:7000},
//     1003:{acno:1003,password:"userthree",balance:8000},
//     1004:{acno:1001,password:"userone",balance:9000},
    
// }


// // print 1001 account balance only
// // console.log(accounts[1001]["balance"]);

// // authenticate
// // 1001,userone    successfull
// // 1003,userfour   invalid password
// //acc=1002

// function login(accno,password){
//     if(accno in accounts){
//         let pwd=accounts[accno].password
//         if(pwd==password){
//             console.log("login successfull");
//         }
//         else{
//             console.log("invalid password");
//         }
//     }
//     else{
//         console.log("invalid account number");
//     }
// }
// console.log(login(1001,"userone"));




var accounts = {
    1001: {
        acno: 1001, password: "userone", balance: 5000, transactions:
            [
                { to: 1002, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1002: {
        acno: 1002, password: "usertwo", balance: 7000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1003: {
        acno: 1003, password: "userthree", balance: 8000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1002, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1004: {
        acno: 1001, password: "userone", balance: 9000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },

}
// console.log(accounts[1001]["transactions"]);

//print accno=1001 transactions greater than rs 500
var res=accounts[1001].transactions.filter(transaction=>transaction.amount>500)
console.log(res);



// print country name and population
// print coun try name and currency symbol



