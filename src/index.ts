const EventEmitter = require(`events`);
// we can use options for events { - }
const ee = new EventEmitter();
//To publish an event, we use the emit() function, and to listen to an event, we use the on() function.

// listen to the event 
ee.on(`myEvent`, ()=>{
    console.log(` data received`);
});

//publishing the event simply as 
ee.emit(`myEvent`);