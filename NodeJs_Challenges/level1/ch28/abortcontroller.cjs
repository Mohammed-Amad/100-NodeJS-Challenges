const { setTimeout } = require('timers/promises');

const ac = new AbortController();

(async () => {
  const p = setTimeout(10_000, null, { signal: ac.signal });
  ac.abort();
  try {
    await p;
  } catch (err) {
    if (err.name === 'AbortError') console.log('aborted');
    else throw err;
  }
})();
