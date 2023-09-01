/*
1. Timer package in node js ?
Ans.The Timers module in Node.js contains functions that execute code after a set period of time.
    Timers do not need to be imported via require(), since all the methods are available 
    globally to emulate the browser JavaScript API.
*/

/*
2. What is setTimeout function ?
Ans. The setTimeout function is use to execute a callback function after a specifies delay,
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
Ans. The setInterval function is use to repetedly execute a callback function at a specified
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
Ans. 
*/