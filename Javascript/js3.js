/*
Q. What are Stubs ?
Ans. Stubs are functions or programs that affect the behaviour of components
    or modules.



Q. Difference between Spread and Rest operator in javascript ?
Ans. -> Rest parameter is collecting all remaining elements into an array.


    -> Spread operator is unpacking collected elements such as arrays into
        single elements.    
*/

// Rest Example:- 
let myName = ['Mohammad', 'Imran', 'Rehmani'];
let [firstName, ...name] = myName;
console.log(firstName);  // Mohammad
console.log(name);   // ['Imran', 'Rehmani']
console.log(...name);  // Imran Rehmani


// Spread Example:- 
let mName = ['Mohammad', 'Imran', 'Rehmani'];
let fullDetail = [...mName, 'Ratlam', 26];
console.log(fullDetail);   // ['Mohammad', 'Imran', 'Rehmani', 'Ratlam', 26]


/*
Q. What is call by value and call by reference ?
Ans. Call By Value method copies the value of an argument into the formal parameter of
    that function.

    Call By Reference method copies the address of an argument into a formal parameter.



Q. What is deep copy and shallow copy ?
Ans. Shallow copy creates a new object with references to the same memory locations
    as the original object.

    Deep copy creates a new object with new memory locations for all of its properties
    and nested object or arrays.



Q. Can we render to DOM from Node Js ?
Ans. 
*/
