const request = require("supertest");
const app = require("./app");

test("GET /health returns 200 and {ok:true}", async () => {
  const res = await request(app).get("/health");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({ ok: true });
});
