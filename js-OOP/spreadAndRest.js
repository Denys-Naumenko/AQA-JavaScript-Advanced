//Task1
let trustedUsers = ["Ivan", "Petro"];
let untrustedUsers = ["Vasyl", "Oksana"];
let allUsers = [...trustedUsers ,  ...untrustedUsers ];

console.log(allUsers);

//Task2
function multiply(multiplier, ...args) {
    return args.map(element=> element * multiplier)
}

let result = multiply(4, 9, 83, 3);
console.log(result);