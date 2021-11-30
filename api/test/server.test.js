const supertest = require("supertest");
const server = require("../index.js");

const requestWithSupertest = supertest(server);

describe("Run tests", () => {
  beforeAll((done) => {
    server.close();
    done();
  });

  afterAll((done) => {
    server.close();
    done();
  });

  test("check /", async () => {
    const res = await requestWithSupertest.get("/");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({ message: "Hello world" });
  });

  test("check /api/v1/quotes", async () => {
    const res = await requestWithSupertest.get("/api/v1/quotes");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body[0].author).toEqual("Ron Swanson");
  });
});
