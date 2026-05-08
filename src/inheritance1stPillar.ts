// module 3.2
// inheritance
class Parent{
        name:string;
    age:number;
    address:string;
    constructor(name:string, age:number, address:string){
        this.name = name
        this.age = age
        this.address = address
    }
    // function method with parameter
    kotoGhontaGumay=(numberOfHour:number)=>{
        console.log(`${this.name} ${numberOfHour} Ghonta Gumay, Age: ${this.age}, Address: ${this.address}`)
    }
}
// এখানে প্যারেন্ট থেকে সকল প্রপার্টি ও মেথড নিয়া নেয়  ইনহারিটেন্স
class Student extends Parent {}

    // teacher method

class Teacher extends Parent{
    subject:string;
    constructor(name:string, subject:string, age:number, address:string,){
        super(name, age, address)
        this.subject = subject
    }
    // method
    banglaTeacherClassTime =(numberOfHour:number)=>{
        const result = (`${this.name}, Subject: ${this.subject}, ${numberOfHour} Ghonta Class Nay, Tar Age: ${this.age}, Address:${this.address}`)    
        return result;
    }
}

const mrFakibaj = new Student("Mr Fakibaj", 18, "Madaripur");
mrFakibaj.kotoGhontaGumay(15);
// another
const teacher = new Teacher("Rajesh Kumar","Bangla",45, "Chenney India");
console.log(teacher.banglaTeacherClassTime(2));
