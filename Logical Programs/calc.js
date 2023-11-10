
// Calculator

let a=12,b=4,c;
let op='*';

switch(op)
{
	case '+':
	c=a+b;
	console.log("Addition : "+c);
	break;

	case '-':
	c=a-b;
	console.log("Substraction : "+c);
	break;

	case '*':
	c=a*b;
	console.log("Multiply : "+c)
	break;

	case '/':
	c=a/b;
	console.log("Division : "+c);
	break;

	default:
	console.log("Invalid Option");
}