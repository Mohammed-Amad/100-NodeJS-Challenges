const args = process.argv.slice(2);
console.log('Hello' + (args.length ? '-' + args.join('-') : ''));
