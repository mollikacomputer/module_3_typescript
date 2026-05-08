//Module 3.6
// getter
// setter
// this is functional way
class BankAccount{
    public readonly userId:number;
    public userName:string;
    private userBalance:number;
    constructor(userId:number, userName:string, userBalance:number){
        this.userId = userId;
        this.userName= userName;
        this.userBalance= userBalance;
    }

    // setter use করে করতে চাই set 
    set addBalance(amount:number){
        this.userBalance = this.userBalance =this.userBalance + amount;
    }
    //getter use করে গেট করতে চাই
    get getBalance(){
        return this.userBalance;
    }

}

const mezbaBaiAccount= new BankAccount(111, "Mejba", 20);
mezbaBaiAccount.addBalance = 100;
// mezbaBaiAccount.addBalance = 100;
mezbaBaiAccount.addBalance = 100;
mezbaBaiAccount.addBalance = 100;
console.log(mezbaBaiAccount);
console.log(mezbaBaiAccount.getBalance);





// class BankAccount{
//     public readonly userId:number;
//     public userName:string;
//     private userBalance:number;
//     constructor(userId:number, userName:string, userBalance:number){
//         this.userId = userId;
//         this.userName= userName;
//         this.userBalance= userBalance;
//     }
//     // balance set করতেছে
//     addBalance(balance:number){
//       return  this.userBalance = this.userBalance +balance
//     }
//     // get
//     getBalance(){
//         return this.userBalance;
//     }
// }

// const mezbaBaiAccount= new BankAccount(111, "Mejba", 20);
// mezbaBaiAccount.addBalance(500);
// mezbaBaiAccount.addBalance(100);
// mezbaBaiAccount.addBalance(200);
// console.log(mezbaBaiAccount.getBalance());