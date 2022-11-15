// CONSTRUCTOR FUNCTION
function personDetails(name, surname){
    this.name = name;
    this.surname = surname;
}
let person1 = new personDetails('Joel','Something')
console.log(`Name: ${person1.name}\nSurname: ${person1.surname}`)
// this. to create a property