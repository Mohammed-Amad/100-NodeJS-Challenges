const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('World');
const bufferconcat = Buffer.concat([buffer1, buffer2]);
console.log(bufferconcat.toString());