

//Prime Number b/w 1 to 100

let i,j,t=0;

console.log("Prime Number b/w 1 to 100")
for(i=1; i<=100; i++)
{
	for(j=2; j<=i-1; j++)
	{
		if(i%j==0)
		{
			t=t+1;
		}
	}

	if(t==0)
	{
		console.log(i);
	}
	else
	{
		t=0;
	}
}