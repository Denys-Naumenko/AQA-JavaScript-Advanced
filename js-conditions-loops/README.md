# JavaScript Loops and Conditions

This repository is designed to help you learn and practice loops and conditional statements in JavaScript. Understanding these fundamental concepts is crucial for writing efficient and dynamic JavaScript code.

## Table of Contents

1. [Introduction](#introduction)
2. [Loops](#loops)
    - [For Loop](#for-loop)
    - [While Loop](#while-loop)
    - [Do-While Loop](#do-while-loop)
3. [Conditional Statements](#conditional-statements)
    - [If Statement](#if-statement)
    - [Else Statement](#else-statement)
    - [Else If Statement](#else-if-statement)
    - [Switch Statement](#switch-statement)

## Introduction

JavaScript is a versatile programming language used for both front-end and back-end development. Loops and conditional statements are essential constructs that allow you to control the flow of your code and execute certain blocks of code repeatedly.

In this repository, you'll find examples, explanations, and practice exercises related to loops and conditional statements in JavaScript.

## Loops

### For Loop

The `for` loop is used to iterate over a range of values. It's commonly used when you know how many times you want to repeat a block of code.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteration #" + i);
}
```

### While Loop
The 'while loop' repeats a block of code as long as a specified condition is true.

```javascript
Copy code
let i = 0;
while (i < 5) {
  console.log("Iteration #" + i);
  i++;
}
```

### Do-While Loop

The `do-while loop` is similar to the `while` loop, but it always executes the block of code at least once before checking the condition.

```javascript
let i = 0;
do {
  console.log("Iteration #" + i);
  i++;
} while (i < 5);
```

## Conditional Statements

### If Statement

The `if`` statement allows you to execute a block of code if a specified condition is true.

```javascript
let x = 10;
if (x > 5) {
  console.log("x is greater than 5");
}
```

### Else Statement

The `else` statement is used with an `if` statement to execute a block of code if the condition is false.

```javascript
let x = 3;
if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}
```

### Else If Statement

The `else if` statement allows you to specify multiple conditions to be tested.

```javascript
let grade = 85;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else {
  console.log("C or below");
}
```

### Switch Statement

The `switch` statement allows you to perform different actions based on different conditions.


```javascript
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the beginning of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  default:
    console.log("It's a regular day.");
}
```