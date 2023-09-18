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


// Join(separator):- Join all elements of an array into a string, seperated by the 
//          specified separator.
const arr3 = arr1.join(' ');
console.log('arr3:- ',arr3);    // A B C D


// indexOf(element, startIndex):-  Returns the first index at which a specified element
//          is found in an array, starting from the specidied startIndex.
//          Return -1 if the element is not found
console.log('arr1', arr1.indexOf('C')); // 2
console.log('arr1', arr1.indexOf('B', 2));  // -1


// slice(startIndex, endIndex):- Extracts a section of an array and returns a new array
//      conaining the selected element.
console.log('arr1', arr1.slice(2,4));  // ['C', 'D']


// splice(startIndex, deleteCount, item1, item2):- changes the content of an array by removing
//              or replacing existing elements and/or adding new elements.
arr1.splice(2, 2, 'C');
console.log('arr1', arr1); // ['A', 'B', 'C'];



/*
Q. Difference Between Slice and splice method.
Ans. Slice() method returns a new array with selected elements without modifying the 
    original array.
    splice() method modifies the original array by removing or replacing elements
    and/or adding new elements.
*/


// forEach(callback):- Executes a provided function once for each array element.
const arr4 = [111, 222, 333];
let sum = 0;
arr4.forEach(ar4 => {
    sum += ar4;
})
console.log('sum of arr4:- ', sum);  // 666
console.log('arr4:- ', arr4); // [111, 222, 333]


// map(callback):- Creates a new array populated with the results of calling a provided function
//              on every element in the array
const arr5 = arr4.map(ar4=>{
    return ar4 * 2;
})
console.log('arr5:- ', arr5);  // [222, 444, 666]


// filter(callback):- Creates a new array woth all the elements that pass the test implemented
//              by the provided function.
const arr6 = arr4.filter(ar4=> ar4 % 2);
console.log('arr6:- ', arr6); // [111, 333]


/*
Q. Shift and unshift method in javascript ?
Ans. Shift():- The shift() method removes and returns the first element of an array. It mutates
            the original array. If the array is empty it returns undefined.

    Unshift():- The unshift() method adds one or more elements to the beginning of an array.
            It mutates the original array and return new length of the array.
*/

// Shift
const fruits1 = ['apple', 'banana', 'cherry'];
const firstFruit = fruits1.shift();
console.log(firstFruit); // Output: 'apple'
console.log(fruits1);     // Output: ['banana', 'cherry']

// Unshift
const fruits2 = ['banana', 'cherry'];
const newLength = fruits2.unshift('apple', 'grape');
console.log(newLength); // Output: 4
console.log(fruits2);    // Output: ['apple', 'grape', 'banana', 'cherry']

