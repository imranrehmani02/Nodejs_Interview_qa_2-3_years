/*
Armstrong Number :- An Armstrong number is a special kind of number in math. It's a number 
					that equals the sum of its digits, each raised to a power. For example, 
					if you have a number like 153, it's an Armstrong number because 1^3 + 5^3 + 3^3 equals 153.

*/
let n = 153;
let t1 = n;
let leng = 0;

while (t1 != 0) {
	leng = leng + 1;
	t1 = parseInt(t1 / 10);
}

let t2 = n;
let arm = 0;
let rem;

while (t2 != 0) {
	let mul = 1;
	rem = parseInt(t2 % 10);
	for (let i = 1; i <= leng; i++) {
		mul = mul * rem;
	}
	arm = parseInt(arm + mul);
	t2 = parseInt(t2 / 10);
}

if (arm == n) {
	console.log(n + " is armstrong");
}
else {
	console.log(n + " is not armstrong");
}