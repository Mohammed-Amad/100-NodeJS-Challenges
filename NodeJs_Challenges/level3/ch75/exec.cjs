const { exec } = require("child_process");

exec("dir", (err, stdout, stderr) => {
  if (err) throw err;
  console.log("Length:", stdout.length);
});