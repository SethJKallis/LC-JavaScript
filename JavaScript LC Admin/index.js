// Objects - store data in-depth - composite / complex data types
// Key value pairs

let course = {
    title : "Learning JavaScript",
    lessons : 16,
    creator : "Per Harold Borgen",
    length : 63,
    levels : 2,
    isFree : true,
    tags : ["HTML", "CSS", "JavaSCript"]
}

// for(i = 0; i < course.tags.length; i++)



// DOT NOTATION & BRACKET NOTATION
// console.log(course.tags)
// console.log(course["tags"])
////////////////////////////////////////////////////////////////
// Create an object that represents an airbnb castle listing
// It should contain at least one boolean, one string, and one array
// Log out at least two of the keys using dot notation

let airbnbCastle = {
    title : "Live like a King in my Castle",
    isAvailable : true,
    images : ["img/castle1.png", "img/castle2.png"],
    price : 2000
}

////////////////////////////////////////////////////////////////

// LOGICAL OPERATORS
// AND (&&) OPERATOR

let hasCompleted = true;
let givesCertificate = true;

if(hasCompleted === true && generateCertificate === true){
    generateCertificate()
}

function generateCertificate(){
    // console.log("Generating Certificate ... ")
}

////////////////////////////////////////////////////////////////

let hasSolvedProblem = false;
let hasHintsLeft = false;


// if(hasSolvedProblem === false && hasHintsLeft === false){
//     showSolution()
// }


// function showSolution(){
//     console.log("Showing the solution....")
// }

/////////////////////////////////////////////////////////////////

// OR (||) OPERATOR

// Create two boolean variables, likesDocumentaries and likesStartups.
// Use an OR statement to call recommendMovie if either of those variables are true.

let likesDocumentaries = true;
let likesStartups = false;

// if(likesDocumentaries === true || likesStartups === true){
//     recommendMovie()
// }

// function recommendMovie(){
    // console.log("Hey, check out this new file we think you will like!")
// }

//////////////////////////////////////////////////////////////////

// GENERATING A RANDOM NUMBER

let dice = Math.floor(Math.random()*6)+1
console.log(dice)

//////////////////////////////////////////////////////////////////

// CHALLENGES


// Create a person object that  contains three keys, name, age and country
// Use yourself as an example to set the values for name, age and country
// Create a function, logData(), that uses the person object to create a string in the following format:
// "Per is 35 years old and lives in Norway"
// call the logData function to verify that it works


let person = {
    name: "Seth",
    age: 22,
    country: "South Africa"
}

function logData(){
    console.log(`${person.name} is ${person.age} years old and lives in ${person.country}`)
}

// logData()

/////////////////////////////////////////////////////////////////////

function logData2(name,age,country){
    return{
        name: name,
        age: age,
        country: country,
        display(){
            console.log(`${name} is ${age} years old and lives in ${country}`)
        }
    }
}

let person1 = logData2("Seth",22,"South Africa")
// person1.display()

console.log("---------------")

let person2 = logData2("Spha",21, "Cape Town")
// person2.display()

////////////////////////////////////////////////////////////////////

// CHALLENGE 2

let age = 70;

// less than 6 years old -> free
// 6 to 17 years old -> child discount
// 18 to 26 years old -> student Discount
// 27 to 66 years old -> full price
// over 66 years old -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount the passenger will get based on the value of the age variable

function discount(){
if(age < 6){
    return console.log("Free")
}
else if(age < 18){
    return console.log("Child Discount")
}
else if(age < 27){
    return console.log("Student Discount")
}
else if(age < 67){
    return console.log("Full Price")
}
else{
    return console.log("Senior Citizen Discount")
}
}
discount()






























// function generateCertificate(){
//     if(hasCompleted = true){
//         if (givesCertificate = true){

//         }

//     }


//     console.log("Generating Certificate. . . ")
// }
generateCertificate()