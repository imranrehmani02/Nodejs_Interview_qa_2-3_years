let result = [];
let a = 0, b = 1, c;
result.push(a);
console.log(a);
result.push(b);
console.log(b);
for (let i = 1; i <= 10; i++)
{
    c = a + b;
    result.push(c);
    console.log(c);
    a = b;
    b = c;
}
console.log(result);