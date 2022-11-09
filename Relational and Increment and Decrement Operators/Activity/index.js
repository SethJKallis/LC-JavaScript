// TERNARY
let name = prompt("Enter your name: ");
let salary = prompt("Enter your salary: R")
let userSalary = parseInt(salary)

console.log(name)

console.log(salary > 5000 ? userSalary + 200 : userSalary)

document.write(
`Name: ${name}<br>
Salary: R${eval(salary > 5000 ? userSalary + 200 : userSalary)}`
)