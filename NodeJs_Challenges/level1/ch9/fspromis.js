const { writeFile } = require('fs/promises');

(async () => {
  await writeFile('result.json', JSON.stringify({ ok: true }));
})();