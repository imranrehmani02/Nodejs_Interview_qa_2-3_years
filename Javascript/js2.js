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

*/

