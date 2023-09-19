/*
1. What is MySQL ?
Ans. MySQL is an open-source Relational DataBase Management System (RDBMS) that is widely
    used for managing and storing structured data.



2. How MySQL save the data ?
Ans. MySQL saves data in a structured manner within databases:
    Database > Table > Column



3. What is Stored procedure in MySQL ?
Ans. A stored procedure in mysql is a set of precompiled SQL statements that are stored in
    the database and can be executed as a single unit.



4. Triggers in MySQL ?
Ans. Triggers are database objects that are associated with a table and automatically 
    execute in response to specific events, such as inserting, updating and deleting
    data in the table.



5. What is MySQL JOINS and how many types of JOINS in MySQL ?
Ans. MySQL JOINS are used with SELECT statement. It is used to retrieve data from multiple
    tables. It is performed whenever you need to fetch records from two or more tables.

    There are three types of MySQL JOINS:
    1) INNER JOIN (or sometimes called SIMPLE JOIN)
    2) LEFT OUTER JOIN (or sometimes called LEFT JOIN)
    3) RIGHT OUTER JOIN (or sometimes called RIGHT JOIN)

    Syntax:
    1) INNER JOIN (SIMPLE JOIN)
        SELECT columns  
        FROM table1   
        INNER JOIN table2  
        ON table1.column = table2.column;

    2) LEFT OUTER JOIN (LEFT JOIN)
        SELECT columns  
        FROM table1  
        LEFT [OUTER] JOIN table2  
        ON table1.column = table2.column;

    3) RIGHT OUTER JOIN (RIGHT JOIN)
        SELECT columns  
        FROM table1  
        RIGHT [OUTER] JOIN table2  
        ON table1.column = table2.column;



6. JOIN query in MySQL ?
Ans. A JOIN clouse is used to combine rows from two or more tables, based on a related column
    between them.



7. SQL join in sequelize ?
Ans. We can join two or more tables in sequelize in two types:
    1) Sequelize.query()
    2) Sequelize.define()



8. What is subquery in sql ?
Ans. A subquery is a query that is nested inside a SELECT, INSERT, UPDATE and DELETE statement
    or inside another query.



9. What is Primary Key and Foreign Key ?
Ans. 
    Primary Key:- The PRIMARY KEY constraint uniquely identifies each record in a table. 
    Primary keys must contain UNIQUE values, and cannot contain NULL values. A table can
    have only ONE primary key column.

    Foreign Key:- A FOREIGN KEY is a field (or collection of fields) in one table that refers 
    to the PRIMARY KEY in another table.



10. How to create indexing in mysql ?
Ans. The CREATE INDEX statement is used to create index in tables.
    Syntax:- CREATE INDEX index_name ON table_name (column1, column2, ....);
    Example:- CREATE INDEX idx_lastname ON persons (lastname);



11. How to drop index in mysql ?
Ans. The DROP INDEX statement is used to delete an index in the table.
    Syntax: ALTER TABLE table_name DROP INDEX index_name;
*/