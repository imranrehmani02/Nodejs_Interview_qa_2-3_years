/* -------------- LOOPS ---------------- */

/* 
For loop:-

for (initialization; condition; inc/dec){
    [Code to be executed]
}
*/

console.log('\n For loop');
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/*
While loop:-

initialization
while(condition){
    [Code to be executed]
    inc/dec
}
*/
console.log('\n While loop');
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Example: Generating Fibonacci numbers using a while loop
console.log('\n Fibonacci numbers using a while loop');
function generateFibonacci(limit) {
    const fibonacciNumbers = [0, 1];
    let i = 2;

    while (fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2] <= limit) {
        fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
        i++;
    }

    return fibonacciNumbers;
}

const fibonacciNumbersUpTo20 = generateFibonacci(20);
console.log(fibonacciNumbersUpTo20); // Output: [0, 1, 1, 2, 3, 5, 8, 13]


/*
Do while loop:-

initialization
do{
    [Code to be executed]
    inc/dec;
} while(condition)
*/
console.log('\n Do while loop');
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);


/*
for...in loop:-

for (var in object) {
    [Code to be executed]
}
*/

const obj1 = {
    'name': 'Imran',
    'city': 'Ratlam',
}
console.log('\n For...in loop');
for(let key in obj1){
    console.log(`${key}: ${obj1[key]}`);
}


/*
For...of loop

for(var of iterable){
    [Code to be executed]
}
*/

const arr1 = ['AB', 'BC', 'CD'];
console.log('\n For...of loop');
for(let ar1 of arr1){
    console.log('ar1:- ',ar1);
}

/*
Q. Difference between for...of loop and for...in loop
Ans. 
    for...of loop:- The for...of loop is used to iterate over iterable objects
        (arrays, strings, maps, sets etc) and retrieve the value of each element.
    It iterates over the values of the iterable object.


    for...in loop:- The for...in loop is used to iterable over the enumrable properties
            of an object (object keys).
        It iterate over the keys of an object.
*/
