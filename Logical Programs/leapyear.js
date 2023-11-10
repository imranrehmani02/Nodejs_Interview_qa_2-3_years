
// Leap Year

let i=2000;

if((i%400==0)||(i%4==0)&&(i%100!=0))
{
	console.log(i+' : Leap Year');
}
else
{
	console.log(i+': Not Leap year');
}