/* -------------- ARRAY ---------------- */

// push(e1, e2, ...) :- Adds one or more elements to the end of an array and returns
//                   the new length of the Array.
const arr1 = ['A'];
arr1.push('B', 'C', 'D', 'E');
console.log('arr1:- ', arr1); // [ 'A', 'B', 'C', 'D', 'E' ]

// pop():- Removes the last element of an array and returns the element.
console.log(arr1.pop()); // E
console.log(arr1); // [ 'A', 'B', 'C', 'D' ]

// concat(arr1, arr2, ...) :- Combines two or more arrays and returns a new array.
//          The concat() method does not change the existing arrays.
const arr2 = arr1.concat(['F', 'G'], ['H']);
console.log('arr2:- ', arr2); // [ 'A', 'B', 'C', 'D', 'F', 'G', 'H']

// Join(separator):- 
