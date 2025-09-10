const safe = (fn) => async (...args) => {
  try {
    return [null, await fn(...args)];
  } catch (err) {
    return [err, null];
  }
};

const ok = async () => "hello";
const fail = async () => { throw new Error("fail"); };

console.log(await safe(ok)());   
console.log(await safe(fail)());