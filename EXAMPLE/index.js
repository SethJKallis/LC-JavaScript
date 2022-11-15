// FACTORY FUNCTIONS
function classMember(name, surname){
    return{
        name: name,
        surname: surname,
        display(){
            console.log(`Name: ${name}\nSurname: ${surname}`)
        }
}
}

let memberOne = classMember("Seth", "Kallis")
memberOne.display()

console.log('--------------')

function dogs(breed,gender,age){
    return{
        breed: breed,
        gender: gender,
        age: age,
        displayDogs(){
            console.log(`Breed: ${breed}\nGender: ${gender}\nAge: ${age}`)
        }
    }
}

let dogOne = dogs("PitBull", `Male`, 5)
dogOne.displayDogs()

console.log('--------------')


// CONSTRUCTOR FUNCTION makes use of this. and returns this.
// this. is an object
// MUST MAKE USE OF (new) KEYWORD
function fruitSalad(firstFruit, secondFruit, thirdFruit){
    this.firstFruit = firstFruit,
    this.secondFruit = secondFruit,
    this.thirdFruit = thirdFruit
}

let salad = new fruitSalad("Apple", "Orange", "Banana")
console.log(`First Fruit: ${salad.firstFruit}\nSecond Fruit: ${salad.secondFruit}\nThird Fruit: ${salad.thirdFruit}`);

console.log('--------------')

function Details(firstName, surname, email){
    this.firstName = firstName,
    this.surname = surname,
    this.email = email,
    this.coding = () => {
        console.log("This is within the function")
    }
}

Details.prototype.display= () =>{
    console.log(`Name: ${thisPerson.firstName}\nSurname: ${thisPerson.surname}\nEmail: ${thisPerson.email}`)
}

let thisPerson = new Details("Seth", "Kallis", "kallisseth@gmail.com")

console.table(thisPerson)
thisPerson.display()
thisPerson.coding()

console.log('--------------')

// let banana = ("b" + "a" + + "a" + "a").toLowerCase()
// console.log(banana)



























// function vehicles(make, year, color){
//     return{
//         make : make,
//         year : year,
//         color : color,
//         display(){
//             console.log(`Make: ${make}\nYear: ${year}\nColor: ${color}`)
//         },
//         rev() {
//             console.log("Vroom! Vroom!");
//         }
//     }
// }

// let BMW = vehicles("M3", 2016, "Black")
// BMW.display()

// function vehicles(config){
//     return{
//         make : config.make,
//         year : config.year,
//         color : config.color,
//         displayInfo(){
//             console.log(`Make: ${config.make}\nYear: ${config.year}\nColor: ${config.color}`)
//         },
//         displayCar(){
//             if (config.color == 'blue') {
//                 console.log('🚙')
//             }else if (config.color == 'red') {
//                 console.log('🚗');             
//             }else if (config.color == 'white') {
//                 console.log('🚓')
//             } else {
//                 console.log('👲')
//             } 
//         },
//         rev() {
//             if (config.make == "no car") {
//                 console.log("🎵Better run, better run! Outrun my Gun!🎵");
//             } else {
//                 console.log("Vroom! Vroom!");
//             }
//         }
//     }
// }

// let BMW = vehicles({
//     make: "M3",
//     year:  2016,
//     color: "red"
// })
// BMW.displayInfo()
// BMW.displayCar()
// BMW.rev()

// console.log('---------------');

// let nissan = vehicles({
//     make: "GTR",
//     year: 2014,
//     color: "blue"
// })
// nissan.displayInfo()
// nissan.displayCar()
// nissan.rev()

// console.log('---------------');

// let subaru = vehicles({
//     make: "Impreza",
//     year: 2014,
//     color: "white"
// })
// subaru.displayInfo()
// subaru.displayCar()
// subaru.rev()

// console.log('---------------');


// let man = vehicles({
//     make: "no car",
//     year: 1200 + "BC",
//     color: "asian",
// })

// man.displayInfo()
// man.displayCar()
// man.rev()

// console.log('---------------');



