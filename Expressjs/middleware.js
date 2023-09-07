/*
1. What is middleware ?
Ans. Middleware functions are functions that have access to the request object (req),
    the response object (res) and the next middleware function in the applications
    request-response cycle. These functions are used to modify req and res object.



2. What type of work middleware function does ?
Ans. Middleware function can perform the following tasks:
    1) Execute any code
    2) Make changes the request and response object.
    3) End the request-response cycle.
    4) Call the next middleware function is the stack.



3. Why we use middleware function ?
Ans. The main purpose of middleware function is top modify the req and res objects
    and execute any code that is required. It also helps to terminate the req-res
    session and call the next middleware function in the stack.



4. How many type of middleware function in node js ?
Ans. There are many types of middleware functions in nodejs such as:
    1) Application level middleware
    2) Router level middleware
    3) Built in middleware
    4) Error Handling middleware
    5) Third Party middleware
*/