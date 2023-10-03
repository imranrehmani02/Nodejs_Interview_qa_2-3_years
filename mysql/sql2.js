/*
Q. How to find 2nd highest salary ?
Ans. SELECT MAX (salary) FROM employees WHERE salary < (SELECT MAX (salary) FROM employees)



Q. How to find nth salary ?
Ans. SELECT * FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 2
*/
