// Whats the output of below code ?
const name = 'Imran';
if (typeof name === 'string') {
    console.log(true);              // true
} else {
    console.log(false);
}

// What's the output of below code ?
if (typeof name === undefined) {
    console.log(true);
} else {
    console.log(false);         // false
}

// What's the output of below code ?
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I am a Promise');
    }, 2000);
},
    (reject) => { }
)
promise.then((value) => console.log(value));   // I am a promise (after 2 second)

// What's the output of below code ?
console.log(typeof (1 + 2));           // number

// What's the output of below code ?
console.log('first');
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third');

// Output:
// first
// third
// second

// What's the output of below code ?
const msg = setTimeout(() => {
    console.log('Hello');
}, 3000);
clearTimeout(msg);

// What's the output of below code ?
var x;
var y = undefined;
console.log(x === y);         // true

// What's the output of below code ?
console.log(3 + 2 + '7');       // 57

// What's the output of below code ?
if (NaN === NaN) {
    console.log(true);
} else {
    console.group(false);       // false
}

// What's the output of below code ?
if (undefined === undefined) {
    console.log(true);          // true
} else {
    console.log(false);
}

// What's the output of below code ?
if (['a'] == 'a') {
    console.log(true);        // true
} else {
    console.log(false);
}

// What's the output of below code ?
if ('a' == 'a') {
    console.log(true);        // true
} else {
    console.log(false);
}

// What's the output of below code ?
var a = 10;
function box() {
    let a = 20;
    console.log(a);         // 20
}
box();

// What's the output of below code ?
let b = 10;
function triangle() {
    var b = 20;
    console.log(b);         // 20
}
triangle();

// What's the output of below code ?
console.log("10" - 9);    // 1
console.log("10" + 9);   // 109

// Write a function for remove sub object values in main object
let arr1 = [{
    "bc": "",
    "bpt": 0,
    "bds": 0,
    "extraData": {
        "ftStartOn": "",
        "ftEndsOn": "",
        "ftBpCmpltd": 0
    }
}]

/*
 Expected output:-
[{
        "bc": "",
        "bpt": 0,
        "bds": 0,
        "ftStartOn": "",
        "ftEndsOn": "",
        "ftBpCmpltd": 0,
}]
*/

function clearArray(arr1){
    const arr2 = arr1.map(ar1=>{
        return {
            "bc": ar1.bc, 
            "bpt": ar1.bpt, 
            "bds": ar1.bds, 
            ...ar1.extraData
        };
    })
    console.log('arr2:--',arr2);   // [return above expected output]
}
clearArray(arr1);

// Write a function for getting random value from array [1,2,3,4,5,6,7] and not repeated

// How to find highest salaried employees from a json
var employees =[{name:"emp1",salary:"10000"},{name:"emp2",salary:"30000"},{name:"emp3",salary:"50000"}]

let highestSalary = 0;
employees.forEach(emp=>{
    if(emp.salary > highestSalary){
        highestSalary = emp.salary;
    }
})
console.log('highestSalary:--> ',highestSalary);  // 50000
