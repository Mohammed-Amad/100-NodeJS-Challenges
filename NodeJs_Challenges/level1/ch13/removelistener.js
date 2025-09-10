const { EventEmitter } = require('events');

const e13 = new EventEmitter();

function log1() { console.log('log1'); }
function log2() { console.log('log2'); }

e13.on('ev', log1);
e13.on('ev', log2);

e13.off('ev', log2);
e13.emit('ev');
