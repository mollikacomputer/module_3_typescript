// module 3.5
// access modifier >>> readonly
class BankAccount{
    public readonly userId:number;
    public userName:string;
    private userBalance:number;
    constructor(userId:number, userName:string, userBalance:number){
        this.userId = userId;
        this.userName= userName;
        this.userBalance= userBalance;
    }
    addBalance(balance:number){
        this.userBalance = this.userBalance +balance
    }
}

class StudentBankAccount extends BankAccount{
    test(){
        this.
    }
}
const mezbaBaiAccount= new BankAccount(111, "Mejba", 20);
mezbaBaiAccount.addBalance(500);
mezbaBaiAccount.addBalance(100);
mezbaBaiAccount.addBalance(200);
console.log(mezbaBaiAccount);