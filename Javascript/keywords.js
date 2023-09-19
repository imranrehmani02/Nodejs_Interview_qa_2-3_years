/*
Q. Super keyword in javascript ?
Ans. The Super keyword is used to call the constructor of its parent class to access the parents
    properties and methods.
*/

class Father {
    constructor(name){
        this.name = name;
    }
}

class Son extends Father{
    constructor(name){
        super(name);
    }
}

const son = new Son("Maxwell");
console.log(son.name);  // Maxwell


/*
Q. What is This keyword in javascript ?
Ans. In javascript, The THIS keyword always refers to an object. The behaviour of this depends
    on how and where it is used.



Q. What does This keyword refer to ?
Ans. This keyword refers to an object that is executing the current piece of code.
*/

const person = {
    name: "Aman",
    greet: function(){
        return `Hello, This is ${this.name}`;
    }
}
console.log(person.greet()); // Hello, This is Aman.




/*
Q. What are the falsy values in javascript ?
Ans. False,
     0 (ZERO),
    ' ' and " " (Empty String),
    Null,
    Undefined,
    NaN



Q. What is BSON ?
Ans. BSON, which stands for Binary JSON is a binary-encoded serialization format
    used to store and exchange data in a binary form. BSON is often associated 
    with mongoDB, a NoSQL database system, because MongoDB uses BSON as its primary
    data storage format.



Q. What is Eslint ?
Ans. ESLint is an open-source static code analysis tool for identifying and fixing 
    problems in JavaScript code. It helps developers maintain a consistent code style,
    discover potential issues or errors, and enforce coding standards within a project.



Q. What is Ecmascript ?
Ans. ECMAScript (often abbreviated as ES) is a scripting language specification that 
    standardizes the features and behavior of scripting languages, primarily focusing
    on JavaScript.
         JavaScript is the most well-known implementation of the ECMAScript specification.
*/
