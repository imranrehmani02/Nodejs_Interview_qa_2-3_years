/*
Q. What is hoisting in javascript ?
Ans. Hoisting is javascripts default behaviour of moving all the declarations
    at the top.

    // We can hoist VAR variable but can't LET and CONST

*/

// Ex - 1
console.log(foo); // undefined
foo = 'foo';
var foo
console.log(foo); // foo

// // Ex - 2
// console.log(doo); // error
// doo = 'doo';
// let doo

/*

Q. What is Closure ?
Ans. A closure gives you an outer function scope from in inner function.

*/

// Ex - 1

function outer(x) {
    return function(y) {
        return x*y;
    }
}

const inner = outer(5);
console.log(inner(6)); // 30

/*

Q. What is Cluster ?
Ans. Cluster of nodejs processes can be used to run multiple instance of node js
    that can distribute workloads among their application threads.

    -> The cluster module provides a way of creating child processes that run simultaneously
        and share the same server port.

*/


/*
Q. What are the different design patterns of javascript ?
Ans. Design patterns in JavaScript are reusable solutions to common problems that 
    arise in software design. These patterns help developers create code that is 
    more maintainable, modular, and efficient.
    There are 23 fundamental design patterns developers can apply in javascript.

    Most commonly used design patterns in javascript.
    1) Singleton Pattern
    2) Factory Pattern
    3) Constructor Pattern
    4) Module Pattern
    5) Observer Pattern
    6) Prototype Pattern
    7) Decorator Pattern
    8) Revealing Module Pattern
    9) Command Pattern
    10) Chain of Responsibility Pattern
    11) State Pattern
    12) Strategy Pattern
    13) Command Query Responsibility Segregation (CQRS)
    14) Dependency Injection (DI):
    15) Flux and Redux (State Management Patterns)
    16) Middleware Pattern
*/

