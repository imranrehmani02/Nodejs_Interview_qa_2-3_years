/*
1. What are the built in module in node js ?
Ans. Node.js has a rich set of built-in modules that provide various functionalities
    to developers. These modules are available for use without the need for external 
    installations. Here are some of the core built-in modules in Node.js:

    1> fs (File system)
    2> path
    3> url
    4> http
    5> https
    6> os (Operating system)
    7> crypto
    8> stream
    9> buffer

    etc.


2. Whats the use of Fs module ?
Ans. Fs module is use for reading, writing, creating and removing files, working with
    directories, renaming and moving files.


3. Whats the use of path module ?
Ans. Path module is use for resolve, join, normalize, extracting path, file extention
    manipulation and parsing path.

4. What is HTTP methods ?
Ans. HTTP (Hyper Text Transfer Protocol) defines a set of methods, that indicate the
    desired action to be performedon a resources.
    (GET, POST, PUT, PATCH, DELETE)


5. What is the use of module.exports function ?
Ans. module.exports is an object in node js file that holds the exported value and function
    from that module.


6. Difference b/w module.exports and exports /
Ans. 
    -> Module.exports:- When we want to export a single class/variable/function from
        one module to another module, we use module.exports.

    -> exports:- When we want to use exports multiple variable/functions from one
        module to another module, we use exoprts.
*/

// How to create server in node js ?
const http = require('http');
const server = http.createServer((req, res) => {
    res.write('Hello !!!!!');
    res.end();
})
server.listen(3000, ()=>{
    console.log('Server is running.....');
});