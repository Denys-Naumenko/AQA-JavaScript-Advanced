// Task1 Function Declaration 
function calculateResult(operator, a, b) {
    let result;
    switch (operator) {
      case 'add':
        result = a + b;
        break;
      case 'subtract':
        result = a - b;
        break;
      case 'multiply':
        result = a * b;
        break;
      case 'divide':
        result = a / b;
        break;
      default:
        result = 'Невідома операція';
    }
    return result;
  }
  
let c = calculateResult('multiply', 5, 3);
console.log('Result:', c);

// Task1 Function Expression
let filterNumbers = function(arr, conditionFunction) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (conditionFunction(arr[i])) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  };
  
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = filterNumbers(numbers, num => num % 2 === 0);

console.log('Even numbers:', evenNumbers);
  
// Task1 Arrow Function
let calculateAverage = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  };
  
let scores = [80, 90, 75, 95, 85];
let averageScore = calculateAverage(scores);
console.log('Average score:', averageScore);
  
// Task2 
function recursiveFunction(value) {
    console.log(value);
  
    if (value < 20) {
      recursiveFunction(value + 1);
    }
  }
  
recursiveFunction(17);

//Task3 

let nestedArray = [["apple", "banana", "dog"],["cherry", "cat", "elephant"],["red", "green", "cat"]];

function findCat(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "cat") {
        return true; 
      }
    }
  }
  return false; 
}

if (findCat(nestedArray)) {
  console.log("The array contains 'cat'.");
} else {
  console.log("The array does not contain 'cat'.");
}

// Task 4

function divideArray(numbers) {
    let result = [];
    try {
      if (numbers.length < 2) {
        throw new Error("The array must contain at least two elements.");
      }
      for (let i = 1; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number" || typeof numbers[i - 1] !== "number" || numbers[i - 1] === 0) {
          throw new Error("Invalid values ​​in array to divide.");
        }
          result.push(numbers[i] / numbers[i - 1]);
      }
        return result;
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      console.log("The function is complete.");
    }
  }
  
console.log(divideArray([10, 2, 5]));    
console.log(divideArray([5, 0, 2]));     
console.log(divideArray([10, 'abc', 2]));
console.log(divideArray([3]));           

// Task 5

let array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56];
let oddNumbers = array.filter(number => number % 2 !== 0);
console.log(oddNumbers);

let arrayColors = ["yellow", "green", "apple", "red", "pink"];
console.log(arrayColors.sort()); 

// Task 6

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);

console.log(mergedArray); 

// Task 7

let array3 = [10, 20, 30, 40, 50];
let sum = array3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 
