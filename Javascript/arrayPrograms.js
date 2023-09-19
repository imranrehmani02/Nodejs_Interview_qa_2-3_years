// Check array arr2 is subset of array arr1 or not
const arr1 = [986, 25, 321, 20, 84, 100];
const arr2 = [20, 100];
function isSubsetOf(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            return false;
        }
    }
    return true;
}
console.log("\n1> Check array arr2 is subset of array arr1 or not");
console.log(isSubsetOf(arr1, arr2));  // true


// Find output of given code
console.log("\n2> Find output of given code");
let arr3 = ['A', 'B'];
arr3[4] = 'E';
console.log('arr3:- ', arr3);  //  [ 'A', 'B', <2 empty items>, 'E' ]


// Find unique value of an array
function findUniqueValues(arr) {
    return Array.from(new Set(arr));
}
const arr4 = [1, 2, 3, 1, 2, 3, 8, 5, 9];
console.log("\n3> Find unique value of an array");
console.log('findUniqueValues:- ', findUniqueValues(arr4));  // [ 1, 2, 3, 8, 5, 9 ]
/*
-> A value in the set may only occur once; It is unique in the Set's collection.
*/


// Find majority of array elements from array variables
function findMajorityElements(arr) {
    const frequencyCounter = {};
    const majorityElements = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
    }

    let majorityThreshold = 0;
    for (const element in frequencyCounter) {
        if (frequencyCounter[element] > majorityThreshold) {
            majorityThreshold = frequencyCounter[element];
        }
    }

    for (const element in frequencyCounter) {
        if (frequencyCounter[element] === majorityThreshold) {
            majorityElements.push(Number(element));
        }
    }
    return majorityElements;
}
console.log("\n4> Find majority of array elements from array variables");
const arr5 = [1, 2, 3, 5, 2, 1, 4, 6, 5, 2, 1, 2, 2, 3, 6];
const majority = findMajorityElements(arr5);
console.log('majority:- ', majority);   // [2]


// Duplicate character program
function countDuplicateChars(str) {
    // Create an empty object to store the character counts
    const charCounts = {};

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // If the character is already in the object, increment its count
        if (charCounts[char]) {
            charCounts[char]++;
        } else {
            // Otherwise, add the character to the object with a count of 1
            charCounts[char] = 1;
        }
    }

    // Create an object to store the duplicate character counts
    const duplicateCharCounts = {};
    // Loop through each character in the object and store the counts of duplicates
    for (const char in charCounts) {
        if (charCounts[char] > 1) {
            duplicateCharCounts[char] = charCounts[char];
        }
    }

    // Return the object of duplicate character counts
    return duplicateCharCounts;
}

console.log("\n5> Duplicate character counts");
const str = 'hello world';
const duplicateCharCounts = countDuplicateChars(str);
console.log(`The duplicate character counts in "${str}" are:`, duplicateCharCounts);


// Find distinct array from arrays of integer
let arr6 = [[1,2], [2,3,4], [3,4,5]];

function solution(arr6){
    let oneArray = [];
   
    for(i=0; i<arr6.length; i++){
        let arr2 = arr6[i];
        for(j=0; j<arr2.length; j++){
            oneArray.push(arr2[j]);
        }
    }
   
    let uniqueArray = [];
    let duplicateArray = [];
    for(i=0; i<oneArray.length; i++){
        if(uniqueArray.includes(oneArray[i])){
            duplicateArray.push(oneArray[i])
        }
        else{
            uniqueArray.push(oneArray[i])
        }
    }
   
    let distinctArray = [];
    for(i=0; i<uniqueArray.length; i++){
        if(!duplicateArray.includes(uniqueArray[i])){
            distinctArray.push(uniqueArray[i]);
        }
    }
    console.log("distinctArray:- ",distinctArray)
}
console.log("\n6> Find distinct array from arrays of integer");
solution(arr6);


/*
Write a program for dynamic array by using one array key from goven array of objects.
let data1 = [
  { res: "Ind", loc: "Indore", name: "farzi" },
  { res: "Thai", loc: "Indore", name: "dnd" },
  { res: "Thai", loc: "Indore", name: "test11" },
  { res: "Chinese", loc: "Indore", name: "xyz" },
  { res: "Italic", loc: "Indore", name: "abc" },
  { res: "Ind", loc: "Indore", name: "def" },
  { res: "Thai", loc: "Indore", name: "test" },
  { res: "Italic", loc: "Indore", name: "rst" },
  { res: "Chinese", loc: "Indore", name: "social" },
  { res: "Ind", loc: "Indore", name: "pqr" },
  { res: "Mughlai", loc: "Indore", name: "chk" },
  { res: "Ind", loc: "Indore", name: "spwn" },
  { res: "Mughlai", loc: "Indore", name: "mtn" },
]

Expected Output:- {
  Ind: [
    { res: 'Ind', loc: 'Indore', name: 'farzi' },
    { res: 'Ind', loc: 'Indore', name: 'def' },
    { res: 'Ind', loc: 'Indore', name: 'pqr' },
    { res: 'Ind', loc: 'Indore', name: 'spwn' }
  ],
  Thai: [
    { res: 'Thai', loc: 'Indore', name: 'dnd' },
    { res: 'Thai', loc: 'Indore', name: 'test11' },
    { res: 'Thai', loc: 'Indore', name: 'test' }
  ],
  Chinese: [
    { res: 'Chinese', loc: 'Indore', name: 'xyz' },
    { res: 'Chinese', loc: 'Indore', name: 'social' }
  ],
  Italic: [
    { res: 'Italic', loc: 'Indore', name: 'abc' },
    { res: 'Italic', loc: 'Indore', name: 'rst' }
  ],
  Mughlai: [
    { res: 'Mughlai', loc: 'Indore', name: 'chk' },
    { res: 'Mughlai', loc: 'Indore', name: 'mtn' }
  ]
}
*/
// Solution
let obj1 = {};

function arrOpr(data1){
    data1.forEach((dt1)=>{
        let objectKeys = Object.keys(obj1);
        if(objectKeys.includes(dt1.res)){
            obj1[dt1.res].push(dt1);
        } else {
            obj1[dt1.res] = [dt1];
        }
    })
    return obj1;
}
console.log(arrOpr(data1));
