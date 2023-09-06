/************* || EVENTS || *****************/

/*
1. Node js events ?
Ans. In node js the events module provides an event-driven architecture for handling and
    emitting events. It allows you to create custom events and bind event listeners to
    react to those events.


2. What is event loop ?
Ans. An event loop is a event listener which functions inside the node js environment
    and is always ready to listen, process and output for an event.

        An event can be anything from a mouse click to a key press or a timeout.


3. What is EventEmitter in node js ?
Ans. The EventEmitter class can be used to create and handle custom events module.
    Syntax: const EventEmitter = require('events');

    EventEmitter class is used for creating custom events and handling asynchronous
    events in an event-driven architecture.



4. How do event works in node js ?
Ans. In node js events are handeled throught the EventEmitter pattern. The EventEmitter
    class is the core of this pattern and provides the functionality to emit events
    and register listener for those events.

    1) Importing the EventEmitter class
    2) Creating an eventEmitter instance.
    3) Emitting events
    4) Registering Event Listeners
    5) Handling events
    6) Once() method
    7) Removing Event Listeners

*/

// Event Emitter Example
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.once('msg logged', ()=>{
    console.log('Listening to the event message logged.');
})

eventEmitter.emit('msg logged');
