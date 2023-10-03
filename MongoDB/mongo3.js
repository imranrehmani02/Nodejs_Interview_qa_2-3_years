/*
Q. Highest salary in MySQL ?
Ans. First Highest Salary :- 
            db.collection.find({}).sort({"salary": -1}).limit(1)

    Second Highest Salary :-
            db.collection.find({}).sort({"salary": -1}).skip(1).limit(1)
*/
