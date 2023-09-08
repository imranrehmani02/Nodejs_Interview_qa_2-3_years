// Write a logic to count different character of a string
function countChars (str) {
    const charCount = {};

    for(let i = 0; i<str.length; i++) {
        const char = str[i];

        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    return charCount;
}

console.log("\n1> Program for count different character of a string");
const input1 = "Imraan";
console.log('input1:- ', input1);
console.log('Output1:- ', countChars(input1));  //  { I: 1, m: 1, r: 1, a: 2, n: 1 }


// Write a trim logic without using inbuilt trim function
function trimString(str) {
    let start = 0;
    let end = str.length - 1;

    while(start <= end && str[start] === " "){
        start++;
    }

    while(end >= start && str[end === " "]){
        end--;
    }
    return str.substring(start, end+1);
}
console.log("\n2> Trim logic without using inbuilt trim function");
const input2 = "    let's start  ";
console.log("input2:- ", input2);
console.log(`output2:- ${trimString(input2)}`); // let's start


// Write a program to count a number of duplicate character of a string
function duplicateCharacter (str) {
    const charCount = {};
    const duplicatecharCount = {};

    for(let i = 0; i<str.length; i++) {
        const char = str[i];

        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
        if( charCount[char] >= 2){
            duplicatecharCount[char] = charCount[char]
        }
    }
    // return charCount;
    return duplicatecharCount;
}

console.log("\n3> Program to count a number of duplicate character of a string");
const input3 = "This is Mohammad Imran Rehmani.";
console.log('input3:- ', input3);
console.log('Output3:- ', duplicateCharacter(input3));  // { i: 3, s: 2, ' ': 4, h: 3, m: 4, a: 4, n: 2 }

// Reverse String function
function reverseWholeString(str) {
    let reverseStr = "";
    for(let i = str.length-1; i>=0; i--) {
        let strChar = str.charAt(i);
        reverseStr = reverseStr + strChar;
    }
    return reverseStr;
}

console.log("\n4> Program Reverse string function");
const input4 = "I belong to Ratlam";
console.log('input4:- ', input4);
console.log('Output4:- ', reverseWholeString(input4)); // maltaR ot gnoleb I

// Reverse word characters in string
function reverseString(str){
    let strArray = str.split(' ');
    const reverseString = strArray.map(str1 => {
        let reverseStr = "";
        for(let i = str1.length-1; i>=0; i--) {
            let strChar = str1.charAt(i);
            reverseStr = reverseStr + strChar;
        }
        return reverseStr;
    });
    return reverseString.join(' ');
}

console.log("\n5> Program Reverse word characters in string function");
const input5 = "I belong to Ratlam";
console.log('input5:- ', input5);
console.log('Output5:- ', reverseString(input5)); // I gnoleb ot maltaR

console.log("10"-9);    // 1
console.log("10"+9);   // 109
