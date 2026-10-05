const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
    it("should return 200 and a success message", async () => {
        const response = await request(app)
            .get("/")
            .expect(200);

        expect(response.body).toEqual({
            message: "Server is running"
        });
    });

    it("should return 200 and a success message", async () => {
        const response = await request(app)
            .get("/health")
            .expect(200);

        expect(response.body).toEqual({
            status: 'healthy',
            statusCode: 200,
        });
    });
});