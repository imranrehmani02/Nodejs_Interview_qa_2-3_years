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
Ans. Node js does not have direct access to DOM but we use some typical approach:
    1> Use a template engine.
    2> Send rendered HTML to the client.
    3> Client side rendering. (Using client side javascript with EJS)



Q. What is caching ?
Ans. Caching is a technique used in computing and data storage to temporarily store
    and manage copies of frequently accessed or computed data in a faster and more 
    easily accessible location. Caching allows you to efficiently reuse previously
    retrieved or computed data.



Q. How does caching work ?
Ans. The data in cache generally stored in a fast access hardware such as RAM and
    may also be used in correlation with a software component. A caches primary
    purpose is to increase data retrieval performance by reducing the need to access
    the underlying slower storage layer.



Q. Difference between caches and cookies ?
Ans. Cache is used to store online page resources during a browser for the long run
    purpose or to decrease the loading time.
    Cookies are small piece of data stored on a users browsers by websites to information
    about the users or their intraction with website.



Q. What are streams ?
Ans. Streams are objects that let you read data from a source or write data to a destination
    in countinious fashion.
    Readable :- Used for read operation.
    Writable :- Used for write operation.
    Duplex :- For both read and write operations.
    Transform :- A type of duplex stream where the output is computed based on input.



Q. What is buffer in node js ?
Ans. In Node.js, a buffer is a built-in object that provides a way to work with binary data directly.
    The buffer module provides a way of handling streams of binary data. The buffer object is a global
    object of node.js and it is not necessary to import.
*/
