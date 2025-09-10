const { spawn } = require("child_process");
const child = spawn("node", ["-v"]);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);