import chalk from "chalk";

let employeeExperience = 1;
let employeeSalary;
let employeeBonus;

if (employeeExperience < 0.5) {
  employeeSalary = 0;
  employeeBonus = 0;
} else if (employeeExperience >= 0.5 && employeeExperience < 1) {
  employeeSalary = 100;
  employeeBonus = employeeSalary * 0.01;
} else if (employeeExperience >= 1 && employeeExperience < 2) {
  employeeSalary = 333;
  employeeBonus = employeeSalary * 0.03;
} else if (employeeExperience >= 2 && employeeExperience < 4) {
  employeeSalary = 555;
  employeeBonus = employeeSalary * 0.04;
} else if (employeeExperience >= 4) {
  employeeSalary = 666;
  employeeBonus = employeeSalary * employeeExperience;
}

employeeSalary += employeeBonus; // Add theм bonus to the salary
console.log("Salary: ", employeeSalary);

let monthNumber = 7;

switch (monthNumber) {
  case 1:
    console.log(monthNumber, "January");
    break;
  case 2:
    console.log(monthNumber, "February");
    break;
  case 3:
    console.log(monthNumber, "March");
    break;
  case 4:
    console.log(monthNumber, "April");
    break;
  case 5:
    console.log(monthNumber, "May");
    break;
  case 6:
    console.log(monthNumber, "June");
    break;
  case 7:
    console.log(monthNumber, "July");
    break;
  case 8:
    console.log(monthNumber, "August");
    break;
  case 9:
    console.log(monthNumber, "September");
    break;
  case 10:
    console.log(monthNumber, "October");
    break;
  case 11:
    console.log(monthNumber, "November");
    break;
  case 12:
    console.log(monthNumber, "December");
    break;
  default:
    console.log(monthNumber, "Invalid month");
}

let limitMax = 30;

for (let i = 1; i <= limitMax; i++) {
  if (i % 2 !== 0 || i == 0 || i == 22) {
    continue;
  }
  console.log(chalk.bgMagenta(i));
}

let numA = 10;
let numB = 8;
let compare =
  numA > numB
    ? numA + " bigger than " + numB
    : numA < numB
    ? numB + " bigger than " + numA
    : numA === numB
    ? numA + " equals " + numB
    : "Error";
console.log(chalk.greenBright(compare));

let rawMessage = "Javascript is fun";
let formattedMessage = "";
let index = 0;

while (index < rawMessage.length) {
  let currentChar = rawMessage[index];

  if (currentChar === "a") {
    index++;
    continue;
  }

  if (currentChar === "n") {
    break;
  }

  formattedMessage += currentChar;
  index++;
}

console.log(chalk.cyan(formattedMessage));
