/*
1. What is Node js ?
Ans. Node js is an open source server-side environment built on google chromes V8
        engine that uses javascript on the server side.

    -> Node js is an open source, cross platform javascript runtime environment and
        library to run web applications outside the client browser.
        It is used to create server side web applications.


2. What are the key features of node js ?
Ans. 
    1> Asynchronous and event driven.
    2> Scalability
    3> Single threaded and efficient
    4> Cross-platform compatibility
    5> Fast data streaming
    6> Javascript everywhere
    7> quick execution of code
    8> No buffering
    9> MIT License
    10> NPM eco system


3. How node js work ?
Ans. Node js work based on an event-driven, non-blocking I/o model, which allows
    it to handle multiple concurrent operations efficiently.


4. Why we use Node js ?
Ans. Node js is a javascript run time environment built on chromes v8 engine.
        Node js uses an event-driven, non-blocking I/o model that makes it light weight
    and efficient. NPM is the largest ecosystem of open source libraries in the world.


5. How Node js handle request ?
Ans. Node js uses an event-driven and non-blocking I/O model to handle request efficiently.

    -> Multiple clients make multiple requests to the node js server. Node js receives
        these request and places them into the EventQueue.
     Node js server has an internal component referred to as the EventLoop which is an 
     infinite loop that receives requests and process them. This event loop is single
     thereded. Eventloop is the listener for the EventQueue.
     
     
6. How Node js handle multiple requests?
Ans. The event driven model is very efficient and allows node js to handle thousands
    of concurrent request efficiently.
    Node js uses two concepts:
    1> Non blocking I/O
    2> Asynchronous


7. How to make node js async ?
Ans. To make node js code asynchronous, you can use various techniques and patterns:
    1> Callback
    2> Promises
    3> Async/await


8. What are the main benefits of using node js for microservices ?
Ans. Node js offers several benefits when it comes to building microservices:
    1> Light weight and efficient
    2> Asynchronous and non blocking I/O
    3> Modular and code reusable
    4> Developer productivity
    5> Scalability and elasticity
    6> Ecosystem and community support
    7> Cloud friendly

9. Disadvantages of node js.
Ans. Disadvantages of node js :
    1> Reduces performance when handling heavy computing tasks.
    2> Node js invites a lot of code changes dur to unstable API.
    3> Node js asynchronous programming model makes it difficult to maintain code.
    4> Lack of library support can endanger your code.


10. Is node js sync or async ?
Ans. Node js is an asynchronous event-driven javascript runtime environment.


11. Is node js single threaded or multi threaded ?
Ans. Node js operates on a single threaded with event loop model.
*/