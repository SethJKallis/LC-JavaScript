// OBJECT BASICS
let person = {
    name : `Seth`,
    surname : `Kallis`,
    age : 22
}
// console.log(person.name)
// console.log(person[`surname`])

person.email = `email@gmail.com`
// console.log(person)




// FACTORY FUNCTION
// A function that returns an object.
// A template for instances

// DISPLAYING A USERS NAME AND SURNAME
function userDetails(firstName, lastName){
    return{
        firstName : firstName,
        lastName : lastName, 
        display(){
            console.log(`Name: ${firstName}\nSurname: ${lastName}`)
        }
        
}
}

// CREATE AN INSTANCE
// 

let person1 = userDetails(`Joel`, `Something`);
person1.firstName = `Seth`;
person1.display();

console.log(`=================`)

const person2 = userDetails(`Seth`, `Kallis`);
person2.display()