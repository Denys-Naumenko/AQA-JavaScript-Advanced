import chalk from "chalk";

let userAge = 25;
let canGetLicense = userAge >= 18;

console.log(
  "Can a person get a driver's license?",
  chalk.underline.greenBright(canGetLicense),
);

let firstUserName = "Denys";
let secondUserName = "Lyuba ";
let greetingMessage = `Hi, ${chalk.underline.greenBright(
  firstUserName,
)} and ${chalk.underline.greenBright(secondUserName)}`; // In JavaScript, use backticks (`) for variable interpolation within strings, not single or double quotes, to embed variable values for dynamic content.
let concatGreetingMessage =
  "Hi, " +
  chalk.underline.greenBright(firstUserName) +
  " and " +
  chalk.underline.greenBright(secondUserName);

console.log(greetingMessage);
console.log(concatGreetingMessage);

let defaultNumber = "5.489";
let floatDefaultNumber = parseFloat(defaultNumber);

console.log(floatDefaultNumber);
console.log(!isNaN(floatDefaultNumber));
console.log(floatDefaultNumber.toFixed(1));
console.log(floatDefaultNumber.toString());

let titleMessage =
  "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation.";

console.log("Length of the string:", titleMessage.length);
console.log(
  "Length of the string:",
  titleMessage.replaceAll("Wikipedia", chalk.green.bold("Empty")),
);
console.log(
  "String contains the word 'world':",
  titleMessage.includes("world"),
);
console.log(
  "String ends with the word 'Foundation':",
  titleMessage.endsWith("Foundation."),
);

let circleRadius = 5.489;
let circleArea = Math.PI * Math.pow(circleRadius, 2);
console.log(
  "The area of ​​a circle with a radius =",
  circleRadius,
  "is :",
  circleArea.toFixed(2),
);

let rectangleLenght = 5.489;
let rectangleWidth = 10.489;
let rectangleArea = rectangleLenght * rectangleWidth;

console.log(
  "The area of ​​a rectangle with lenght =",
  rectangleLenght,
  "and width =",
  rectangleWidth,
  "is :",
  rectangleArea.toFixed(2),
);

let cylinderHeight = 10.489;
let cylinderVolume = Math.PI * Math.pow(circleRadius, 2) * cylinderHeight;

console.log(
  "The volume of a cylinder with radius =",
  circleRadius,
  "and height =",
  cylinderHeight,
  "is:",
  cylinderVolume.toFixed(2),
);
