// module 3.4 --শেষের দিকের অপসন
//instance of type guard or type narrowing

class Person{
    name:string;
    
    constructor(name:string){
        this.name = name;
    }
}

class Student extends Person{
    constructor(name:string){
        super(name)
    }

    // method
    doStudy=(numbersOfHour:number)=>{
        console.log(`${this.name} doinik ${numbersOfHour} Ghonta gumay`)
    }
}

class Teacher extends Person{
    constructor(name:string){
        super(name)
    }

        // method
    takeClass=(numbersOfHour:number)=>{
        console.log(`${this.name} doinik ${numbersOfHour} Ghonta class Nay`)
    }
}
// function guard
const isStudent =(user:Person)=>{
    return user instanceof Student;// user is student
}
const isTeacher =(user:Person)=>{
    return user instanceof Teacher;// user is teacher
}

const getUserInfo =(user:Person)=>{


    if(isStudent(user)){
        user.doStudy(10)
    }else if(isTeacher(user)){
        user.takeClass(2)
    }
}

// const student1 = new Student("Mr. student");
const teacher1 = new Teacher("Mr. teacher");

// getUserInfo(student1);
getUserInfo(teacher1);







// class Person{
//     name:string;
    
//     constructor(name:string){
//         this.name = name;
//     }
// }

// class Student extends Person{
//     constructor(name:string){
//         super(name)
//     }

//     // method
//     doStudy=(numbersOfHour:number)=>{
//         console.log(`${this.name} doinik ${numbersOfHour} Ghonta gumay`)
//     }
// }

// class Teacher extends Person{
//     constructor(name:string){
//         super(name)
//     }

//         // method
//     takeClass=(numbersOfHour:number)=>{
//         console.log(`${this.name} doinik ${numbersOfHour} Ghonta class Nay`)
//     }
// }

// const getUserInfo =(user:Person)=>{
//     if(user instanceof Student){
//         user.doStudy(10)
//     }else if(user instanceof Teacher){
//         user.takeClass(2)
//     }
// }

// const student1 = new Student("Mr. student");
// const teacher1 = new Teacher("Mr. teacher");

// getUserInfo(student1);
// getUserInfo(teacher1);