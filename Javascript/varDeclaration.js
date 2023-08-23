/*
VAR:- Var variables are function scopeed or global scoped variables.
    Var variable can be reassigned and redeclared with in its scope.

LET:- Let variables are block scoped variables. Let variable can be reassigned within
    its scope but can not be redeclared.

CONST:- Const variables are block scoped variables. Const variables can not be reassigned
    nor be redeclared.

*/

// var ab = 10;
// function a() {

//     console.log("-- ab-- ", ab);
// }
// a()
// console.log("-- ab-- ", ab);


// const ab = "const";
// // function a() {

// //     console.log("-- ab-- ", ab);
// // }
// // a()
// console.log("-- ab-- ", ab);

{
    var a = 25;
    let b = 35;
}
console.log("-- a -- ",a)  // 25
console.log("-- b -- ",b) //  error