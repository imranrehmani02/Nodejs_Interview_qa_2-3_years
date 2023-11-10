

//Reverse

let n=8956,rem,rev=0;

while(n>0)
{
	rem=parseInt(n%10);
	rev=parseInt(rev*10+rem);
	n=parseInt(n/10);
}

console.log("Reverse of given number is "+rev);

