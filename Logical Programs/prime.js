// A prime number is a whole number greater than 1 whose only factors are 1 and itself.

let i, j, t = 0;

console.log("Prime Number b/w 1 to 100");
for (i = 1; i <= 10; i++) {
	for (j = 2; j <= i - 1; j++) {

		// console.log(`--${i} % ${j}-- `, i % j)
		if (i % j == 0) {
			t = t + 1;
		}
	}

	if (t == 0) {
		console.log(i);
	}
	else {
		t = 0;
	}
}
