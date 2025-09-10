async function retry(fn, times) {
  let lastErr;
  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr;
}

let attempt = 0;
const unstable = async () => {
  attempt++;
  if (attempt < 3) throw new Error("fail " + attempt);
  return "success on try " + attempt;
};

console.log(await retry(unstable, 5));