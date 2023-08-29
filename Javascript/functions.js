/*
Q. What is function is javascript ?
Ans. A function is reuseable block of code that performs a specific tasks.

    function in javascript are used for:
    1> Code Reuseability
    2> Abstraction
    3> Code Organization

    In javascript functions are first class citizen.
    function abc(){
        [Function body]
    }

Q. What is arrow function in javascript?
Ans. An arrow function in JavaScript is a concise way to write anonymous function expressions.
        Arrow functions were introduced in ECMAScript 6 (ES6) and provide a more compact
        syntax compared to traditional function expressions.

    const functionName = (parameter1, parameter2, ...) => {
        [Function body]
        return returnValue;
    };

Q. Difference between normal function and arrow function
Ans. 
    1> Syntax
    2> No argument objects in arrow functions.
    3> No prototype objects for the arrow function.
    4> Arrow functions do not create their own this binding.
    5> Arrow functions can not be used as constructors.
    6> Arrow functions can not be redeclared.
    7> Arrow functions can not be accessed before initialization.
    8> Duplicate named params are not allowed in arrow functions.
    
    
Q. what is Immediate Invoked Function Expression (IIFE) ?
Ans. Immediate invoked Function Expression (IIFE) is a function that is executed
    immediately after it is defined.

    (function(){
        [Function body]
    })();


Q. what is function delcaraion ?
Ans. A function declaration is a way to define a function that can be called
    later in the code.


Q. What is function expression ?
Ans. A function expression in JavaScript is a way to define a function using a variable.
    const x = (a,b) => a*b;


Q. What is function assignment ?
Ans. function assignment in javascript refers to the process of assigning a function to a variable
    or property. It allows you to store a function as a value and use it like any other variable
    or object property.

Q. what is higher order function?
Ans. Higher order functions are functions that take one or more functions as arguments
    or return an function as their result.
*/