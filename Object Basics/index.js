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
// A feature that we need to implement
// Place intended code inside the return{}

// DISPLAYING A USERS NAME AND SURNAME
function userDetails(firstName, lastName, age){
    return{
        firstName : firstName,
        lastName : lastName, 
        age : age,
        display(){
            console.log(`Name: ${firstName}\nSurname: ${lastName}\nAge: ${age}`)
        }
}
}


// ******BACK-STICK TO MAKE USE OF A PLACEHOLDER IN A STRING******

// CREATE AN INSTANCE

let person1 = userDetails(`Joel`, `Something`, 30);
person1.display();

console.log(`=================`)

const person2 = userDetails(`Seth`, `Kallis`, 22);
person2.display()