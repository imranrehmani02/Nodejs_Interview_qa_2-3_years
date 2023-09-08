/*
CALL:-  the call() method is a built-in function that allows you to invoke a function 
        with a specified this value and arguments provided individually.
        
        It's a way to borrow a method from one object and use it in the context of another object.

        Syntax:- functionName.call(thisArg, arg1, arg2, ...);
*/

const person1 = {
    firstName: 'Alice',
    lastName: 'John',
}
const person2 = {
    firstName: 'Imran',
    lastName: 'Rehmani',
}
function greet(message){
    console.log(`${message}, ${this.firstName} ${this.lastName}`);
}
console.log("\n Call Method");
greet.call(person1, "Hello");  // Hello, Alice John
greet.call(person2, "Assalamu Alaykum");  // Assalamu Alaykum, Imran Rehmani


/*
BIND:-  The bind() method is a built-in function that is used to create a new function 
        with a specified this value and optionally, initial arguments.

        The bind() method returns a new function that, when invoked, will have the specified 
        this context and any provided initial arguments.

        Syntax: functionName.bind(thisArg, arg1, arg2, ...);
*/

const person = {
    firstName: "Alice",
    lastName: "Johnson",
};


function greet(message) {
    console.log(`${message}, ${this.firstName} ${this.lastName}`);
}

console.log("\n Bind Method");
const boundGreet = greet.bind(person, "Hello");
boundGreet(); // Output: "Hello, Alice Johnson"

/*
APPLY:- the apply() method is a built-in function that allows you to invoke a 
        function with a specified this value and an array or array-like object of arguments. 
        
        It's similar to the call() method, but instead of providing individual arguments,
        you pass an array of arguments to be applied to the function.

        Syntax:- functionName.apply(thisArg, argsArray);
*/

const person3 = {
    firstName: "Alice",
    lastName: "Johnson",
};

function greet(message, punctuation) {
    console.log(`${message}, ${this.firstName} ${this.lastName}${punctuation}`);
}

console.log("\n Apply Method");
greet.apply(person3, ["Hello", "!"]); // Output: "Hello, Alice Johnson!"
