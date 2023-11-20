/*
The Fibonacci sequence is a series of numbers where each number is the sum of the two numbers 
that come before it. The sequence starts with 0 and 1. The numbers in the Fibonacci sequence 
are also called Fibonacci numbers. 

Here are some numbers in the Fibonacci sequence: 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
*/

let a = 0, b = 1, c;
console.log(a);
console.log(b);
for (let i = 1; i <= 10; i++) {
	c = a + b;
	console.log(c);
	a = b;
	b = c;
}
