const EventEmitter = require(`events`);
// we can use options for events { - }
//The listeners are executed in the order the listeners are created for an event emitter.
const ee = new EventEmitter();
const express = require(`express`);
const app = express();
//To publish an event, we use the emit() function, and to listen to an event, we use the on() function.

// listen to the event 
ee.on(`myEvent`, ()=>{
    console.log(` data received`);
});

//publishing the event simply as 
ee.emit(`myEvent`);

// if we want to use and manage the events across the whole app we can use 
app.set('ee', ee);
// access it from any module of the application
console.log(app.get('ee'));