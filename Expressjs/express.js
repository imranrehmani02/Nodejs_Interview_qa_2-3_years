/*
1. What is Express.js ?
Ans. Express.js is a popular and light weight web application framework for node js.
    It provides a simple and flexible way to build web applications and API's.
    Its allowing developers to create server side application with ease.

    Key features -
    - Routing
    - Middleware
    - Templating
    - Error Handling


2. Why we use express.js ?
Ans. - Ultra fast I/O
     - Asynchronous and Single Threaded
     - MVC like structure
     - Robust API makes routing easy


    
3. Best framework for node.js ?
Ans. - Express.js
     - Koa.js
     - Nest.js
     - Hapi.js
     - Sails.js
     - Meteor.js



4. What is the purpose of node js framerwork ?
Ans. The purpose of node js framework is to simplify and streamline the development
    process by offering pre-defined structures, libraries and patterns.



5. How to create server in express js ?
Ans. 1) Create node js project by run npm init.
     2) Install express.js
     3) create server.js file

    Example:-
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello World !!!');
    });
    app.listen(3000, ()=>{                  // 3000 is the PORT number
        console.log('Server is running.');
    });
*/
