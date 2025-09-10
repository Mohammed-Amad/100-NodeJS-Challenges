const fs = require("fs");
const readMessage = require("./reader");

jest.mock("fs");

test("mock fs.readFile to return hello", done => {
  fs.readFile.mockImplementation((_path, _enc, cb) => {
    cb(null, "hello");
  });

  readMessage((err, data) => {
    expect(err).toBeNull();
    expect(data).toBe("hello");
    done();
  });
});
