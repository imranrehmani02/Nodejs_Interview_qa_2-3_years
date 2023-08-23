/*
 Super keyword in javascript ?
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
What is This keyword in javascript ?
Ans. In javascript, The THIS keyword always refers to an object. The behaviour of this depends
    on how and where it is used.
*/

const person = {
    name: "Aman",
    greet: function(){
        return `Hello, This is ${person.name}`;
    }
}
console.log(person.greet()); // Hello, This is Aman.
