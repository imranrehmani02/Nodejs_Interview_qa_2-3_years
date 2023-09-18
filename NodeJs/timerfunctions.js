/*
1. Timer package in node js ?
Ans.The Timers module in Node.js contains functions that execute code after a set period of time.
    Timers do not need to be imported via require(), since all the methods are available 
    globally to emulate the browser JavaScript API.
*/


/*
2. What is setTimeout function ?
Ans. The setTimeout function is used to execute a callback function after a specifies delay,
    measured in miliseconds. It takes two arguments, the callback function and the miliseconds.

    Syntax:- setTimeout(callback function, time is ms);
*/

setTimeout(() => {
    console.log('\nPrint Set timeout function after 1000 milisecond delay')
}, 1000);

setTimeout((arg)=>{
    console.log(`\narg:- ${arg}. Print argument after 1000 milisecond delay`);
},1000, 'ARGUMENT');


/*
3. What is setInterval function ?
Ans. The setInterval function is used to repetedly execute a callback function at a specified
    interval, also measured in miliseconds. It takes two arguments the callback function and 
    the interval between two arguments.

    Syntax:- setInterval(callback function, time in ms);
*/

setInterval(() => {
    console.log('\nPrint Set interval function after 1000 milisecond delay')
}, 1000);

setInterval((arg)=>{
    console.log(`\narg:- ${arg}. Print argument in setInterval function with 1000 ms delay.`)
},1000, 'ARGUMENT');

/*
4. What is process.nextTick() function ?
Ans. process.nextTick ( ) schedule a callback function to be executed in next iteration of event loop.

    ->  process.nextTick() taking a callback function which is executed after completing the current
        iteration/tick of the event loop.

    Syntax: process.nextTick()



5. what is setImmediate function ?
Ans. The setImmediate function is used to execute a function right after the current event loop finishes.

    ->  simple terms, the function functionToExecute is called after all the statements in the script
        are executed. It is the same as calling the setTimeout function with zero delays.

    Syntax:
        setImmediate(func)
        setImmediate(func, param0)
        setImmediate(func, param0, param1)
        setImmediate(func, param0, param1, …, paramN)


6. Difference between process.nextTick and setImmediate ?
Ans. setImmediate adds callback to the event queue that are executed during the check phase.
    Whereas process.nextTick executes callback immediately after the current phase.
*/

console.log("Hello => number 1");

setImmediate(() => {
  console.log("Running after the timeout => number 4");
});

setTimeout(() => {
  console.log("The timeout running => number 3");
}, 0);

process.nextTick(() => {
  console.log("Running at next tick => number 2");
});

/*
Output:-

Hello => number 1
Running at next tick => number 2
The timeout running => number 3
Running after the timeout => number 4

*/

// Find output of below code ?
const msg1 = setTimeout(() => {
    console.log("Hello - setTimeout");
},500);
clearTimeout(msg1);
// Output
// <no output>  :- clearTimeout() method cancels a timeout previously established
// by calling setTimeout();
