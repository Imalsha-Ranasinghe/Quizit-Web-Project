const request = require("supertest");
const { app, server } = require("../index.js"); // Import app and server
const User = require("../models/User.js");

describe("Auth API Tests", () => {
  const testUser = {
    username: "testuser",
    email: "testuser@example.com",
    password: "testpassword",
  };

  // Clear the database before running tests
  beforeAll(async () => {
    await User.deleteMany({});
  });

  // Close the server after all tests are done
  afterAll(async () => {
    await server.close();
  });

  // Test the /register endpoint
  describe("POST /api/auth/register", () => {
    it("should register a new user", async () => {
      const res = await request(app)
        .post("/api/auth/register")
        .send(testUser);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("message", "User registered successfully");

      // Check if the user is saved in the database
      const user = await User.findOne({ email: testUser.email });
      expect(user).toBeTruthy();
      expect(user.username).toBe(testUser.username);
    });

    it("should return 500 if registration fails", async () => {
      // Simulate a failure by sending invalid data
      const res = await request(app)
        .post("/api/auth/register")
        .send({}); // Missing required fields

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty("error");
    });
  });

  // Test the /login endpoint
  describe("POST /api/auth/login", () => {
    it("should log in an existing user and return a token", async () => {
      // Register the user first
      await request(app).post("/api/auth/register").send(testUser);

      // Log in the user
      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: testUser.email,
          password: testUser.password,
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("token");
      expect(res.body).toHaveProperty("userId");
    });

    it("should return 400 if user is not found", async () => {
      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: "nonexistent@example.com",
          password: "wrongpassword",
        });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty("message", "User not found");
    });

    it("should return 400 if password is incorrect", async () => {
      // Register the user first
      await request(app).post("/api/auth/register").send(testUser);

      // Attempt to log in with the wrong password
      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: testUser.email,
          password: "wrongpassword",
        });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty("message", "Invalid credentials");
    });
  });
});