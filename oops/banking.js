// class Bank{
//     createAccount(p_name,acno,ac_type,min_balance){
//         this.p_name=p_name
//         this.acno=acno
//         this.ac_type=ac_type
//         this.balance=min_balance
//     }
//     deposit(amount){
//         this.balance += amount
//         console.log(`your account ${this.acno} has been credited with amount ${amount} available balance is ${this.balance}`);
//     }
//     withdrawal(amount){
//         if(this.balance > amount){
//             this.balance -= amount
//             console.log(`your account ${this.acno} has been debited with amount ${amount} available balance is ${this.balance}`);
//         }
//         else{
//             console.log("transaction failed insufficient balance");
//         }

//     }
// }

// var obj1=new Bank()
// obj1.createAccount("kim taehyung",1000,"savings",3000)
// obj1.withdrawal(10000)
// obj1.deposit(3000)                    







//   ========================================================================================================================================






//bank
//authenticat
//fundTransfer()
//balanceEnquiry()



class Bank{
    session={}  //session object is created here bcoz login cheythittulla user nte accno user key il 
                      //add cheyyan vendittaan then only login cheytha user nte maathram balance 
                          //kittullu allengil nmmlkk aarude venelum balanace check cheyyaam which is not possible in original bank cases
      accounts = {
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
  
      getAccountDetails(){
          return this.accounts
      }
  
      validateAccountNumber(accno){
  
      //     // if(accno in this.accounts){
      //     //     true
      //     // }
      //     // else{
      //     //     false
      //     // }
  
          return accno in this.accounts?true:false
  
  
      }
  
                           //or
  
        // validateAccountNumber=(accno)=>accno in this.accounts?true:false                  
  
  
      // authenticate(accno,password){
      //     //validate account number ie: check if account number is there
      //     if(accno in this.accounts){
      //         let pwd=this.accounts[accno].password
      //         if(pwd==password){
      //             this.session["user"]=accno    //adding a key 'user' in session object and initializing value as accno
      //             // session={üser:accno}
      //             console.log(this.session)
      //             //console.log("login succes");
      //             return 1;    //login success
      //         }
  
      //         else{
      //             //console.log("invalid password")
      //             return 0;    //invalid password
      //         }
      //         //return pwd==password?1:0   //here return given to reurn the value as 1 or 0 ie; return cheyyumbol nmml vere console.log cheyyanam
      //     } 
      //     else{
      //         //console.log("invalid account number");
      //         return -1;   // -1 for invalid account number
      //     }
      // }
  
  
                                 //or
      authenticate(accno,password){
          if(this.validateAccountNumber(accno)){
              let pwd=this.account[accno].password
              if(pwd==password){
                  this.session["user"]=accno
                  //session={"user":1002}
                  return 1
              }
              else{
                  return -1
              }
          }
          else{
              return 0
          }
      }   
      
      
      balanceEnquiry(){
          let user=this.session["user"]
          return this.accounts[user].balance
      }      
  
  
      fundTransfer(to_accno,amount){
          if(this.validateAccountNumber(to_accno)){
              let user=this.session["user"]  //1002
              let bal=this.balanceEnquiry()
              if(bal>amount){
                  //debit
                  this.accounts[user].balance -= amount
  
                  //credit
                  this.accounts[user].balance += amount
  
  
                  //{to:to_accno,amount:amount}  to be pushed    
                  this.accounts[user].transactions.push({to:to_accno,amount:amount})
                  console.log(this.accounts[user]);       
               }
               else{
                   console.log("insufficient balance");
               }
          }
  
      }
          paymentHistory(){
              let user=this.session["user"]
              console.log(this.accounts[user].transactions);
          
      
      }  
  
  }
  
  
  
  var obj = new Bank()
  var user = obj.authenticate(1002, "usertwo")
  console.log(obj.balanceEnquiry());
  obj.fundTransfer(1001,5000)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      // balanceEnquiry(accno){
      //     // return this.accounts[accno].balance
      //     // session={üser:accno}
      //     let balance=this.accounts[this.session["user"]].balance
      //     console.log(balance);
      // }
  
      // fundTransfer(to_accno,amount){
  
      //     let user=this.accounts[this.session["user"]]  //login cheythittulla user nte details store cheyyen in user
  
      //    if(to_accno in this.accounts){
  
      //         if(user["balance"] > amount){
  
      //             this.accounts[user].balance -= amount
      //             this.accounts[to_accno].balance += amount
      //             this.accounts[user].transactions.push({to:to_accno,amount:amount})
      //         }
      //         else{
      //                console.log("transaction failed insufficient balance");
      //             }
      //     }
  
      //     else{
      //         console.log("invalid account number");
      //     }
  
      // }
  
  
  // var obj=new Bank()
  // var user=obj.authenticate(1001,"userone")
  // //user  1,-1,0
  // console.log(user==1?"login seccess":user==-1?"invalid account number":"invalid password");
  // //console.log(user);
  // //console.log(obj.balanceEnquiry(1002));     this will print any of the account number's balance but in this scenario 
  //                                                         //only the authenticated account number's balance should be printed
  // obj.balanceEnquiry()
  // obj.fundTransfer(1003,2000)