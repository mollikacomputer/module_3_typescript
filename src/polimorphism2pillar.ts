//module 3.8
// 2/3 বার দেখা দরকার কম বুঝেছি
class Person{
getSleep(){
    console.log(`I normal happy person, I sleep for 8 hours`);
}
}

class Student extends Person{
    getSleep(){
       console.log(`I am student. I sleep 7 hrs`);
    }
}

class NextLevelDeveloper extends Person{
    getSleep(){
        console.log(` I am next level developer. I sleep for 6 hrs`)
    }
}
const getSleepingHours = (param:Person)=>{
    param.getSleep();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();