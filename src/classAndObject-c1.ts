// // module 3.1
// // class and object
// // 1. system details
// class Animal{
//     name:string;
//     species:string;
//     sound:string;
//     constructor(name:string, species:string, sound:string){
//         this.name = name,
//         this.species = species,
//         this.sound = sound
//     }
//     // method for function
//     makeSound(){
//         console.log(`${this.name} is making ${this.sound}`);
//     }
// }
// const dog = new Animal("dog dog dogesh", "Dog", "Ghew Ghew");
// const cat = new Animal ("Cat Vai", "Cat", "mew mew");
// cat.makeSound();
// dog.makeSound();

//2. system parameter properties
not working this code
class Animal{
    constructor( public name:string, public species:string, public sound:string){
    }
    // method for function
    makeSound=()=>{
        console.log(`${this.name} is making ${this.sound}`);
    }
}
const cat = new Animal ("Cat Vai", "Cat", "mew mew");
cat.makeSound();

