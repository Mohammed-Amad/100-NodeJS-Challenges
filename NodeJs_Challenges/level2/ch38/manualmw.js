function run(middlewares, req, res) {
  let i = 0;
  (function next() {
    if (i < middlewares.length) {
      middlewares[i++](req, res, next);
    }
  })();
}

const stack = [
  (req, res, next) => { console.log("Step 1"); next(); },
  (req, res, next) => { console.log("Step 2"); next(); },
  (req, res) => { console.log("Done"); }
];

run(stack, {}, {});
