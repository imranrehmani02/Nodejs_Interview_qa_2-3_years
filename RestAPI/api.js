/*
1. What is API ?
Ans. API stands for Application Programming Interface. It is a set of rules and protocols
    that allows different software applications to communicate and intract with each other.




2. What is RestAPI or Restful API ?
Ans. A Restful API is an architectural style for an API that uses HTTP request to access
    and use data. That data can be used to GET, PUT, POST and DELETE data types, which
    refers to the creating, reading, updating and deleting for operations.



3. Difference b/w API and RestAPI ?
Ans. API is a set of rules and protocols that allows different software application to
    communicate with each other. On the other hand Rest API is a specific type of API
    that follows the priciples of Rest Architectural Style.



4. Why we use RestAPI's ?
Ans. RestAPI's offer a simple, scalable and widely supported approach to building distributed
    systems, enabling seemless integration between different applications and platforms.

    - Simplicity and ease of use
    - Platform Independent
    - Scalability and Performance
    - Client Server Separation



5. How to validate API's ?
Ans. Validating API's involves ensuring that the APIs function correctly, return expected
    responses and adhere to be defined specifications.

    1) Review API documentation
    2) Test API endpoints
    3) Verify Input Validation
    4) Test Authentication and Authorization
    5) Test Error Handling
    6) Test Performance and Scalability
    7) Monitor Response time
    8) API Versioning
    9) Security Testing
    10) Documentation Validation



6. What is web socket ?
Ans. Web socket is a communication protocol that provides full-duplex communication channels
    over a single, long-lived connection between a client and a server. Unlike traditional HTTP,
    which is request-response protocol, web socket allows for real-time, two way communication
    between the client and the server.

    Key aspects:
    1) Persistent connection
    2) Full duplex communication
    3) Lower listing
    4) Light weight
    5) Wide browser support
    6) Usage scenerios



7. Difference between RestAPI and Websocket ?
Ans. Rest API:- 
        1) It is a stateless protocol. It will not store the data.
        2) It is a request-response model.
        3) It is unidirectional only. Either server or client will communicate.
        4) HTTP request contains header like head section, title section.
        5) New TCP connection will be setup for each HTTP request.
        6) It depends upto the HTTP methods to retrieve the data.

    Web socket:-
        1) It is stateful protocol. It will store the data.
        2) It will full duplex model.
        3) IT is bidirectional.
        4) It is suitable for real-time applications. It does not have any over head.
        5) Only TCP connection.
        6) It depends upon the IP address and PORT number to retrieve the data.




8. Which HTTP method is most secure in node js ?
Ans. The security of HTTP method depends on how it is used and the content in which
    it is applied.



9. How many to send data in GET and POST method ?
Ans. The GET method supports only string data types, while the POST method supports
    different datatypes such as string, numeric, binary and so on.




10. How can we handle uncaught exception in a central ?
Ans. We can handle uncaught exception in a central by using `process.on()` method.



11. How to use log files on server ?
Ans. Using log files on server is an essential practise for monetoring and toubleshooting
    applications and server related issues.
        We can use popular logging libraries like winston, morgan and log4js.



12. Can we call 3rd party API's without using external module ?
Ans. Yes, we can use 3rd party API's without using external module by using HTTP method.

    External module:- Axios, Request



13. What are testcases ?
Ans. Testcases are fundamental concept in software testing. They are sets of conditions
    or criteria that are used to determine the quality, correctness and performance of
    a software application. Testcases help verify whether the software functions as
    expected and meets its requirments.



14. What is integral testing ?
Ans. Integration testing is a software testing technique that focuses on verifying the 
    interactions and data exchange between different components, modules, or services 
    within a software system. The primary goal of integration testing is to ensure that 
    these integrated components work together as expected and that they can communicate 
    and collaborate without issues.




15. What is mock data in testing ?
Ans. Mock data in testing refers to artificially generated or simulated data that is 
    used during the testing process to mimic real-world scenarios and conditions.
    Mock data is created to mimic the characteristics and structure of real data, 
    allowing testers to perform various types of testing without relying on actual 
    production data.




16. How to check database connection in testing ?
Ans. In testing, we can test the intraction between different components of application
    including the database. To check the database connection in integration tests, we
    can connect to separate testing database.



17. what is assetion in Chai and Mocha ?
Ans. Assertions refer to statements or conditions that you can use to validate whether 
    the actual output of your code matches the expected behavior.
        Chai is an assertion library commonly used with Mocha, a testing framework for
    JavaScript. 

*/