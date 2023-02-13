const request = require('supertest');
const app = require('./index')

describe('GET /', () => {
    describe("Test if endpoint is reachable", () => {
        test("should respond with status code 200", async () => {
            const response = await request(app).get('/');
            expect(response.statusCode).toBe(200);
        })
    })
})