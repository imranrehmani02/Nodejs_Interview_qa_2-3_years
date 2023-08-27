/* -------------- STRING ---------------- */

// length:- Returns the lenght of a string.
let str1 = 'This is Mohammad Imran. ';
console.log(str1.length); // 22 (count blank space as well)

// charAt:- Returns the character at the specified index in a string.
console.log(str1.charAt()); // T (by default take 0)
console.log(str1.charAt(0)); // T
console.log(str1.charAt(4)); // ' ' (empty string)
console.log(str1.charAt(21)); // n

// concat:- Combines multiple strings and returns a new concatenated string.
let str2 = 'I belong to Ratlam. ';
const comStr = str1.concat(str2);
console.log(comStr); // This is Mohammad Imran. I belong to Ratlam.


// toUpperCase():- Converts a string to upper case.
console.log(str1.toUpperCase());  // THIS IS MOHAMMAD IMRAN.


// toLowerCase():- Converts a string to lower case
console.log(str1.toLowerCase());    // this is mohammad imran.


// trim():- Remove wide spaces from both ends of a string.
const str4 = "  I am a software developer.   ";
console.log(str4.trim());   //  "I am a software developer."


// replace() :- Replaces occurances of a specified search value with a new value in a string.
console.log(str2.replace('Ratlam', 'Indore'));      // I belong to Indore.


// split(separator) :- Splits astring into an array of substrings based on the specified separator.
console.log(str1.split(' '));       // [ 'This', 'is', 'Mohammad', 'Imran.']


// indexOf(sub String, from index):- Returns the index of the first occurence of a sub string
//     within a string, starting from the specified index (or from the beginning
//     if not specified.)
//     Returns -1 if the substring is not found.

console.log(str1.indexOf('Imran', 4)); // 17


// Slice(startIndex, endIndex) :- Extracts a position of a specified start index(inclusive)
//              and ending at the specified end index(exclusive).

console.log(str1.slice(17, 22));  // Imran

// Splice(startIndex, deleteCount, item1, item2, ...):- The splice method changes the conent of an array
//             by removing or replacing existing elements and/or adding new elements. It modifies the 
//              original array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);        // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

/*
Q. Difference Between Slice and splice method.
Ans. Slice() method returns a new array with selected elements without modifying the 
    original array.
    splice() method modifies the original array by removing or replacing elements
    and/or adding new elements.
*/
