/*
VAR:- Var variables are function scopeed or global scoped variables.
    Var variable can be reassigned and redeclared with in its scope.

LET:- Let variables are block scoped variables. Let variable can be reassigned within
    its scope but can not be redeclared.

CONST:- Const variables are block scoped variables. Const variables can not be reassigned
    nor be redeclared.

*/

var ab = 10;
function a() {

    console.log("-- ab-- ", ab); // 10
}
a()
console.log("-- ab-- ", ab); // 10


// const ab = "const";  // error
// function a() {

//     console.log("-- ab-- ", ab);
// }
// a()
console.log("-- ab-- ", ab); // 10

{
    var a = 25;
    let b = 35;
}
console.log("-- a -- ",a)  // 25
// console.log("-- b -- ",b) //  error



/*
Q. Difference b/w Object.freeze and const ?
Ans. Const prevents reassignments. Object.freeze prevents mutability.
            The Object.freeze() static method freezes an object. Freezing an object prevents
        extentions and makes existing properties non-writable and non-configurable.
            The const creates an immutable reference to a value.

*/

const abc = {
    a: 'a',
    b: 'b',
    c: 'c',
};
abc.a = 'A';
console.log(abc) // { a: 'A', b: 'b', c: 'c' }

Object.freeze(abc);

abc.b = 'B';
console.log(abc); // { a: 'A', b: 'b', c: 'c' }