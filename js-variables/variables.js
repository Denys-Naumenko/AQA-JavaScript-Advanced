import chalk from "chalk";

let adminName = "Адміністратор"; // Оголосили та присвоїли змінній значення "adminName"
let userName = "Користувач"; 

console.log("typeof adminName and userName:", chalk.bold.yellowBright(typeof adminName, typeof userName)); // Вивести тип змінної console.log(typeof Variable);

let programmingLanguage = chalk.bgRed("awesome"); 
let numValue = 100; 
let greetingMessage = "Hello, world!"; 

console.log(`JavaScript is: ${programmingLanguage}.${chalk.underline.greenBright(greetingMessage)} - is ${chalk.underline.greenBright(numValue)} percent success.`);

let itemAmount = chalk.overline.red(10.33);
console.log("The initial value is output", itemAmount); // Виведено початкове значення
itemAmount = null; // Змінено значення на null
console.log("Changed value is output:", chalk.underline.greenBright(itemAmount)); // Виведено змінене значення (null)
