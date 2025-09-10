const { performance, PerformanceObserver } = require("perf_hooks");

const obs = new PerformanceObserver((items) => {
  const entry = items.getEntries()[0];
  console.log(`${entry.name}: ${entry.duration}ms`);
  obs.disconnect();
});
obs.observe({ entryTypes: ["measure"] });

async function asyncOp() {
  return new Promise((res) => setTimeout(res, 500));
}

performance.mark("start");
asyncOp().then(() => {
  performance.mark("end");
  performance.measure("asyncOp", "start", "end");
});
