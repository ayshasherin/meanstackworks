//bank
//authenticat
//fundTransfer()
//balanceEnquiry()



class Bank {
    session = {}  //session object is created here bcoz login cheythittulla user nte accno user key il 
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

    getAccountDetails() {
        return this.accounts
    }

    validateAccountNumber(accno) {

        //     // if(accno in this.accounts){
        //     //     true
        //     // }
        //     // else{
        //     //     false
        //     // }

        return accno in this.accounts ? true : false


    }

    //or

    // validateAccountNumber=(accno)=>accno in this.accounts?true:false                  






    authenticate(accno, password) {
        if (this.validateAccountNumber(accno)) {
            let pwd = this.accounts[accno].password
            if (pwd == password) {
                this.session["user"] = accno
                //session={"user":1002}
                return 1
            }
            else {
                return -1
            }
        }
        else {
            return 0
        }
    }


    balanceEnquiry() {
        let user = this.session["user"]
        return this.accounts[user].balance
    }


    fundTransfer(to_accno, amount) {
        if (this.validateAccountNumber(to_accno)) {
            let user = this.session["user"]  //1002
            let bal = this.balanceEnquiry()
            if (bal > amount) {


                //debit
                this.accounts[user].balance -= amount


                //credit
                this.accounts[to_accno].balance += amount


                //{to:to_accno,amount:amount}  to be pushed    
                this.accounts[user].transactions.push({ to: to_accno, amount: amount })
                console.log(this.accounts[user]);


            }


            else {
                console.log("failed insufficient balance");
            }

        }


        else {
            console.log("invalid account number");

        }

    }


    paymentHistory() {
        let user = this.session["user"]
        console.log(this.accounts[user].transactions);


    }



    getTransactions(){
        let transaction_history=[]
        for(let account in this.accounts){
            transaction_history.push(this.accounts[account].transactions)
        }
        return transaction_history
    }


    creditTransaction() {
        let transactions=this.getTransactions()
            for(let trans of transactions){
                for(let tran of trans){
                    if(tran.to==this.session["user"]){
                        console.log(tran);
                    }
                }
            }
        

    }

}



var obj = new Bank()
var user = obj.authenticate(1002, "usertwo")
console.log(obj.balanceEnquiry())
obj.fundTransfer(1001, 5000)
obj.creditTransaction()















