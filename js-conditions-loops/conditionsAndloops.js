import chalk from "chalk";

let employeeYearsOfExperience = 4;
let employeeMonthsOfExperience = 8;
let employeeTotalExperienceInMonths = employeeYearsOfExperience * 12 + employeeMonthsOfExperience;
let employeeSalary = 0;
let employeeBonus = 0;

if (employeeTotalExperienceInMonths >= 6) {
  if (employeeTotalExperienceInMonths < 12) {
    employeeSalary = 100;
    employeeBonus = employeeSalary * 0.01;
  } else if (employeeTotalExperienceInMonths < 24) {
    employeeSalary = 333;
    employeeBonus = employeeSalary * 0.03;
  } else if (employeeTotalExperienceInMonths < 48) {
    employeeSalary = 555;
    employeeBonus = employeeSalary * 0.04;
  } else {
    employeeSalary = 666;
    employeeBonus = employeeTotalExperienceInMonths/12/100 * employeeSalary  ;
  }
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
  if (i % 2 !== 0 || i == 0 || i==22 )  {
      continue
    }
    console.log(chalk.bgMagenta(i));
  }

let numberA = 10;
let numberB = 15;
let biggerNumber = "";

if (numberA > numberB) {
  biggerNumber = "The bigger number is: " + numberA;
} else if (numberA < numberB) {
  biggerNumber = "The bigger number is: " + numberB;
} else {
  biggerNumber = "The numbers are equal.";
}

console.log(chalk.greenBright(biggerNumber));


let rawMessage = "Javascript is fun";
let formatedMessage ="";
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

  formatedMessage += currentChar;
  index++;
}

console.log(chalk.cyan(formatedMessage));