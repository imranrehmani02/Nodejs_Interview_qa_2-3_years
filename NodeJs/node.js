/*
Q. What is Node js ?
Ans. Node js is an open source server-side environment built on google chromes V8
        engine that uses javascript on the server side.

    -> Node js is an open source, cross platform javascript runtime environment and
        library to run web applications outside the client browser.
        It is used to create server side web applications.

    

Q. What are the key features of node js ?
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



Q. How node js work ?
Ans. Node js work based on an event-driven, non-blocking I/o model, which allows
    it to handle multiple concurrent operations efficiently.




Q. Why we use Node js ?
Ans. Node js is a javascript run time environment built on chromes v8 engine.
        Node js uses an event-driven, non-blocking I/o model that makes it light weight
    and efficient. NPM is the largest ecosystem of open source libraries in the world.




Q. How Node js handle request ?
Ans. Node js uses an event-driven and non-blocking I/O model to handle request efficiently.

    -> Multiple clients make multiple requests to the node js server. Node js receives
        these request and places them into the EventQueue.
     Node js server has an internal component referred to as the EventLoop which is an 
     infinite loop that receives requests and process them. This event loop is single
     thereded. Eventloop is the listener for the EventQueue.
     
     


Q. How Node js handle multiple requests?
Ans. The event driven model is very efficient and allows node js to handle thousands
    of concurrent request efficiently.
    Node js uses two concepts:
    1> Non blocking I/O
    2> Asynchronous



Q. How to make node js async ?
Ans. To make node js code asynchronous, you can use various techniques and patterns:
    1> Callback
    2> Promises
    3> Async/await




Q. What are the main benefits of using node js for microservices ?
Ans. Node js offers several benefits when it comes to building microservices:
    1> Light weight and efficient
    2> Asynchronous and non blocking I/O
    3> Modular and code reusable
    4> Developer productivity
    5> Scalability and elasticity
    6> Ecosystem and community support
    7> Cloud friendly



Q. Disadvantages of node js.
Ans. Disadvantages of node js :
    1> Reduces performance when handling heavy computing tasks.
    2> Node js invites a lot of code changes dur to unstable API.
    3> Node js asynchronous programming model makes it difficult to maintain code.
    4> Lack of library support can endanger your code.




Q. Is node js sync or async ?
Ans. Node js is an asynchronous event-driven javascript runtime environment.




Q. Is node js single threaded or multi threaded ?
Ans. Node js operates on a single threaded with event loop model.



Q. How events work with sync-async function simultaneously ?
Ans. Events work with async-async function simultaneously by using its event-driven
    and non-blocking architecture.



Q. How threading works in node js ?
Ans. Node.js is built on a single-threaded, event-driven architecture. This means 
    that by default, Node.js runs JavaScript code in a single thread. This single 
    thread is often referred to as the "event loop." However, Node.js does use 
    threads internally for certain operations and features.

    1) Single Threaded Event Loop:- This thread is responsible for executing JavaScript code, 
                        handling events, and managing asynchronous I/O operations.

    2) Libuv:- Node.js uses the Libuv library to handle I/O operations asynchronously. 
            Libuv manages a thread pool, allowing Node.js to offload blocking I/O operations
            (like file system operations or network requests) to worker threads without 
            blocking the main event loop.

    3) Worker Threads:- Node.js introduced the worker_threads module to allow developers 
                    to create and manage additional JavaScript threads, often referred 
                    to as "worker threads" or "threads" in Node.js. These threads are 
                    separate from the main event loop and can execute JavaScript code concurrently.

    4) Child Processes:- Node.js can also create and manage child processes using the child_process
                    module. Each child process runs in its own separate thread or process, allowing 
                    you to execute external commands or run separate instances of Node.js.



Q. Can we use multithreading in Node js ?
Ans. We can use multi-threading in Node.js using the worker_threads module. This module allows 
    you to create and manage additional JavaScript threads in Node js. These threads are separate
    from the main event loop and can execute JavaScript code concurrently, making them suitable 
    for CPU-bound tasks and parallel processing.



Q. What is worker thread in node js ?
Ans. A worker thread refers to a separate JavaScript thread that can be used to perform concurrent
    and CPU-intensive operations without blocking the main event loop.



Q. What is child process in node js ?
Ans. A child process refers to a separate, independent process that can be spawned from your main 
    Node.js process. These child processes allow you to run external system commands, scripts, 
    or other programs as separate processes.



Q. Difference between worker threads and child processes ?
Ans. Child process allows you to spawn new processes and communicate with them,
    Worker_threads allows you to run javascript files or modules in a separate thread and 
    cluster allows you to create a cluster of worker processes that share the same port.
            A process takes place in different memory spaces, whereas a thread executes in
    the same memory space.




Q. Difference between cluster and worker threads ?
Ans. Cluster module allowing us to run multiple instance of node js in separate processes.
    Worker thread module allowing us to run multiple instance of node js in the same process.



Q. How to use child process ?
Ans. The child process module provides functionality to spawn child processes.
    Most commonly used child processes :
    -> Spawn
    -> Exec
    -> Fork



Q. Difference between Axios and Fetch in node js ?
Ans. Axios performs automatic transform of JSON data.
    Fetch is a two step process when handling JSON data. First to make the actual request
    second to call the .json() method on the response.



Q. What is lodash ?
Ans. Lodash is a JavaScript library that works on the top of underscore.js. 
    It helps in working with arrays, strings, objects, numbers, etc. It provides us 
    with various inbuilt functions and uses a functional programming approach which 
    that coding in JavaScript easier to understand because instead of writing repetitive 
    functions, tasks can be accomplished with a single line of code. It also makes it easier 
    to work with objects in JavaScript if they require a lot of manipulation to be done upon them.
*/