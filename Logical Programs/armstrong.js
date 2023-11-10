/* Armstrong number is a number that is equal to the sum of cubes of its digits. 
For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers. */

let num = 153;

let rem = 0;
let short = 0;
let res = 0;
let numLength = num.length;

while (short > 0) {
    rem = num % 10;
    console.log(rem)
    res = res + (rem * rem * rem);
    short = num / 10;
}
console.log(res)