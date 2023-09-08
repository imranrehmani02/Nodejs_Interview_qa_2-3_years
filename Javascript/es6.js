/*
Features of ES6

1. Default parameters of ES6
2. Template Literals
3. Multiline strings
4. Destructing assignment
5. Enhanced object literals
6. Arrow functions
7. Promises in ES6
8. Block scoped constructs LET and CONST
9. Classes in ES6
10. Modules in ES6

*/

// Default parameters in ES6
function abc (a=10, b = 20) {
    return a * b;
}
console.log(abc()); // 200
console.log(abc(5)); // 100
console.log(abc(2, 6)); // 12

// Template literals
let text = `He's often called "Johnny"`;
console.log('text:- ', text);

// Destructing assignment
let user = {};
[user.name, user.surname] = "John Smith".split(' ');

console.log(user.name); // John
console.log(user.surname); // Smith

// Object literals
function createMachine(name, status) {
    return {
        name,
        status
    };
}
console.log(createMachine('Mangal2', 'Active'));

