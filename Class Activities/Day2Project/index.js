// let firstName = prompt('Enter Your First Name: ')
// let lastName = prompt('Enter Your Last Name: ')
// let salary = prompt('Enter Your Salary: R')
// let bonus = 500;
// let displayEL = document.getElementById('display-el')

// alert(`First Name: ${firstName}\n Last Name: ${lastName}\n Salary:R` + eval(`${salary} + ${bonus}`))

// let output = `Name: ${firstName} <br>Surname: ${lastName} <br>Salary:R` + eval(`${salary} + ${bonus}`)

// displayEL.innerHTML = output;

// INPUTS
let firstName = document.querySelector('#firstName') ;
let lastName = document.querySelector('#lastName') ;
let salary = document.querySelector('#salary') ;
let submitBtn = document.querySelector('#submitBtn') ;
let displayEl = document.getElementById('display-el')

// Input & Process
submitBtn.addEventListener('click', execute);

function execute() {
    let totalSalary = parseInt(salary.value) + 500;

    let output = `Name: ${firstName.value} \nSurname: ${lastName.value}\nSalary: R${totalSalary}`;

    alert(output) 
}