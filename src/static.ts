//module 3.7
// this is static way
class Counter{
    static count:number=0;
    // method এখানে static লিখলে  const instance = new Counter(); লিখতে হবে না
    static increment(){
        return (Counter.count = Counter.count +1);
    }
    // এখানে static লিখলে  const instance = new Counter(); লিখতে হবে না
    static decrement(){
        return (Counter.count = Counter.count-1);
    }
}
console.log(Counter.increment());

// // this is dynamic system
// class Counter{
//     count:number=0;
//     // method
//     increment(){
//         return (this.count = this.count +1);
//     }
//     decrement(){
//         return (this.count = this.count-1);
//     }
// }
// const instance1 = new Counter();
// console.log(instance1.increment());
