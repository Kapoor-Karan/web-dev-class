const EventEmmitter = require('node:events');
const eventEmitter = new EventEmmitter();

eventEmitter.on('start', () => {
  console.log("Event started");
});

eventEmitter.once('connection', () => {
  console.log("Connection established");
});

eventEmitter.off('end', () => {
  console.log("Event ended");
});

eventEmitter.removeAllListeners('start');

// TODO : DNS ASSIGNMENT
