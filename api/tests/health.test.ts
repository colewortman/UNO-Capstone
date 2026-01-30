import app from "../src/app";
import request from "supertest";

describe("Health Check", () => {
    it("should return 200 OK for the health check endpoint", async () => {
        const response = await request(app).get("/health");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status: "OK" });
    });
});