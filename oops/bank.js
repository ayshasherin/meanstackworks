class Bank{
    createAccount(p_name,acno,ac_type,min_balance){
        this.p_name=p_name
        this.acno=acno
        this.ac_type=ac_type
        this.balance=min_balance
    }
    deposit(amount){
        this.balance += amount
        console.log(`your account ${this.acno} has been credited with amount ${amount} available balance is ${this.balance}`);
    }
    withdrawal(amount){
        if(this.balance > amount){
            this.balance -= amount
            console.log(`your account ${this.acno} has been debited with amount ${amount} available balance is ${this.balance}`);
        }
        else{
            console.log("transaction failed insufficient balance");
        }

    }
}

var obj1=new Bank()
obj1.createAccount("kim taehyung",1000,"savings",3000)
obj1.withdrawal(10000)
obj1.deposit(3000)                    
