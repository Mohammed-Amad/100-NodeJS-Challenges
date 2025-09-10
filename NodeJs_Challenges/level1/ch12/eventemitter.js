const { EventEmitter } = require('events');

const e = new EventEmitter();
let count = 0;

e.on('ping', () => { count++; });

e.emit('ping');
e.emit('ping');

console.log(count);