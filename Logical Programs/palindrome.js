

//  Palindrome

let n=1325231, rev=0, rem,t;
t=n;

while(t>0)
{
	rem=parseInt(t%10);
	rev=parseInt(rev*10+rem);
	t=parseInt(t/10);
}

if(rev==n)
{
	console.log('Given Number is Palindrome');
}
else
{
	console.log('Given Number is not Palindrome');
}