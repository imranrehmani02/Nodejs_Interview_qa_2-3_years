/************** CALLBACK | PROMISES | ASYNC-AWAIT ********************/

/*
1. What is callback Promises and Async-await?
Ans. Callback, Prmises and Async-await are a way to deal with asynchronous operations.

    Callback:- A callback function is a function passed into another function
            as an argument. A callback function called at the completion of a
            given task.

    Promises:- A promise is basically an advancement of callback in node js. Promises
            are one way to deal without getting stuck in callback hell.

    Async-await:- An async keyword is used to define an asynchronous function, and
            the await keyword is used to pause the execution within a function until
            a promise is fulfilled. The await keyword can only be used inside an async
            function.
*/

// Callback example
console.log('\nCallback example');
function mainFunction(mainFunction, cbFunction){
        console.log(mainFunction);
        cbFunction();
}
function cbFunction(){
        console.log('cbFunction');
}
mainFunction('mainFunction', cbFunction);


// Promise
console.log('\nPromise');
function promiseFunction(){
        return new Promise((resolve, reject)=>{
                if(true){
                        resolve('Promise resolved');
                } else {
                        reject('Promise rejected');
                }
        })
}
promiseFunction()
.then((res)=>{
        console.log(`Promise:- ${res}`);
})
.catch((rej)=>{
        console.log(rej);
})


// Async-await
console.log('\nAsync-await');
async function asyncFunction(){
       let promiseFunctionResponse = await promiseFunction();
       console.log(`Async-await:- ${promiseFunctionResponse}`);
}
asyncFunction();


/*
Q. What is callback hell problem ?
Ans. The nesting of callback is known as callback hell or pyramid of doom.
        Nested callback is difficult to read and mainain also if there is an error in one function,
        then all other functions get affected.

        Example:
        function abc(arg, ()=>{
             function bcd(arg, ()=>{
                function cde(arg, ()=>{
                })
             })
        })


Q. How to solve callback hell problem ?
Ans. We can solve callback hell problem by using promises and async-await.



Q. What is callstack in node js ?
Ans. In Node.js, the call stack is a fundamental concept in the event-driven,
        non-blocking I/O model of JavaScript. It plays a crucial role in 
        managing the execution of functions in your code.

     -> The callstack is a data structure that keeps track of function calls
     during the execution of a program. The call stack operates on the LIFO principal.
     (Last-In, First-Out)   


     Example:
     function firstFunction() {
        console.log("First function");
        secondFunction();
      }

      function secondFunction() {
        console.log("Second function");
       }
      firstFunction();



Q. What is promises.all() ?
Ans. In Node.js and JavaScript, Promise.all() is a built-in method that is used for handling
        multiple promises concurrently and waiting for all of them to either resolve or reject. 

                It takes an iterable (usually an array) of promises as its argument and returns
        a new promise. This new promise resolves when all the input promises have successfully 
        resolved or rejects if any of them rejects.

       Syntax: Promise.all(iterable);
       
       Example:
        const promise1 = fetch('https://api.example.com/resource1');
        const promise2 = fetch('https://api.example.com/resource2');
        const promise3 = fetch('https://api.example.com/resource3');

        Promise.all([promise1, promise2, promise3])
                .then((responses) => {
                // All promises have resolved successfully, and responses is an array of their results
                console.log('All responses:', responses);
        })
                .catch((error) => {
                // If any of the promises reject, this catch block will be executed
                console.error('An error occurred:', error);
        });



Q. How to handle promises in node js ?
Ans. We can use several methods and techniques to handle promises.
        1. Using .then() and .catch()
        2. Using .then() and chaining
        3. Using async-await
        4. Using promises.all()



Q. Which is better callback, promises and async-await ?
Ans. The choice between callback, promises and async-await depebds on your specific use case
        and coding style. Each approach has its own advantages and considerations.

        In general, promises and async-await are preferred over callbacks due to their 
     improved cade readibility and better error handling capabilities.
        Promises provide a good balance between simplicity and functionality while
      async-await offers a more synchronous like coding stayle.
*/





