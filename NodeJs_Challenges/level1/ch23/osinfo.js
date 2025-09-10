const os = require('os');

console.log(os.platform());          
console.log(os.cpus().length);          
console.log(Math.round(os.totalmem() / 1024 / 1024)); 
