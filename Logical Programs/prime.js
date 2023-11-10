let n=12,t=0;

for(let i=2; i<=n-1; i++)
{
	if(n%i==0)
	{
		t=t+1;
	}
}

if(t>0)
{
	console.log(n+" in not prime number")
}
else
{
	console.log(n+" is prime number")
}